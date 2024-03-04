<script>
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management
import AppHeader from './components/AppHeader.vue'

export default {
	components: {
		AppHeader
	},
	data() {
		return {
			store
		}
	},
	mounted() {

		this.getRestaurantList();
		this.getFoodTypeList();

		// axios.get(this.store.urlAPI + "/restaurants").then(risultato => {
		// 	console.log(risultato);
		// }).catch(errore => {
		// 	console.error(errore);
		// });
	},

	methods: {
		getRestaurantList() {
			let url = this.store.urlAPI + this.store.apiRestaurantEndpoint;

			axios
				.get(url)
				.then((result) => {
					if (result.status === 200 && result.data.success) {
						this.store.restaurantList = result.data.payload;
					} else {
						console.error("Qualcosa è andato storto...");
					}
				})
				.catch((error) => {
					console.error(error);
				});
		},
		getFoodTypeList() {
			let url = this.store.urlAPI + this.store.apiFoodTypeEndpoint;

			axios
				.get(url)
				.then((result) => {
					if (result.status === 200 && result.data.success) {
						this.store.foodTypeList = result.data.payload;
					} else {
						console.error("Qualcosa è andato storto...");
					}
				})
				.catch((error) => {
					console.error(error);
				});
		},
	}
}

</script>

<template>
	<header>
		<AppHeader />
	</header>
	<router-view></router-view>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue</style>