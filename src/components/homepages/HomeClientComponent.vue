<template>
    <div class="homepage-head-title container-fluid text-center" style="max-width: none; margin-top: 162px;">
        <h5>Clients</h5>
        <h2>Amazing clients who trust us</h2>
        <div class="carousel-wrapper">
            <Carousel
                :autoplay="4000"
                :breakpoints="breakpoints"
                :wrapAround="true"
                ref="carousel"
            >
                <Slide v-for="(slide, index) in carouselCompanyImages" :key="index">
                    <div class="carousel__item">
                        <img :src="slide" :alt="`Image ${index + 1}`" class="pr-2" />
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
            <div class="custom-navigation">
                <img src="../../assets/svg/Chevron-right.svg" @click="nextSlide">
            </div>
        </div>

    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

import GoogleSlide from "@/assets/images/Google_logo.png"
import YoutubeSlide from "@/assets/images/Logo_of_YouTube.png"
import TwitterSlide from "@/assets/images/Twitter-Logo.png"
import MsSlide from "@/assets/images/Microsoft_logo.png"

export default defineComponent({
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    methods: {
        nextSlide() {
            this.$refs.carousel.next();
        },
    },
    data() {
        return {
            breakpoints: {
                // 700px and up
                430: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                768: {
                    itemsToShow: 1,
                    snapAlign: 'start',
                },
                // 1024 and up
                1120: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
            },
        }
    },
    setup() {
        const carouselCompanyImages = ref([
            GoogleSlide,
            YoutubeSlide,
            TwitterSlide,
            MsSlide,
        ]);

        return {
            carouselCompanyImages
        };
    },
})
</script>

<style>
.homepage-carousel-client .homepage-head-title {
    padding: 70px 0 85px 0;
    margin-bottom: 102px;
}
@media (max-width: 768px) {
    .homepage-carousel-client .carousel-wrapper {
        padding: 0;
    }
    .homepage-carousel-client .homepage-head-title {
        padding: 0;
    }
}
</style>