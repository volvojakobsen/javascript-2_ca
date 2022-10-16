import * as postMethods from "../api/posts/index.mjs";


const postContainer = document.querySelector(".post");
/**
 * Takes an id from the querystring and fetches a single post with the id
 */
export async function displayPostListener() {
  try {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    const post = await postMethods.getPost(id);
    postContainer.innerHTML = `<div class="card mb-3 col-10">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${post.media}" class="img-fluid rounded-start" alt="profile-picture">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">${post.author.name}</h2>
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
              <p class="card-text"><small class="text-muted">Last updated ${post.updated}. id: ${post.id}</small></p>
              <div class="row">
        </div>
      </div>`;
  } catch (error) {
    postContainer.innerHTML = `<h1 class="text-center">Post not found.</h1><h1 class="text-center">The ID does not exist.</h1>`;

  }

};