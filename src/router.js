import { createRouter, createWebHistory } from "vue-router";

import RestaurantList from './pages/RestaurantList.vue';
import Cart from './pages/Cart.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/restaurants",
            name: "restaurants",
            component: RestaurantList,
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart
        }
        // {
        //     path: "/event/:id",
        //     name: "event-detail",
        //     component: EventDetail,
        //     props: true,
        // },
    ],
});

export { router };