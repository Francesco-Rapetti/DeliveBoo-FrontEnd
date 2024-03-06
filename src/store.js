import { reactive } from 'vue'

export const store = reactive({
    urlAPI: "http://127.0.0.1:8000/api",
    apiRestaurantEndpoint: "/restaurants",
    apiFoodTypeEndpoint: "/types",
    apiDishesEndpoint: "/dishes",
    apiBraintreePayment: "/braintree/client-token",
    restaurantList: [],
    foodTypeList: [],
    urlBackend: "http://127.0.0.1:8000",
    dishList: [],
    cart: [],
    isDropinLoaded: false,
    clientToken: null,
    paymentProcessing: false,
    braintreeError: null,
});

