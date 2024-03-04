<script>
export default {
    name: "RestaurantSearch",
    props: ["item"]
}
</script>

<template>
    <div class="input-group mb-3">
        <!-- <input type="text" class="form-control" placeholder="Cerca per tipologia" v-model="userInputSearch"
            @input="filterRestaurants" />
        <button class="btn btn-outline-secondary" @click="clearSearch">Cancella</button> -->
    </div>
    <div class="mb-2">
        <!-- <span v-for="(type, index) in item.types" :key="index" class="badge rounded-pill text-bg-primary">{{ type.name }}</span> -->
    </div>
</template>
