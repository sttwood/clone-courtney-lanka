<template>
    <section class="article-desktop d-flex">
        <article
            v-for="({ imgUrl, title, desc }, index) in data"
            :key="index"
            class="article-2col flex-row d-flex"
        >
            <img class="col" :alt="title" :src="imgUrl" />
            <div class="col p-0">
                <h3>{{ title }}</h3>
                <p>{{ desc }}</p>
            </div>
        </article>
    </section>

    <Carousel v-bind="settings" class="article-carousel-mobile">
        <Slide
            v-for="({ imgUrl, title, desc }, index) in data"
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
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent ({
    name: 'ArticleComponent',
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
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
    }),
});
</script>

<style>
.article-carousel-mobile {
    display: none;
}
.article-2col {
    color: #16205F;
    gap: 25px;
}
.article-2col img {
    background: #FFF856;
    border-radius: 12px;
    max-width: 70px;
    max-height: 70px;
    padding: 5px;
}
.article-2col h3 {
    font-weight: 600;
    font-size: 28px;
}
.article-2col p {
    font-size: 18px;
}
@media screen and (max-width: 1478px) {
    .article-2col img {
        max-width: 60px;
        max-height: 60px;
    }

    .article-2col h3 {
        font-size: 26px;
    }

    .article-2col p {
        font-size: 16px;
    }
}
@media screen and (max-width: 1320px) {
    .article-2col img {
        max-width: 50px;
        max-height: 50px;
    }

    .article-2col h3 {
        font-size: 24px;
    }

    .article-2col p {
        font-size: 14px;
    }
}
@media screen and (max-width: 1161px) {
    .article-2col img {
        max-width: 45px;
        max-height: 45px;
    }

    .article-2col h3 {
        font-size: 20px;
    }

    .article-2col p {
        font-size: 12px;
    }
}
@media screen and (max-width: 868px) {
    .article-2col img {
        max-width: 45px;
        max-height: 45px;
    }

    .article-2col h3 {
        font-size: 20px;
    }

    .article-2col p {
        font-size: 12px;
    }

    .article-2col {
        gap: 15px;
    }
}
@media (max-width: 768px) {
    .article-carousel-mobile {
        display: block;
        width: 100%;
    }
    .article-2col {
        gap: 38px;
    }
    .article-carousel-mobile .article-2col img {
        max-width: 124px;
        max-height: 124px;
        width: 100%;
        height: auto;
    }
    .article-carousel-mobile .article-2col .article-mobile-content {
        text-align: start;
    }
    .article-carousel-mobile .article-2col .article-mobile-content h3 {
        font-size: 28px;
    }
    .article-carousel-mobile .article-2col .article-mobile-content p {
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
    .article-desktop {
        display: none !important;
    }
}
</style>