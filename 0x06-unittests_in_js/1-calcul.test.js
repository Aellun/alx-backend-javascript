const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  // Test SUM operation
  it('should return 6 for SUM with 1.4 and 4.5', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
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
