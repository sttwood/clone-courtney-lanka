<template>
    <ArticlesComponent :data="servicesData" />
</template>

<script>
import ArticlesComponent from '@/components/ArticlesComponent.vue'

export default {
    name: "HomeServicesComponent",
    components: {
        ArticlesComponent
    },
    data() {
        return {
            servicesData: [
                {
                    "imgUrl": '../src/assets/svg/cube.svg',
                    "title": 'Architect your Solution',
                    "desc": 'Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business.We design a strategic roadmap to guide your result- oriented goals.'
                },
                {
                    "imgUrl": '../src/assets/svg/software-application.svg',
                    "title": 'Engineer your Solution',
                    "desc": 'We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry- specific experience.'
                },
                {
                    "imgUrl": '../src/assets/svg/technical-support.svg',
                    "title": 'ReEngineer your Business Process',
                    "desc": 'Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration.This process places the foundation for a more efficient and strong business that can meet demands at scale.'
                },

            ]
        }
    },
};
</script>

<style>
.homepage-services {
    margin-top: 180px;
    gap: 50px;
}
</style>