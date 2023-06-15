const { expect } = require('chai');
const { bookSelection } = require('./book-selection');
const { it } = require('mocha');


describe('Unit testing for book-selection.js project', () => {
    describe('Testing isGenreSuitable() method', () => {

        it('return message that horror and thriller genres are not suitable for age < 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 1)).to.equal('Books with Thriller genre are not suitable for kids at 1 age');
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age');
            expect(bookSelection.isGenreSuitable('Horror', 1)).to.equal('Books with Horror genre are not suitable for kids at 1 age');
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal('Books with Horror genre are not suitable for kids at 11 age');
        });

        it('return message that horror and thriller genres are not suitable for age = 12 (edge case)', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        });

        it('return message that every other genre is suitable for age < 12', () => {
            expect(bookSelection.isGenreSuitable('a', 1)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('b', 11)).to.equal('Those books are suitable');
        });

        it('return message that every other genre is suitable for age = 12 (edge case)', () => {
            expect(bookSelection.isGenreSuitable('a', 12)).to.equal('Those books are suitable');
        });

        it('return message that horror and thriller genres are suitable for any age > 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
        });

        it('return message that every other genre is suitable for age > 13', () => {
            expect(bookSelection.isGenreSuitable('a', 13)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('b', 13)).to.equal('Those books are suitable');
        });
    });

    describe('Test isItAffordable() method', () => {
        it('work with budget bigger than the price of the book', () => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal('Book bought. You have 1$ left');
        });

        it('work with budget equal to the price of the book (edge case)', () => {
            expect(bookSelection.isItAffordable(1, 1)).to.equal('Book bought. You have 0$ left');
        });

        it('tells you don\'t have money when budget less than the price of the book', () => {
            expect(bookSelection.isItAffordable(2, 1)).to.equal('You don\'t have enough money');
        });

        it('trow an error when parameters are different types', () => {
            expect(() => { bookSelection.isItAffordable('1', 1) }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable(1, '1') }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable([1], '1') }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable('1', [1]) }).to.throw('Invalid input');
        });
    });

    describe('Test suitableTitles() method', () => {
        it('works with one book for match', () => {
            expect(bookSelection.suitableTitles([{
                title: "The Da Vinci Code",
                genre: "Thriller"
            }],
                "Thriller")).to.deep.equal(['The Da Vinci Code']);
        });

        it('works with two books for match from total of three books', () => {
            expect(bookSelection.suitableTitles([{
                title: "a",
                genre: "Thriller"
            }, {
                title: "b",
                genre: "Thriller"
            }, {
                title: "c",
                genre: "Comedy"
            }],
                "Thriller")).to.deep.equal(['a', 'b']);
        });

        it('Do not work with different parameters', () => {
            expect(() => bookSelection.suitableTitles([{
                title: "a",
                genre: "5"
            }, {
                title: "b",
                genre: "5"
            }, {
                title: "c",
                genre: "Comedy"
            }],
                5)).to.throw();

            expect(() => bookSelection.suitableTitles('title - aa, genre - comedy',
                'comedy')).to.throw();
        });
    })
});