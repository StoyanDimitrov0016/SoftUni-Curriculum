const { describe, it } = require("mocha");
const { rentCar } = require("./rentCar");
const { expect } = require('chai');

describe('rentCar project unit testing', () => {
    describe('Testing searchCar method', () => {
        it('Works with two valid parameters ', () => {
            expect(rentCar.searchCar(['a'], 'a')).to.equal('There is 1 car of model a in the catalog!');
            expect(rentCar.searchCar(['a', 'b', 'a'], 'a')).to.equal('There is 2 car of model a in the catalog!');
            expect(rentCar.searchCar(['1'], '1')).to.equal('There is 1 car of model 1 in the catalog!');
            expect(() => rentCar.searchCar(['b', 'c', 'd'], 'a')).to.throw('There are no such models in the catalog!');
        });

        it('Should not work work with invalid first parameter', () => {
            expect(() => rentCar.searchCar([{ car: 'a' }, 2, 3], 'a')).to.throw();
            expect(() => rentCar.searchCar([true, 2, 3], 'true')).to.throw();
        });

        it('Should not work work with invalid second parameter', () => {
            expect(() => rentCar.searchCar(['b', 'c', 'd'], true)).to.throw();
            expect(() => rentCar.searchCar(['b', 'c', 'd'], ['b'])).to.throw();
            expect(() => rentCar.searchCar(['1', 'c', 'd'], 1)).to.throw();
        });

    });

    describe('Testing calculatePriceOfCar method', () => {
        it('Should work work with two valid parameters', () => {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 1)).to.equal('You choose Volkswagen and it will cost $20!');
            expect(rentCar.calculatePriceOfCar('Volkswagen', 2)).to.equal('You choose Volkswagen and it will cost $40!');

            expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equal('You choose Audi and it will cost $36!');
            expect(rentCar.calculatePriceOfCar('Audi', 2)).to.equal('You choose Audi and it will cost $72!');

            expect(rentCar.calculatePriceOfCar('Toyota', 1)).to.equal('You choose Toyota and it will cost $40!');
            expect(rentCar.calculatePriceOfCar('Toyota', 2)).to.equal('You choose Toyota and it will cost $80!');

            expect(rentCar.calculatePriceOfCar('BMW', 1)).to.equal('You choose BMW and it will cost $45!');
            expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal('You choose BMW and it will cost $90!');

            expect(rentCar.calculatePriceOfCar('Mercedes', 1)).to.equal('You choose Mercedes and it will cost $50!');
            expect(rentCar.calculatePriceOfCar('Mercedes', 2)).to.equal('You choose Mercedes and it will cost $100!');
        });

        it('Should not work with floating point number as day', () => {
            expect(() => rentCar.calculatePriceOfCar('Mercedes', 1.1)).to.Throw();
        });

        it('Should not work with string as a day', () => {
            expect(() => rentCar.calculatePriceOfCar('Mercedes', '1')).to.Throw();
        });

        it('Should not work with array of numbers as day', () => {
            expect(() => rentCar.calculatePriceOfCar('Mercedes', [1])).to.Throw();
        });

        it('Should not work with invalid model', () => {
            expect(() => rentCar.calculatePriceOfCar('Peugeot', 1)).to.Throw();
        });

        it('Should not work with invalid model and invalid day', () => {
            expect(() => rentCar.calculatePriceOfCar('Peugeot', '1')).to.Throw();
        });

    });

    describe('Testing checkBudget method', () => {
        it('Should work with valid parameters', () => {
            expect(rentCar.checkBudget(1, 1, 1)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(1, 2, 3)).to.equal('You rent a car!');
        });

        it('Should return you need a bigger budget with valid parameters', () => {
            expect(rentCar.checkBudget(1, 1, 0)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(1, 2, 1)).to.equal('You need a bigger budget!');
        });

        it('Should throw an error with invalid parameters (numbers as string)', () => {
            expect(() => rentCar.checkBudget('1', 1, 1)).to.throw();
            expect(() => rentCar.checkBudget(1, '1', 1)).to.throw();
            expect(() => rentCar.checkBudget(1, 1, '1')).to.throw();

            expect(() => rentCar.checkBudget('1', '1', 1)).to.throw();
            expect(() => rentCar.checkBudget(1, '1', '1')).to.throw();

            expect(() => rentCar.checkBudget('1', '1', '1')).to.throw();
        });

        it('Should throw an error with invalid day (floating point numbers)', () => {
            expect(() => rentCar.checkBudget(1, 1.1, 1)).to.throw();
        });

        it('Should throw an error with invalid inputs (different types of variables)', () => {
            expect(() => rentCar.checkBudget('1', 1, 1)).to.throw();
            expect(() => rentCar.checkBudget(1, [1], 1)).to.throw();
            expect(() => rentCar.checkBudget(1, 1, { days: 2 })).to.throw();
            expect(() => rentCar.checkBudget('1', 1, true)).to.throw();
        });

    });
});
