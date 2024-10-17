import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'imageBucket',
  access: (allow) => ({
    'logos/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read']),
    ],
  })
});