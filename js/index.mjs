import router from "./router.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";


router();


async function test() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector(".displayPosts");
    templates.renderPostTemplates(posts, container);
}

test();