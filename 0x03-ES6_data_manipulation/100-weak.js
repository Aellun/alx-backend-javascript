// Create and export a WeakMap instance to track API query counts
export const weakMap = new WeakMap();

// Queries an API endpoint and tracks the number of queries.
// Throws an error if the number of queries for an endpoint is 5 or more.

export function queryAPI(endpoint) {
  // Initialize the count of queries to 0
  let called = 0;

  // If the endpoint is already in the WeakMap, retrieve the current count
  if (weakMap.get(endpoint)) {
    called = weakMap.get(endpoint);
  }

  // Increment the query count for the endpoint
  weakMap.set(endpoint, called + 1);

  // Check if the number of queries reaches or exceeds 5
  if (called + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
