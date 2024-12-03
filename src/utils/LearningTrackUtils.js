import { getCurrentUser } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/data';

/**
 * @type {import('aws-amplify/data').Client<import('/amplify/data/resource.ts').Schema>}
 */
const client = generateClient();

export const trackDetails = [
  { trackName: 'Certification Prep', totalPoints: 400 },
  { trackName: 'Cloud Fundamentals', totalPoints: 140 },
  { trackName: 'Cybersecurity Essentials', totalPoints: 145 },
  { trackName: 'Data & Visualization', totalPoints: 110 },
  { trackName: 'DevOps & Automation', totalPoints: 110 },
  { trackName: 'ML in Cybersecurity', totalPoints: 125 },
  { trackName: 'Digital Forensics', totalPoints: 115 },
  { trackName: 'API Security & Dev', totalPoints: 120 },
  { trackName: 'Governance & Compliance', totalPoints: 115 },
];

export const addTrack = async (username, trackName, totalPoints) => {
  await client.models.LearningTracks.create(
    {
      username: username,
      trackName: trackName,
      modulesCompleted: JSON.stringify([]),
      totalPointsInTrack: totalPoints,
      pointsEarned: 0,
      completionPercentage: 0,
    },
    { authMode: 'identityPool' }
  );
};

export const initAllTracks = async (username, trackDetails) => {
  for (const track of trackDetails) {
    const { trackName, totalPoints } = track;
    await addTrack(username, trackName, totalPoints);
  }
};

export const updateTrack = async (
  username,
  trackName,
  moduleName,
  pointsEarned
) => {
  const { data: trackEntry } = await client.models.LearningTracks.list({
    filter: {
      username: { eq: username },
      trackName: { eq: trackName },
    },
  });

  if (trackEntry.length === 0) {
    console.error('Learning track entry not found for', {
      username,
      trackName,
    });
    return null;
  }

  const prevModules = JSON.parse(trackEntry[0].modulesCompleted);
  if (prevModules.includes(moduleName)) {
    return;
  }

  const entryId = trackEntry[0].id;
  const updatedModulesCompleted = [...prevModules, moduleName];
  const updatedPoints = trackEntry[0].pointsEarned + pointsEarned;
  const updatedCompletionPercentage =
    (updatedPoints / trackEntry[0].totalPointsInTrack) * 100;

  const { data: updatedModule } = await client.models.LearningTracks.update({
    id: entryId,
    modulesCompleted: JSON.stringify(updatedModulesCompleted),
    pointsEarned: updatedPoints,
    completionPercentage: updatedCompletionPercentage,
  });

  const { data: fetchLeaderboard } = await client.models.Leaderboard.list({
    filter: {
      username: { eq: username },
    },
  });

  await client.models.Leaderboard.update({
    id: fetchLeaderboard[0].id,
    points: fetchLeaderboard[0].points + pointsEarned,
    pointsHistory: JSON.stringify([
      ...JSON.parse(fetchLeaderboard[0].pointsHistory),
      {
        timestamp: Date.now(),
        points: fetchLeaderboard[0].points + pointsEarned,
      },
    ]),
  });

  return updatedModule;
};

export const fetchCompletedPercentage = async (username, trackName) => {
  const { data: fetchEntry } = await client.models.LearningTracks.list({
    filter: {
      username: { eq: username },
      trackName: { eq: trackName },
    },
  });

  if (fetchEntry.length === 0) {
    console.error('Learning track entry not found for', {
      username,
      trackName,
    });
    return null;
  }

  return `${fetchEntry[0].completionPercentage.toFixed(1)}%`;
};

export const getUser = async () => {
  try {
    const { signInDetails } = await getCurrentUser();
    return signInDetails.loginId.split('@')[0];
  } catch {
    return null;
  }
};

export const fetchCompletedModules = async (username) => {
  const { data: fetchEntry } = await client.models.LearningTracks.list({
    filter: {
      username: { eq: username },
    },
  });

  if (fetchEntry.length === 0) {
    console.error('Learning track entries not found for', {
      username,
    });
    return null;
  }

  const sortedEntries = fetchEntry.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  const sortedModules = sortedEntries.map((track) =>
    JSON.parse(track.modulesCompleted)
  );
  
  return sortedModules;
};
