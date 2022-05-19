const headingTitle = document.querySelector(".heading__title");
const form = document.querySelector("#form");
const registerUsername = document.querySelector("#username-input");
const registerEmail = document.querySelector("#email-input");
const registerButton = document.querySelector("#submit-button");

let validEmail = false;

headingTitle.innerText = "Welcome to Nology Conference 2022!";

const onRegisterButtonClicked = (event) => {
    if (registerUsername.value.length > 0) {
        if (validEmail) {
            alert("submitted");
        } else {
            alert("invalid email");
        };
    } else {
        alert("no username input");
    };
};
const onRegisterUsernameChanged = (event) => {
    console.log(event.target.value);
    if (event.target.value.length > 0) {
        event.target.classList.add("valid");
        event.target.classList.remove("invalid");
    } else {
        event.target.classList.remove("valid");
        event.target.classList.add("invalid");
    }
}
const onRegisterEmailChanged = (event) => {
    console.log(event.target.value);
    let emailCheckAt = event.target.value.split("@");
    if (emailCheckAt.length == 2) {
        let emailCheckDot = emailCheckAt[1].split(".");
        if (emailCheckDot.length > 1) {
            validEmail = true
            event.target.classList.add("valid");
            event.target.classList.remove("invalid");
        } else {
            validEmail = false
            event.target.classList.remove("valid");
            event.target.classList.add("invalid");
        };
    } else {
        validEmail = false
        event.target.classList.remove("valid");
        event.target.classList.add("invalid");
    }; 
    console.log(validEmail);

}

registerButton.addEventListener("click", onRegisterButtonClicked);
registerUsername.addEventListener("input", onRegisterUsernameChanged);
registerEmail.addEventListener("input", onRegisterEmailChanged);
form.addEventListener("submit", onRegisterButtonClicked);