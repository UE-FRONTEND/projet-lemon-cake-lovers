import { createWebHistory, createRouter } from "vue-router";
import App from "@/App";
import Home from "@/Components/Home";
import Partie from "@/Components/Partie";
import Defeat from "@/Components/Defeat"
import Historique from "@/Components/Historique"

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
    },
    {
        path: "/Historique",
        name: "Historique",
        component: Historique,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
