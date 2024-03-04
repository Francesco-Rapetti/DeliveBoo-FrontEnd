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
        }
    }
}
</script>

<template>
    <header class="sidebar">
        <nav class="d-flex flex-column text-center align-items-center flex-shrink-0"> <!-- Aggiunto flex-grow-1 -->
            <div class="logo-container">
                <img src="/public/img/logo.svg" alt="Logo" class="logo">
                <p>Deliveboo</p>
            </div>
            <ul>
                <li v-for="(item, index) in menuItems" :key="index" class="py-3">
                    <router-link :to="{ name: item.routeName }" class="nav-link d-flex flex-column text-center">
                        <font-awesome-icon :icon="item.icon" />
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
        </nav>
        <a :href="backendUrl" target="_blank" class="btn btn-dark admin-btn">Vai a DeliveBoo<span
                class="fst-italic">Admin</span></a>
        <router-link to="/cart" class="btn btn-dark">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            Carrello
        </router-link>
    </header>
</template>

<style scoped lang="scss">
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 10%;
    height: 100vh;
    background-color: #006A64;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

nav ul li {
    margin: 15px 0;
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
}
</style>
