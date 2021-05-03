/**
 * The 'Book' model that (should have) serves
 * in the creation of additional users through user input.
 * -----[CURRENTLY UNDERUTILIZED/UNUSED]-----
 */

export class User {
    constructor(id, username, comment, picture, email, password) {
        this._id        = id;
        this._username  = username;
        this._comment   = comment;
        this.picture    = picture;
        this._email     = email;
        this._password  = password;
    }
    get id() {
        return this._id;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    get username() {
        return this._username;
    }
    get comment() {
        return this._comment;
    }
    get picture() {
        return this._picture;
    }
    
    set id(newId) {
        this._id = newId;
    }
    set username(newUsername) {
        this._username = newUsername;
    }
    set comment(newComment) {
        this._comment = newComment;
    }
    set picture(newPicture) {
        this._picture = newPicture;
    }
    set email(newEmail) {
        this._email = newEmail;
    }
    set password(newPassword) {
        this._password = newPassword;
    }
}