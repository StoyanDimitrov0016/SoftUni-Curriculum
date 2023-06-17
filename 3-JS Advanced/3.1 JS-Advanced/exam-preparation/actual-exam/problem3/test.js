const { describe, it } = require("mocha");
const { expect } = require('chai');
const { lottery } = require("./Lottery");

describe("Testing the program Lottery", function () {
    describe("Testing the first functionality: buyLotteryTicket", function () {
        it("Valid params - buy=true", function () {
            expect(lottery.buyLotteryTicket(0.1, 1, true)).to.equal("You bought 1 tickets for 0.1$.");
            expect(lottery.buyLotteryTicket(1, 1, true)).to.equal("You bought 1 tickets for 1$.");
            expect(lottery.buyLotteryTicket(2, 2, true)).to.equal("You bought 2 tickets for 4$.");
        });

        it("Valid params - buy=false", function () {
            expect(() => lottery.buyLotteryTicket(1, 1, false)).to.throw("Unable to buy lottery ticket!");
            expect(() => lottery.buyLotteryTicket(2, 2, false)).to.throw("Unable to buy lottery ticket!");
        });

        it("Throw an error when it is called with invalid params", function () {
            expect(() => lottery.buyLotteryTicket('1', 1, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket('1', '1', true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket('1', '1', true)).to.throw("Invalid input!");

            expect(() => lottery.buyLotteryTicket(1, -1, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(-1, -1, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(-1, 1, true)).to.throw("Invalid input!");

            expect(() => lottery.buyLotteryTicket(1, 1, 'true')).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(1, 1, 'false')).to.throw("Invalid input!");

            expect(() => lottery.buyLotteryTicket([1], 1, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(1, [1], true)).to.throw("Invalid input!");


        });
    });

    describe("Testing the second functionality: checkTicket", function () {
        it("Valid params", function () {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal("You win the JACKPOT!!!");
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 11, 11, 11])).to.equal("Congratulations you win, check your reward!");
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 11, 11])).to.equal("Congratulations you win, check your reward!");
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 11])).to.equal("Congratulations you win, check your reward!");
        });

        it("Throw an error when it is called with invalid params", function () {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])).to.throw("Invalid input!");

            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], '1, 2, 3, 4, 5, 6')).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3], ['1', '2', '3'])).to.throw("Invalid input!");

            expect(() => lottery.checkTicket([1, 2, 3], { 1: 1, 2: 2, 3: 3 })).to.throw("Invalid input!");
            expect(() => lottery.checkTicket(true, [1, 2, 3])).to.throw("Invalid input!");
        });
    });

    describe("Testing the third functionality: secondChance", function () {
        it("Valid params with a match", function () {
            expect(lottery.secondChance(123, [123, 122, 124])).to.equal("You win our second chance prize!");
            expect(lottery.secondChance(1, [12, 11, 1])).to.equal("You win our second chance prize!");
        });

        it("Valid params without a match", function () {
            expect(lottery.secondChance(123, [122, 124])).to.equal("Sorry, your ticket didn't win!");
        });

        it("Throw an error when it is called with invalid params", function () {
            expect(() => lottery.secondChance('123', [123, 125])).to.throw("Invalid input!");
            expect(() => lottery.secondChance(123, '123, 124')).to.throw("Invalid input!");
            expect(() => lottery.secondChance('123', '123, 124')).to.throw("Invalid input!");
            expect(() => lottery.secondChance([123], [123, 125])).to.throw("Invalid input!");
        });
    });
});
