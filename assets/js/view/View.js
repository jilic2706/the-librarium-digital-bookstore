/**
 * The 'View' class that serves
 * in dynamically rendering every book and 
 * user object in a random order.
 */

import {Validator} from './Validator.js';
import {PurchaseFactory} from '../util/PurchaseFactory.js';

export class View {
    constructor() {
        this.mode = document.getElementById("mode");
        this.clean = document.getElementById("clean");
    }

    // The following method renders five random users onto the website.
    renderUserView(data) {
        let feedback = document.getElementById('feedback');
        let userCount = data.length;
        let userIds = [];
        for(let i = 1; i <= 5; i++) {
            let index = Math.floor(Math.random() * userCount);
            while(userIds.includes(index)) {
                index = Math.floor(Math.random() * userCount);
            }
            let user = data[index];
            let li = document.createElement('li');
            li.classList.add('media', 'm-2');
            let img = document.createElement('img');
            img.src = user.picture;
            img.classList.add('align-self-center', 'mr-3', 'user-icon', 'border', 'border-info');
            img.alt = `${user.username}'s picture`;
            let div = document.createElement('div');
            div.classList.add('media-body');
            let h5 = document.createElement('h5');
            h5.classList.add('mt-0', 'mb-1');
            h5.innerHTML = user.username;
            let p = document.createElement('p');
            p.innerHTML = user.comment;
            
            div.appendChild(h5);
            div.appendChild(p);
            li.appendChild(img);
            li.appendChild(div);
            feedback.appendChild(li);
            
            userIds.push(index);
        }
    }

