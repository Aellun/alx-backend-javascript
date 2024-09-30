// 1-calcul.js

/**
 * Performs arithmetic operations on two numbers.
 *
 * @param {string} type - The type of operation ('SUM', 'SUBTRACT', 'DIVIDE').
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number|string} The result of the operation or 'Error' if division by zero occurs.
 */
function calculateNumber(type, a, b) {
  // Round both operands to the nearest integer
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      throw new Error('Invalid type');
  }
}

module.exports = calculateNumber;
