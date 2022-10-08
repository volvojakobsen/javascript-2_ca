import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";
/**
 * passes a id to the API as a delete request.
 * @param {number} id from post array
 * @returns json response
 */
export async function removePost(id) {
    if (!id) {
        throw new Error("Delete requires a post id");
    }


    const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await authFetch(updatePostURL, {
        method
    })


    return await response.json();
};