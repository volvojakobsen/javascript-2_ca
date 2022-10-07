import * as listeners from "./handlers/index.mjs"


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




