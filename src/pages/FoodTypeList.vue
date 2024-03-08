<script>
import { store } from "../store.js"; // state management
import FoodTypeCard from "../components/FoodTypeCard.vue";

export default {
    name: "FoodTypeList",
    components: {
        FoodTypeCard,
    },
    data() {
        return {
            store,
            selectedFoodType: null,
        };
    },
    methods: {
        selectFoodType(foodType) {
            this.selectedFoodType = foodType.name;
            this.$router.push({ name: 'restaurants', query: { foodType: this.selectedFoodType } });
        },

    },
};
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mt-5 mb-3">Tipi di cibo:</h1>
            <p v-if="!store.foodTypeList || !store.foodTypeList.length">Non ci sono tipi di cibo</p>

            <div class="row">
                <FoodTypeCard v-for="foodType in store.foodTypeList" :key="foodType.id" :item="foodType"
                    @click="selectFoodType(foodType)" class="col-md-4 mb-3 food-type-card" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.food-type-card {
    cursor: pointer;
}
</style>