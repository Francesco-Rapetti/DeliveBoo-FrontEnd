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

        emptyCart() {
            this.store.cart = [];
            this.persist();
        },
        persist() {
            localStorage.cart = JSON.stringify(this.store.cart);
        }
    },
    mounted() {
        this.store.cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
        // localStorage.cart = [];
    },
}
</script>

<template>
    <div class="container">

        <h1>Carrello</h1>
        <button class="btn btn-primary" @click="emptyCart()">Svuota</button>
        <p v-if="!store.cart || !store.cart.length">Non ci sono elementi nel carrello</p>
        <p v-else>Il carrello contiene {{ store.cart.length }} elementi</p>
        <p v-for="dish in store.cart">{{ dish.name }}</p>

    </div>
</template>

<style lang="scss"></style>