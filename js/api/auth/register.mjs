import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../handlers/storage/index.mjs"

const action = "/auth/register";
const method = "post";

export async function register(profile) {
    const registerURL = API_SOCIAL_URL + action;

    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
    })

    const result = await response.json();
    storage.save("password", result.password);
    alert("You are now registered");
    return result;
}