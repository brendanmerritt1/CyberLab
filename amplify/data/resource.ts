import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Leaderboard: a
    .model({
      username: a.string(),
      points: a.integer(),
      pointsHistory: a.json(),
    })
    .authorization((allow) => [
      allow.authenticated().to(['read']),
      allow.guest().to(['read', 'create']),
    ]),

  LearningTracks: a
    .model({
      username: a.string(),
      trackName: a.string(),
      modulesCompleted: a.json(),
      totalPointsInTrack: a.integer(),
      pointsEarned: a.integer(),
      completionPercentage: a.float(),
    })
    .authorization((allow) => [
      allow.authenticated().to(['read']),
      allow.guest().to(['read', 'create']),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
});
