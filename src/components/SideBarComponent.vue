<script>
import { store } from "../store.js";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faUtensils, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

export default {
    components: {
        FontAwesomeIcon
    },
    name: "SideBarComponent",
    data() {
        return {
            store,
            menuItems: [
                {
                    routeName: 'home',
                    label: 'Home',
                    icon: faHome
                },
                {
                    routeName: 'restaurants',
                    label: 'Restaurants',
                    icon: faUtensils
                },
                {
                    routeName: 'types',
                    label: 'Food types',
                    icon: faUtensils,
                },
                {
                    routeName: 'user',
                    label: 'My profile',
                    icon: faUser
                },
                {
                    routeName: 'settings',
                    label: 'Settings',
                    icon: faCog
                },
            ]
        }
    },
    computed: {
        backendUrl() {
            return this.store.urlBackend;
        },
        cartQuantity() {
            return this.store.cart.length; // Calcoliamo la lunghezza dell'array del carrello
        }
    }
}
</script>

<template>
    <header class="sidebar ">
        <nav class="d-flex flex-column text-center align-items-center flex-shrink-0"> <!-- Aggiunto flex-grow-1 -->
            <div class="logo-container">
                <img src="/public/img/logo.svg" alt="Logo" class="logo">
                <p class="pt-3">Deliveboo</p>
            </div>
            <div class="d-flex align-items-center ">
                <ul>
                    <li v-for="(item, index) in menuItems" :key="index" class="py-3">
                        <router-link :to="{ name: item.routeName }"
                            class="text-link-responsive nav-link d-flex flex-column text-center">
                            <font-awesome-icon :icon="item.icon" class="icon-size py-3" />
                            <span class="hide-text-responsive">
                                {{ item.label }}
                            </span>

                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="d-flex flex-column">
            <router-link to="/cart" class="btn btn-responsive-custom btn-dark my-3">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                Carrello <span v-if="cartQuantity > 0">({{ cartQuantity }})</span>
            </router-link>
            <a :href="backendUrl" target="_blank" class="btn btn-responsive-custom btn-dark admin-btn">Vai a
                DeliveBoo<span class="fst-italic">Admin</span></a>
        </div>
    </header>
</template>

<style scoped lang="scss">
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 8%;
    height: 100vh;
    background-color: #006A64;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

nav ul li a {
    text-decoration: none;
    color: #9DF2E9;

}

nav ul li a:hover {
    background-color: #00504B;
}

.logo-container {
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 3rem;

}

.icon-size {
    font-size: 3rem;
}

@media (max-width: 2200px) {
    .btn-responsive-custom {
        font-size: 12px;
        padding: 0.5rem 0.3rem;
    }

    .text-link-responsive {
        font-size: 14px;
        padding-top: 8px;
    }
}

@media (max-width: 1600px) {
    .btn-responsive-custom {
        font-size: 10px;
        padding: 0.5rem 0.3rem;
    }

    .hide-text-responsive {
        display: none;
    }
}

@media (max-width: 1350px) {
    .btn-responsive-custom {
        font-size: 12px;
        padding: 0.3rem;
    }

    .hide-text-responsive {
        display: none;
    }
}

@media (max-width: 1290px) {
    .btn-responsive-custom {
        font-size: 10px;
        padding: 0.3rem;
    }

    .hide-text-responsive {
        display: none;
    }
}

@media (max-height: 1080px) {
    .icon-size {
        font-size: 1rem;
    }
}
</style>
