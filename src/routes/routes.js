import { createWebHistory, createRouter } from "vue-router";

import MainPage from "@/views/MainPage.vue";
import DetailPage from "../views/DetailPage.vue"

var routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: DetailPage
    }
]

const history = createWebHistory();
const router = createRouter({
    routes,
    history
});

export default router;