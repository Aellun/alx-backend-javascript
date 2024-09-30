// 2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  //  SUM operation Test
  it('should return 5 for SUM with (1.2, 3.7)', function () {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });

  //  SUBTRACT operation Test
  it('should return -2 for SUBTRACT with (1, 3)', function () {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });

  // DIVIDE operation Test
  it('should return 0.3333... for DIVIDE with (1, 3)', function () {
    expect(calculateNumber('DIVIDE', 1, 3)).to.be.closeTo(0.3333, 0.0001);
  });

  // division by zero Test
  it('should return "Error" for DIVIDE with (1, 0)', function () {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });

  // Test SUM operation with different inputs
  it('should return 6 for SUM with (1.5, 3.7)', function () {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });

  // Test invalid type
  it('should throw an error for invalid type', function () {
    expect(() => {
      calculateNumber('INVALID', 1, 3);
    }).to.throw('Invalid type');
  });
});
