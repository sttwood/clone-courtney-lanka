<template>
    <header class="header-component text-center d-flex flex-column justify-content-center align-items-center">
        <h1>{{ title }}</h1>
        <h4>{{ SubTitle }}</h4>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: [
        "title",
        "SubTitle"
    ]
};
</script>

<style scoped>
.header-component {
    position: relative;
    width: 100%;
    color: #ffffff;
    padding-top: 140px;
    padding-bottom: 120px;
    font-family: Poppins;
    margin-bottom: 117px;
}
.header-component::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../assets/images/desktop/howtostart/header-page.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(50%);
}
.header-component h1 {
    margin-bottom: 16px;
    font-size: 64px;
    font-weight: 600;
    z-index: 1;
}
.header-component h4 {
    max-width: 450px;
    font-size: 18px;
    z-index: 1;
}
</style>