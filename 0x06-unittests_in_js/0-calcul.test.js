/* eslint-disable */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return 4 when inputs are 1 and 3', () => {
        assert.strictEqual(calculateNumber(1, 3), 4)
    });
    it('should return 5 when inputs are 1 and 3.8', () => {
        assert.strictEqual(calculateNumber(1, 3.8), 5)
    });
    it('should return 6 when inputs are 1.6 and 4.2', () => {
        assert.strictEqual(calculateNumber(1.6, 4.2), 6)
    });
    it('should return 7 when inputs are 2.7 and 3.9', () => {
        assert.strictEqual(calculateNumber(2.7, 3.9), 7)
    });
    it('should handle negative numbers correctly', () => {
        assert.strictEqual(calculateNumber(-2.4, -3.6), -6)
    });
    it('should return 0 when inputs are 0.4 and 0.4', () => {
        assert.strictEqual(calculateNumber(0.4, 0.4), 0)
    });
    it('should handle edge cases with large numbers', () => {
        assert.strictEqual(calculateNumber(100000, 0.4), 100000)
    });
})