    /**
     * The following method renders fifteen random books onto the website.
     * Five books are generated in the 'Purchase' 'Bestselling' subsection.
     * Five books are generated in the 'Purchase' 'New Releases - Science Fiction, Fantasy, Horror' subsection.
     * Five books are generated in the 'Purchase' 'New Releases - Graphic Novels' subsection.
     * Initially-invisible modal components are also constructed which contain forms 
     * the user may use to enter information that may or may not be stored in the local storage.
     * This information is, in turn, used to render past purchases in the 'Catalogue' 'Bought' subsection. 
     * */ 
    renderBookView(data, category) {
        let location = document.getElementById(category);
        let bookCount = data.length;
        let bookIds = [];
        for(let i = 1; i <= 5; i++) {
            let index = Math.floor(Math.random() * bookCount);
            while(bookIds.includes(index)) {
                index = Math.floor(Math.random() * bookCount);
            }
            let book = data[index];
            
            let col = document.createElement('div');
            col.classList.add('col');
            
            let card = document.createElement('div');
            card.classList.add('card', 'mx-auto', 'bg-0o', 'no-border');
            
            let img = document.createElement('img');
            img.src = book.cover;
            img.classList.add('card-img-top', 'border', 'border-info');
            img.alt = `Cover of ${book.author}'s ${book.title}`;
            
            let body = document.createElement('div');
            body.classList.add('card-body');
            
            let title = document.createElement('p');
            title.classList.add('card-title');
            title.innerHTML = book.title;
            
            let author = document.createElement('p');
            author.classList.add('card-text');
            author.innerHTML = book.author;
            
            let format = document.createElement('p');
            format.classList.add('card-text');
            format.innerHTML = book.format;
            
            let price = document.createElement('p');
            price.classList.add('card-text');
            price.innerHTML = `${book.price} €`;
            
            let buy = document.createElement('button');
            buy.type = 'button';
            buy.classList.add('btn', 'btn-light', 'btn-block');
            buy.dataset.toggle = 'modal';
            buy.dataset.target = `#book-${book.id}`;
            buy.innerHTML = 'Buy';



            let modal = document.createElement('div');
            modal.classList.add('modal', 'fade');
            modal.id = `book-${book.id}`;
            modal.tabIndex = '-1';
            modal.role='dialog';
            let modalDialog = document.createElement('div');
            modalDialog.classList.add('modal-dialog', 'modal-dialog-centered', 'modal-lg');
            modalDialog.role='document';
            
            let modalContent = document.createElement('div');
            modalContent.classList.add('modal-content', 'border');
            
            let modalHeader = document.createElement('div');
            modalHeader.classList.add('modal-header');
            
            let modalTitle = document.createElement('h5');
            modalTitle.classList.add('modal-title');
            modalTitle.innerHTML = `Purchasing ${book.title}`;
            
            let modalClose = document.createElement('button');
            modalClose.type = 'button';
            modalClose.classList.add('close');
            modalClose.dataset.dismiss = 'modal';
            modalClose.innerHTML = "<span aria=hidden='true'>&times;</span>";
            
            let modalBody = document.createElement('div');
            modalBody.classList.add('modal-body');
            
            let info = document.createElement('div');
            info.classList.add('row');
            let bookInfo = document.createElement('div');
            bookInfo.classList.add('col-md-auto');
            
            let modalCard = document.createElement('div');
            modalCard.classList.add('card', 'mx-auto', 'bg-0o', 'no-border');
            
            let modalCardImg = document.createElement('img');
            modalCardImg.src = book.cover;
            modalCardImg.classList.add('card-img-top', 'border', 'border-info');
            modalCardImg.alt = `Cover of ${book.author}'s ${book.title}`;
            
            let modalCardBody = document.createElement('div');
            modalCardBody.classList.add('card-body', 'pb-0');
            
            let modalCardTitle = document.createElement('p');
            modalCardTitle.classList.add('card-title');
            modalCardTitle.innerHTML = book.title;
            
            let modalCardAuthor = document.createElement('p');
            modalCardAuthor.classList.add('card-text');
            modalCardAuthor.innerHTML = book.author;
            
            let modalCardFormat = document.createElement('p');
            modalCardFormat.classList.add('card-text');
            modalCardFormat.innerHTML = book.format;
            
            let modalCardPrice = document.createElement('p');
            modalCardPrice.classList.add('card-text');
            modalCardPrice.innerHTML = `${book.price} €`;
            
            let userInfo = document.createElement('div');
            userInfo.classList.add('col');
            
            let form = document.createElement('form');
            form.id = `f${book.id}`;
            /**
             * The following refused to work. The workaround involved
             * assigning the function below to 'Purchase' button and executing it
             * upon clicking said button. It is a quick-fix rather than a sound solution,
             * but I was running out of time.
                form.onsubmit = function() {
                    let vs = new Validator(emailInput, fullNameInput, countryInput, addressInput, townCityInput, postalCodeInput);
                    vs.validate();
                };
              */
            
            let email = document.createElement('div');
            email.classList.add('form-group');
            let emailLabel = document.createElement('label');
            emailLabel.htmlFor = `email${book.id}`;
            emailLabel.innerHTML = '* Email:';
            let emailInput = document.createElement('input');
            emailInput.type = 'email';
            emailInput.classList.add('form-control');
            emailInput.id = `email${book.id}`;
            emailInput.formNoValidate;
            //emailInput.placeholder = 'Enter email';
            
            let fullName = document.createElement('div');
            fullName.classList.add('form-group');
            let fullNameLabel = document.createElement('label');
            fullNameLabel.htmlFor = `fn${book.id}`;
            fullNameLabel.innerHTML = '* Full name:';
            let fullNameInput = document.createElement('input');
            fullNameInput.type = 'text';
            fullNameInput.classList.add('form-control');
            fullNameInput.id = `fn${book.id}`;
            fullNameInput.formNoValidate;
            //fullNameInput.placeholder = 'Enter full name';

            let country = document.createElement('div');
            country.classList.add('form-group');
            let countryLabel = document.createElement('label');
            countryLabel.htmlFor = `c${book.id}`;
            countryLabel.innerHTML = '* Country:';
            let countryInput = document.createElement('input');
            countryInput.type = 'text';
            countryInput.classList.add('form-control');
            countryInput.id = `c${book.id}`;
            countryInput.formNoValidate;
            //fullNameInput.placeholder = 'Enter country';

            let address = document.createElement('div');
            address.classList.add('form-group');
            let addressLabel = document.createElement('label');
            addressLabel.htmlFor = `a${book.id}`;
            addressLabel.innerHTML = '* Address:';
            let addressInput = document.createElement('input');
            addressInput.type = 'text';
            addressInput.classList.add('form-control');
            addressInput.id = `a${book.id}`;
            addressInput.formNoValidate;
            let addressHelp = document.createElement('small');
            addressHelp.classList.add('form-text', 'text-muted');
            addressHelp.innerHTML = 'Street address, PO box, company name, etc.';
            //fullNameInput.placeholder = 'Enter country';

            let townCity = document.createElement('div');
            townCity.classList.add('form-group');
            let townCityLabel = document.createElement('label');
            townCityLabel.htmlFor = `ct${book.id}`;
            townCityLabel.innerHTML = '* Town/City:';
            let townCityInput = document.createElement('input');
            townCityInput.type = 'text';
            townCityInput.classList.add('form-control');
            townCityInput.id = `ct${book.id}`;
            townCityInput.formNoValidate;
            //fullNameInput.placeholder = 'Enter town/city';

            let postalCode = document.createElement('div');
            postalCode.classList.add('form-group');
            let postalCodeLabel = document.createElement('label');
            postalCodeLabel.htmlFor = `pc${book.id}`;
            postalCodeLabel.innerHTML = '* Postal Code:';
            let postalCodeInput = document.createElement('input');
            postalCodeInput.type = 'text';
            postalCodeInput.classList.add('form-control');
            postalCodeInput.id = `pc${book.id}`;
            postalCodeInput.formNoValidate;

            let formCheck = document.createElement('div');
            formCheck.classList.add('form-group', 'form-check');
            let check = document.createElement('input');
            check.type = 'checkbox';
            check.classList.add('form-check-input');
            check.id = `check${book.id}`;
            let checkLabel = document.createElement('label');
            checkLabel.classList.add('form-check-label');
            checkLabel.htmlFor = `check${book.id}`;
            checkLabel.innerHTML = 'Store order information';
            
            let modalFooter = document.createElement('div');
            modalFooter.classList.add('modal-footer');
            let confirmPurchase = document.createElement('button');
            confirmPurchase.type = 'submit';
            confirmPurchase.classList.add('btn', 'btn-light');
            confirmPurchase.innerHTML = "Purchase";
            confirmPurchase.onclick = function() {
                let isValid = Validator.validate(emailInput, fullNameInput, countryInput, addressInput, townCityInput, postalCodeInput, check.id);
                if(isValid) {
                    if(!check.checked) {
                        alert("Thank you for your purchase! Your order information will not be stored.");
                        setTimeout(function() {
                            window.location.reload();
                        }, 1000);  
                    }
                    else {
                        let purchase = PurchaseFactory.create(emailInput.value, fullNameInput.value, countryInput.value, addressInput.value, townCityInput.value, postalCodeInput.value, book.title, book.author, book.format, book.price, book.cover);
                        if(purchase) {
                            let entry = JSON.stringify(purchase);
                            let lSSize = localStorage.length;
                            localStorage.setItem(lSSize, entry);
                        }
                        alert("Thank you for your purchase! Your order information will be stored and displayed in the Catalogue section after a refresh.");
                        setTimeout(function() {
                            window.location.reload();
                        }, 1000);
                    }
                }
            };
            
            modalCardBody.appendChild(modalCardTitle);
            modalCardBody.appendChild(modalCardAuthor);
            modalCardBody.appendChild(modalCardFormat);
            modalCardBody.appendChild(modalCardPrice);
            modalCard.appendChild(modalCardImg);
            modalCard.appendChild(modalCardBody);
            bookInfo.appendChild(modalCard);
            email.appendChild(emailLabel);
            email.appendChild(emailInput);
            fullName.appendChild(fullNameLabel);
            fullName.appendChild(fullNameInput);
            country.appendChild(countryLabel);
            country.appendChild(countryInput);
            address.appendChild(addressLabel);
            address.appendChild(addressInput);
            address.appendChild(addressHelp);
            townCity.appendChild(townCityLabel);
            townCity.appendChild(townCityInput);
            postalCode.appendChild(postalCodeLabel);
            postalCode.appendChild(postalCodeInput);
            formCheck.appendChild(check);
            formCheck.appendChild(checkLabel);
            form.appendChild(email);
            form.appendChild(fullName);
            form.appendChild(country);
            form.appendChild(address);
            form.appendChild(townCity);
            form.appendChild(postalCode);
            form.appendChild(formCheck);
            userInfo.appendChild(form);
            info.appendChild(bookInfo);
            info.appendChild(userInfo);
            modalBody.appendChild(info);
            modalHeader.appendChild(modalTitle);
            modalHeader.appendChild(modalClose);
            modalFooter.appendChild(confirmPurchase);
            modalContent.appendChild(modalHeader);
            modalContent.appendChild(modalBody);
            modalContent.appendChild(modalFooter);
            modalDialog.appendChild(modalContent);
            modal.appendChild(modalDialog);



            body.appendChild(title);
            body.appendChild(author);
            body.appendChild(format);
            body.appendChild(price);
            body.appendChild(buy);
            body.appendChild(modal);
            card.appendChild(img);
            card.appendChild(body);
            col.appendChild(card);
            location.appendChild(col);

            bookIds.push(index);
        }
    }

