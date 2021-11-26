import { createWebHistory, createRouter } from "vue-router";
import App from "@/App";
import Home from "@/Components/Home";
import Partie from "@/Components/Partie";
import Defeat from "@/Components/Defeat"

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
    },
    {
        path: "/Defeat",
        name: "Defeat",
        component: Defeat,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
