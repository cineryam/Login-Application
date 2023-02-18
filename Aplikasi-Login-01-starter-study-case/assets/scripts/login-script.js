/*
 * NOTE:
 * Use goToHome() function to display home page
 * Use goToLogin() function to display login page
 * Use showPopUp() function to display error pop up
 */

/* Making variable for every view elements */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* Making variable to save email and password information */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Making click action to button */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // TODO 1 : Getting user's email and password input when the button is pressed.
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    /* TODO 2 : Making comparison Logic with condition:
       If the email variable is identic with expectedEmail and password is identic with expectedPassword, call goToHome() function.
       If not, then call showPopUp() function.
     */
    if (email == expectedEmail && password == expectedPassword){
      /* if the condition is right, the program will display home page */  
      goToHome();
    } else {
      /* if the condition is not right, the program will display information that the input is wrong */  
      showPopup();
    }
});
