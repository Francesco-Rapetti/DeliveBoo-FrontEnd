<script>
import { store } from "../store.js" //state management
import RestaurantCard from "../components/RestaurantCard.vue";

export default {
    name: "RestaurantList",
    components: {
        RestaurantCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container ">
        <div class="row">
            <h1 class="mt-5 mb-3">Restaurants</h1>
            <p v-if="!store.restaurantList || !store.restaurantList.length">Non ci sono ristoranti</p>
            <RestaurantCard v-for="restaurant in store.restaurantList" :item="restaurant" />
        </div>
    </div>
</template>

<style>
h1 {
    text-align: right;
}
</style>