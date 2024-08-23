/* eslint-disable */

import { expect  } from "chai";
import calculateNumber from "./2-calcul_chai.js";
describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 5 when inputs are 1.4 and 3.7', () => {
            expect(calculateNumber('SUM', 1.4, 3.7)).to.equal(5)
        });
        it('should return 5 when inputs are 2 and 3', () => {
            expect(calculateNumber('SUM', 2, 3)).to.equal(5)
        });
    })
    describe('SUBTRACT', () => {
        it('should return -3 when inputs are 1.4 and 3.7', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 3.7)).to.equal(-3);
        });

        it('should return 2 when inputs are 5 and 3', () => {
            expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.25 when inputs are 1.4 and 3.7', () => {
            expect(calculateNumber('DIVIDE', 1.4, 3.7)).to.equal(0.25);
        });

        it('should return Error when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
        });

        it('should return 2 when inputs are 4 and 2', () => {
            expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
        });
    });

    describe('Invalid operation type', () => {
        it('should throw an error for invalid type', () => {
            expect(() => {
                calculateNumber('MULTIPLY', 2, 3);
            }).to.throw('Invalid operation type');
        });
    });
})