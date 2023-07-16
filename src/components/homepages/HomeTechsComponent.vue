<template>
    <div class="homepage-head-title text-center" style="max-width: none; margin-top: 162px;">
        <h5>Specialized</h5>
        <h2>Technologies</h2>
        <div class="carousel-wrapper">
            <Carousel
                :autoplay="4000"
                :breakpoints="breakpoints"
                :wrapAround="true"
                ref="carousel"
            >
                <Slide v-for="(slide, index) in carouselTechImages" :key="index" >
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

import ReactSlide from "@/assets/images/react-homepage.png"
import AngularSlide from "@/assets/images/angular-homepage.png"
import NextSlide from "@/assets/images/next-homepage.png"
import NodejsSlide from "@/assets/images/nodejs-homepage.png"

export default defineComponent ({
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
        const carouselTechImages = ref([
            ReactSlide,
            AngularSlide,
            NextSlide,
            NodejsSlide,
        ]);

        return {
            carouselTechImages,
        };
    },
})
</script>

<style>
.carousel__next, .carousel__prev {
    display: none;
}
@media (max-width: 768px) {
    .homepage-carousel-tech .carousel-wrapper {
        padding: 0;
    }
    .carousel__next, .carousel__prev {
        display: flex;
    }
    .custom-navigation {
        display: none;
    }
}
</style>