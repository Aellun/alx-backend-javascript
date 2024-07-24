/* eslint-disable no-console */
export default function handleResponseFromAPI(promise) {
    return promise
    // Return an object with status and body
      .then(() => ({ status: 200, body: 'success' }))
      // Return an empty Error object when promise rejects
      .catch(() => new Error())
      .finally(() => {
        console.log('Got a response from the API');
      });
  }
  