/*
 * NOTE:
 * Use goToHome() function to display home page
 * Use goToLogin() function to display login page
 * Use showPopUp() function to display error pop up
 */

/* Making variable to save email and password information */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // TODO 1 : Getting user's email and password input from form.
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    /* TODO 2 : Making comparison Logic with condition:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
    if (email == expectedEmail && password == expectedPassword){
      goToHome();
    } else {
      showPopup();
    }
});
