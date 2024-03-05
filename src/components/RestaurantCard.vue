<script>
export default {
    name: "RestaurantCard",
    props: ["item"]
}
</script>

<template>
    <div class="col-md-4 gy-4">
        <div class="card h-100">
            <div class="card-header "><img :src="item.img" class="img-cover"></div>
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">Indirizzo: <b>{{ item.address }}</b>
                </p>
                <!-- <p class="card-text">{{ item.description }}</p> -->
                <span v-for="(type, index) in item.types" :key="index"
                    class="badge rounded-pill text-bg-primary p-3 mx-2 text-type">{{
                type.name }}</span>
            </div>

            <!-- <div class="card-footer text-center">
                <router-link :to="{ name: 'event-detail', params: { id: item.id } }" class="btn btn-primary">
                    <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                    <span>Details</span>
                </router-link>
            </div> -->
        </div>
    </div>
</template>

<style>
.card-header {
    height: 300px;

}

.img-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
}

.text-type {
    font-size: 1.1rem;
}
</style>