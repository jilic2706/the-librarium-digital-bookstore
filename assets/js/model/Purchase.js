/**
 * The 'Purchase' model that serves
 * in the creation of additional purchase logs through user input.
 * -----[UTILIZED IN PurchaseFactory.js]-----
 */

export class Purchase {
    constructor(email, fullName, country, address, townCity, postalCode, purchaseTitle, purchaseAuthor, purchaseFormat, purchasePrice, purchaseCover) {
        this._email             = email;
        this._fullName          = fullName;
        this._country           = country;
        this._address           = address;
        this._townCity          = townCity;
        this._postalCode        = postalCode;
        this._purchaseTitle     = purchaseTitle;
        this._purchaseAuthor    = purchaseAuthor;
        this._purchaseFormat    = purchaseFormat;
        this._purchasePrice     = purchasePrice;
        this._purchaseCover     = purchaseCover;
    }

    get email() {
        return this._email;
    }
    get fullName() {
        return this._fullName;
    }
    get country() {
        return this._country;
    }
    get address() {
        return this._address;
    }
    get townCity() {
        return this._townCity;
    }
    get postalCode() {
        return this._postalCode;
    }
    get purchaseAuthor() {
        return this._purchaseAuthor;
    }
    get purchaseFormat() {
        return this._purchaseFormat;
    }
    get purchasePrice() {
        return this._purchasePrice;
    }
    get purchaseCover() {
        return this._purchaseCover;
    }

    set email(newEmail) {
        this._email = newEmail;
    }
    set fullName(newFullName) {
        this._fullName = newFullName;
    }
    set country(newCountry) {
        this._country = newCountry;
    }
    set address(newAddress) {
        this._address = newAddress;
    }
    set townCity(newTownCity) {
        this._townCity = newTownCity;
    }
    set postalCode(newPostalCode) {
        this._postalCode = newPostalCode;
    }
    set purchaseTitle(newPurchaseTitle) {
        this._purchaseTitle = newPurchaseTitle;
    }
    set purchaseAuthor(newPurchaseAuthor) {
        this._purchaseAuthor = newPurchaseAuthor;
    }
    set purchaseFormat(newPurchaseFormat) {
        this._purchaseFormat = newPurchaseFormat;
    }
    set purchasePrice(newPurchasePrice) {
        this.purchasePrice = newPurchasePrice;
    }
    set purchaseCover(newPurchaseCover) {
        this._purchaseCover = newPurchaseCover;
    }
}