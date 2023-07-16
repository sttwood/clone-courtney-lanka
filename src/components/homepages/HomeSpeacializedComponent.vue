<template>
    <div class="container-fluid">
        <div class="homepage-head-title">
            <h5>Specialized</h5>
            <h2>Specialized Staff We Provide</h2>
        </div>

        <div class="hompage-specialized-desktop row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            <div class="card" v-for="({title, svgUrl}, index) in listOfCard" :key="index">
                <img :src="svgUrl" :alt="title" width="52" />
                <h5>{{ title }}</h5>
                <span class="specialized-highlight"></span>
            </div>
            
        </div>

        <div class="hompage-specialized-mobile">
            <Carousel class="homepage-specialized-carousel-mobile">
                <Slide
                    v-for="(chunk, index) in splitArrays"
                    :key="index"
                >
                    <div 
                        class="card"
                        v-for="({ title, svgUrl }, index) in chunk"
                        :key="index"
                    >
                        <img :src="svgUrl" :alt="title" width="52" />
                        <h5>{{ title }}</h5>
                        <span class="specialized-highlight"></span>
                    </div>
                </Slide>
                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
// Owl carousel
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
//Images
import FrontendImg from "@/assets/svg/frontend.svg"
import FullstackImg from "@/assets/svg/software-application.svg"
import UXUIImg from "@/assets/svg/uiux.svg"
import QAImg from "@/assets/svg/quality.svg"
import PdImg from "@/assets/svg/idea.svg"
import DatabaseImg from "@/assets/svg/database.svg"
import AngularImg from "@/assets/svg/angular_solidBlack.svg"
import DevOpsImg from "@/assets/svg/technical-support.svg"
import PHPImg from "@/assets/svg/PHP.svg"
import WordpressImg from "@/assets/svg/wordpress-logo.svg"
import MobileImg from "@/assets/svg/phone.svg"
import AIImg from "@/assets/svg/chip.svg"
import DatasciImg from "@/assets/svg/data-science.svg"
import PmImg from "@/assets/svg/scrum.svg"
import BaImg from "@/assets/svg/analysis.svg"
import IsImg from "@/assets/svg/padlock.svg"
import AsImg from "@/assets/svg/security.svg"
import SolutionImg from "@/assets/svg/networking.svg"
import TeamleadImg from "@/assets/svg/team-leader.svg"
import GolangImg from "@/assets/svg/Go-Logo_Black.svg"


export default defineComponent ({
    name: 'HomeSpecializedComponent',
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
    mounted() {
        // Splitting the original array into smaller arrays
        const listOfArray = this.listOfCard

        const chunkSize = 5;

        for (let i = 0; i < listOfArray.length; i += chunkSize) {
            const chunk = listOfArray.slice(i, i + chunkSize);
            this.splitArrays.push(chunk);
        }
    },
    data() {
        return {
            settings: {
                itemsToShow: 2,
                snapAlign: 'start',
            },
            splitArrays: [], // Contains the smaller arrays (each with 5 objects)
            listOfCard: [
                {
                    "title": "Frontend Engineers",
                    "svgUrl": FrontendImg
                },
                {
                    "title": "Fullstack Engineers",
                    "svgUrl": FullstackImg
                },
                {
                    "title": "UX/UI Engineers",
                    "svgUrl": UXUIImg
                },
                {
                    "title": "QA Engineers",
                    "svgUrl": QAImg
                },
                {
                    "title": "Product Designer",
                    "svgUrl": PdImg
                },
                {
                    "title": "Database admin",
                    "svgUrl": DatabaseImg
                },
                {
                    "title": "Angular Developers",
                    "svgUrl": AngularImg
                },
                {
                    "title": "DevOps + DevSecOps Engineers",
                    "svgUrl": DevOpsImg
                },
                {
                    "title": "PHP Developers",
                    "svgUrl": PHPImg
                },
                {
                    "title": "Wordpress CMS Developers",
                    "svgUrl": WordpressImg
                },
                {
                    "title": "IOS and Android Developers",
                    "svgUrl": MobileImg
                },
                {
                    "title": "AI and ML Engineers Deep Lerning/ Machine Vision / NLP",
                    "svgUrl": AIImg
                },
                {
                    "title": "Data Scientist / Data Engineers",
                    "svgUrl": DatasciImg
                },
                {
                    "title": "Project Managers",
                    "svgUrl": PmImg
                },
                {
                    "title": "Business Analyst",
                    "svgUrl": BaImg
                },
                {
                    "title": "Information Security Engineers",
                    "svgUrl": IsImg
                },
                {
                    "title": "Application Security Engineers",
                    "svgUrl": AsImg
                },
                {
                    "title": "Solution Architects",
                    "svgUrl": SolutionImg
                },
                {
                    "title": "Tech Leads / Team Leads",
                    "svgUrl": TeamleadImg
                },
                {
                    "title": "Golang Dev",
                    "svgUrl": GolangImg
                },
            ],
        }
    },
});
</script>

<style>
.hompage-specialized-mobile {
    display: none;
}
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
    height: 100%;
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
@media (max-width: 768px) {
    .homepage-speacialized .container-fluid {
        width: 100%;
        padding: 0 18px;
    }
    .hompage-specialized-desktop {
        display: none;
    }
    .hompage-specialized-mobile {
        display: block;
    }
    .hompage-specialized-mobile .carousel__slide {
        flex-direction: column;
        list-style: none;
        gap: 27px;
    }
    .hompage-specialized-mobile .carousel__slide .card {
        width: 95%;
    }
}
</style>