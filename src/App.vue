<script>
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management
import SideBarComponent from './components/SideBarComponent.vue'

export default {
	components: {
		SideBarComponent
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
	<div>
		<SideBarComponent />
		<router-view>
		</router-view>
	</div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

<style scoped lang="scss"></style>
