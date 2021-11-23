import { createWebHistory, createRouter } from "vue-router";
import App from "@/App";
import Home from "@/Components/Home";
import Partie from "./Components/Partie";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home, /* <--- Change it */
    },
    {
        path: "/Partie",
        name: "Partie",
        component: Partie,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
