export default function iterateThroughObject(reportWithIterator) {
  let output = '';
  let isFirst = true;

  // Iterate through each item in the iterator
  for (const item of reportWithIterator) {
    if (!isFirst) {
      output += ' | ';
    }
    output += item;
    isFirst = false;
  }

  return output;
}
