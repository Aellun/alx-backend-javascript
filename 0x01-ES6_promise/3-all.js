/* eslint-disable no-console */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Start the promises
  const photo = uploadPhoto();
  const user = createUser();

  // Wait for the promises to resolve
  return Promise.all([photo, user])
    .then((res) => {
      // Log both response
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => {
      // Log error message in case promise rejects
      console.log('Signup system offline');
    });
}
