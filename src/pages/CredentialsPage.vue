<script>
import { store } from "../store.js"
import axios from 'axios'
export default {
    name: "CredentialsPage",
    data() {
        return {
            store,
            errors: [],
            orderData: {
                client_name: 'Francesco',
                client_surname: 'Rapetti',
                client_address: 'owiehjfgowihnegoiwhegoihweogihweohgowiheg',
                client_phone: '23094870980192',
                client_mail: 'a@a.com',
                total: 0,
                status: "pending",
                restaurant_id: 0,
                dishes: []
            },
        }
    },
    methods: {
        getTotal() {
            this.store.cart.forEach(dish => {
                this.orderData.total += dish.price * dish.quantity
            })
        },

        getDishes() {
            this.store.cart.forEach(dish => {
                this.orderData.dishes.push(dish)
            })
        },


        async order() {
            this.getDishes();
            this.getTotal();
            this.orderData.restaurant_id = this.store.cart[0].restaurant_id;

            try {
                const response = await axios.post(this.store.urlAPI + '/orders', this.orderData);
                /* console.log(response.data.success); */
                if (response.data.success) {
                    const totalFormatted = this.orderData.total.toFixed(2);
                    localStorage.order = JSON.stringify({ ...response.data.payload, total: totalFormatted });
                    this.$router.push({ name: 'confirmed', props: response.data.payload });
                    console.log(response.data.payload);
                    this.store.cart = [];
                    localStorage.cart = JSON.stringify(this.store.cart);
                }
            } catch (error) {
                console.error(error);
                document.getElementById('errorMessage').classList.remove('d-none')
                this.errors = [];
                for (const [key, value] of Object.entries(error.response.data.errors)) {
                    this.errors.push(value);
                }
                console.log(this.errors)
            }

            this.orderData.dishes = []
            this.orderData.total = 0
        }
    }

}
</script>

<template>
    <div class="container">
        <h1>
            Inserisci le tue credenziali
        </h1>

        <div class="alert alert-danger d-none" role="alert" id="errorMessage">
            <div v-for="error in errors">{{ error[0] }}</div>
        </div>

        <form @submit.prevent="order" method="POST">
            <div class="mb-3">
                <label for="client_name" class="form-label">Nome</label>
                <input v-model="orderData.client_name" type="text" class="form-control" id="client_name">
            </div>

            <div class="mb-3">
                <label for="client_surname" class="form-label">Cognome</label>
                <input v-model="orderData.client_surname" type="text" class="form-control" id="client_surname">
            </div>

            <div class="mb-3">
                <label for="client_mail" class="form-label">Email</label>
                <input v-model="orderData.client_mail" type="text" class="form-control" id="client_mail">
            </div>

            <div class="mb-3">
                <label for="client_address" class="form-label">Indirizzo del cliente</label>
                <input v-model="orderData.client_address" type="text" class="form-control" id="client_address">
            </div>

            <div class="mb-3">
                <label for="client_phone" class="form-label">Telefono del cliente</label>
                <input v-model="orderData.client_phone" type="number" class="form-control" id="client_phone">
            </div>

            <button type="submit" class="btn btn-primary">Procedi con il pagamento</button>
        </form>

    </div>
</template>

<style></style>