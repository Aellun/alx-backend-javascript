import sinon from 'sinon';
import { expect } from 'chai';
import { calculateNumber } from './utils.js'; // Import the specific function
import { sendPaymentRequestToApi } from './3-payment.js';

// Test suite for sendPaymentRequestToApi
describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Create a spy for calculateNumber
    spy = sinon.spy(calculateNumber);
  });

  afterEach(() => {
    // Restore the original function
    spy.restore();
  });

  it('should call calculateNumber with SUM and correct arguments', () => {
    // Use the spy in the function call
    sendPaymentRequestToApi(100, 20);

    // Check if the spy was called with the correct arguments
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
