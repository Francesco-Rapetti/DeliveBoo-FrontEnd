<script>
import { store } from "../store.js"

export default {
    name: "Cart",
    components: {

    },
    data() {
        return {
            store,
        }
    },
    methods: {
        persist() {
            localStorage.cart = JSON.stringify(this.store.cart);
            // console.log(localStorage.cart);
        },

        addItemToCart(dish) {
            this.store.cart.push(dish);
            this.persist();
        },

        emptyCart() {
            this.store.cart = [];
        }
    },
    mounted() {
        this.store.cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
        // localStorage.cart = [];
    },
}
</script>

<template>
    <h1>Carrello</h1>
    <button class="btn btn-primary" @click="emptyCart()">Svuota</button>
    <p v-if="!store.cart || !store.cart.length">Non ci sono elementi nel carrello</p>
    <p v-else>Il carrello contiene {{ store.cart.length }} elementi</p>
    <p v-for="dish in store.cart">{{ dish.name }}</p>

    <div class="container">
        <div class="row">
            <div class="col-3" v-for="dish in store.dishList">
                <div class="card" style="width: 18rem;">
                    <img :src="dish.img" class="card-img-top" :alt="dish.name + ' image'">
                    <div class="card-body">
                        <h5 class="card-title">{{ dish.name }}</h5>
                        <p class="card-text">{{ dish.price }}</p>
                        <a href="#" class="btn btn-primary" @click="addItemToCart(dish)">Aggiungi</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>