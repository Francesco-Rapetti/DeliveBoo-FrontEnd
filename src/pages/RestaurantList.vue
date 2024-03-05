<script>
import { store } from "../store.js"; // state management
import RestaurantCard from "../components/RestaurantCard.vue";

export default {
    name: "RestaurantList",
    components: {
        RestaurantCard,
    },
    data() {
        return {
            store,
            userInputSearch: "",
            selectedTypes: [],
            typeClicked: {},
            selectedFoodType: null, // Aggiunto stato per la tipologia selezionata
        };
    },
    computed: {
        filteredRestaurants() {
            let filtered = [...this.store.restaurantList];

            if (this.userInputSearch) {
                filtered = filtered.filter((restaurant) =>
                    restaurant.name.toLowerCase().includes(this.userInputSearch.toLowerCase())
                );
            }

            // Filtra per tipologia
            if (this.selectedTypes.length > 0) {
                filtered = filtered.filter((restaurant) =>
                    this.selectedTypes.every((selectedType) =>
                        restaurant.types.some((type) => type.name === selectedType)
                    )
                );
            }

            // Aggiunto filtro per la tipologia selezionata tramite query del router
            if (this.selectedFoodType) {
                filtered = filtered.filter((restaurant) =>
                    restaurant.types.some((type) => type.name === this.selectedFoodType)
                );
            }

            return filtered;
        },
    },
    methods: {
        clearSearch() {
            this.userInputSearch = "";
            this.selectedTypes = [];
            this.typeClicked = {};
            this.selectedFoodType = null; // Aggiunto reset della tipologia selezionata
            // Utilizza il router per rimuovere il parametro di query
            this.$router.push({ name: 'restaurantList' });
        },
        toggleTypeFilter(type) {
            const index = this.selectedTypes.indexOf(type.name);
            if (index !== -1) {
                this.selectedTypes.splice(index, 1);
            } else {
                this.selectedTypes.push(type.name);
            }

            this.typeClicked[type.name] = !this.typeClicked[type.name];
        },
        getTypeClass(type) {
            return [
                "badge",
                "rounded-pill",
                { "text-bg-secondary": !this.typeClicked[type.name] },
                { "text-bg-primary": this.typeClicked[type.name] },
            ];
        },
    },
    // Utilizza mounted per inizializzare lo stato con il parametro di query
    mounted() {
        this.selectedFoodType = this.$route.query.foodType || null;
    },
    // Aggiunto watch per gestire cambiamenti nel parametro di query
    watch: {
        '$route.query.foodType'(newFoodType) {
            this.selectedFoodType = newFoodType;
        },
    },
};
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mt-5 mb-3">Ristoranti:</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Cerca per tipologia" v-model="userInputSearch" />
                <button class="btn btn-outline-secondary" @click="clearSearch">Cancella</button>
            </div>
            <div class="mb-2">
                <span v-for="(type, index) in store.foodTypeList" :key="index" :class="getTypeClass(type)"
                    @click="toggleTypeFilter(type)" :id="'type' + type.id">
                    {{ type.name }}
                </span>
            </div>
            <p v-if="!store.restaurantList || !store.restaurantList.length">Non ci sono ristoranti</p>
            <RestaurantCard v-for="restaurant in filteredRestaurants" :key="restaurant.id" :item="restaurant" />
        </div>
    </div>
</template>

<style scoped>
.badge {
    cursor: pointer;
}
</style>