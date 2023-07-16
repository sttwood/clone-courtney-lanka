<template>
    <div class="homepage-head-title">
        <h5>Solutions</h5>
        <h2>Software Solutions, with expert software engineering teams</h2>
        <p>
            We specialize in helping you build a team of expert developers, testers, and leaders.
        </p>
    </div>

    <ArticlesComponent :data="servicesData" />
</template>

<script>
import ArticlesComponent from '@/components/ArticlesComponent.vue'
import AcrhitectImg from '@/assets/svg/cube.svg'
import EngineerImg from '@/assets/svg/software-application.svg'
import ReEngineerImg from '@/assets/svg/technical-support.svg'

export default {
    name: "HomeServicesComponent",
    components: {
        ArticlesComponent
    },
    data() {
        return {
            servicesData: [
                {
                    "imgUrl": AcrhitectImg,
                    "title": 'Architect your Solution',
                    "desc": 'Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business.We design a strategic roadmap to guide your result- oriented goals.'
                },
                {
                    "imgUrl": EngineerImg,
                    "title": 'Engineer your Solution',
                    "desc": 'We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry- specific experience.'
                },
                {
                    "imgUrl": ReEngineerImg,
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
.homepage-services .homepage-head-title {
        display: none;
    }

@media (max-width: 768px) {
    .homepage-services.container-fluid {
        width: 100%;
        padding: 0 18px;
    }
    .homepage-services {
        flex-direction: column;
    }
    .homepage-services .homepage-head-title {
        display: block;
        margin-bottom: 69px;
    }
    .homepage-services .homepage-head-title h5 {
        font-size: 22px;
    }
    .homepage-services .homepage-head-title h2 {
        font-size: 36px;
    }
    .homepage-services .homepage-head-title p {
        font-size: 20px;
    }
}
</style>