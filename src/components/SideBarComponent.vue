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
        <nav>
            <div class="logo-container ">
                <img src="/public/img/logo.svg" alt="Logo" class="logo ">
                <p>Deliveboo</p>
            </div>
            <ul>
                <li v-for="(item, index) in menuItems" :key="index" class="py-5">
                    <router-link :to="{ name: item.routeName }" class="nav-link d-flex flex-column text-center">
                        <font-awesome-icon :icon="item.icon" />
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
        </nav>
        <a :href="backendUrl" target="_blank" class="btn btn-dark admin-btn">Vai a DeliveBoo<span
                class="fst-italic fs-6">Admin</span></a>
    </header>
</template>

<style scoped lang="scss">
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 5%;
    height: 100vh;
    background-color: #006A64;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    margin: 15% 0;
}

nav ul li a {
    text-decoration: none;
    color: #9DF2E9;
}

nav ul li a:hover {
    background-color: #00504B;

}


.logo-container {
    padding-top: 10%;
    text-align: center;
    width: 100%;

}
</style>
