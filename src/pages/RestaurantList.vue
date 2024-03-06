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
            selectedFoodType: null, 
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
            this.selectedFoodType = null;
            this.$router.push({ name: 'restaurantList' });
        },
        toggleTypeFilter(type) {
            if (this.selectedFoodType === type.name) {
                this.selectedFoodType = null;
                this.$router.replace({ name: 'restaurants', query: {} });
            } else {
                const index = this.selectedTypes.indexOf(type.name);
                if (index !== -1) {
                    this.selectedTypes.splice(index, 1);
                } else {
                    this.selectedTypes.push(type.name);
                }
                this.typeClicked[type.name] = !this.typeClicked[type.name];
            }
        },
        getTypeClass(type) {
            const classes = [
                "badge",
                "rounded-pill",
                {
                    "text-bg-primary": (this.typeClicked[type.name] || this.selectedFoodType === type.name),
                    "text-bg-secondary": !(this.typeClicked[type.name] || this.selectedFoodType === type.name),
                },
            ];
            return classes;
        },
    },
    mounted() {
        this.selectedFoodType = this.$route.query.foodType || null;
    },

    watch: {
        '$route.query.foodType'(newFoodType) {
            this.selectedFoodType = newFoodType;
        },
    },
};
</script>

<template>

    <div class="container mt-5">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="btn btn-primary rounded-pill" href="#">A-Z</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="btn btn-primary rounded-pill" href="#">Newest</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-primary rounded-pill" href="#">Popular</a>
                        </li>
                    </ul>
                    <form class="searchBox" role="search">
                        <input type="text" class="searchInput" placeholder="Search" v-model="userInputSearch" />
                        <button class="searchButton" href="#">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        </button>
                    </form>
                </div>
            </div>
        </nav>

        <hr class="dotted">



        <div class="row">
            <div class="mt-3 mb-2">
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

.searchBox {
    background: #83d5cd;
    height: 60px;
    border-radius: 40px;
    padding: 10px;

}

input[placeholder] {
    color: #83d5cd;
}

.searchBox:hover {
    background: #004350;
    height: 60px;
    border-radius: 40px;
    padding: 10px;

}

.searchBox:hover>.searchInput {
    width: 240px;
    padding: 0 6px;
}

.searchBox:hover>.searchButton {
    background: #004350;
    color: #83d5cd;
    border-color: #83d5cd;
}

/* #83d5cd;
#004350  */

.searchButton {
    color: #004350;
    border-color: #004350;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #83d5cd;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
}

.searchInput {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;

}

.dotted {
    border: 1px dashed #83d5cd;
}

@media screen and (max-width: 620px) {
    .searchBox:hover>.searchInput {
        width: 150px;
        padding: 0 6px;
    }
}
</style>