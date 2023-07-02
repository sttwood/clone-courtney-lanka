<template>
    <HeaderComponent title="Careers" SubTitle="We specialize in helping you build a team of expert developers." />

    <section class="careers-container container-fluid">
        <TopicComponentVue
            title="Please join us"
            desc="Take a look at the open positions below. If none of them suit you, or you feel you could help us in other ways, please fill out the form below or contact us directly at carrers@courtney.lk"
        />
    </section>

    <section class="careers-list container-fluid">
        <h3>Developers</h3>
        <article class="careers-item table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" class="thead-role">ROLE</th>
                        <th scope="col" class="thead-skills">SKILLS</th>
                        <th scope="col" class="thead-location">LOCATION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tbody-role">
                            <h4>Senior Web Full Stack Developer</h4>
                            <p>Seniority in development is not just about how much time you have already spent behind the computer screen. It's the way you think, how you approach problems and their solutions, the responsibility you take on and feel.</p>
                            <div class="role-btn d-flex">
                                <button class="arrow-button">
                                    Apply now
                                    <span class="arrow"></span>
                                </button>
                                <button class="role-btn-learnmore">Learn more</button>
                            </div>
                        </td>
                        <td class="tbody-skills d-flex flex-wrap">
                            <span class="badge">Node.js</span>
                            <span class="badge">React js</span>
                            <span class="badge">Vue js</span>
                            <span class="badge">Typescript</span>
                            <span class="badge">Javascript</span>
                            <span class="badge">Next JS</span>
                            <span class="badge">Amplify</span>
                            <span class="badge">AWS</span>
                            <span class="badge">Terraform</span>
                            <span class="badge">C# and .NET</span>
                            <span class="badge">GraphQL</span>
                            <span class="badge">Serverless Framework</span>
                        </td>
                        <td class="tbody-location">
                            <p class="fw-bold">Remote,</p>
                            <p><strong>Ostrava</strong> - Czech Republic,</p>
                            <p><strong>Brno</strong> - Czech Republic,</p>
                            <p><strong>Barcelona</strong> - Spain,</p>
                            <p><strong>Prague</strong> - Czech Republic,</p>
                            <p><strong>Zlín</strong> - Czech Republic</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </article>
    </section>

    <ConsoltationComponent style="margin-top: 590px;" />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TopicComponentVue from '@/components/TopicComponent.vue'
import ConsoltationComponent from '@/components/ConsultationComponent.vue'

export default {
    name: "CareersView",
    components: {
        HeaderComponent,
        TopicComponentVue,
        ConsoltationComponent
    }
}
</script>

<style scoped>
.careers-list h3 {
    font-size: 28px;
    font-weight: 600;
    color: #16205F;
    margin-bottom: 35px;
}
.careers-item {
    background: #FBFBFB;
    padding: 39px 35px;
    color: #16205F;
}
.thead-role, 
.thead-skills, 
.thead-location {
    background: transparent;
    font-size: 18px;
    font-weight: 600;
    color: #16205F;
}
.tbody-role, 
.tbody-skills, 
.tbody-location {
    background: transparent;
    outline: none;
    border: none;
}
.tbody-role {
    max-width: 535px;
    padding-right: 50px;
    color: #16205F;
}
.tbody-role h4 {
    font-size: 28px;
    font-weight: 600;
    margin-top: 40px;
}
.tbody-role p {
    font-size: 18px;
    margin-bottom: 32px;
}
.tbody-skills {
    max-width: 390px;
    gap: 15px;
    margin-top: 40px;
}
.careers-item .table .badge {
    color: #16205F;
    background: #FFF856;
    padding: 4px 10px;
}
.tbody-location {
    max-width: 340px;
    color: #16205F;
    font-size: 18px;
}
.tbody-location p:first-child {
    margin-top: 40px;
}
.role-btn {
    gap: 25px;
}
.role-btn-learnmore {
    padding: 15px 50px;
    border: none;
    outline: none;
    text-transform: uppercase;
    transition: 0.3s;
    background: #F3F3F3;
    border-radius: 8px;
    color: #16205F;
    font-weight: 600;
}
.role-btn-learnmore:hover {
    background: #dadada;
}
.arrow-button {
    display: flex;
    color: #FFFFFF;
    background: linear-gradient(90deg, #FF9900 0%, #F2CB00 100%);
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    border: none;
    outline: none;
    transition: all .3s ease;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    align-items: center;
    padding: 15px 40px;
}
.arrow-button .arrow {
    width: 10px;
    height: 10px;
    border-right: 2px solid #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    position: relative;
    transform: rotate(-45deg);
    margin: 0 10px;
    transition: all .3s ease;
}
.arrow-button .arrow::before {
    display: block;
    background-color: currentColor;
    width: 3px;
    transform-origin: bottom right;
    height: 2px;
    position: absolute;
    opacity: 0;
    bottom: calc(-2px / 2);
    transform: rotate(45deg);
    transition: all .3s ease;
    content: "";
    right: 0;
}
.arrow-button:hover .arrow {
    transform: rotate(-45deg) translate(4px, 4px);
    border-color: text-hover-color;
}
.arrow-button:hover .arrow::before {
    opacity: 1;
    width: 16px;
}
@media (max-width: 1310px) {
    .role-btn-learnmore {
        padding: 15px 40px;
        font-size: 14px;
    }
    .arrow-button {
        padding: 15px 30px;
        font-size: 14px;
    }
}
@media (max-width: 1141px) {
    .tbody-role h4 {
        font-size: 22px;
    }
    .tbody-role p {
        font-size: 16px;
    }
    .tbody-skills {
        gap: 10px;
    }
    .careers-item .table .badge {
        padding: 4px 8px;
    }
    .tbody-location {
        font-size: 16px;
    }
}
@media (max-width: 1114px) {
    .role-btn-learnmore {
        padding: 15px 30px;
        font-size: 12px;
    }
    .arrow-button {
        padding: 15px 20px;
        font-size: 12px;
    }
}
@media (max-width: 1010px) {
    .tbody-role h4 {
        font-size: 20px;
    }
    .tbody-role p {
        font-size: 14px;
    }
    .tbody-skills {
        gap: 10px;
    }
    .careers-item .table .badge {
        padding: 4px 8px;
    }
    .tbody-location {
        font-size: 14px;
    }
    .role-btn-learnmore {
        padding: 15px 30px;
        font-size: 10px;
    }
    .arrow-button {
        padding: 15px 20px;
        font-size: 10px;
    }
}
@media (max-width: 930px) {
    .tbody-role {
        padding-right: 20px;
    }
    .tbody-role h4 {
        font-size: 18px;
    }
    .tbody-role p {
        font-size: 14px;
    }
    .tbody-skills {
        gap: 10px;
    }
    .careers-item .table .badge {
        padding: 4px 6px;
        font-size: 12px;
    }
    .tbody-location {
        font-size: 12px;
    }
    .role-btn-learnmore {
        padding: 15px 30px;
        font-size: 10px;
    }
    .arrow-button {
        padding: 15px 20px;
        font-size: 10px;
    }
}
</style>