import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const string = "/?_author=true&_comments=true&reactions=true";
const form = document.querySelector("#searchInput");
let response = [];

export async function getPosts() {

    const getPostURL = `${API_SOCIAL_URL}${action}${string}`;

    const response = await authFetch(getPostURL)


    return await response.json();
};
/**
 * 
 * @param {number} id post id from array
 * @returns json response
 */
export async function getPost(id) {
    if (!id) {
        throw new Error("get requires a post id");
    }

    const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await authFetch(getPostURL)


    return await response.json();
};