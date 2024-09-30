// 3-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  afterEach(function () {
    sinon.restore(); // Restore the default sandbox
  });

  it('should call Utils.calculateNumber with SUM and the correct arguments', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    // Check if the spy was called once
    expect(spy.calledOnce).to.be.true;
    // Check if called with the right arguments
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
