import * as postMethods from "../api/posts/index.mjs";
import { load } from "../handlers/storage/index.mjs";

let limit = 20;

const sortBTN = document.querySelector("#sortBTN");
console.log(sortBTN);
/**
 * displays posts from result from another fetch function, if the user enters search in search field it will display the search result from the json response.
 */
export async function displayPostsListener() {
  let posts = await postMethods.getPosts();
  const container = document.getElementById("posts");

  let filteredPosts = [];

  sortBTN.addEventListener("click", (e) => {
    e.preventDefault();
    filteredPosts = posts.sort((a, b) => {
      return new Date(a.updated) - new Date(b.updated)
    });

    function printFilteredPosts() {
      container.innerHTML = "";
      for (let i = 0; i < filteredPosts.length; i++) {
        if (i === limit) {
          break;
        }
        if (filteredPosts[i].author.name === load("name")) {
          container.innerHTML += `<div class="card mb-3 col-10">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${filteredPosts[i].media}" class="img-fluid rounded-start" alt="profile-picture">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${filteredPosts[i].author.name}</h2>
            <h5 class="card-title">${filteredPosts[i].title}</h5>
            <p class="card-text">${filteredPosts[i].body}</p>
            <p class="card-text"><small class="text-muted">Last updated ${filteredPosts[i].updated}. id: ${filteredPosts[i].id}</small></p>
            <div class="row"><a href="deletePost.html?id=${filteredPosts[i].id}"><button class="col-2 delete-button"><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
            <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
          </svg>Delete</p></button></a><a href="updatePost.html?id=${filteredPosts[i].id}"><button type="button" class="btn btn-primary col-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
        </svg>Edit</button></a>
      </div>
    </div>`
        }
        else {
          container.innerHTML += `<div class="card mb-3 col-10">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${filteredPosts[i].media}" class="img-fluid rounded-start" alt="profile-picture">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${filteredPosts[i].author.name}</h2>
            <h5 class="card-title">${filteredPosts[i].title}</h5>
            <p class="card-text">${filteredPosts[i].body}</p>
            <p class="card-text"><small class="text-muted">Last updated ${filteredPosts[i].updated}. id: ${filteredPosts[i].id}</small></p>
            <div class="row">
      </div>
    </div>`
        }

      }
    }
    printFilteredPosts();



  })


  console.log(filteredPosts);


  const searchForm = document.querySelector("#searchForm");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchString = document.getElementById("searchInput").value.toLowerCase();

    const searchResult = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchString) ||
        post.body.toLowerCase().includes(searchString) ||
        post.author.name.toLowerCase().includes(searchString)

    );



    container.innerHTML = "";
    for (let i = 0; i < searchResult.length; i++) {
      if (i === limit) {
        break;
      }
      if (searchResult[i].author.name === load("name")) {
        container.innerHTML += `<div class="card mb-3 col-10">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${searchResult[i].media}" class="img-fluid rounded-start" alt="profile-picture">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${searchResult[i].author.name}</h2>
            <h5 class="card-title">${searchResult[i].title}</h5>
            <p class="card-text">${searchResult[i].body}</p>
            <p class="card-text"><small class="text-muted">Last updated ${searchResult[i].updated}. id: ${searchResult[i].id}</small></p>
            <div class="row"><a href="deletePost.html?id=${searchResult[i].id}"><button class="col-2 delete-button"><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
            <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
          </svg>Delete</p></button></a><a href="updatePost.html?id=${searchResult[i].id}"><button type="button" class="btn btn-primary col-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
        </svg>Edit</button></a>
      </div>
    </div>`
      }
      else {
        container.innerHTML += `<div class="card mb-3 col-10">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${searchResult[i].media}" class="img-fluid rounded-start" alt="profile-picture">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${searchResult[i].author.name}</h2>
            <h5 class="card-title">${searchResult[i].title}</h5>
            <p class="card-text">${searchResult[i].body}</p>
            <p class="card-text"><small class="text-muted">Last updated ${searchResult[i].updated}. id: ${searchResult[i].id}</small></p>
            <div class="row">
      </div>
    </div>`
      }
    }


  })


  function printPosts() {
    container.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
      if (i === limit) {
        break;
      }
      if (posts[i].author.name === load("name")) {
        container.innerHTML += `<div class="card mb-3 col-10">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${posts[i].media}" class="img-fluid rounded-start" alt="profile-picture">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">${posts[i].author.name}</h2>
          <h5 class="card-title">${posts[i].title}</h5>
          <p class="card-text">${posts[i].body}</p>
          <p class="card-text"><small class="text-muted">Last updated ${posts[i].updated}. id: ${posts[i].id}</small></p>
          <div class="row"><a href="deletePost.html?id=${posts[i].id}"><button class="col-2 delete-button"><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
          <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
        </svg>Delete</p></button></a><a href="updatePost.html?id=${posts[i].id}"><button type="button" class="btn btn-primary col-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
      </svg>Edit</button></a>
    </div>
  </div>`
      }
      else {
        container.innerHTML += `<div class="card mb-3 col-10">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${posts[i].media}" class="img-fluid rounded-start" alt="profile-picture">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">${posts[i].author.name}</h2>
          <h5 class="card-title">${posts[i].title}</h5>
          <p class="card-text">${posts[i].body}</p>
          <p class="card-text"><small class="text-muted">Last updated ${posts[i].updated}. id: ${posts[i].id}</small></p>
          <div class="row">
    </div>
  </div>`
      }

    }
  }
  printPosts();



  /**
   * raises the limit for the amount of posts displayed, and loads in more results.
   */
  const loadMore = document.querySelector("#loadMore");
  loadMore.addEventListener("click", (e) => {
    e.preventDefault();

    limit += 20;

    displayPostsListener();
  })

}



