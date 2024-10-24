import { generateClient } from 'aws-amplify/data';

/**
 * @type {import('aws-amplify/data').Client<import('/amplify/data/resource.ts').Schema>}
 */
const client = generateClient({ authMode: 'userPool' });

export const fetchLeaderboard = async () => {
  try {
    const { data: leaderboard } = await client.models.Leaderboard.list();

    const parsedData = leaderboard.map((entry) => ({
      ...entry,
      pointsHistory: JSON.parse(entry.pointsHistory),
    }));

    return parsedData;
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
  }
};

export const addEntry = async () => {
  const randPoints = Math.floor(Math.random() * 10);

  const { data: newEntry } = await client.models.Leaderboard.create({
    username: `test_${Math.floor(Math.random() * 100000)}`,
    points: randPoints,
    pointsHistory: JSON.stringify([
      {
        timestamp: Date.now(),
        points: randPoints,
      },
    ]),
  });

  const parsedEntry = (entry) => ({
    ...entry,
    pointsHistory: JSON.parse(entry.pointsHistory),
  });
  const logParsedEntry = parsedEntry(newEntry);
  console.log('new entry:', logParsedEntry);

  return logParsedEntry;
};

export const removeAll = async () => {
  const { data: leaderboardList } = await client.models.Leaderboard.list();

  leaderboardList.map(async (entry) => {
    await client.models.Leaderboard.delete({ id: entry.id });
  });
};

export const addPoints = async () => {
  const newPoints = 3; // New points to add, change later
  const username = 'test_90383'; // For testing
  const id = '4c003934-9be0-45c5-b44f-68c601ab3328'; // For testing
  const { data: existingEntry } = await client.models.Leaderboard.get({
    id: id,
  });

  const now = Date.now();
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const existingPointsHistory = JSON.parse(existingEntry.pointsHistory);

  const updatedPointsHistory = [
    ...existingPointsHistory.filter(
      (historyEntry) => historyEntry.timestamp >= thirtyDaysAgo
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

      if (!chartData[formattedDate]) {
        // Initialize the date entry if not present
        chartData[formattedDate] = { timestamp: formattedDate };
      }

      chartData[formattedDate][user.username] = entry.points; // Set or accumulate points for this user on that specific date
    });
  });

  const result = Object.values(chartData).map((entry) => {
    // Convert object to array and fill in missing data with nulls for consistency
    data.forEach((user) => {
      if (!entry[user.username]) {
        entry[user.username] = null;
      }
    });
    return entry;
  });

  return result;
};

export const colorMap = async () => {
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 128) + 128; // Random value between 128 and 255
    const g = Math.floor(Math.random() * 128) + 128; // Random value between 128 and 255
    const b = Math.floor(Math.random() * 128) + 128; // Random value between 128 and 255
    return `rgb(${r}, ${g}, ${b})`;
  };

  const { data: leaderboardList } = await client.models.Leaderboard.list();

  const colors = {};

  leaderboardList.forEach((user) => {
    // let userColor = localStorage.getItem(user.username);
    // if (!userColor) {
      let userColor = getRandomColor();
    //   localStorage.setItem(user.username, userColor);
    // }
    colors[user.username] = userColor;
  });
  return colors;
};
