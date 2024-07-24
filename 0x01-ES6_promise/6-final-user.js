// Import the function to sign up a user
import signUpUser from './4-user-promise';
// Import the function to upload a photo
import uploadPhoto from './5-photo-reject';

 //Handles the profile signup process by calling both signUpUser and uploadPhoto functions.
 
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create promises for user sign-up and photo upload
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to wait for both promises to settle (fulfilled or rejected)
  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise])
    .then((values) => {
      // An empty array to store the results
      const result = [];

      // Iterate over each promise result
      values.forEach((element) => {
        // Check the status of the promise
        if (element.status === 'fulfilled') {
          // If the promise is fulfilled, push an object with status and value
          result.push({ status: element.status, value: element.value });
        } else {
          // If the promise is rejected, push an object with status and error message
          result.push({ status: element.status, value: `${element.reason}` });
        }
      });

      // Return the result array with statuses and values/errors
      return result;
    });
}
