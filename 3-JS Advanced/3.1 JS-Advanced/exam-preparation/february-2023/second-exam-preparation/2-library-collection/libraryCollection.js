class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    };

    payBook(bookName) {
        const bookIndex = this.books.findIndex(b => b.bookName == bookName);

        if (bookIndex == -1) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        const book = this.books[bookIndex];

        if (book.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    };

    removeBook(bookName) {
        const bookIndex = this.books.findIndex(b => b.bookName == bookName);

        if (bookIndex == -1) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        const book = this.books[bookIndex];

        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        this.books.splice(bookIndex, 1);
        return `${bookName} remove from the collection.`;
    };

    getStatistics(bookAuthor) {
        if (arguments.length == 0) {

            const allBooks = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
                .map(b => {
                    if (b.payed) {
                        return `${b.bookName} == ${b.bookAuthor} - Has Paid.`;
                    } else {
                        return `${b.bookName} == ${b.bookAuthor} - Not Paid.`;
                    }
                });

            return [
                `The book collection has ${this.capacity - this.books.length} empty spots left.`,
                allBooks.join('\n')].join('\n');
        } else if (arguments.length >= 1) {
            const bookIndex = this.books.findIndex(b => b.bookAuthor == bookAuthor);

            if (bookIndex == -1) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            const book = this.books[bookIndex];

            if (book.payed) {
                return `${book.bookName} == ${book.bookAuthor} - Has Paid.`;
            }

            return `${book.bookName} == ${book.bookAuthor} - Not Paid.`;
        }

    };
}
const library = new LibraryCollection(2)

library.addBook('In Search of Lost Time', 'Marcel Proust');
library.payBook('In Search of Lost Time');

console.log(library.getStatistics('Marcel Proust')); 