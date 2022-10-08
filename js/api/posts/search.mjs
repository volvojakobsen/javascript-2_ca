
export function search(event) {
    event.preventDefault();

    const searchString = document.getElementById("searchInput").value;

    const searchResult = fetchedPosts.filter(
        (post) =>
            post.title.includes(searchString) ||
            post.body.includes(searchString) ||
            post.author.name.includes(searchString)
    );
    postsContainer.innerHTML = "";

    displayPosts(searchResult);
}






/*

export function linearSearch(list, value) {
    for (let i = 0; i < list.length; i += 1) {
        if (list[i] === value) {
            return i;
        }
    }
    return -1;
}
*/