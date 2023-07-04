<template>
    <HeaderComponent title="Technologies" SubTitle="We specialize in helping you build a team of expert developers." />
    
    <section class="technologies-container container-fluid">
        <TopicComponentVue
            title="Technologies"
            desc="Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity"
        />

        <div class="technologies-tabs">
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li
                    v-for="({tabID, tabTitle}, index) in tabsList"
                    :key="index"
                    class="nav-item"
                    role="presentation"
                >
                    <button
                        :id="'pills-' + tabID + '-tab'"
                        :class="['nav-link', { active: currentTab === tabID }]"
                        :aria-controls="'pills-' + tabID"
                        :aria-selected="currentTab === tabID"
                        :data-bs-target="'#pills-' + tabID"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                        @click="currentTab = tabID"
                    >
                        {{ tabTitle }}
                    </button>
                </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
                <div
                    v-for="({ tabID }) in tabsList"
                    :id="'pills-' + tabID"
                    :key="tabID"
                    class="d-flex flex-wrap tab-pane fade"
                    :class="{ 'show active': currentTab === 'all', 'd-none': currentTab !== tabID }"
                    :aria-labelledby="'pills-' + tabID + '-tab'"
                    :aria-hidden="currentTab !== tabID"
                    role="tabpanel"
                >
                    <div 
                        v-for="{ tabID, tabURL } in filteredImages"
                        :key="tabID"
                        class="technology-image-all d-flex justify-content-center align-items-center"
                    >
                        <img
                            :src="tabURL"
                            :alt="tabID"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <ConsultationComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TopicComponentVue from '@/components/TopicComponent.vue'
import ConsultationComponent from '@/components/ConsultationComponent.vue';
// Images
import JsImg from "@/assets/images/desktop/technologies/js 1.png"
import ReactImg from "@/assets/images/desktop/technologies/react_logo 1.png"
import VueImg from "@/assets/images/desktop/technologies/logo-vuejs-min 1.png"
import EmberImg from "@/assets/images/desktop/technologies/e-icon 1.png"
import HtmlImg from "@/assets/images/desktop/technologies/html 1.png"
import CssImg from "@/assets/images/desktop/technologies/css 1.png"
import NodejsImg from "@/assets/images/desktop/technologies/2560px-Node.js_logo 1.png"
import JavaImg from "@/assets/images/desktop/technologies/Java_programming_language_logo 1.png"
import PythonImg from "@/assets/images/desktop/technologies/Python-Symbol.png"
import PhpImg from "@/assets/images/desktop/technologies/PHP-logo.png"
import CsharpImg from "@/assets/images/desktop/technologies/c-sharp-c-logo-02F17714BA-seeklogo 1.png"
import CplusImg from "@/assets/images/desktop/technologies/1822px-ISO_C++_Logo 1.png"
import LaravelImg from "@/assets/images/desktop/technologies/laravel-logo 1.png"
import SymfonyImg from "@/assets/images/desktop/technologies/symfony-logo-png-2 1.png"
import DjangoImg from "@/assets/images/desktop/technologies/2560px-Django_logo 1.png"
import ExpressImg from "@/assets/images/desktop/technologies/express.png"
import SpringImg from "@/assets/images/desktop/technologies/spring.png"
import IosImg from "@/assets/images/desktop/technologies/iOS-Logo-2013 1.png"
import ReactNativeImg from "@/assets/images/desktop/technologies/react-native 1.png"
import FlutterImg from "@/assets/images/desktop/technologies/Google-flutter-logo 1.png"
import KotlinImg from "@/assets/images/desktop/technologies/Kotlin_logo 1.png"
import IonicImg from "@/assets/images/desktop/technologies/1280px-Ionic_Logo 1.png"
import MysqlImg from "@/assets/images/desktop/technologies/MySQL-Logo 1.png"
import SqlserverImg from "@/assets/images/desktop/technologies/microsoft-sql-server-logo-96AF49E2B3-seeklogo 1.png"
import PostgreImg from "@/assets/images/desktop/technologies/postgresql-icon-12 1.png"
import MariadbImg from "@/assets/images/desktop/technologies/mariadb-logo-vert_blue-transparent 1.png"
import MongodbImg from "@/assets/images/desktop/technologies/mongodb_logo1-76twgcu2dm 1.png"
import RedisImg from "@/assets/images/desktop/technologies/Redis-Logo 1.png"
import OracleImg from "@/assets/images/desktop/technologies/Oracle-Logo 1.png"
import GoImg from "@/assets/images/desktop/technologies/1280px-Go_Logo_Blue 1.png"
import AngularImg from "@/assets/images/desktop/technologies/angular-logo-icon-png-svg 2.png"
import AndroidImg from "@/assets/images/desktop/technologies/android_logo_PNG3 1.png"
import RstudioImg from "@/assets/images/desktop/technologies/r_studio.png"
import HadoopImg from "@/assets/images/desktop/technologies/hadoop 1.png"
import PowerbiImg from "@/assets/images/desktop/technologies/power_bi.png"
import OpencvImg from "@/assets/images/desktop/technologies/OpenCV_logo_black_ 1.png"

