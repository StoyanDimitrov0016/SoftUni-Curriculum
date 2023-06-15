const { expect } = require('chai');
const { mathEnforcer } = require('./math-enforcer');

describe('Test mathEnforcer', () => {

    describe('Testing "addFive" method', () => {
        it('works with positive integers', () => {
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
            expect(mathEnforcer.addFive(15)).to.be.equal(20);
        });

        it('works with negative integers', () => {
            expect(mathEnforcer.addFive(-1)).to.be.equal(4);
            expect(mathEnforcer.addFive(-15)).to.be.equal(-10);
        });

        it('works with zero as input', () => {
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
        });

        it('works with positive floating point numbers', () => {
            expect(mathEnforcer.addFive(1.1)).to.be.equal(6.1);
            expect(mathEnforcer.addFive(1.2)).to.be.equal(6.2);
        });

        it('works with negative floating point numbers', () => {
            expect(mathEnforcer.addFive(-1.1)).to.be.equal(3.9);
            expect(mathEnforcer.addFive(-1.2)).to.be.equal(3.8);
        });

        it('does not work with different type of input', () => {
            expect(mathEnforcer.addFive([1])).to.be.undefined;
            expect(mathEnforcer.addFive('1')).to.be.undefined;
            expect(mathEnforcer.addFive(true)).to.be.undefined;
            expect(mathEnforcer.addFive({ number: 1 })).to.be.undefined;
        });

        it('does not works without parameter', () => {
            expect(mathEnforcer.addFive()).to.be.undefined;
        });

        it('does work with calling it with more than one parameter', () => {
            expect(mathEnforcer.addFive(1, 1)).to.be.equal(6);
            expect(mathEnforcer.addFive(1, '1')).to.be.equal(6);
            expect(mathEnforcer.addFive(1, [1])).to.be.equal(6);
            expect(mathEnforcer.addFive(1, {})).to.be.equal(6);
        });
    });

    describe('Testing "subtractTen" method', () => {
        it('works with positive integers', () => {
            expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        });

        it('works with negative integers', () => {
            expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11);
            expect(mathEnforcer.subtractTen(-15)).to.be.equal(-25);
        });

        it('works with zero as input', () => {
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
        });

        it('works with positive floating point numbers', () => {
            expect(mathEnforcer.subtractTen(1.1)).to.be.equal(-8.9);
            expect(mathEnforcer.subtractTen(1.2)).to.be.equal(-8.8);
        });

        it('works with negative floating point numbers', () => {
            expect(mathEnforcer.subtractTen(-1.1)).to.be.equal(-11.1);
            expect(mathEnforcer.subtractTen(-1.2)).to.be.equal(-11.2);
        });

        it('does not work with different type of input', () => {
            expect(mathEnforcer.subtractTen([1])).to.be.undefined;
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
            expect(mathEnforcer.subtractTen({ number: 1 })).to.be.undefined;
        });

        it('does not works without parameter', () => {
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        });

        it('does work with calling it with more than one parameter', () => {
            expect(mathEnforcer.subtractTen(1, 1)).to.be.equal(-9);
            expect(mathEnforcer.subtractTen(1, '1')).to.be.equal(-9);
            expect(mathEnforcer.subtractTen(1, [1])).to.be.equal(-9);
            expect(mathEnforcer.subtractTen(1, {})).to.be.equal(-9);
        });
    });

    describe('Testing "sum" method', () => {
        it('works with positive integers', () => {
            expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
            expect(mathEnforcer.sum(2, 2)).to.be.equal(4);
        });

        it('works with negative integers', () => {
            expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2);
            expect(mathEnforcer.sum(-2, -2)).to.be.equal(-4);
        });

        it('works with positive and negative integers', () => {
            expect(mathEnforcer.sum(-1, 1)).to.be.equal(0);
            expect(mathEnforcer.sum(2, -2)).to.be.equal(0);
        });

        it('works with zero as input', () => {
            expect(mathEnforcer.sum(0, 0)).to.be.equal(0);
        });

        it('works with positive floating point numbers', () => {
            expect(mathEnforcer.sum(1.1, 1.1)).to.be.equal(2.2);
            expect(mathEnforcer.sum(1.1, 1)).to.be.equal(2.1);
        });

        it('works with negative floating point numbers', () => {
            expect(mathEnforcer.sum(-1.1, -1.1)).to.be.equal(-2.2);
            expect(mathEnforcer.sum(-1.1, 1)).to.be.closeTo(-0.1, 0.01);
        });

        it('does not works without parameters', () => {
            expect(mathEnforcer.sum()).to.be.undefined;
            expect(mathEnforcer.sum(1)).to.be.undefined;
        });

        it('does work with calling it with a different type of variable as first parameter', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
            expect(mathEnforcer.sum([1], 1)).to.be.undefined;
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
        });

        it('does work with calling it with a different type of variable as second parameter', () => {
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
            expect(mathEnforcer.sum(1, [1])).to.be.undefined;
            expect(mathEnforcer.sum(1, {})).to.be.undefined;
        });
    });
});
