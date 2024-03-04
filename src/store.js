import { reactive } from 'vue'

export const store = reactive({
    urlAPI: "http://127.0.0.1:8000/api",
    apiRestaurantEndpoint: "/restaurants",
    restaurantList: []
});