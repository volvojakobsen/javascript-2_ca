import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "put";
/**
 * sends the user-input from update-post form to API as a put request.
 * @param {string} postData from input fields in form.
 * @returns json response.
 */
export async function updatePost(postData) {
    if (!postData.id) {
        throw new Error("Update requires a post id");
    }


    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

    const response = await authFetch(updatePostURL, {
        method,
        body: JSON.stringify(postData)
    })


    return await response.json();
};