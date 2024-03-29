import { reactive } from 'vue'

export const store = reactive({
    urlBackend: import.meta.env.VITE_BACKEND_URL,
    urlAPI: `${import.meta.env.VITE_BACKEND_URL}/api`,
    // urlBackend: "http://localhost:8000",
    // urlAPI: "http://localhost:8000/api",
    apiRestaurantEndpoint: "/restaurants",
    apiFoodTypeEndpoint: "/types",
    apiDishesEndpoint: "/dishes",
    apiBraintreePayment: "/payment",
    restaurantList: [],
    foodTypeList: [],
    dishList: [],
    cart: [],
    order: {},
    isDropinLoaded: false,
    clientToken: null,
    paymentProcessing: false,
    braintreeError: null,
    currentDish: null,
    currentRestaurant: null,
});
