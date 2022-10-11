import * as storage from "./storage/index.mjs";
import { load } from "./storage/index.mjs";

const loginButton = document.querySelector("#login-nav");

export function isUserLoggedIn() {
    if (storage.load("token")) {
        console.log("there is a token");
        loginButton.innerHTML = "LOGOUT";
        loginButton.addEventListener("click", (e) => {
            localStorage.clear();
        })

    }
    else {
        console.log("no token");
        if (location.href === "http://127.0.0.1:5500/login.html") {
            console.log("login page");
        }
        else {
            console.log("not login page");
            location.href = "./login.html";
        }
    }
}