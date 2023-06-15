const { expect } = require('chai');
const { isSymmetric } = require("./isSymmetric");

describe('Testing the function isSymmetric', () => {
    it('should return true if the parameter is a symmetric array containing numbers', () => {
        const result = isSymmetric([1, 2, 3, 2, 1]);
        expect(result).to.be.true;
    });

    it('should return true if the parameter is a symmetric array containing strings', () => {
        const result = isSymmetric(['a', 'b', 'c', 'b', 'a']);
        expect(result).to.be.true;
    });

    it('should return false if the parameter is a non-symmetric array', () => {
        const result = isSymmetric([1, 2, 3, 4, 5]);
        expect(result).to.be.false;
    });

    it('should return false if the parameter is not an array (string)', () => {
        const result = isSymmetric('Hello');
        expect(result).to.be.false;
    });

    it('should return false if the parameter is not an array (number)', () => {
        const result = isSymmetric(6);
        expect(result).to.be.false;
    });

    it('should return false if the parameter is symmetric but not an array (string)', () => {
        const result = isSymmetric('abccba');
        expect(result).to.be.false;
    });

    it('should return false if one of the parameters is mismatched type', () => {
        const result = isSymmetric([1, 2, 3, 2, '1']);
        expect(result).to.be.false;
    });

    it('should return false if the parameter is not an array (object)', () => {
        const result = isSymmetric({ name: "Peter" });
        expect(result).to.be.false;
    });

    it('should return true if the parameter is a symmetric array with multiple data types', () => {
        const result = isSymmetric([1, 'a', true, 'a', 1]);
        expect(result).to.be.true;
    });

    it('should return false if the parameter is a non-symmetric array with multiple data types', () => {
        const result = isSymmetric([1, 'a', true, 'b', 1]);
        expect(result).to.be.false;
    });

    it('should return true if the parameter is a symmetric array with undefined values', () => {
        const result = isSymmetric([undefined, 1, undefined]);
        expect(result).to.be.true;
    });

    it('should return true if the parameter is a symmetric array with null values', () => {
        const result = isSymmetric([null, 'a', null]);
        expect(result).to.be.true;
    });

    it('should return true if the parameter is a symmetric array with duplicate elements', () => {
        const result = isSymmetric(['a', 'b', 'c', 'b', 'a']);
        expect(result).to.be.true;
    });

    it('should return false if the parameter is a non-symmetric array with duplicate elements', () => {
        const result = isSymmetric(['a', 'b', 'c', 'd', 'a']);
        expect(result).to.be.false;
    });
});


