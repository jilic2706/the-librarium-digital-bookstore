/*
 *  This controller is in charge of 
 *  the Light Mode/Dark Mode functionality
 *  of the website.
 */

export class ModeController {
    constructor(view) {
        this.view = view;

        this.view.mode.onclick = this.change.bind(this);
    }

    /**
     * The following few methods should - in theory - streamline the
     * element modification process. The ...ByTag and ...ByClass prove particularly useful
     * due to the need for array iteration.
     */
    modifyPropertyByTag(tagName, property, propertyValue) {
        let elements = document.getElementsByTagName(tagName);
        let i;
        for(i = 0; i < elements.length; i++) {
            elements[i].style[property] = propertyValue;
        }
    }
    modifyPropertyByClass(className, property, propertyValue) {
        let elements = document.getElementsByClassName(className);
        let i;
        for(i = 0; i < elements.length; i++) {
            elements[i].style[property] = propertyValue;
        }
    }
    modifyPropertyById(id, property, propertyValue) {
        let element = document.getElementById(id);
        element.style[property] = propertyValue;
    }

    modifyClassListByTag(tagName, classAdd, classRemove) {
        let elements = document.getElementsByTagName(tagName);
        let i;
        for(i = 0; i < elements.length; i++) {
            elements[i].classList.add(classAdd);
            elements[i].classList.remove(classRemove);
        }
    }
    modifyClassListById(id, classAdd, classRemove) {
        let element = document.getElementById(id);
        element.classList.add(classAdd);
        element.classList.add(classRemove);
    }

    changeIconMode(id, iconMode) {
        document.getElementById(id).src = `assets/media/icons/${iconMode}.svg`;
    }
    
    change() {
        /*
         *  The website's logo (situated in the top-left corner of the site at all times)
         *  will serve as an indicator of whether the site is currently in 'light' or 
         *  'dark' mode.
         */
        let indicator = document.getElementById('mode-indicator');
        
        /*
         * The following two blocks of code will be carried out based on the logo's description ('alt' property).
         * The logo image and description will 'invert' at the end of the blocks so that subsequent switches may be possible later.
         */
        if(indicator.alt === "Light Logo") {
            this.modifyPropertyByTag("BODY", "color", "rgba(255, 255, 255, 0.75)");
            this.modifyPropertyByTag('SECTION', 'background-color', 'rgb(0, 0, 0)');
            this.modifyClassListByTag('BUTTON', 'btn-light', 'btn-dark');
            this.modifyPropertyByTag('HR', 'border-top', '1px solid rgba(255, 255, 255, 0.5)');
            this.modifyPropertyByClass('overlay-text', 'color', 'rgba(255, 255, 255, 0.75)');
            this.modifyPropertyByClass('navbar-toggler', 'border-color', 'rgba(255,255,255,0.5)');
            this.modifyPropertyByClass('navbar', 'background-color', 'rgba(0, 0, 0, 0.5)');
            this.modifyPropertyByClass('nav-link', 'color', 'rgba(255,255,255,0.5)');
            this.modifyPropertyByClass('modal-header', 'background-color', 'rgba(0,0,0,0.75)');
            this.modifyPropertyByClass('modal-body', 'background-color', 'rgba(0,0,0,0.75)');
            this.modifyPropertyByClass('modal-footer', 'background-color', 'rgba(0,0,0,0.75)');
            this.modifyPropertyById('hero-section', 'background-image', "linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgb(0, 0, 0, 1)), url('assets/media/backgrounds/heroImage.jpg')");
            this.modifyPropertyById('hero-text', 'color', 'rgba(255, 255, 255, 0.65)');
            this.modifyPropertyById('about-section', 'background-image', "radial-gradient(circle, rgba(0, 0, 0, 0.75), rgb(0, 0, 0, 1)), url('assets/media/backgrounds/2ndImage.jpg')");
            this.modifyPropertyById('purchase-section', 'background-image', "radial-gradient(circle, rgba(0, 0, 0, 0.75), rgb(0, 0, 0, 1)), url('assets/media/backgrounds/3rdImage.jpg')");
            this.modifyPropertyById('catalogue-section', 'background-image', "radial-gradient(circle, rgba(0, 0, 0, 0.75), rgb(0, 0, 0, 1)), url('assets/media/backgrounds/4thImage.jpg')");
            this.changeIconMode('globe-icon', 'globe');
            this.changeIconMode('purchase-icon', 'purchase');
            this.changeIconMode('catalogue-icon', 'catalogue');
            this.changeIconMode('generate-icon', 'generate');
            indicator.src = "assets/media/logo/logo-dark.svg";
            indicator.alt = "Dark Logo";
        }
        
        else if(indicator.alt === "Dark Logo") {
            this.modifyPropertyByTag("BODY", "color", "rgba(0, 0, 0, 0.75)");
            this.modifyPropertyByTag('SECTION', 'background-color', 'rgba(255, 255, 255, 0.5)');
            this.modifyPropertyByTag('HR', 'border-top', '1px solid rgba(0, 0, 0, 0.5)');
            this.modifyClassListByTag('BUTTON', 'btn-dark', 'btn-light');
            this.modifyPropertyByClass('overlay-text', 'color', 'rgba(0, 0, 0, 0.75)');
            this.modifyPropertyByClass('navbar-toggler', 'border-color', 'rgba(0,0,0,0.5)');
            this.modifyPropertyByClass('navbar', 'background-color', 'rgba(255, 255, 255, 0.5)');
            this.modifyPropertyByClass('nav-link', 'color', 'rgba(0,0,0,0.75)');
            this.modifyPropertyByClass('modal-header', 'background-color', 'rgb(255,255,255,0.25)');
            this.modifyPropertyByClass('modal-body', 'background-color', 'rgb(255,255,255,0.25)');
            this.modifyPropertyByClass('modal-footer', 'background-color', 'rgb(255,255,255,0.25)');
            this.modifyPropertyById('hero-section', 'background-image', "linear-gradient(to bottom, rgba(255, 255, 255, 0.75), rgb(255, 255, 255, 1)), url('assets/media/backgrounds/heroImage.jpg')");
            this.modifyPropertyById('hero-text', 'color', 'rgba(0, 0, 0, 0.65)');
            this.modifyPropertyById('about-section', 'background-image', "radial-gradient(circle, rgba(255, 255, 255, 0.75), rgb(255, 255, 255, 1)), url('assets/media/backgrounds/2ndImage-light.jpg')");
            this.modifyPropertyById('purchase-section', 'background-image', "radial-gradient(circle, rgba(255, 255, 255, 0.75), rgb(255, 255, 255, 1)), url('assets/media/backgrounds/3rdImage-light.jpg')");
            this.modifyPropertyById('catalogue-section', 'background-image', "radial-gradient(circle, rgba(255, 255, 255, 0.75), rgb(255, 255, 255, 1)), url('assets/media/backgrounds/4thImage-light.jpg')");
            this.changeIconMode('globe-icon', 'globe-dark');
            this.changeIconMode('purchase-icon', 'purchase-dark');
            this.changeIconMode('catalogue-icon', 'catalogue-dark');
            this.changeIconMode('generate-icon', 'generate-dark');
            indicator.src = "assets/media/logo/logo-light.svg";
            indicator.alt = "Light Logo";
        }
    }
}