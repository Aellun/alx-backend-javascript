export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer with the specified length
  const newBuffer = new ArrayBuffer(length);

  // Create an Int8Array view for the ArrayBuffer
  const int8 = new Int8Array(newBuffer);

  // Set the value at the specified position
  int8[position] = value;

  // Return a DataView of the ArrayBuffer
  return new DataView(newBuffer);
}