export default {
    name: "TechnologiesView",

    components: {
        HeaderComponent,
        TopicComponentVue,
        ConsultationComponent
    },
    computed: {
        filteredImages() {
            if (this.currentTab === "all") {
                return this.tabsContents;
            } else {
                return this.tabsContents.filter((image) =>
                    image.tabType.includes(this.currentTab)
                );
            }
        },
    },
    data() {
        return {
            tabsList: [
                {
                    tabID: "all",
                    tabTitle: "All",
                },
                {
                    tabID: "frontend",
                    tabTitle: "Frontend",
                },
                {
                    tabID: "backend",
                    tabTitle: "Backend",
                },
                {
                    tabID: "mobile-app",
                    tabTitle: "Mobile App",
                },
                {
                    tabID: "database",
                    tabTitle: "DataBase",
                },
                {
                    tabID: "google",
                    tabTitle: "Google",
                },
                {
                    tabID: "data-science",
                    tabTitle: "Data Science",
                },
                {
                    tabID: "machine-learning",
                    tabTitle: "Machine Learning",
                },
                {
                    tabID: "devops",
                    tabTitle: "DevOps",
                },
                {
                    tabID: "cms",
                    tabTitle: "CMS",
                },
                {
                    tabID: "ecommerce",
                    tabTitle: "ECommerce",
                },
                {
                    tabID: "security",
                    tabTitle: "Security",
                },
            ],
            tabsContents: [
                {
                    tabID: "javascript",
                    tabURL: JsImg,
                    tabType: ["frontend", "ecommerce"]
                },
                {
                    tabID: "react",
                    tabURL: ReactImg,
                    tabType: [ "frontend", "frameworks", "ecommerce" ]
                },
                {
                    tabID: "vuejs",
                    tabURL: VueImg,
                    tabType: [ "frontend", "frameworks", "ecommerce" ]
                },
                {
                    tabID: "ember",
                    tabURL: EmberImg,
                    tabType: [ "frontend", "frameworks" ]
                },
                {
                    tabID: "html",
                    tabURL: HtmlImg,
                    tabType: ["frontend", "ecommerce" ]
                },
                {
                    tabID: "css",
                    tabURL: CssImg,
                    tabType: ["frontend", "ecommerce" ]
                },
                {
                    tabID: "nodejs",
                    tabURL: NodejsImg,
                    tabType: ["backend", "security", "ecommerce" ]
                },
                {
                    tabID: "java",
                    tabURL: JavaImg,
                    tabType: ["backend", "security"]
                },
                {
                    tabID: "python",
                    tabURL: PythonImg,
                    tabType: ["backend", "data-science", "machine-learning", "security" ]
                },
                {
                    tabID: "php",
                    tabURL: PhpImg,
                    tabType: ["backend", "security", "ecommerce" ]
                },
                {
                    tabID: "csharp",
                    tabURL: CsharpImg,
                    tabType: [ "backend" ]
                },
                {
                    tabID: "cplusplus",
                    tabURL: CplusImg,
                    tabType: [ "backend" ]
                },
                {
                    tabID: "laravel",
                    tabURL: LaravelImg,
                    tabType: ["frontend", "frameworks", "cms", "ecommerce" ]
                },
                {
                    tabID: "symfony",
                    tabURL: SymfonyImg,
                    tabType: ["backend", "frameworks"]
                },
                {
                    tabID: "django",
                    tabURL: DjangoImg,
                    tabType: ["backend", "frameworks", "cms"]
                },
                {
                    tabID: "expressjs",
                    tabURL: ExpressImg,
                    tabType: [ "backend", "frameworks", "ecommerce" ]
                },
                {
                    tabID: "spring",
                    tabURL: SpringImg,
                    tabType: [ "backend", "frameworks" ]
                },
                {
                    tabID: "ios",
                    tabURL: IosImg,
                    tabType: ["mobile-app"]
                },
                {
                    tabID: "react-native",
                    tabURL: ReactNativeImg,
                    tabType: ["frontend", "frameworks", "mobile-app" ]
                },
                {
                    tabID: "flutter",
                    tabURL: FlutterImg,
                    tabType: [ "frontend", "frameworks", "mobile-app" ]
                },
                {
                    tabID: "kotlin",
                    tabURL: KotlinImg,
                    tabType: [ "frontend", "backend", "frameworks", "mobile-app" ]
                },
                {
                    tabID: "ionic",
                    tabURL: IonicImg,
                    tabType: [ "frontend", "frameworks", "mobile-app" ]
                },
                {
                    tabID: "mysql",
                    tabURL: MysqlImg,
                    tabType: ["database", "security", "ecommerce" ]
                },
                {
                    tabID: "sql-server",
                    tabURL: SqlserverImg,
                    tabType: ["database", "ecommerce" ]
                },
                {
                    tabID: "postgre-sql",
                    tabURL: PostgreImg,
                    tabType: ["database", "ecommerce" ]
                },
                {
                    tabID: "mariadb",
                    tabURL: MariadbImg,
                    tabType: ["database", "ecommerce" ]
                },
                {
                    tabID: "mongodb",
                    tabURL: MongodbImg,
                    tabType: ["database", "ecommerce" ]
                },
                {
                    tabID: "redis",
                    tabURL: RedisImg,
                    tabType: ["database", "ecommerce"]
                },
                {
                    tabID: "oracle",
                    tabURL: OracleImg,
                    tabType: ["database", "ecommerce" ]
                },
                {
                    tabID: "go",
                    tabURL: GoImg,
                    tabType: ["backend", "google", "devops", "data-science", "machine-learning"]
                },
                {
                    tabID: "angular",
                    tabURL: AngularImg,
                    tabType: [ "frontend", "frameworks", "mobile-app" ]
                },
                {
                    tabID: "android",
                    tabURL: AndroidImg,
                    tabType: [ "mobile-app" ]
                },
                {
                    tabID: "r-studio",
                    tabURL: RstudioImg,
                    tabType: [ "data-science", "machine-learning" ]
                },
                {
                    tabID: "hadoop",
                    tabURL: HadoopImg,
                    tabType: [ "frameworks", "data-science", "machine-learning" ]
                },
                {
                    tabID: "power-bi",
                    tabURL: PowerbiImg,
                    tabType: [ "data-science", "machine-learning" ]
                },
                {
                    tabID: "opencv",
                    tabURL: OpencvImg,
                    tabType: [ "data-science", "machine-learning" ]
                },
            ],
            currentTab: "all",            
        }
    },
}
</script>

<style scoped>
.technologies-tabs {
    margin-bottom: 230px;
}
.technologies-tabs .nav-pills .nav-item .nav-link {
    color: #9F9F9F;
    font-size: 15px;
    font-weight: 600;
    padding: 6px 24px;
}
.technologies-tabs .nav-pills .nav-item .nav-link.active {
    border-radius: 12px;
    background: #FFF856;
    color: #16205F;
    font-size: 15px;
    font-weight: 600;
    padding: 6px 24px;
}
.technologies-tabs .tab-content {
    margin-top: 60px;
}
.technology-image-all {
    border-radius: 12px;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.12);
    width: 223px;
    height: 160px;
}
.tab-pane {
    gap: 36px;
}

</style>