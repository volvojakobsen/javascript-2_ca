import { createPost } from "../api/posts/index.mjs";

/**
 * passes user input values from post form to a fetch function, and redirects user to posts page.
 */
export function setCreatePostFormListener() {
    const form = document.querySelector("#createPost");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            createPost(post);
            alert("your post has been created.");
            location.href = `/posts.html`;
        })
    }


}