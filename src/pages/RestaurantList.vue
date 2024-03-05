<script>
import { store } from "../store.js" // state management
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

            return filtered;
        },
    },
    methods: {
        clearSearch() {
            this.userInputSearch = "";
            this.selectedTypes = [];
            this.typeClicked = {};
        },
        toggleTypeFilter(type) {

            const index = this.selectedTypes.indexOf(type.name);
            if (index !== -1) {
                this.selectedTypes.splice(index, 1);
            } else {
                this.selectedTypes.push(type.name);
            }

            this.typeClicked[type.name] = !this.typeClicked[type.name];
            console.log(this.typeClicked);
        },
        getTypeClass(type) {
            return [
                'badge',
                'rounded-pill',
                { 'text-bg-secondary': !this.typeClicked[type.name] },
                { 'text-bg-primary': this.typeClicked[type.name] },
            ];
        },
    },
};
</script>

<template>

    <h1 class="mt-5 mb-3 ">Ristoranti:</h1>
    <div class="bg-restaurants-list">
        <div class="row">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Cerca per tipologia" v-model="userInputSearch" />
                <button class="btn btn-outline-secondary" @click="clearSearch">Cancella</button>
            </div>
            <div class="mb-2">
                <span v-for="(type, index) in store.foodTypeList" :key="index" :class="getTypeClass(type)"
                    class="fs-6 type-tags  mt-2" @click="toggleTypeFilter(type)" :id="'type' + type.id">
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

.type-tags {
    padding: 0.7rem;
    margin: 0 0.2rem;
}

.bg-restaurants-list {
    padding: 1rem;
    overflow-y: auto;
    padding-left: 10%;
    padding-right: 2%;

}
</style>