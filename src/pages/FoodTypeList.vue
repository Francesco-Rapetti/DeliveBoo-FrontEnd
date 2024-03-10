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
            searchText: '',
            sortBy: 'none',
        };
    },
    methods: {
        searchType() {
            // Get all type names
            let names = document.getElementsByClassName('type-name');

            // Iterate through each type
            this.store.foodTypeList.forEach(type => {
                // If search text is empty reset visibility
                if (this.searchText == "") {
                    // Clean all type names and set visibility to true
                    Array.from(names).forEach(name => {
                        // Remove existing highlight tags
                        name.innerHTML = name.innerHTML.replace(/(<mark class="highlight">|<\/mark>)/gim, '');
                    })
                    // type.visible = true;
                }
                // If type name includes search text
                else if (type.name.toLowerCase().includes(this.searchText.toLowerCase())) {
                    // Create regex to match search text
                    const regex = new RegExp(this.searchText, 'gi');
                    // Iterate through each type name
                    Array.from(names).forEach(name => {
                        // console.log(name.innerHTML)
                        let text = name.innerHTML
                        // Remove existing highlight tags
                        text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');
                        // Replace search text with highlighted text
                        const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
                        name.innerHTML = newText;
                    })
                }
                // If type name does not include search text
                else {
                    // Set visibility to false
                    type.visible = false;
                }
            });
        },
        selectFoodType(foodType) {
            this.selectedFoodType = foodType.name;
            this.$router.push({ name: 'restaurants', query: { foodType: this.selectedFoodType } });
        },
    },
};
</script>

<template>
    <div class="mb-5">
        <div class="d-flex justify-content-center align-items-center w-100 flex-wrap">
            <div class="w-100">
                <div class="searchBox">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    <input class="" type="text" placeholder="Cerca una categoria" :value="searchText"
                        @input="searchText = $event.target.value, searchType()">
                </div>

                <hr class="dotted my-4">

                <p v-if="!store.foodTypeList || !store.foodTypeList.length">Non ci sono tipi di cibo</p>
            </div>
            <FoodTypeCard :class="{ 'invisible': !foodType.name.toLowerCase().includes(searchText.toLowerCase()) }"
                v-for="foodType in store.foodTypeList" :key="foodType.id" :item="foodType"
                @click="selectFoodType(foodType)" class="food-type-card m-3" />
        </div>
    </div>
</template>

<style scoped>
.btn-custom-white {
    border: 2px solid #9df2e9;
    padding: 0.5rem 2rem;
    border-radius: 32px;
    color: #003734;
}

.btn-custom-white:hover {
    box-shadow: 0px 2px 2px 0px rgba(133, 133, 133, 0.75) inset;
    background-color: #9df2e9;
    border: none;
}

.btn {
    transition: none;
}

.invisible {
    opacity: 0 !important;
    width: 0 !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
}

.food-type-card {
    cursor: pointer;
}

.searchBox {
    background-color: #9df2e9;
    color: #004350;
    width: 300px;
    border-radius: 32px;
    padding: 0.5rem 1rem;
    margin: 1rem;
    box-shadow: 0px 6px 10px 0px rgba(133, 133, 133, 0.5);
}

input[type="text"] {
    border-radius: 32px;
    padding: 0.5rem 1rem;
    border: 0;
    background-color: transparent;
    color: #004350;

}

input[type="text"]:focus {
    outline: none;
}

.dotted {
    border: 2px dashed #9df2e9;
}

@media screen and (max-width: 768px) {

    .card {
        width: 100% !important;
    }
}
</style>