    /**
     * The following method renders all of the user's
     * past purchases. The purchase information is stored in the
     * local storage and said storage is checked every time the site
     * is loaded (this method is called). This means that to immediately display the latest order,
     * the site is reloaded after a form is submitted.
     * */ 
    renderPurchaseView() {
        let purchases = document.getElementById("purchases");
        let lSLength = localStorage.length;
        if(lSLength == 0) {
            purchases.innerHTML = "<p class='center'>You haven't bought anything yet.</p>";
        }
        else {
            for(let i = 0; i < lSLength; i++) {
                let entry = JSON.parse(window.localStorage.getItem(i));
                console.log(entry);
                let row = document.createElement('row');
                row.classList.add('row');
    
                let col = document.createElement('div');
                col.classList.add('col-lg-4', 'd-flex', 'align-items-stretch');
                
                let card = document.createElement('div');
                card.classList.add('card', 'mx-auto', 'bg-0o', 'no-border');
                
                let img = document.createElement('img');
                img.src = entry._purchaseCover;
                img.classList.add('card-img-top', 'border', 'border-info');
                img.alt = `Cover of ${entry._purchaseAuthor}'s ${entry._purchaseTitle}`;
                
                let body = document.createElement('div');
                body.classList.add('card-body', 'pl-0', 'pr-0', 'pb-3', 'pt-3');
                
                let title = document.createElement('p');
                title.classList.add('card-title');
                title.innerHTML = entry._purchaseTitle;
                
                let author = document.createElement('p');
                author.classList.add('card-text');
                author.innerHTML = entry._purchaseAuthor;
                
                let format = document.createElement('p');
                format.classList.add('card-text');
                format.innerHTML = entry._purchaseFormat;
                
                let price = document.createElement('p');
                price.classList.add('card-text');
                price.innerHTML = `${entry._purchasePrice} €`;
    
                body.appendChild(title);
                body.appendChild(author);
                body.appendChild(format);
                body.appendChild(price);
                card.appendChild(img);
                card.appendChild(body);
                col.appendChild(card);
                purchases.appendChild(col);
            }
        }
    }

