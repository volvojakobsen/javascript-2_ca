import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";




const path = location.pathname;

if (path === `/login.html`) {
    setLoginFormListener()
}
else if (path === `/register.html`) {
    setRegisterFormListener();
}

