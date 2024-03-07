<script>
import { store } from "../store.js"

export default {
    name: "Cart",
    components: {

    },
    data() {
        return {
            store,
            shippingCost: 2.00,
            commission: 3.99,

        }
    },
    methods: {

        saveCartToLocalStorage() {
            localStorage.cart = JSON.stringify(this.store.cart);
        },

        emptyCart() {
            this.store.cart = [];
            localStorage.cart = JSON.stringify(this.store.cart);

        },

        increaseQuantity(dish) {
            dish.quantity++;
            this.saveCartToLocalStorage();
        },

        decreaseQuantity(dish) {
            if (dish.quantity > 1) {
                dish.quantity--;
                this.saveCartToLocalStorage();
            } else if (dish.quantity === 1) {
                this.store.cart.splice(this.store.cart.indexOf(dish), 1);
            }

            this.saveCartToLocalStorage();
        },

        calculatePartialTotal() {
            let partialTotal = 0;
            for (const dish of this.store.cart) {
                partialTotal += dish.price * dish.quantity;
            }
            return partialTotal
        },

        calculateTotal() {
            let total = this.calculatePartialTotal() + this.shippingCost + this.commission;
            return total;
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
        <div class="row">
            <div class="col-md-8">
                <button class="btn btn-primary" v-if="store.cart && store.cart.length"
                    @click="emptyCart()">Svuota</button>
                <p v-if="!store.cart || !store.cart.length">Non ci sono elementi nel carrello</p>
                <p v-else>Il carrello contiene {{ store.cart.length }} elementi</p>

                <div v-for="dish in store.cart" :key="dish.id" class="product-card">
                    <img :src="dish.img" :alt="dish.name" class="product-image">
                    <div class="product-details">
                        <h3>{{ dish.name }}</h3>
                        <p>{{ dish.description }}</p>
                        <p>Prezzo: {{ dish.price }} $</p>
                    </div>
                    <div class="quantity-controls">
                        <button @click="decreaseQuantity(dish)" class="btn btn-sm btn-primary">-</button>
                        <div class="quantity">{{ dish.quantity }}</div>
                        <button @click="increaseQuantity(dish)" class="btn btn-sm btn-primary">+</button>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">Totale</h4>
                    </div>
                    <div class="panel-body">
                        <p v-if="store.cart && store.cart.length">
                            Totale Parziale: {{ calculatePartialTotal().toFixed(2) }} $
                        </p>
                        <p v-if="store.cart && store.cart.length">
                            Costo di Spedizione: {{ shippingCost }} $
                        </p>
                        <p v-if="store.cart && store.cart.length">
                            Commissioni: {{ commission }} $
                        </p>
                        <p v-if="store.cart && store.cart.length">
                            Totale: {{ calculateTotal().toFixed(2) }} $
                        </p>
                        <p v-else>Nessun elemento nel carrello</p>
                    </div>
                </div>
                <router-link class="btn btn-primary" :class="{ 'disabled': store.cart.length === 0 }"
                    :to="{ name: 'credentials' }">Procedi</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.product-card {
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
}

.product-image {
    width: 100px;
    height: 100px;
    margin-right: 10px;
}

.quantity-controls {
    display: flex;
    align-items: center;
}

.quantity {
    margin: 0 10px;
}
</style>
