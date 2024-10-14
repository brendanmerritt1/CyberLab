import { list } from 'aws-amplify/storage';

export const fetchImage = async (imageName) => {
  try {
    const result = await list({
      path: ({identityId}) => `protected/${identityId}/album/2024/1.jpg`,
    });
    return result;
  } catch (error) {
    console.error('Error fetching image: ', error);
    throw error;
  }
};
