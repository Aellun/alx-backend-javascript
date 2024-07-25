import { uploadPhoto, createUser } from './utils';

// Define an async function named asyncUploadUser
export default async function asyncUploadUser() {
  try {
    // Await the result of the uploadPhoto function
    const photo = await uploadPhoto();

    // Await the result of the createUser function
    const user = await createUser();

    // Return an object containing the results of the two async functions
    return {
      photo,
      user,
    };
  } catch (error) {
    // when either of the async functions fails, return an object with photo and user set to null
    return {
      photo: null,
      user: null,
    };
  }
}
