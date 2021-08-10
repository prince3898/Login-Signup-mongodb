function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");


    //Setting error message
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);

}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');
    const changePasswordForm = document.querySelector('#changePassword');


    // Redirecting from one form to another

    document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    document.querySelector("#linkChangePassword").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        changePasswordForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin2").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        changePasswordForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        //Perform AJAX/fetch login

        setFormMessage(loginForm, "error", "Invalid Username or Password  ");
    });

     changePasswordForm.addEventListener("submit", (e) => {
        e.preventDefault();

        //Perform AJAX/fetch login

        setFormMessage(changePasswordForm, "error", "Invalid Username or Please select Password  ");
    });


    // Checking for Username length

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", (e) => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 character in length");
            }     
        });
        inputElement.addEventListener("input", (e) => {
            clearInputError(inputElement);
        });
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", (e) => {
            if (e.target.id === "signupUsername2" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 character in length");
            }     
        });
        inputElement.addEventListener("input", (e) => {
            clearInputError(inputElement);
        });
    });
});