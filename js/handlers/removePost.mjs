import { getPost, removePost } from "../api/posts/index.mjs";


export async function setDeletePostListener() {
    const form = document.querySelector("#deletePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const post = await getPost(id);

        let params = (new URL(document.location)).searchParams;
        let name = params.get("id");
        let cleanID = name.replaceAll("'", "");

        console.log(cleanID);

        form.id.value = cleanID;


        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            post.id = id;
            removePost(cleanID);
            console.log(id);
        })
    }


}