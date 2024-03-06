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
            localStorage.cart = JSON.stringify(this.store.cart);

        },

    },
    mounted() {
        this.store.cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
        // localStorage.cart = [];
    },
}
</script>

<template>
    <div class="container">

        <h1>Carrello mooooolto provvisorio</h1>
        <button class="btn btn-primary" v-if="store.cart && store.cart.length" @click="emptyCart()">Svuota</button>
        <p v-if="!store.cart || !store.cart.length">Non ci sono elementi nel carrello</p>
        <p v-else>Il carrello contiene {{ store.cart.length }} elementi</p>
        <p v-for="dish in store.cart">{{ dish.name }}</p>

        <router-link class="btn btn-primary" :class="{ 'disabled': store.cart.length === 0 }"
            :to="{ name: 'credentials' }">Procedi</router-link>
    </div>
</template>

<style lang="scss"></style>