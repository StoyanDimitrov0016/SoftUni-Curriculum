const { expect } = require('chai');
const { rgbToHexColor } = require("./RGB-to-HEX-convertor");

describe('Testing rgbToHexColor function', () => {
    it('works with boundary limits', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });

    it('works with the three main colors', () => {
        expect(rgbToHexColor(255, 0, 0)).to.be.equal('#FF0000');
        expect(rgbToHexColor(0, 255, 0)).to.be.equal('#00FF00');
        expect(rgbToHexColor(0, 0, 255)).to.be.equal('#0000FF');
    });

    it('works with random colors', () => {
        expect(rgbToHexColor(100, 78, 6)).to.be.equal('#644E06');
        expect(rgbToHexColor(11, 12, 13)).to.be.equal('#0B0C0D');
    });

    it ('should not work with negative parameters (out of boundary)', () => {
        expect(rgbToHexColor(-1, -1, -1)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 0, -1)).to.be.equal(undefined);
        expect(rgbToHexColor(0, -1, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(-1, 0, 0)).to.be.equal(undefined);
    });

    it ('should not work with positive parameters over 255 (out of boundary)', () => {
        expect(rgbToHexColor(266, 266, 266)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 0, 266)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 266, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(266, 0, 0)).to.be.equal(undefined);
    });

    it('should not work with less than tree parameters', () => {
        expect(rgbToHexColor(0, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0)).to.be.equal(undefined);
        expect(rgbToHexColor()).to.be.equal(undefined);
    });

    it('should not work with string variables as parameters', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.be.equal(undefined);
        expect(rgbToHexColor('1', '1', '1')).to.be.equal(undefined);

        expect(rgbToHexColor('a', 1, 1)).to.be.equal(undefined);
        expect(rgbToHexColor('a', 'a', 1)).to.be.equal(undefined);
    });

    it ('should not work with floating point numbers', () => {
        expect(rgbToHexColor(1.1, 1.1, 1.1)).to.be.equal(undefined);
        expect(rgbToHexColor(255.1, 255.1, 255.1)).to.be.equal(undefined);
        expect(rgbToHexColor(-1.1, -1.1, -1.1)).to.be.equal(undefined);

        expect(rgbToHexColor(1.1, 1, 1)).to.be.equal(undefined);
        expect(rgbToHexColor(1.1, 1.1, 1)).to.be.equal(undefined);
    });
});
