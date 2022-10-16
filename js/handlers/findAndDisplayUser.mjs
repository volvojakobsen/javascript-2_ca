import { load } from "./storage/index.mjs";
/**
 * gets users name and email from localstorage and fills it in in the html on profile page.
 */
export function getUser() {
    const name = load("name");
    const email = load("email");
    const nameHolder = document.querySelector(".username");
    const emailHolder = document.querySelector(".email");
    nameHolder.innerHTML = name;
    emailHolder.innerHTML = email;
}