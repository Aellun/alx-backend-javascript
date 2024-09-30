// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return 4 when a = 1 and b = 3', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    
    it('should return 5 when a = 1 and b = 3.7', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    
    it('should return 5 when a = 1.2 and b = 3.7', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    
    it('should return 6 when a = 1.5 and b = 3.7', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    
    it('should return 5 when a = 2.5 and b = 2.4', () => {
        assert.strictEqual(calculateNumber(2.5, 2.4), 5);
    });
    
    it('should return 0 when a = 0 and b = 0', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
});
