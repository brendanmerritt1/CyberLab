import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Leaderboard: a
    .model({
      username: a.string(),
      points: a.integer(),
      pointsHistory: a.json(
        // a.customType({
        //   timestamp: a.timestamp(),
        //   points: a.integer(),
        // })
      ),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(['read']),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
});
