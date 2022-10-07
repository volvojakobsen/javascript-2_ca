import { load } from "./storage/index.mjs";

export function getUser() {
    const name = load("name");
    const email = load("email");
    const nameHolder = document.querySelector(".username");
    const emailHolder = document.querySelector(".email");
    nameHolder.innerHTML = name;
    emailHolder.innerHTML = email;
}