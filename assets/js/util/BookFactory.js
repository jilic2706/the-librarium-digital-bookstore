/**
 * The 'BookFactory' utility class that (should have) makes it possible
 * to create new book objects and generates their unique IDs.
 * -----[CURRENTLY UNDERUTILIZED/UNUSED]-----
 */

import {Book} from '../model/Book.js';

export class BookFactory {
    static create(title, author, format, price, cover, genre, publisher, publicationDate, language) {
        let id = (function() {
            let h;
            for(let i = 0; i < title.length; i++) {
                h = Math.imul(31, h) + title.charCodeAt(i) | 0;
            }
            return h;
        })();
        let book = new Book(id, title, author, format, price, cover, genre, publisher, publicationDate, language);
        return book;
    }
}