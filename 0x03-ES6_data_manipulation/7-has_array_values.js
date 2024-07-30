// Checks if all elements in an array exist within the given Set
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
