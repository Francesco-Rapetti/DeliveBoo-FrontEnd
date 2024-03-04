<script>
export default {
    name: "RestaurantCard",
    props: ["item"]
}
</script>

<template>
    <div class="col-md-4 gy-4">
        <div class="card h-100">
            <div class="card-header"><img :src="item.img" class="w-100"></div>
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">Indirizzo: <b>{{ item.address }}</b>
                </p>
                <p class="card-text">{{ item.description }}</p>
                <span v-for="(type, index) in item.types" :key="index" class="badge rounded-pill text-bg-primary">{{ type.name }}</span>
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