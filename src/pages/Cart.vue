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

        removeFromCart(dish) {
            const index = this.store.cart.findIndex(item => item.id === dish.id);
            if (index !== -1) {
                this.store.cart.splice(index, 1);
                this.saveCartToLocalStorage();
            }
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
        <div class="row">
            <div class="col-md-8  mt-4">
                <p v-if="!store.cart || !store.cart.length">Non ci sono elementi nel carrello</p>
                <div v-for="dish in store.cart" :key="dish.id" class="card my-card mb-3 rounded-4">
                    <div class="row g-0 h-100">
                        <div class="col h-100">
                            <div class="my-img-container h-100">
                                <img :src="dish.img" :alt="dish.name" class="img-fluid rounded-start-4 h-100">
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="card-body d-flex justify-content-between">
                                <div>
                                    <h5 class="card-title mb-2 mt-0"><strong>{{ dish.name }}</strong></h5>
                                    <p class="card-text my-2"><strong>$ {{ dish.price }} / {{ dish.quantity }}</strong>
                                    </p>
                                    <div class="d-flex quantity-controls">
                                        <button @click="decreaseQuantity(dish)">
                                            <font-awesome-icon icon="fa-solid fa-minus" class="me-2" />
                                        </button>
                                        <div class="quantity">{{ dish.quantity }}</div>
                                        <button @click="increaseQuantity(dish)">
                                            <font-awesome-icon icon="fa-solid fa-plus" class="ms-2" />
                                        </button>
                                    </div>
                                </div>
                                <button class="my-trash-button" v-if="store.cart && store.cart.length"
                                    @click="removeFromCart(dish)">
                                    <font-awesome-icon icon="fas fa-trash-can" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div class="col-md-4 mt-4">
                <div class="card my-panel mb-3 rounded-4">
                    <div class="card-body">
                        <h4 class="card-title mb-4"><strong>Totale ordine</strong></h4>
                        <p class="mb-2 d-flex justify-content-between" v-if="store.cart && store.cart.length">
                            <span>Totale Parziale </span>
                            <span>${{ calculatePartialTotal().toFixed(2) }}</span>
                        </p>
                        <p class="mb-2 d-flex justify-content-between" v-if="store.cart && store.cart.length">
                            <span>Costo di Spedizione</span>
                            <span>${{ shippingCost }}.00</span>
                        </p>
                        <p class="mb-2 d-flex justify-content-between" v-if="store.cart && store.cart.length">
                            <span>Commissioni</span>
                            <span>${{ commission }}</span>
                        </p>
                        <p class="mb-2 d-flex justify-content-between" v-if="store.cart && store.cart.length">
                            <span><strong>Totale</strong></span>
                            <span><strong>${{ calculateTotal().toFixed(2) }}</strong></span>
                        </p>
                        <p v-else>Nessun elemento nel carrello</p>
                    </div>
                    <div class="my-checkout d-flex justify-content-center">
                        <router-link class="btn my-checkout-btn mb-3" :class="{ 'disabled': store.cart.length === 0 }"
                            :to="{ name: 'credentials' }">
                            Check Out <font-awesome-icon icon="fa-solid fa-arrow-right pl-2" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.my-card {
    height: 150px;
    background-color: #83D5CD;
    border: none;
    box-shadow: 5px 5px 6px 0px grey;
}

.my-panel {
    background-color: #83D5CD;
    border: none;
    box-shadow: 5px 5px 6px 0px grey;
}

.my-img-container img {
    min-width: 100%;
    min-height: 100%;
}

button {
    background-color: transparent;
    border: 0;
}

.my-btn {
    background-color: #004350;
    color: #83D5CD;
}


.my-checkout-btn {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #004350;
    color: #83D5CD;
}

.my-btn:hover {
    background-color: #004350;
    border-color: #004350;
    color: #83D5CD;
}

.my-trash-button {
    color: #004350;
}

.quantity-controls {
    padding: 6px 12px;
    background-color: #004350;
    border-radius: 32px;
    color: #83D5CD;
    width: 86.78px;
    justify-content: space-between;
}

.quantity-controls button {
    color: #83D5CD;
}
</style>
