const { expect } = require('chai');
const { companyAdministration } = require('./company-administration');

describe('Unit testing on companyAdministration project', function () {
    describe('Testing the first method on companyAdministration', function () {

        it('should not work with different position ', function () {
            expect(() => { companyAdministration.hiringEmployee('a', 'b', 4) }).to.throw('We are not looking for workers for this position.');
        });

        it('should return a message for not approving the application when the years of experience are lower than 3', function () {
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 0)).to.equal(`a is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 1)).to.equal(`a is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 2)).to.equal(`a is not approved for this position.`);
        });

        it('should return a message for approving the application when the years of experience are bigger or equal to 3', function () {
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 3)).to.equal(`a was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 4)).to.equal(`a was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 10)).to.equal(`a was successfully hired for the position Programmer.`);
        });
    });

    describe('Testing the second method on companyAdministration', function () {
        it('should work with correct parameter', function () {
            expect(companyAdministration.calculateSalary(100)).to.equal(1500);
        });

        it('should work with correct parameter and take into an account the bonus for over 160 hrs - 1000BGN', function () {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });

        it('should throw an error when it is called with invalid parameter', function () {
            expect(() => { companyAdministration.calculateSalary(-1) }).to.throw("Invalid hours");

            expect(() => { companyAdministration.calculateSalary([1]) }).to.throw("Invalid hours");
            expect(() => { companyAdministration.calculateSalary('1') }).to.throw("Invalid hours");
            expect(() => { companyAdministration.calculateSalary({ hours: 1 }) }).to.throw("Invalid hours");
        });



    });

    describe('Testing the third method on companyAdministration', function () {
        it('should work with correct index', function () {
            expect(companyAdministration.firedEmployee(['a', 'b', 'c', 'd'], 0)).to.equal('b, c, d');
            expect(companyAdministration.firedEmployee(['a', 'b', 'c', 'd'], 3)).to.equal('a, b, c');
            expect(companyAdministration.firedEmployee(['a', 'b', 'c', 'd'], 2)).to.equal('a, b, d');
        });

        it('should throw an error ', function () {
            expect(() => { companyAdministration.firedEmployee(['a', 'b'], '1') }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee(['a', 'b'], -1) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee(['a', 'b'], [1]) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee({ a: 1, b: 2 }) }).to.throw('Invalid input');
        });


    });
});