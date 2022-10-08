import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const string = "/?_author=true&_comments=true&reactions=true";
const form = document.querySelector("#searchInput");
let response = [];

export async function getPosts() {

    const getPostURL = `${API_SOCIAL_URL}${action}${string}`;

    const response = await authFetch(getPostURL)
    /*
    if (form.length >= 1) {
        form.addEventListener("keyup", (e) => {
            console.log(e.target.value);
            const searchString = e.target.value.toLowerCase();
            const filteredResponse = response.filter((post) => {
                return (
                    post.title.toLowerCase().includes(searchString) ||
                    post.body.toLowerCase().includes(searchString)
                );
            })
        })
    } return await filteredResponse;
    */


    return await response.json();
};

export async function getPost(id) {
    if (!id) {
        throw new Error("get requires a post id");
    }

    const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await authFetch(getPostURL)


    return await response.json();
};