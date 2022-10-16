const form = document.querySelector("#searchByID");
/**
 * takes id input from user and redirects the user on submit event. the id is passed in the querystring of the new location
 */
export function idForm() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        location.href = `./post.html?id=${form.idInput.value}`;
    })
}

