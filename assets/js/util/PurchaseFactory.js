/**
 * The 'PurchaseFactory' utility class that makes it possible
 * to create new purchase objects.
 * -----[UTILIZED IN View.js]-----
 */

import {Purchase} from '../model/Purchase.js';

export class PurchaseFactory {
    static create(email, fullName, country, address, townCity, postalCode, purchaseTitle, purchaseAuthor, purchaseFormat, purchasePrice, purchaseCover) {
        let purchase = new Purchase(email, fullName, country, address, townCity, postalCode, purchaseTitle, purchaseAuthor, purchaseFormat, purchasePrice, purchaseCover);
        return purchase;
    }
}