/* eslint-disable */

const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 5 when inputs are 1.4 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 3.7), 5)
        });
        it('should return 5 when inputs are 2 and 3', () => {
            assert.strictEqual(calculateNumber('SUM', 2, 3), 5)
        });
    })
    describe('SUBTRACT', () => {
        it('should return -3 when inputs are 1.4 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.7), -3);
        });

        it('should return 2 when inputs are 5 and 3', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.25 when inputs are 1.4 and 3.7', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.7), 0.25);
        });

        it('should return Error when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
        });

        it('should return 2 when inputs are 4 and 2', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
        });
    });

    describe('Invalid operation type', () => {
        it('should throw an error for invalid type', () => {
            assert.throws(() => {
                calculateNumber('MULTIPLY', 2, 3);
            }, /Invalid operation type/);
        });
    });
})