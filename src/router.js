import { createWebHistory, createRouter } from "vue-router";
import Home from "@/Components/Home";
import Partie from "@/Components/Partie";
import Defeat from "@/Components/Defeat"
import Historique from "@/Components/Historique"
import Victory from "./Components/Victory";

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
    {
        path:"/Victory",
        name: "Victory",
        component: Victory,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
