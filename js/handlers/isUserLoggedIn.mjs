import * as storage from "./storage/index.mjs";
import { load } from "./storage/index.mjs";

const loginButton = document.querySelector("#login-nav");

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