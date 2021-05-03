/**
 * The 'BookFactory' utility class that (should have) makes it possible
 * to create new user objects.
 * -----[CURRENTLY UNDERUTILIZED/UNUSED]-----
 */

import {User} from '../model/User.js';

export class UserFactory {
    static create(id, username, comment, picture, email, password) {
        let user = new User(id, username,  comment, picture, email, password);
        return user;
    }
}