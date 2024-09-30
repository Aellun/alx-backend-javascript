// 3-payment.js

import { calculateNumber } from './utils.js';

// Function to send payment request and log the result
export function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}
