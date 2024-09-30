const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  // Test SUM operation
  it('should return 6 for SUM with 1.4 and 4.5', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should return 5 for SUM with (1.2, 3.7)', function () {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('should return -1 for SUBTRACT with (1, 3)', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });

  it('should return 0 for DIVIDE with (1, 3)', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
  });

  it('should return "Error" for DIVIDE with (1, 0)', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });

  it('should return 6 for SUM with (1.5, 3.7)', function () {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('should throw an error for invalid type', function () {
    assert.throws(() => {
      calculateNumber('INVALID', 1, 3);
    }, /Invalid type/);
  });
});

  // SUBTRACT operation Test
  it('should return -4 for SUBTRACT with 1.4 and 4.5', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  // DIVIDE operation Test
  it('should return 0.2 for DIVIDE with 1.4 and 4.5', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  // Division by zero Test
  it('should return "Error" for DIVIDE with 1.4 and 0', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  // Invalid type Test
  it('should throw an error for invalid type', function() {
    assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), /Invalid type/);
  });
});
