/**
 * The 'Book' model that (should have) serves
 * in the creation of additional books through user input.
 * -----[CURRENTLY UNDERUTILIZED/UNUSED]-----
 */

export class Book {
    constructor(id, title, author, format, price, cover, genre, publisher, publicationDate, language) {
        this._id                = id;
        this._title             = title;
        this._author            = author;
        this._format            = format;
        this._price             = price;
        this._cover             = cover;
        this._genre             = genre;
        this._publisher         = publisher;
        this._publicationDate   = publicationDate;
        this._language          = language;
    }

    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get format() {
        return this._format;
    }
    get price() {
        return this._price;
    }
    get cover() {
        return this._cover;
    }
    get genre() {
        return this._genre;
    }
    get publisher() {
        return this._publisher;
    }
    get publicationDate() {
        return this._publicationDate;
    }
    get language() {
        return this._language;
    }

    set id(newId) {
        this._id = newId;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    set author(newAuthor) {
        this._author = newAuthor;
    }
    set format(newFormat) {
        this._format = newFormat;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
    set cover(newCover) {
        this._cover = newCover;
    }
    set genre(newGenre) {
        this._genre = newGenre;
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
    set publicationDate(newPublicationDate) {
        this._publicationDate = newPublicationDate;
    }
    set language(newLanguage) {
        this._language = newLanguage;
    }
}