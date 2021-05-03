/**
 * The 'Purchases' model that (should have) serves
 * in the housing of a series of purchase objects.
 * -----[CURRENTLY UNDERUTILIZED/UNUSED]-----
 */

export class Purchases {
    constructor() {
        this._purchases = [];
    }
    get purchases() {
        return this._purchases;
    }
    add(purchase) {
        this._purchases.push(purchase);
    }
    get(purchaseId) {
        for(let purchase of this._purchases) {
            if(purchase.id === purchaseId) {
                return purchase;
            }
        }
    }
    count() {
        return this._purchases.length;
    }
}