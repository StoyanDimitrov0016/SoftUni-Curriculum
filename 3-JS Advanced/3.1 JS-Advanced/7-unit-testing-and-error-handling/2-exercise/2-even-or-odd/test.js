const { expect } = require('chai');
const { isOddOrEven } = require('./even-or-odd');

describe('Testing isOddOrEven function', () => {
    it('works with odd length string', () => {
        expect(isOddOrEven('a')).to.be.equal('odd');
    });

    it('works with even length string', () => {
        expect(isOddOrEven('ab')).to.be.equal('even');
    });

    it('does not works with boolean as parameter', () => {
        expect(isOddOrEven(true)).to.be.undefined;
    });

    it('does not works with array as parameter', () => {
        expect(isOddOrEven(['a'])).to.be.undefined;
    });

    it('does not works with number as parameter', () => {
        expect(isOddOrEven([111])).to.be.undefined;
    });

    it('does not work with multiple strings passed at once', () => {
        expect(isOddOrEven('a', 'b', 'c')).to.be.equal('odd');
    });
});