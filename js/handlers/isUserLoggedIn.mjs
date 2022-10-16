import * as storage from "./storage/index.mjs";


const loginButton = document.querySelector("#login-nav");
/**
 * checks if the user is logged in, if not it will redirect to the login page.
 */
export function isUserLoggedIn() {
    if (storage.load("token")) {
        loginButton.innerHTML = "LOGOUT";
        loginButton.addEventListener("click", (e) => {
            localStorage.clear();
        })

    }
    else {
        console.log("no token");
        if (location.href === "http://127.0.0.1:5500/login.html") {

        }
        else {
            alert("You are not logged in!");
            location.href = "./login.html";
        }
    }
}