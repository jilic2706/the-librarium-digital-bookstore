/**
 * This controller is in charge of
 * fetching .json data pertaining to users. 
 * This class was meant to serve in the creating of
 * additional user objects through user input (user registration/user login),
 * but this feature had to be scrapped due to time constraints.
 */

// import {UserFactory} from '../util/UserFactory.js';

export class UserController {
    constructor(view, model) {
        this.view = view;
        this.users = model;
    }

    loadUsers() {
        let httpRequest = new XMLHttpRequest();
        let loadedView  = this.view;
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
                let json = JSON.parse(httpRequest.responseText);
                let userData = json.users;
                loadedView.renderUserView(userData);
            }
        };
        httpRequest.open("GET", "users.json", true);
        httpRequest.send();
    }
}