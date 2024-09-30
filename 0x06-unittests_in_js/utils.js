// utils.js

// Function to perform arithmetic operations with rounded numbers
export function calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
  
    // addition
    if (type === 'SUM') {
      return roundedA + roundedB;
    }
  
    // subtraction
    if (type === 'SUBTRACT') {
      return roundedA - roundedB;
    }
  
    // division
    if (type === 'DIVIDE') {
      if (roundedB === 0) {
        return 'Error'; // Handle division by zero
      }
      return roundedA / roundedB;
    }
  
    // Handles invalid operation type
    throw new Error('Invalid type');
  }
  