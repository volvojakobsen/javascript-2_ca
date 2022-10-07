
import * as listeners from "./handlers/index.mjs";



export default function router() {
    const path = location.pathname;
    console.log(path);

    switch (path) {
        case `/login.html`:
            listeners.setLoginFormListener()
            console.log(`login`)
            return;
        case `/register.html`:
            listeners.setRegisterFormListener()
            console.log(`register`)
            return;
        case `/createPost.html`:
            listeners.setCreatePostFormListener()
            console.log(`create`)
            return;
        case `/updatePost.html`:
            listeners.setUpdatePostListener()
            console.log(`update`)
            return;
        case `/deletePost.html`:
            listeners.setDeletePostListener()
            console.log(`delete`)
            return;
        case `/posts.html`:
            listeners.displayPostsListener()
            //listeners.setSearchPostListener()
            console.log(`posts`)
            return;
        case `/profile.html`:
            listeners.getUser()
            console.log(`profile`)
            return;
    }


}
