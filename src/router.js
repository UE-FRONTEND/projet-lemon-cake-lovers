import { createWebHistory, createRouter } from "vue-router";
import App from "@/App";
import Home from "@/Components/Home"
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home, /* <--- Change it */
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
