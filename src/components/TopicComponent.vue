<template>
    <div class="topic-container">
        <h1>{{ title }}</h1>
        <p>{{ desc }}</p>
    </div>
</template>

<script>
export default {
    name: "TopicComponent",
    props: [
        "title",
        "desc"
    ]
}
</script>

<style scoped>
.topic-container {
    color: #16205F;
    font-family: 'Poppins';
    margin-bottom: 97px;
}
.topic-container h1 {
    max-width: 650px;
    font-size: 46px;
    font-weight: 600;
    margin-bottom: 24px;
}
.topic-container p {
    max-width: 486px;
    font-size: 18px;
}
@media (max-width: 1280px) {
    .topic-container h1 {
        font-size: 42px;
    }
    .topic-container p {
        font-size: 16px;
    }
}
@media (max-width: 1016px) {
    .topic-container h1 {
        max-width: 400px;
        font-size: 38px;
    }
    .topic-container p {
        font-size: 16px;
    }
}
</style>