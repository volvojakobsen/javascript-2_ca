import * as listeners from "./handlers/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";


export default function ruter() {
    const path = location.pathname;

    switch (path) {
        case `/login.html`:
            listeners.setLoginFormListener()
            return;
        case `/register.html`:
            listeners.setRegisterFormListener()
            return;
        case `/createPost.html`:
            listeners.setCreatePostFormListener()
            return;
        case `/updatePost.html`:
            listeners.setUpdatePostListener()
            return;
    }


}

async function test() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector(".displayPosts");
    templates.renderPostTemplates(posts, container);
}




