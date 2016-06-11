if (window.attachEvent) {window.attachEvent('onload', load);}
else if (window.addEventListener) {window.addEventListener('load', load, false);}
else {document.addEventListener('load', load, false);}
function load() {
            // FUNCTIONS
    function showSignInForm(e) {
        signInForm.className = "visible";
    }

    function showSignUpOverlay(e) {
        signUpDropDown.className = "visible";
    }

    function hideSignUpOverlay(e) {
        signUpDropDown.className = "hidden";
    }

    function checkLogin(e) {
        window.location = "app.html";
    }

            // VARIABLES
    // The sign in tab in the nav bar
    var signInTab = document.getElementById("signIn");
    // The sign in form
    var signInForm = document.getElementById("signInOverlay")
    // The log in button on the sign in form
    var logInButton = document.getElementById("logInButton");
    // The sign up tab in the nav bar.
    var signUpTab = document.getElementById("signUp");
    // The drop down in the sign up tab
    var signUpDropDown = document.getElementById("signUpDropDown");

            // EVENT LISTENERS
    signInTab.addEventListener("click", showSignInForm, false);
    logInButton.addEventListener("click", checkLogin, false);
    signUpTab.addEventListener("mouseenter", showSignUpOverlay, false);
    signUpTab.addEventListener("mouseleave", hideSignUpOverlay, false);
}