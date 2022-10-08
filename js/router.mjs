
import * as listeners from "./handlers/index.mjs";


/**
 * switches listeners based on the users location path
 * @returns {function} what listener should be active
 * @example 
 * ```js
 * //the user is at location: "./login.html"
 * switch (path) {
 *     case `/login.html`:
 *          listeners.setLoginFormListener()
 *          return;
 * // the listeners.setLoginFormListener() function will now be active.
 * ```
 */
export default function router() {
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
        case `/deletePost.html`:
            listeners.setDeletePostListener()
            return;
        case `/posts.html`:
            listeners.displayPostsListener()
            return;
        case `/profile.html`:
            listeners.getUser()
            return;
    }


}
