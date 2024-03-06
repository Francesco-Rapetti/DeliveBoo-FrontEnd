<script>
import { store } from "../store.js" // state management

export default {
    name: "RestaurantMenu",
    props: ["id"],
    data() {
        return {
            store,
            showModal: false, // Variabile per mostrare/nascondere la finestra modale
            quantity: {}
        }
    },
    computed: {
        restaurantDishes() {
            return this.store.dishList.filter(dish => dish.restaurant_id === parseInt(this.$route.params.id));
        }
    },
    methods: {
        checkSameDishDifferentQuantity(dish) {
            return this.store.cart.some(item => item.id === dish.id);
        },

        persist() {
            localStorage.cart = JSON.stringify(this.store.cart);
        },
        addItemToCart(dish, quantity) {
            if (this.store.cart.length === 0 || this.store.cart.every(item => item.restaurant_id === dish.restaurant_id)) {
                if (!this.store.cart.some(item => item.id === dish.id)) {
                    dish.quantity = quantity;

                    this.store.cart.push(dish);

                } else {
                    this.store.cart.filter(item => item.id === dish.id)[0].quantity += dish.quantity;
                }
                this.persist();
            } else {
                // Mostra la finestra modale per chiedere all'utente se vuole cancellare i piatti nel carrello
                this.showModal = true;
            }
        },
        clearCartAndCloseModal() {
            this.store.cart = [];
            this.persist();
            this.showModal = false;
        },

        async getQuantity() {
            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            while (this.restaurantDishes.length < 1) {
                await delay(10);
            }
            this.store.dishList.filter(dish => dish.restaurant_id === parseInt(this.$route.params.id)).forEach(dish => {
                this.quantity[dish.id] = 1;
            })
        }
    },

    mounted() {
        this.getQuantity();
    }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mt-5 mb-3">Menu:</h1>
            <p v-if="restaurantDishes.length === 0">Nessun piatto trovato per questo ristorante.</p>
            <div class="col-3 my-3" v-else v-for="dish in restaurantDishes" :key="dish.id">
                <div class="card" style="width: 18rem;">
                    <img :src="dish.img" class="card-img-top" :alt="dish.name + ' image'">
                    <div class="card-body">
                        <h5 class="card-title">{{ dish.name }}</h5>
                        <p class="card-text">{{ dish.price }}€</p>
                        <a href="#" class="btn btn-primary" :class="{ 'disabled': quantity[dish.id] <= 0 }"
                            @click="addItemToCart(dish, quantity[dish.id])">Aggiungi</a>
                        <div>
                            <label for="quantity">Quantità:</label>
                            <input type="number" name="quantity" v-model="quantity[dish.id]" id="">

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Finestra modale per chiedere all'utente se vuole cancellare i piatti nel carrello -->
    <div class="modal" :class="{ 'is-active': showModal }">
        <div class="modal-background"></div>
        <div class="modal-card my-modal-bg">
            <header class="modal-card-head">
                <p class="modal-card-title fw-bold fs-3">Oh no!</p>
            </header>
            <section class="modal-card-body fs-4">
                <p>Hai già nel carrello piatti di un altro ristorante. Vuoi cancellarli?</p>
            </section>
            <footer class="modal-card-foot">
                <button class="btn btn-primary is-success me-3" @click="clearCartAndCloseModal">Sì</button>
                <button class="btn btn-info" @click="showModal = false">No</button>
            </footer>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal {
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal.is-active {
    display: flex;
}

.my-modal-bg {
    background-color: rgba(255, 255, 255, 1);
    padding: 1rem;
    border-radius: 1rem;
    color: black;
}
</style>