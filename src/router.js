import { createRouter, createWebHistory } from "vue-router";

import RestaurantList from './pages/RestaurantList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/restaurants",
            name: "restaurants",
            component: RestaurantList,
        },
        // {
        //     path: "/event/:id",
        //     name: "event-detail",
        //     component: EventDetail,
        //     props: true,
        // },
    ],
});

export { router };