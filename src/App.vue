<script>
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	data() {
		return {
			store
		}
	},
	mounted() {
		axios.get(this.store.urlAPI + "/restaurants").then(risultato => {
			console.log(risultato);
		}).catch(errore => {
			console.error(errore);
		});
	},
}
</script>

<template></template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
</style>