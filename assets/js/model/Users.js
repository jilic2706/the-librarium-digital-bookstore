/**
 * The 'Users' model that (should have) serves
 * in the housing of a series of user objects.
 * -----[CURRENTLY UNDERUTILIZED/UNUSED]-----
 */

export class Users {
    constructor() {
        this._users = [];
    }
    get users() {
        return this._users;
    }
    add(user) {
        this._users.push(user);
    }
    get(userId) {
        for(let user of this.users) {
            if(user.id === userId) {
                return user;
            }
        }
    }
    count() {
        return this.users.length;
    }
}