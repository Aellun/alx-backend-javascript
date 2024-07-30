/* eslint-disable array-callback-return */
// Returns a string of all set values that start with a specific string.
// The resulting string contains the rest of each value, separated by hyphens
export default function cleanSet(set, startString) {
  // Return an empty string if startString is not provided or is empty
  if (!startString) {
    return '';
  }

  // Process the set to filter and transform values
  return [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
