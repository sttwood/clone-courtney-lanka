<template>
    <HeaderComponent
        SubTitle="We specialize in helping you build a team of expert developers."
        title="Our Services"
    />

    <section class="services-container container-fluid">
        <TopicComponentVue
            title="Hire Permanent and Remote Developers"
            desc="From full-time remote engineering teams to hourly contractors, work with remote devs as needed"
        />

        <div class="services-content">
            <article
                v-for="({ imgUrl, title, desc }, index) in articleAll"
                :key="index"
                class="article-2col flex-row d-flex"
            >
                <img class="col" :alt="title" :src="imgUrl" />
                <div class="col p-0">
                    <h3>{{ title }}</h3>
                    <p>{{ desc }}</p>
                </div>
            </article>
        </div>

        <div class="services-content-mobile">
            <ArticlesComponent :data="articleAll" />
        </div>

    </section>

    <ConsultationComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TopicComponentVue from '@/components/TopicComponent.vue'
import ArticlesComponent from '@/components/ArticlesComponent.vue'
import ConsultationComponent from '@/components/ConsultationComponent.vue'
// Images
import DedicatedImg from '@/assets/svg/link.svg'
import AugmentationImg from '@/assets/svg/management.svg'
import OutsourcingImg from '@/assets/svg/outsourcing.svg'
import RemoteImg from '@/assets/svg/world.svg'

export default {
    name: "ServicesView",
    components: {
        HeaderComponent,
        TopicComponentVue,
        ArticlesComponent,
        ConsultationComponent,
    },
    data() {
        return {
            articleAll: [
                {
                    "imgUrl": DedicatedImg,
                    "title": 'Dedicated Teams',
                    "desc": 'Building an extended team with Courtney is just like opening your own remote development center, but without the hassle.'
                },
                {
                    "imgUrl": AugmentationImg,
                    "title": 'Staff Augmentation',
                    "desc": 'IT Staff Augmentation is a service designed to add extra talent to your team on an on-demand basis. This allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development.'
                },
                {
                    "imgUrl": OutsourcingImg,
                    "title": 'Software Outsourcing',
                    "desc": 'Today, organizations all over the world deal with software outsourcing companies to have access to experienced software engineers with a variety of tech expertise ranging from user experience design to blockchain consulting.'
                },
                {
                    "imgUrl": RemoteImg,
                    "title": 'Remote Office',
                    "desc": 'Courtney is a trustworthy partner that can help you open your own remote development center and grow your business from Sri Lanka and United Kingdom.'
                },
            ],
        }
    },
}
</script>

<style scoped>
.services-container {
    padding-bottom: 100px;
}
.services-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    width: 100%;
}
.services-content-mobile {
    display: none;
}
@media (max-width: 768px) {
    .services-content {
        display: none;
    }
    .services-content-mobile {
        display: block;
    }
}
</style>