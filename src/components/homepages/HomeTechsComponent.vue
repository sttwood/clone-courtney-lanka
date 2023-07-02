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
            </Carousel>
            <div class="custom-navigation">
                <img src="../../assets/svg/Chevron right.svg" @click="nextSlide">
            </div>
        </div>
    
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';

export default defineComponent ({
    components: {
        Carousel,
        Slide,
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
                    itemsToShow: 2,
                    snapAlign: 'center',
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
            "../src/assets/images/react-homepage.png",
            "../src/assets/images/angular-homepage.png",
            "../src/assets/images/next-homepage.png",
            "../src/assets/images/nodejs-homepage.png",
        ]);

        return {
            carouselTechImages,
        };
    },
})
</script>

<style>

</style>