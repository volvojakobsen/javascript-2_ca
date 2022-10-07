import { getPost, updatePost } from "../api/posts/index.mjs";


export async function setUpdatePostListener() {
    const form = document.querySelector("#updatePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const post = await getPost(id);

        form.title.value = post.title;
        form.body.value = post.body;
        form.id.value = post.id;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            post.id = id;
            updatePost(post);
        })
    }


}