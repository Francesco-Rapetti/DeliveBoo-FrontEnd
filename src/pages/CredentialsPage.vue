<script>
import { store } from "../store.js"
import axios from 'axios'
export default {
    name: "CredentialsPage",
    data() {
        return {
            store,
            errors: [],
            objectErrors: {},
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
                document.getElementById('errorMessage').classList.remove('d-none')
                this.objectErrors = {};
                this.errors = [];
                for (const [key, value] of Object.entries(error.response.data.errors)) {
                    this.errors.push(value);
                }
                this.objectErrors = error.response.data.errors;
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
            <ul>
                <li v-for="error in errors">{{ error[0] }}</li>
            </ul>
        </div>

        <form @submit.prevent="order" method="POST" class="needs-validation">
            <div class="mb-3">
                <label for="client_name" class="form-label">Nome</label>
                <input v-model="orderData.client_name" type="text" class="form-control"
                    :class="{ 'is-invalid': objectErrors.client_name }" id="client_name">
                <div v-if="objectErrors.client_name" class="text-danger error">{{ objectErrors.client_name[0] }}</div>
            </div>

            <div class="mb-3">
                <label for="client_surname" class="form-label">Cognome</label>
                <input v-model="orderData.client_surname" type="text" class="form-control" id="client_surname" :class="{ 'is-invalid': objectErrors.client_surname }">
                <div v-if="objectErrors.client_surname" class="text-danger error">{{ objectErrors.client_surname[0] }}
                </div>
            </div>

            <div class="mb-3">
                <label for="client_mail" class="form-label">Email</label>
                <input v-model="orderData.client_mail" type="text" class="form-control"
                    :class="{ 'is-invalid': objectErrors.client_mail }" id="client_mail">
                <div v-if="objectErrors.client_mail" class="text-danger error">{{ objectErrors.client_mail[0] }}</div>
            </div>

            <div class="mb-3">
                <label for="client_address" class="form-label">Indirizzo del cliente</label>
                <input v-model="orderData.client_address" type="text" class="form-control" id="client_address" :class="{ 'is-invalid': objectErrors.client_address }">
                <div v-if="objectErrors.client_address" class="text-danger error">{{ objectErrors.client_address[0] }}</div>
            </div>

            <div class="mb-3">
                <label for="client_phone" class="form-label">Telefono del cliente</label>
                <input v-model="orderData.client_phone" type="number" class="form-control" id="client_phone" :class="{ 'is-invalid': objectErrors.client_phone }">
                <div v-if="objectErrors.client_phone" class="text-danger error">{{ objectErrors.client_phone[0] }}</div>
            </div>

            <button type="submit" class="btn btn-primary">Procedi con il pagamento</button>
        </form>

    </div>
</template>

<style scoped>
.error {
    font-size: 12px;
}
</style>