/*
import { getPosts } from "../api/posts/read.mjs";
import { linearSearch } from "../api/posts/search.mjs";

export function setSearchPostListener() {
    const form = document.querySelector("#searchForm");

    if (form) {
        const list = getPosts();



        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            linearSearch(list, post);
        })
    }
}
*/