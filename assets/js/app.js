/**
 * The app.js is used to tie all of the other modules together
 * into one functional whole. Linked with the index.html.
 */

import { View } from './view/View.js';
import { ModeController } from './controller/ModeController.js';
import { BookController } from './controller/BookController.js';
// import { Books } from './model/Books.js';
import { UserController } from './controller/UserController.js';
// import { Users } from './model/Users.js';


window.onload = function() {
    let view = new View();
    view.renderPurchaseView();
    let mc = new ModeController(view);

    // let um = new Users();
    // let uc = new UserController(view, um);
    let uc = new UserController(view);
    uc.loadUsers();

    // let bm = new Books();
    // let bc = new BookController(view, bm);
    let bc = new BookController(view);
    bc.loadBooks();
}
