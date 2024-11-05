import { generateClient } from 'aws-amplify/data';

/**
 * @type {import('aws-amplify/data').Client<import('/amplify/data/resource.ts').Schema>}
 */
const client = generateClient();

export const fetchLeaderboard = async () => {
  const { data: leaderboardID } = await client.models.Leaderboard.list({
    authMode: 'identityPool',
  });

  if (leaderboardID.length !== 0) {
    const parsedDataID = leaderboardID.map((entry) => ({
      ...entry,
      pointsHistory: JSON.parse(entry.pointsHistory),
    }));
    return parsedDataID;
  } else {
    const { data: leaderboardUser } = await client.models.Leaderboard.list({
      authMode: 'userPool',
    });

    const parsedDataUser = leaderboardUser.map((entry) => ({
      ...entry,
      pointsHistory: JSON.parse(entry.pointsHistory),
    }));
    return parsedDataUser;
  }
};

export const addEntry = async (username) => {
  const { data: newEntry } = await client.models.Leaderboard.create(
    {
      username: username,
      points: 0,
      pointsHistory: JSON.stringify([
        {
          timestamp: Date.now(),
          points: 0,
        },
      ]),
    },
    { authMode: 'identityPool' }
  );

  return newEntry;
};

export const removeAll = async () => {
  const { data: leaderboardList } = await client.models.Leaderboard.list();

  leaderboardList.map(async (entry) => {
    await client.models.Leaderboard.delete({ id: entry.id });
  });
};

export const addPoints = async () => {
  const newPoints = 3; // New points to add, change later
  const username = 'test_67921'; // For testing
  const id = '0b1cd028-189e-40f5-93d0-b310a7a48462'; // For testing
  const { data: existingEntry } = await client.models.Leaderboard.get({
    id: id,
  });

  const now = Date.now();
  const tenDaysAgo = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000);

  const existingPointsHistory = JSON.parse(existingEntry.pointsHistory);

  const updatedPointsHistory = [
    ...existingPointsHistory.filter(
      (historyEntry) => historyEntry.timestamp >= tenDaysAgo
    ),
    { timestamp: now, points: existingEntry.points + newPoints },
  ];

  const entryTemplate = {
    id,
    username,
    points: existingEntry.points + newPoints,
    pointsHistory: JSON.stringify(updatedPointsHistory),
  };

  const { data: updatedEntry } =
    await client.models.Leaderboard.update(entryTemplate);

  const parsedEntry = (entry) => ({
    ...entry,
    pointsHistory: JSON.parse(entry.pointsHistory),
  });

  return parsedEntry(updatedEntry);
};

export const transformDataForChart = (data) => {
  const chartData = {};
  const dateSet = new Set(); // To track unique dates

  data.forEach((user) => {
    user.pointsHistory.forEach((entry) => {
      const formattedDate = new Date(entry.timestamp).toLocaleDateString(
        // Format timestamp to 'MM/DD' format for grouping by day
        'en-US',
        {
          month: 'short',
          day: 'numeric',
        }
      );

      dateSet.add(formattedDate);

      if (!chartData[formattedDate]) {
        // Initialize the date entry if not present
        chartData[formattedDate] = { timestamp: formattedDate };
      }

      chartData[formattedDate][user.username] = entry.points; // Set or accumulate points for this user on that specific date
    });
  });

  const result = Array.from(dateSet)
    .sort((a, b) => new Date(a) - new Date(b))
    .map((date) => ({
      timestamp: date,
      ...chartData[date],
    }));

  data.forEach((user) => {
    let lastKnownPoints = 0;
    result.forEach((entry) => {
      if (entry[user.username] === undefined) {
        entry[user.username] = lastKnownPoints;
      } else {
        lastKnownPoints = entry[user.username];
      }
    });
  });

  return result;
};

export const colorMap = async () => {
  const getRandomColor = (index, total) => {
    const hue = (index * 360) / total; // Spread hues evenly across the color wheel
    const saturation = 70; // Adjust saturation for vivid colors
    const lightness = 50; // Adjust lightness for good contrast
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const { data: leaderboardList } = await client.models.Leaderboard.list();

  if (leaderboardList) {
    const colors = {};

    leaderboardList.forEach((user, index) => {
      colors[user.username] = getRandomColor(index, leaderboardList.length);
    });
    return colors;
  } else {
    return {};
  }
};

export const parseHSL = (hslString) => {
  const hslValues = hslString.match(/(\d+), (\d+)%, (\d+)%/);
  if (hslValues) {
    return {
      h: parseInt(hslValues[1], 10),
      s: parseInt(hslValues[2], 10),
      l: parseInt(hslValues[3], 10),
    };
  }
  return null;
};

export const getLighterColor = (h, s, l, amount) => {
  return `hsl(${h}, ${s}%, ${Math.min(100, l + amount)}%)`;
};
