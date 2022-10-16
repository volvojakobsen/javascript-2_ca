import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";
/**
 * sends the users input to the post API and fetching the result.
 * @param {string} postData from input fields in form.
 * @returns {Array} json response.
 */
export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action;

    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })


    return await response.json();
}