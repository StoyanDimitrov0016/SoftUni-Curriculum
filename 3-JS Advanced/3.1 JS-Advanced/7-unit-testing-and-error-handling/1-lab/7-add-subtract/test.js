const { expect } = require('chai');
const { createCalculator } = require('./add-subtract');

describe('Testing createCalculator', () => {
    it('Test initial value and .get method', () => {
        const calc = createCalculator();
        expect(calc.get()).to.be.equal(0);
    });

    it('Test .add method with number parameters', () => {
        const calc = createCalculator();
        calc.add(3);
        calc.add(3.1);
        expect(calc.get()).to.be.equal(6.1);
    });

    it('Test .add method with number parameters as string', () => {
        const calc = createCalculator();
        calc.add('3');
        calc.add('3.1');
        expect(calc.get()).to.be.equal(6.1);
    });

    it('Test .subtract method with number parameters', () => {
        const calc = createCalculator();
        calc.subtract('3');
        calc.subtract('3.1');
        expect(calc.get()).to.be.equal(-6.1);
    });

    it('Test .subtract method with number parameters as string', () => {
        const calc = createCalculator();
        calc.subtract('3');
        calc.subtract('3.1');
        expect(calc.get()).to.be.equal(-6.1);
    });
});
