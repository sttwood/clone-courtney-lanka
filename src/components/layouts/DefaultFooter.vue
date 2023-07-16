<script>
export default {
    setup() {


        return {}
    }
}
</script>

<template>
    <footer>
        <section class="container-fluid">
            <div class="footer-info d-md-flex">
                <article class="footer-contact-info col">
                    <img src="../../assets/images/logo.png" alt="logo" class="footer-contact-info-logo pb-4">
                    <p>Expertly trained, battle-tested, elite software developers on demand</p>
                    <span class="d-flex align-items-baseline">
                        <img src="../../assets/svg/contact/Phone.svg" alt="phone-icon" />
                        <p>+94 713249222</p>
                    </span>
                    <span class="d-flex align-items-baseline">
                        <img src="../../assets/svg/contact/Email.svg" alt="email-icon" />
                        <p>hello@courtney.lk</p>
                    </span>
                    <span class="d-flex align-items-baseline">
                        <img src="../../assets/svg/contact/Location.svg" alt="address-icon" />
                        <p>
                            Courtney Lanka (Private) Limited
                            <br>Level 35
                            <br>World Trade Center
                            <br>Colombo 01
                        </p>
                    </span>
                </article>
                <article class="col">
                    <h4>Company</h4>
                    <div class="footer-article d-flex flex-column">
                        <router-link to="/">About us</router-link>
                        <router-link to="/">Success Stroies</router-link>
                        <router-link to="/">Privacy Policy</router-link>
                        <router-link to="/">Terms & Conditions</router-link>
                        <router-link to="/contact-us">Contact us</router-link>
                    </div>
                    
                </article>
                <article class="col">
                    <h4>Services</h4>
                    <div class="footer-article d-flex flex-column">
                            <router-link to="/services">Hire Promanent Staff</router-link>
                            <router-link to="/services">Staff Augmentation</router-link>
                            <router-link to="/services">Software Outsourcing</router-link>
                            <router-link to="/services">Build Remote Office</router-link>
                        </div>
                </article>
                <article class="col">
                    <h4>How to Start</h4>
                    <div class="footer-article d-flex flex-column">
                            <router-link to="/how-to-start">You Asked</router-link>
                            <router-link to="/how-to-start">We Proceed</router-link>
                            <router-link to="/how-to-start">Negotiate</router-link>
                            <router-link to="/how-to-start">You Get</router-link>
                        </div>
                </article>
            </div>
            <div class="footer-socials col mt-4">
                <h5>Follow us</h5>
                <div class="socials-list d-flex">
                    <img src="../../assets/svg/contact/LinkedIn.svg" alt="linkedin" />
                    <img src="../../assets/svg/contact/Facebook.svg" alt="facebook" />
                    <img src="../../assets/svg/contact/Instagram.svg" alt="instagram" />
                    <img src="../../assets/svg/contact/Twitter.svg" alt="twitter" />
                    <img src="../../assets/svg/contact/YouTube.svg" alt="youtube" />

                </div>
            </div>
        </section>

        <hr class="footer-line" />

        <section class="container-fluid">
            <p>© 2022 sttwood</p>
        </section>
    </footer>
</template>

<style scoped>
footer {
    border-top: 1px solid #E1E1E1;
    color: #16205F;
    font-size: 18px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 27px;
    padding-top: 30px;
    width: 100%;
}
footer .container-fluid {
    width: 80%;
    padding: 0;
}
.footer-line {
    border-top: 1px solid #E1E1E1;
    width: 100%;
}
.footer-info {
    gap: 30px;
}
h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    margin: 0;
    padding-top: 10px;
}
.footer-contact-info span {
    gap: 1rem;
}
.footer-article {
    gap: 25px;
    padding-top: 28px;
}
.footer-article a {
    text-decoration: none;
    color: #16205F;
}
.footer-socials h5 {
    font-size: 18px;
    font-weight: 600;
}
.footer-socials .socials-list img {
    padding-right: 24px;
}
@media screen and (max-width: 1090px) {
    footer {
        font-size: 16px;
    }

    h4 {
        font-size: 20px;
    }

    .footer-contact-info-logo {
        width: 75%;
    }

    .footer-socials h5 {
        font-size: 16px;
    }

    .footer-socials .socials-list img {
        padding-right: 18px;
    }
}
@media screen and (max-width: 1004px) {
    footer {
        font-size: 14px;
    }

    h4 {
        font-size: 18px;
    }

    .footer-contact-info-logo {
        width: 70%;
    }

    .footer-socials h5 {
        font-size: 14px;
    }

    .footer-socials .socials-list img {
        padding-right: 16px;
    }
}
@media screen and (max-width: 923px) {
    footer {
        font-size: 12px;
    }

    h4 {
        font-size: 16px;
    }

    .footer-socials h5 {
        font-size: 12px;
    }

    .footer-socials .socials-list img {
        padding-right: 14px;
    }
}
@media screen and (max-width: 768px) {
    .footer-contact-info-logo {
        max-width: 195px;
    }
    h4 {
        font-size: 22px;
        padding-top: 10px;
    }
    p, a {
        font-size: 18px;
    }
    .footer-info article {
        margin-top: 62px;
    }
    .footer-socials {
        margin-top: 90px !important;
    }
    .footer-socials h5 {
        font-size: 18px;
        margin-bottom: 22px;
    }
    .footer-socials .socials-list {
        justify-content: space-between;
    }
    .footer-socials .socials-list img {
        width: 46px;
        height: 46px;
        padding: 0;
    }
}
</style>