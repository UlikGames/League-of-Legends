var username_registered = "username";
var password_registered = "password";
var input_username = document.querySelectorAll(".login-input")[0];
var input_password = document.querySelectorAll(".login-input")[1];
var login_button = document.querySelectorAll(".login-button")[0];

function spin() {
    document.querySelector(".login-form").innerHTML += `<div class="spin"><div heigth="40" weight="40" class="spinner-border" role="status"></div></div>`;
    setTimeout(() => {
        document.querySelector(".spin").style.visibility = "hidden";
    }, 1500);
}

function login() {
    let username = String(document.querySelectorAll(".login-input")[0].value);
    let password = String(document.querySelectorAll(".login-input")[1].value);
    console.log(password);

    spin();

    if ( password === password_registered && username === username_registered) {
        setTimeout(() => {
            location.href = "/league-of-legends/loading/";
        }, 1500);
    } else {
        let span_username = document.querySelectorAll(".login-span")[0];
        let span_password = document.querySelectorAll(".login-span")[1];
        let input_username = document.querySelectorAll(".login-input")[0];

        span_username.style.color = "#c813d8";
        input_username.style.border = "2px solid #E7C0E8";
        input_username.style.backgroundColor = "#F3E2F4";

        let input_password = document.querySelectorAll(".login-input")[1];

        span_password.style.color = "#c813d8";
        input_password.style.border = "2px solid #E7C0E8";
        input_password.style.backgroundColor = "#F3E2F4";

        document.querySelector(".login-form").innerHTML += `<span class=error-message>Your login credentials don't match an account in our system.</span>`;
    }
}

window.addEventListener("keydown", () => {
    if (input_username.value !== "" && input_password.value !== "") {
        login_button.style.backgroundColor = "#c73033";
    }
    if (input_username.value == "" && input_password.value == "") {
        login_button.style.backgroundColor = "#fff";
    }
});


