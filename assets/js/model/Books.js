/**
 * The 'Books' model that (should have) serves
 * in the housing of a series of book objects.
 * -----[CURRENTLY UNDERUTILIZED/UNUSED]-----
 */

export class Books {
    constructor() {
        this._books = [];
    }
    get books() {
        return this._books;
    }
    add(book) {
        this._books.push(book);
    }
    get(bookId) {
        for(let book of this._books) {
            if(book.id === bookId) {
                return book;
            }
        }
    }
    count() {
        return this._books.length;
    }
}