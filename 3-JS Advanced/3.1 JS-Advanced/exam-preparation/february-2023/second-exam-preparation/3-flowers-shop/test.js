const { describe, it } = require("mocha");
const { expect } = require('chai');
const { flowerShop } = require("./flowerShop");

describe('Unit testing on flowerShop project', function () {
    describe('Testing the first method on myCode', function () {
        it('should work with valid parameters', function () {
            expect(flowerShop.calcPriceOfFlowers('a', 1, 1)).to.equal('You need $1.00 to buy a!');
        });

        it('should throw an error when the first method is called with invalid parameters', function () {
            expect(() => flowerShop.calcPriceOfFlowers(['a'], 1, 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('a', '1', 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(true, 1, 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('a', 1.1, 1.1)).to.throw();
        });

    });

    describe('Testing the second method on flowerShop', function () {
        it('should work with valid parameters', function () {
            expect(flowerShop.checkFlowersAvailable('a', ['a', 'b', 'a'])).to.equal('The a are available!');
            expect(flowerShop.checkFlowersAvailable('d', ['a', 'b', 'a'])).to.equal('The d are sold! You need to purchase more!');

            expect(flowerShop.checkFlowersAvailable('1', ['1', 'b', 'a'])).to.equal('The 1 are available!');
            expect(flowerShop.checkFlowersAvailable('1', ['a', 'b', 'a'])).to.equal('The 1 are sold! You need to purchase more!');
        });

    });

    describe('Testing the third method on flowerShop', function () {
        it('should work with valid parameters', function () {
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 0)).to.equal('b / c');
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 1)).to.equal('a / c');
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 2)).to.equal('a / b');
        });

        it('should throw an error with invalid parameters', function () {
            expect(() => flowerShop.sellFlowers(['a', 'b'], 1.1)).to.throw();
            expect(() => flowerShop.sellFlowers(['a', 'b'], -1)).to.throw();
            expect(() => flowerShop.sellFlowers(['a', 'b'], -1.1)).to.throw();
            expect(() => flowerShop.sellFlowers(['a', 'b'], [1])).to.throw();
            expect(() => flowerShop.sellFlowers(['a', 'b'], true)).to.throw();
        });

    });
});