<template>
    <div class="homepage-head-title">
        <h5>Expertise</h5>
        <h2>Hire Permanent and Remote Developers</h2>
        <p>
            From full-time remote engineering teams to hourly contractors, work with remote devs as needed
        </p>
    </div>

    <div class="homepage-expertise-content row">
        <article
            v-for="({ imgUrl, title, desc }, index) in expertiseData"
            :key="index"
            class="homepage-expertise-desktop col"
        >
            <img :alt="title" :src="imgUrl" />
            <div class="homepage-expertise-content-text">
                <h3>{{ title }}</h3>
                <p>{{ desc }}</p>
            </div>
        </article>

        <Carousel v-bind="settings" class="homepage-expertise-carousel-mobile">
            <Slide
                v-for="({ imgUrl, title, desc }, index) in expertiseData"
                :key="index"
            >
                <article
                    class="article-2col d-flex flex-column"
                >
                    <div class="d-flex justify-content-center">
                        <img :alt="title" :src="imgUrl" />
                    </div>
                    <div class="article-mobile-content p-0">
                        <h3>{{ title }}</h3>
                        <p>{{ desc }}</p>
                    </div>
                </article>
            </Slide>
            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script>
import dedicatedImage from '@/assets/svg/link.svg'
import augmentationImage from '@/assets/svg/management.svg'
import outsorucingImage from '@/assets/svg/outsourcing.svg'
import remoteImage from '@/assets/svg/world.svg'

import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent ({
    name: 'HomeExpertiseComponent',
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    components: {
        Pagination,
        Carousel,
        Slide,
    },
    data() {
        return {
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            expertiseData: [
                {
                    "imgUrl": dedicatedImage,
                    "title": 'Dedicated Teams',
                    "desc": 'Find your next team member'
                },
                {
                    "imgUrl": augmentationImage,
                    "title": 'Staff Augmentation',
                    "desc": 'Build a distributed development team'
                },
                {
                    "imgUrl": outsorucingImage,
                    "title": 'Software Outsourcing',
                    "desc": 'End-to-End Software Development Outsourcing Solutions'
                },
                {
                    "imgUrl": remoteImage,
                    "title": 'Remote Office',
                    "desc": 'Open your own remote development center and grow your business'
                },

            ]
        }
    },
});
</script>

<style>
.homepage-expertise {
    margin-top: 100px;
    color: #16205F;
}
.homepage-expertise-content {
    margin-bottom: 120px;
}
.homepage-expertise-content article img {
    background: #FFF856;
    border-radius: 12px;
    padding: 5px;
    margin-bottom: 23px;
}
.homepage-expertise-content-text h3 {
    font-weight: 600;
}
.homepage-expertise-content-text p {
    font-size: 18px;
}
.homepage-expertise-carousel-mobile {
    display: none;
}

@media screen and (max-width: 1115px) {
    .homepage-expertise-content article img {
        max-width: 74px;
    }
    .homepage-expertise-content-text h3 {
        font-size: 22px;
    }
    .homepage-expertise-content-text p {
        font-size: 16px;
    }
}

@media screen and (max-width: 1005px) {
    .homepage-expertise-content article img {
        max-width: 70px;
    }
    .homepage-expertise-content-text h3 {
        font-size: 20px;
    }
    .homepage-expertise-content-text p {
        font-size: 14px;
    }
}

@media screen and (max-width: 895px) {
    .homepage-expertise-content article img {
        max-width: 65px;
    }
    .homepage-expertise-content-text h3 {
        font-size: 18px;
    }
    .homepage-expertise-content-text p {
        font-size: 12px;
    }
}
@media (max-width: 768px) {
    .container-fluid {
        width: 100%;
        padding: 0 18px;
    }
    .homepage-expertise-content {
        padding: auto 0;
    }
    .homepage-expertise-carousel-mobile {
        display: block;
        padding: 0;
    }
    .article-2col {
        gap: 33px;
        width: 375px;
    }
    .homepage-expertise-carousel-mobile .article-2col img {
        max-width: 107px;
        max-height: 107px;
        width: 100%;
        height: auto;
    }
    .homepage-expertise-carousel-mobile .article-2col .article-mobile-content h3 {
        font-size: 28px;
    }
    .homepage-expertise-carousel-mobile .article-2col .article-mobile-content p {
        font-size: 16px;
    }
    .carousel__pagination {
        padding: 0;
    }
    .carousel__pagination-button::after {
        width: 48px;
        height: 7px;
        background: #E1E1E1;
    }
    .carousel__pagination-button--active::after {
        background: #9F9F9F;
    }
    .homepage-expertise-desktop {
        display: none !important;
    }
}
</style>