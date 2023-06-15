const { expect } = require('chai');
const { lookupChar } = require('./char-lookup');

describe('Test lookupChar', () => {
    it('works with first index', () => {
        expect(lookupChar('hello', 0)).to.be.equal('h');
    });

    it('works with last index', () => {
        expect(lookupChar('hello', 4)).to.be.equal('o');
    });

    it('works with random valid index', () => {
        expect(lookupChar('hello', 1)).to.be.equal('e');
    });

    it('does not work with indexes out of boundary', () => {
        expect(lookupChar('hello', -1)).to.be.equal('Incorrect index');
        expect(lookupChar('hello', 5)).to.be.equal('Incorrect index');
    });

    it('does not work with array first parameter', () => {
        expect(lookupChar(['hello'], -1)).to.be.undefined;
        expect(lookupChar(['hello'], 5)).to.be.undefined;
        expect(lookupChar(['hello'], 3)).to.be.undefined;

        expect(lookupChar(['h', 'e', 'l', 'l', 'o'], -1)).to.be.undefined;
        expect(lookupChar(['h', 'e', 'l', 'l', 'o'], 5)).to.be.undefined;
        expect(lookupChar(['h', 'e', 'l', 'l', 'o'], 3)).to.be.undefined;
    });

    it('does not work with floating point number', () => {
        expect(lookupChar('hello', 1.1)).to.be.undefined;
    });

    it('does not work with  correct string and different type of variables except number for index parameter', () => {
        expect(lookupChar('hello', [1])).to.be.equal('Incorrect index');
        expect(lookupChar('hello', true)).to.be.equal('Incorrect index');
        expect(lookupChar('hello', { name: 'Peter' })).to.be.equal('Incorrect index');
    });

});