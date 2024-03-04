<script>
import { store } from "../store.js" //state management
import FoodTypeCard from "../components/FoodTypeCard.vue";

export default {
    name: "FoodTypeList",
    components: {
        FoodTypeCard
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
            <h1 class="mt-5 mb-3">Tipi di cibo:</h1>
            <p v-if="!store.foodTypeList || !store.foodTypeList.length">Non ci Tipi di cibo</p>
            <FoodTypeCard v-for="foodType in store.foodTypeList" :item="foodType" />
        </div>
    </div>
</template>