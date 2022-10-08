import { load } from "../handlers/storage/index.mjs"
/**
 * gets JWT token from local storage 
 * @returns object. headers for fetch requests with updated JWT token.
 */
export function headers() {
    const token = load("token");

    return {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`
    }
}
/**
 * a fetch request
 * @param {string} url for fetch
 * @param {object} options for fetch request
 * @returns a fetch request
 */
export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    })
}