<script>
import { store } from "../store.js" //state management
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantSearch from "../components/RestaurantSearch.vue";

export default {
    name: "RestaurantList",
    components: {
        RestaurantCard,
        RestaurantSearch,

    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mb-3">Ristoranti:</h1>
            <RestaurantSearch />
            <p v-if="!store.restaurantList || !store.restaurantList.length">Non ci sono ristoranti</p>
            <RestaurantCard v-for="restaurant in store.restaurantList" :item="restaurant" />
        </div>
    </div>
</template>