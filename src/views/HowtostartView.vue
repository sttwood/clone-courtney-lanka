<template>
    <HeaderComponent
        SubTitle="We specialize in helping you build a team of expert developers."
        title="How to Start"
    />

    <section class="howtostart-container container-fluid">
        <div class="howtostart-getstart">
            <h1>How to Get Started with Courtney</h1>
            <p>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
            
            <div class="howtostart-getstart-content d-flex justify-content-between">
                <ArticlesComponent :data="servicesData" />
            </div>
        </div>

        <div class="howtostart-whyremotedev">
                <h2>Why You Need To Hire Remote Developers</h2>

                <ul class="row list-unstyled">
                    <li class="col">> Talent shortage</li>
                    <li class="col">> Lack of Expertise</li>
                    <li class="col">> Quick Kick-Off</li>
                </ul>
                <ul class="row list-unstyled">
                    <li class="col">> Cost Optimization</li>
                    <li class="col">> Talent Accessibility</li>
                    <li class="col">> Administrative Hassle</li>
                </ul>
        </div>

        <div class="howtostart-banner">
            <img 
                src="@/assets/images/desktop/howtostart/how-to-start-page.png" 
                alt="count-of-dev"
                class="img-fluid"
            >
            <span>
                <h2>1000+</h2>
                <h3>Developers</h3>
            </span>
        </div>
    </section>

    <ConsultationComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ArticlesComponent from '@/components/ArticlesComponent.vue';
import ConsultationComponent from '@/components/ConsultationComponent.vue';
// Images
import RequestImg from '@/assets/svg/email.svg'
import InterviewImg from '@/assets/svg/online-conference.svg'
import HireImg from '@/assets/svg/handshake-big.svg'

export default {
    name: "HowtostartView",
    components: {
        HeaderComponent,
        ArticlesComponent,
        ConsultationComponent
    },
    data() {
        return {
            servicesData: [
                {
                    "imgUrl": RequestImg,
                    "title": '01. Request',
                    "desc": 'Tell us more about your requirements and technical needs'
                },
                {
                    "imgUrl": InterviewImg,
                    "title": '02. Interview',
                    "desc": 'You interview candidates. Average 2 interviews to hire.'
                },
                {
                    "imgUrl": HireImg,
                    "title": '03. Hire',
                    "desc": 'You choose who to hire, and we handle all the paperwork.'
                },

            ]
        }
    },
}
</script>

<style>
.howtostart-container {
    color: #16205F;
    font-family: 'Poppins';
}
.howtostart-getstart h1 {
    max-width: 650px;
    font-size: 46px;
    font-weight: 600;
    margin-bottom: 24px;
}
.howtostart-getstart p {
    max-width: 486px;
    font-size: 18px;
}
.howtostart-getstart-content {
    gap: 50px;
    margin: 106px 0 134px 0;
}
.howtostart-whyremotedev {
    margin-bottom: 155px;
}
.howtostart-whyremotedev h2 {
    max-width: 650px;
    font-size: 46px;
    font-weight: 600;
    margin-bottom: 92px;
}
.howtostart-whyremotedev li {
    font-size: 28px;
    font-weight: 600;
}
.howtostart-banner {
    position: relative;
    margin-bottom: 174px;
}
.howtostart-banner img {
    width: 100%;
}
.howtostart-banner span {
    color: #ffffff;
    position: absolute;
    top: 10%;
    left: 5%;
}
.howtostart-banner span h2 {
    font-size: 96px;
    font-weight: 275;
}
.howtostart-banner span h3 {
    font-size: 28px;
    font-weight: 600;
}

@media (max-width: 1280px) {
    .howtostart-getstart h1 {
        font-size: 42px;
    }
    .howtostart-getstart p {
        font-size: 16px;
    }
    .howtostart-whyremotedev h2 {
        max-width: 600px;
        font-size: 42px;
    }
    .howtostart-whyremotedev li {
        font-size: 22px;
    }
    .howtostart-banner span h2 {
        font-size: 84px;
    }
    .howtostart-banner span h3 {
        font-size: 22px;
    }
}
@media (max-width: 1016px) {
    .howtostart-getstart h1 {
        max-width: 400px;
        font-size: 38px;
    }
    .howtostart-getstart p {
        font-size: 16px;
    }
    .howtostart-getstart-content {
        gap: 50px;
        margin: 86px 0 104px 0;
    }
    .howtostart-whyremotedev h2 {
        max-width: 500px;
        font-size: 38px;
        margin-bottom: 52px;
    }
    .howtostart-whyremotedev li {
        font-size: 18px;
    }
    .howtostart-whyremotedev {
        margin-bottom: 125px;
    }
    .howtostart-banner span h2 {
        font-size: 50px;
    }
    .howtostart-banner span h3 {
        font-size: 16px;
    }
}
</style>