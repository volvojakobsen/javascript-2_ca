const form = document.querySelector("#searchByID");

export function idForm() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        location.href = `./post.html?id=${form.idInput.value}`
    })
}

