/**
 * The 'Validator' utility class that evaluates user form input
 * by mostly checking whether fields are empty or whether input patterns
 * are followed (email and postal code)
 * -----[UTILIZED IN View.js]-----
 */

export class Validator {
   static validate(email, fullName, country, address, townCity, postalCode, check) {
      let ePattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let isEmailValid = ePattern.test(String(email.value).toLowerCase());

      if(email.value == "") {
         alert("Please provide email.");
         email.focus();
         return false;
      }  
      else if(isEmailValid == false) {
         alert("Please provide a valid email: Must have:\n    • A prefix with letters (a-z), numbers, underscores, periods, and dashes only.\n    • A domain with letters, numbers, and dashes only.\n    • A domain whose last portion must have at least 2 characters (.com, .org,. cc).");
         email.focus();
         return false;
      }
      if(fullName.value == "") {
         alert("Please provide name.");
         fullName.focus();
         return false;
      }
      if(country.value == "") {
         alert("Please provide country of residence." );
         country.focus() ;
         return false;
      }
      if(address.value == "") {
         alert("Please provide address of residence." );
         address.focus() ;
         return false;
      }
      if(townCity.value == "") {
         alert("Please provide town/city of residence.");
         townCity.focus();
         return false;
      }
      if(postalCode.value == "") {
         alert("Please provide postal code");
         postalCode.focus();
         return false;
      }
      else if(isNaN(postalCode.value) || postalCode.value.length < 3) {
         alert("Please provide a valid postal code: Must be a numberic code with at least 3 digits.");
         postalCode.focus();
         return false;
      }
      return true;
   }
}