    /**
     * The following method renders the cascading dropdown selects
     * and the result(s) of said selects. The accepted parameter is
     * every book in the books.json file. 
     * 
     * The first select is for the (main) genre. Its choices are generated
     * by scanning every book and storing every unique mainGenre value.
     * 
     * The second select is for the subgenres. Its choices are generated
     * by scanning every book and storing every unique subGenre item granted that
     * the book being evaluated has the mainGenre value equivalent to that of the
     * previous select.
     * 
     * The final select is for the publication year. Its choices are generated
     * by scanning every book and storing every unique publication year (gotten via substring
     * of the publicationData value) granted that the book being evaluated has the mainGenre value
     * equivalent to that of the first select and at least one subgenre that is equal to the previous 
     * select's value.
     * */
    renderGenerateView(data) {
        let i;
        let j;
        let mainGenre = [];
        let subGenres = [];
        let relevantBooks;
        let index;
        for(i = 0; i < data.length; i++) {
            let entryMainGenre = data[i].genre[0].mainGenre;
            let entrySubGenres = data[i].genre[0].subGenre;
            if(!mainGenre.includes(entryMainGenre)) {
                mainGenre.push(entryMainGenre);
            }
            for(j = 0; j < entrySubGenres.length; j++) {
                let subGenre = entrySubGenres[j];
                if(!subGenres.includes(subGenre)) {
                    subGenres.push(subGenre);
                }
            }
        }
        console.log(mainGenre);
        console.log(subGenres);
        
        let selects = document.getElementById("selects");
        
        let mGInputGroup = document.createElement('div');
        mGInputGroup.classList.add('input-group', 'mb-3');
        let mGInputGroupPrepend = document.createElement('div');
        mGInputGroupPrepend.classList.add('input-group-prepend');
        let mGInputGroupText = document.createElement('label');
        mGInputGroupText.classList.add('input-group-text');
        mGInputGroupText.innerHTML = "Genre";
        mGInputGroupText.htmlFor = 'main-genre';
        let mGSelect = document.createElement('select');
        mGSelect.classList.add('input-group-text');
        mGSelect.id = 'main-genre';
        mGSelect.options.add(new Option("Choose a genre", "ng"));
        mGInputGroupPrepend.appendChild(mGInputGroupText);
        mGInputGroup.appendChild(mGInputGroupPrepend);
        mGInputGroup.appendChild(mGSelect);
        selects.appendChild(mGInputGroup);

        let sGInputGroup = document.createElement('div');
        sGInputGroup.classList.add('input-group', 'mb-3');
        let sGInputGroupPrepend = document.createElement('div');
        sGInputGroupPrepend.classList.add('input-group-prepend');
        let sGInputGroupText = document.createElement('label');
        sGInputGroupText.classList.add('input-group-text');
        sGInputGroupText.innerHTML = "Subgenre";
        sGInputGroupText.htmlFor = 'sub-genre';
        let sGSelect = document.createElement('select');
        sGSelect.classList.add('input-group-text');
        sGSelect.id = 'sub-genre';
        sGSelect.options.add(new Option("Choose a subgenre", "nsg"));
        sGInputGroupPrepend.appendChild(sGInputGroupText);
        sGInputGroup.appendChild(sGInputGroupPrepend);
        sGInputGroup.appendChild(sGSelect);
        selects.appendChild(sGInputGroup);

        let pYInputGroup = document.createElement('div');
        pYInputGroup.classList.add('input-group', 'mb-3');
        let pYInputGroupPrepend = document.createElement('div');
        pYInputGroupPrepend.classList.add('input-group-prepend');
        let pYInputGroupText = document.createElement('label');
        pYInputGroupText.classList.add('input-group-text');
        pYInputGroupText.innerHTML = "Publication year";
        pYInputGroupText.htmlFor = 'publication-year';
        let pYSelect = document.createElement('select');
        pYSelect.classList.add('input-group-text');
        pYSelect.id = 'publication-year';
        pYSelect.options.add(new Option("Choose a publication year", "npy"));
        pYInputGroupPrepend.appendChild(pYInputGroupText);
        pYInputGroup.appendChild(pYInputGroupPrepend);
        pYInputGroup.appendChild(pYSelect);
        selects.appendChild(pYInputGroup);

        for(i = 0; i < mainGenre.length; i++) {
            mGSelect.options.add(new Option(mainGenre[i], mainGenre[i]));
        }
        mGSelect.onchange = function() {
            if(this.selectedIndex < 1) {
                document.getElementById('result-book').src = 'assets/media/books/others/default.svg';
                document.getElementById('result-book-title').innerHTML = 'Book Title';
                document.getElementById('result-book-author').innerHTML = 'Book Author';
                document.getElementById('result-book-format').innerHTML = 'Book Format';
                document.getElementById('result-book-price').innerHTML = 'Book Price';
            }
            sGSelect.length = 1;
            relevantBooks = [];
            let relevantSubgenres = [];
            for(i = 0; i < data.length; i++) {
                let entry = data[i];
                if(entry.genre[0].mainGenre == this.value) {
                    relevantBooks.push(entry);
                    for(j = 0; j < entry.genre[0].subGenre.length; j++) {
                        let subGenre = entry.genre[0].subGenre[j];
                        if(!relevantSubgenres.includes(subGenre)) {
                            relevantSubgenres.push(subGenre);
                        }
                    }
                }
            }
            index = Math.floor(Math.random() * relevantBooks.length);
            document.getElementById('result-book').src = relevantBooks[index].cover;
            document.getElementById('result-book-title').innerHTML = relevantBooks[index].title;
            document.getElementById('result-book-author').innerHTML = relevantBooks[index].author;
            document.getElementById('result-book-format').innerHTML = relevantBooks[index].format;
            document.getElementById('result-book-price').innerHTML = `${relevantBooks[index].price} €`;    
            console.log(relevantBooks);
            for(i = 0; i < relevantSubgenres.length; i++) {
                sGSelect.options.add(new Option(relevantSubgenres[i], relevantSubgenres[i]));
            }
        }
        sGSelect.onchange = function() {
            if (this.selectedIndex < 1) {
                pYSelect.length = 1;
                return;
            }
            pYSelect.length = 1;
            relevantBooks = [];
            let relevantPublicationYears = [];
            for(i = 0; i < data.length; i++) {
                let entry = data[i];
                if(entry.genre[0].subGenre.includes(this.value) && entry.genre[0].mainGenre == mGSelect.value) {
                    relevantBooks.push(entry);
                    let publicationYear = entry.publicationDate.substring(0, 5);
                    if(!relevantPublicationYears.includes(publicationYear)) {
                        relevantPublicationYears.push(publicationYear);
                    }
                }
            }
            index = Math.floor(Math.random() * relevantBooks.length);
            document.getElementById('result-book').src = relevantBooks[index].cover;
            document.getElementById('result-book-title').innerHTML = relevantBooks[index].title;
            document.getElementById('result-book-author').innerHTML = relevantBooks[index].author;
            document.getElementById('result-book-format').innerHTML = relevantBooks[index].format;
            document.getElementById('result-book-price').innerHTML = `${relevantBooks[index].price} €`;              
            console.log(relevantBooks);
            for(i = 0; i < relevantPublicationYears.length; i++) {
                pYSelect.options.add(new Option(relevantPublicationYears[i], relevantPublicationYears[i]));
            }
        }
        pYSelect.onchange = function() {
            relevantBooks = [];
            for(i = 0; i < data.length; i++) {
                let entry = data[i];
                if(entry.publicationDate.substring(0, 5) == this.value && entry.genre[0].mainGenre == mGSelect.value && entry.genre[0].subGenre.includes(sGSelect.value)) {
                    relevantBooks.push(entry);
                }
            }
            index = Math.floor(Math.random() * relevantBooks.length);
            document.getElementById('result-book').src = relevantBooks[index].cover;
            document.getElementById('result-book-title').innerHTML = relevantBooks[index].title;
            document.getElementById('result-book-author').innerHTML = relevantBooks[index].author;
            document.getElementById('result-book-format').innerHTML = relevantBooks[index].format;
            document.getElementById('result-book-price').innerHTML = `${relevantBooks[index].price} €`;            
            console.log(relevantBooks);
        }
    }
}