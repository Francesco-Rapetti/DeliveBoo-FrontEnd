<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './style.css';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectFade, Autoplay],
        };
    },

    methods: {
        getImagePath(image) {
            return new URL(`../assets/${image}`, import.meta.url).href
        }
    }
};
</script>

<template>
    <div id="home-page">

        <div class="jumbo">

            <swiper autoplay="false" :autoplay="{
                delay: 3000,
                disableOnInteraction: true,
            }" :style="{ height: '100%' }" :spaceBetween="30" :effect="'fade'" :navigation="false" :pagination="{
                clickable: true,
            }" :modules="modules" class="mySwiper">
                <!-- <swiper-slide>
                    <img class="img-fluid h-100" :src="getImagePath('jumbotron1.png')" />
                    <div class="swiper-content h-100">
                        <div class="container h-100">
                            <div class="row align-items-center h-100 justify-content-center">
                                <div id="jumbotron1-title-container"
                                    class="glass d-flex align-items-center justify-content-center flex-column">
                                    <div id="jumbo-logo">

                                        <img class="image-fluid w-100" src="../assets/logo.svg" alt="">
                                    </div>
                                    <h1 id="jumbotron1-title" class="text-center">DeliveBoo</h1>
                                    <h1 class="text-center">La tua città a domicilio!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide> -->
                <swiper-slide>
                    <img class="img-fluid h-100" :src="getImagePath('jumbotron3.png')" />
                    <div class="swiper-content h-100">
                        <div class="container h-100">
                            <div class="row align-items-center h-100 justify-content-center">
                                <div id="jumbotron1-title-container"
                                    class="glass d-flex align-items-center justify-content-center flex-column">
                                    <h1 id="jumbotron1-title" class="text-center">DeliveBoo</h1>
                                    <h1 class="text-center">La tua città a domicilio!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    <div class="swiper-content">
                        <div class="container">
                            <h1>DeliveBoo</h1>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    <div class="swiper-content">
                        <div class="container">
                            <h1>DeliveBoo</h1>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <div id="jumbo-spacer"></div>

        <div class="wave-container w-100">
            <svg data-name="Layer 1" viewBox="0 0 1200 120" transform="rotate(180)" class="wave blue transparent"
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
        <section>
            <div class="container">

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit iure suscipit modi omnis dolore
                    eligendi perferendis ratione cumque. Hic autem, distinctio quo vitae eius inventore et dolore harum
                    consequatur!
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
#jumbotron1-title {
    font-size: 10rem;
    font-weight: 900;
}

#jumbotron1-title-container {
    width: 800px;
    height: 800px;
    border-radius: 50% !important;
    /* background: rgba(255, 255, 255, 0);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); */
}

#jumbo-logo {
    max-width: 100px !important;
    max-height: 100px !important;
}

.jumbo {
    /* position: relative; */
    position: fixed;
    z-index: -1;
    bottom: 1rem;
    top: 1rem;
    /* margin + scrollbar */
    right: calc(1rem + 10px);
    left: 8.5rem;
    border-radius: 16px 0 0 16px;
    overflow: hidden;
}

#jumbo-spacer {
    height: calc(100vh - 8rem);
}



.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
}

.swiper-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
</style>