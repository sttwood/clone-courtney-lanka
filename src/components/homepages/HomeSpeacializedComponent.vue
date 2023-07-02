<template>
    <div class="container-fluid">
        <div class="homepage-head-title">
            <h5>Specialized</h5>
            <h2>Specialized Staff We Provide</h2>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            <div class="card" v-for="({title, svgUrl}, index) in listOfCard" :key="index">
                <img :src="svgUrl" :alt="title" width="52" />
                <h5>{{ title }}</h5>
                <span class="specialized-highlight"></span>
            </div>
            
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({
    data() {
        return {
            listOfCard: [
                {
                    "title": "Frontend Engineers",
                    "svgUrl": "../src/assets/svg/frontend.svg"
                },
                {
                    "title": "Fullstack Engineers",
                    "svgUrl": "../src/assets/svg/software-application.svg"
                },
                {
                    "title": "UI/UX Engineers",
                    "svgUrl": "../src/assets/svg/uiux.svg"
                },
                {
                    "title": "QA Engineers",
                    "svgUrl": "../src/assets/svg/quality.svg"
                },
                {
                    "title": "Product Designer",
                    "svgUrl": "../src/assets/svg/idea.svg"
                },
                {
                    "title": "Database admin",
                    "svgUrl": "../src/assets/svg/database.svg"
                },
                {
                    "title": "Angular Developers",
                    "svgUrl": "../src/assets/svg/angular_solidBlack.svg"
                },
                {
                    "title": "DevOps + DevSecOps Engineers",
                    "svgUrl": "../src/assets/svg/technical-support.svg"
                },
                {
                    "title": "PHP Developers",
                    "svgUrl": "../src/assets/svg/PHP.svg"
                },
                {
                    "title": "Wordpress CMS Developers",
                    "svgUrl": "../src/assets/svg/wordpress-logo.svg"
                },
                {
                    "title": "IOS and Android Developers",
                    "svgUrl": "../src/assets/svg/phone.svg"
                },
                {
                    "title": "AI and ML Engineers Deep Lerning/ Machine Vision / NLP",
                    "svgUrl": "../src/assets/svg/chip.svg"
                },
                {
                    "title": "Data Scientist / Data Engineers",
                    "svgUrl": "../src/assets/svg/data-science.svg"
                },
                {
                    "title": "Project Managers",
                    "svgUrl": "../src/assets/svg/scrum.svg"
                },
                {
                    "title": "Business Analyst",
                    "svgUrl": "../src/assets/svg/analysis.svg"
                },
                {
                    "title": "Information Scurity Engineers",
                    "svgUrl": "../src/assets/svg/padlock.svg"
                },
                {
                    "title": "Application Security Engineers",
                    "svgUrl": "../src/assets/svg/security.svg"
                },
                {
                    "title": "Solution Architects",
                    "svgUrl": "../src/assets/svg/networking.svg"
                },
                {
                    "title": "Tech Leads / Team Leads",
                    "svgUrl": "../src/assets/svg/team-leader.svg"
                },
                {
                    "title": "Golang Dev",
                    "svgUrl": "../src/assets/svg/Go-Logo_Black.svg"
                },
            ],
        }
    },
});
</script>

<style>
.homepage-speacialized {
    padding-top: 90px;
    padding-bottom: 110px;
    background-color: #F9F9F9;
}
.homepage-speacialized .row {
    gap: 30px;
    margin-bottom: 44px;
}
.homepage-speacialized .card {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    border: none;
    outline: none;
    padding: 20px 30px;
    width: 344px;
    max-height: 92px;
}
.homepage-speacialized .card img {
    margin-right: 40px;
}
.homepage-speacialized h5 {
    font-weight: 600;
    font-size: 18px;
    color: #16205F;
    margin: 0;
}
.specialized-highlight {
    position: absolute;
    width: 13px;
    height: 92px;
    background: #FFF856;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);
    border-radius: 12px 0px 0px 12px;
    left: 0;
}
.homepage-head-title h2 {
    max-width: 485px;
}

@media (max-width: 1802px) {
    .homepage-speacialized h5 {
        font-size: 16px;
    }
    .homepage-speacialized .card {
        padding: 20px 30px;
        width: 324px;
        max-height: 92px;
    }
}

@media (max-width: 1702px) {
    .homepage-speacialized h5 {
        font-size: 14px;
    }
    .homepage-speacialized .card {
        padding: 20px 30px;
        width: 304px;
        max-height: 92px;
    }
}

@media (max-width: 1602px) {
    .homepage-speacialized .card {
        padding: 20px 20px 20px 30px;
        width: 284px;
        max-height: 92px;
    }
}

@media (max-width: 1502px) {
    .homepage-speacialized .card {
        padding: 20px 20px 20px 30px;
        width: 254px;
        max-height: 82px;
    }
    .specialized-highlight {
        height: 82px;
    }
    .homepage-speacialized .card img {
        margin-right: 20px;
    }
}
</style>