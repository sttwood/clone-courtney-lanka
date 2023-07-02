<template>
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
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
};
</script>

<style>
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
</style>