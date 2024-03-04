<script>
import { store } from "../store.js";
import { RouterView } from "vue-router";

export default {
    components: {
        RouterView
    },
    name: "AppHeader",
    data() {
        return {
            store,
            menuItems: [
                {
                    routeName: 'restaurants',
                    label: 'RestaurantList'
                },
            ]
        }
    },
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
                            <router-link :to="{ name: item.routeName }" class="nav-link">
                                {{ item.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main>

    </main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use '../styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue</style>