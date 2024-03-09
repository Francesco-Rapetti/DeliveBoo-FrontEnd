<script>
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management
import SideBarComponent from "./components/SideBarComponent.vue";

export default {
	components: {
		SideBarComponent,
	},
	data() {
		return {
			store,
			title: '',
			currentPage: '',
		}
	},
	mounted() {
		this.getRestaurantList();
		this.getDishesList();
		this.getFoodTypeList();
	},
	watch: {
		$route(to, from) {
			this.persist();
			this.setTitle(to.name);
			if (to.path === '/') {

			} else {
				this.titleScrollEffect();
				this.setTitle(to.name);
			}
			document.getElementById('content').scrollTop = 0
		}
	},

	methods: {
		persist() {
			this.store.cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
		},


		titleScrollEffect() {
			const content = document.getElementById('content');
			const title = document.getElementById('page-title');
			content.addEventListener('scroll', () => {
				if (title) {

					title.style.top = content.scrollTop / 1.7 + 'px';
					if (content.scrollTop > 170) {
						title.style.zIndex = -1;
					} else {
						title.style.zIndex = 1;
					}
				}
			})
		},

		async setTitle(route) {
			const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

			while (this.store.restaurantList.length < 1) {
				await delay(10);
			}

			const text = document.getElementById('page-title');
			// console.log(route);
			if (route && text) {
				switch (route) {
					case 'home':
						text.innerHTML = 'Home';
						break;
					case 'restaurants':
						text.innerHTML = 'Ristoranti';
						break;
					case 'types':
						text.innerHTML = 'Categorie';
						break;
					case 'user':
						text.innerHTML = 'Il mio profilo';
						break;
					case 'settings':
						text.innerHTML = 'Impostazioni';
						break;
					case 'restaurant-menu':
						text.innerHTML = this.store.restaurantList[this.$route.params.id - 1].name;
						break;
					case 'cart':
						text.innerHTML = 'Carrello';
					default:
						break;
				}
			}
		},

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

		getDishesList() {
			let url = this.store.urlAPI + this.store.apiDishesEndpoint;

			axios.get(url).then((risultato) => {
				if (risultato.status === 200 && risultato.data.success) {
					this.store.dishList = risultato.data.payload;
				} else {
					console.error("Qualcosa è andato storto...");
				}
			})
				.catch((errore) => {
					console.error(errore);
				})
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
	},
}

</script>

<template>
	<div>
		<SideBarComponent />
		<main id="main-content">


			<div id="content-container" class="overflow-hidden">
				<div id="content" class=" blue" data-simplebar>
					<div :class="{ 'd-none': $route.name === 'home' }" id="page-title-container" class="bg-dark-blue">
						<div class="container">
							<h1 id="page-title" class="text-end mb-0 text-light-blue py-5"></h1>
						</div>
					</div>
					<div id="page-content">
						<div :class="{ 'd-none': $route.name === 'home' }" class="wave-container">
							<svg data-name="Layer 1" viewBox="0 0 1200 120" transform="rotate(180)" class="wave blue"
								preserveAspectRatio="none">
								<path id="wave-last"
									d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
									opacity=".25" class="shape-fill position-relative" fill="#FFFFFF" fill-opacity="1">
								</path>
								<path id="wave-middle"
									d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
									opacity=".5" class="shape-fill position-relative" fill="#FFFFFF" fill-opacity="1">
								</path>
								<path id="wave-first"
									d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
									class="shape-fill position-relative" fill="#FFFFFF" fill-opacity="1"></path>
							</svg>
						</div>
						<router-view>
						</router-view>
					</div>
				</div>
			</div>
		</main>

	</div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
