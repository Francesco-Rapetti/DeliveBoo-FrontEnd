<script>
import { store } from "../store.js"
export default {
    name: "RestaurantCard",
    props: ["item"],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col-md-4 gy-4">
        <div class="card glass h-100">
            <div class="card-img-container" type="button" data-bs-toggle="modal" data-bs-target="#dishInfo">
                <img :src="item.img.substring(0, 4) === 'http' ? item.img : store.urlBackend + '/storage/' + item.img"
                    class="card-img-top" alt="Restaurant Image">
            </div>
            <div class="card-body d-flex flex-column justify-content-between align-items-center">
                <div class="w-100">
                    <h5 class="card-title text-center">{{ item.name }}</h5>
                </div>
                <div class="d-flex justify-content-around align-items-center w-100">
                    <p class="card-text m-0">
                        Indirizzo: <b>{{ item.address }}</b>
                    </p>
                </div>
                <div class="text-center mt-3">
                    <span v-for="(item, index) in item.types" :key="index"
                        class="badge rounded-pill bg-primary text-light p-1 mx-1">
                        <img :src="'../src/assets/' + item.img + '.svg'" class="svg-pill">
                    </span>
                </div>
                <router-link :to="{ name: 'restaurant-menu', params: { id: item.id } }" class="btn btn-primary mt-3">
                    <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                    <span>Menu</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 32px;
    background-color: #9df2e9;
    color: #006a64;
    border: 0;
    box-shadow: 0px 6px 10px 0px rgba(133, 133, 133, 0.5);
}

.card-title {
    font-weight: 900;
}

.card-img-container {
    cursor: pointer;
    border-radius: 32px 32px 0 0;
    overflow: hidden;
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
}

.svg-pill {
    width: 4rem;
}
</style>