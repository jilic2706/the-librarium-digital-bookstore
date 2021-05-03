/**
 * This controller is in charge of
 * fetching .json data pertaining to books. 
 * This class was meant to serve in the creating of
 * additional book objects through user input ('Owned' books),
 * but this feature had to be scrapped due to time constraints.
 */

// import {BookFactory} from '../util/BookFactory.js';

export class BookController {
    constructor(view, model) {
        this.view = view;
        this.books = model;

        this.view.clean.onclick = this.cleanLocalStorage.bind(this);
    }
    
    /**
     * The following method loads the books.json data, further separating it
     * into cathegories that will be used by View.js to generate the site's content.
     * */ 
    loadBooks() {
        let httpRequest = new XMLHttpRequest();
        let loadedView  = this.view;
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
                let json = JSON.parse(httpRequest.responseText);
                let bestsellers = json.bestsellers;
                let newReleases = json.newReleases;
                let others      = json.others;
                let allBooks    = bestsellers.concat(newReleases[0].sffh, newReleases[1].gn, others);
                loadedView.renderBookView(bestsellers, 'bestsellers');
                loadedView.renderBookView(newReleases[0].sffh, 'new-releases-sffh');
                loadedView.renderBookView(newReleases[1].gn, 'new-releases-gn');
                loadedView.renderGenerateView(allBooks);
            }
        };
        httpRequest.open("GET", "books.json", true);
        httpRequest.send();
    }

    /**
     * The following method will clean the localStorage. It is bound to the button fixed
     * to the bottom-right corner of the site.
     */
    cleanLocalStorage() {
        localStorage.clear();
        window.location.reload();
    }
}