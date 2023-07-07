<script>
export default {
    methods: {
        dismissOffcanvas() {
            const offcanvasElement = document.querySelector('.offcanvas');
            const backdropElements = document.querySelectorAll('.offcanvas-backdrop');

            // Remove the 'show' class from the offcanvas element
            offcanvasElement.classList.remove('show');

            // Remove the backdrop elements
            backdropElements.forEach((backdropElement) => {
                backdropElement.parentNode.removeChild(backdropElement);
            });
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-md d-flex justify-content-between">
        <div class="container-fluid">
            <!-- LOGO -->
            <router-link to="/" class="navbar-brand">
                <img src="../../assets/images/logo.png" alt="logo">
            </router-link>

            <button
                class="navbar-toggler collapsed"
                aria-controls="offcanvasNavbar"
                data-bs-target="#offcanvasNavbar"
                data-bs-toggle="offcanvas"
                type="button"
            >
                <span class="navbar-toggler-icon top-bar"></span>
                <span class="navbar-toggler-icon middle-bar"></span>
                <span class="navbar-toggler-icon bottom-bar"></span>
            </button>

            <!-- Menu -->
            <div
                id="offcanvasNavbar"
                class="offcanvas offcanvas-top offcanvas-scrolling h-100"
                aria-labelledby="offcanvasNavbarLabel"
                tabindex="-1"
            >
                <div class="offcanvas-header justify-content-end m-auto" style="width: 80%;">
                    <button
                        class="btn-close text-reset pt-4"
                        aria-label="Close"
                        data-bs-dismiss="offcanvas"
                        style="font-size: 24px;"
                        type="button"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end align-items-center m-auto">
                        <li class="nav-item">
                            <router-link to="/how-to-start" class="nav-link" @click="dismissOffcanvas">How to start</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/services" class="nav-link" @click="dismissOffcanvas">Services</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/technologies" class="nav-link" @click="dismissOffcanvas">Technologies</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/careers" class="nav-link" @click="dismissOffcanvas">Careers</router-link>
                        </li>
                    </ul>

                    <div class="navbar-contact d-flex align-items-center">
                        <button
                            class="btn btn-outline arrow-button d-flex align-items-center"
                            data-bs-target="#buildTeamModal"
                            data-bs-toggle="modal"
                        >
                            Build a team
                            <span class="arrow"></span>
                        </button>
                        <router-link to="/contact-us" class="nav-link" @click="dismissOffcanvas">Contact us</router-link>
                    </div>
                </div>
            </div>
        </div>
        
    </nav>

    <!-- Modal -->
    <div class="modal fade" id="buildTeamModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <h1>Build a team</h1>
                    <p>We specialize in helping you build a team.</p>

                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputCompany" class="form-label">Company</label>
                            <input type="text" class="form-control" id="inputCompany" placeholder="Placeholder">
                        </div>
                        <div class="col-md-6">
                            <label for="inputName" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="inputName" placeholder="Placeholder">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
nav {
    border-bottom: 1px solid #E1E1E1;
    font-family: 'Poppins';
    font-weight: 200;
    font-size: 18px;
    color: #16205F;
    padding: 5px 0;
    box-sizing: border-box;
}
nav .container-fluid {
    width: 80%;
    padding: 0;
}
.navbar-brand {
    padding: 0;
    margin: 0;
}
.navbar-brand img {
    width: 100%;
}
ul .navbar-nav {
    width: 100%;
    margin: 0;
    padding-left: 20%;
}
.nav-item {
    padding: 0 32px 0 0;
}
.nav-link {
    color: #16205F;
    padding: 0;
    transition: 0.4s;
}.nav-link:hover {
    /* Yellow-Original */
    background: linear-gradient(90deg, #ED7901 0%, #FCB81F 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.btn-outline {
    color: #16205F;
    font-weight: 600;
    outline: 2px solid #16205F;
    margin-right: 25px;
    padding: 5px 24px;
    font-size: 18px;
    text-transform: uppercase;
}
.btn-outline:hover {
    background: #16205F;
    color: #ffffff;
}
.arrow-button .arrow {
    width: 10px;
    height: 10px;
    border-right: 2px solid #16205F;
    border-bottom: 2px solid #16205F;
    position: relative;
    transform: rotate(-45deg);
    margin: 0 10px;
    transition: all .2s ease;
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
    transition: all .1s ease;
    content: "";
    right: 0;
}
.arrow-button:hover .arrow {
    transform: rotate(-45deg) translate(4px, 4px);
    border-color: #FFFFFF;
}
.arrow-button:hover .arrow::before {
    opacity: 1;
    width: 16px;
}
.modal-dialog {
    margin-top: 150px;
    max-width: 1092px;
    font-family: 'Poppins';
}
.modal-dialog .modal-content {
    padding: 58px 70px 590px 70px;
}
.modal-dialog .modal-content .modal-body {
    color: #16205F;
}
.modal-dialog .modal-content .modal-body h1 {
    font-size: 46px;
    font-weight: 600;
    margin-bottom: 21px;
}
.modal-dialog .modal-content .modal-body p {
    font-size: 18px;
    margin: 0;
}
.modal-dialog .modal-content .modal-body form label {
    font-weight: 600;
}
.modal-dialog .modal-content .modal-body form input {
    padding: 20px 8px;
    font-size: 14px;
    margin-bottom: 44px;
    border-radius: 8px;
    border: 1px solid #C5E0FF;
}
.modal-dialog .modal-content .modal-body form .form-control:focus {
    box-shadow: inset 0 0 0;
}
.navbar-toggler {
    border: 0;
}
.navbar-toggler:focus {
    border: 0;
    outline: 0;
}
@media (max-width: 1350px) {
    .btn-outline {
        margin-right: 25px;
        padding: 5px 20px;
        font-size: 16px;
    }
    .nav-item {
        padding: 0 20px 0 0;
    }
}
@media screen and  (max-width: 1273px) {
    nav {
        font-size: 16px;
    }

    .navbar-brand img {
        width: 80%;
    }

    .btn-outline {
        font-size: 16px;
    }
}
@media screen and  (max-width: 1208px) {
    nav {
        font-size: 14px;
    }

    .navbar-brand img {
        width: 65%;
    }

    .nav-item {
        padding: 0 10px 0 0;
    }

    .btn-outline {
        font-size: 12px;
        padding: 3px 6px;
        margin-right: 15px;
    }
}
@media screen and  (max-width: 1014px) {
    nav {
        font-size: 13px;
    }

    .nav-item {
        padding: 0 10px 0 0;
    }

    .btn-outline {
        font-size: 12px;
        padding: 3px 3px;
    }
}
@media screen and  (max-width: 972px) {
    nav {
        font-size: 12px;
    }

    .nav-item {
        padding: 0 10px 0 0;
    }

    .btn-outline {
        font-size: 10px;
        padding: 3px 3px;
    }
    .arrow-button .arrow {
        width: 8px;
        height: 8px;
    }
    .arrow-button:hover .arrow::before {
        opacity: 1;
        width: 14px;
    }
}
@media screen and (max-width: 768px) {
    /* Styles for the dropdown items */
    .navbar-nav {
        padding-top: 80px;
    }
    .navbar-nav .nav-item {
        text-align: center;
        padding: 0;
    }

    .navbar-nav .nav-link {
        display: block;
        padding: 10px 0;
        font-size: 32px;
    }

    .navbar-contact {
        width: 100%;
        margin: 0;
    }
    .navbar-contact .btn-outline {
        color: #ffffff;
        background: linear-gradient(90deg, #FF9900 0%, #F2CB00 100%);
        box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.12);
        border-radius: 8px;
        border: none;
        outline: none;
        width: 100%;
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        line-height: 24px;
        height: 54px;
        text-transform: none;
        margin-top: 60px;
        display: flex;
        justify-content: center;
    }
    .arrow-button .arrow {
        width: 10px;
        height: 10px;
        border-right: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
        position: relative;
        transform: rotate(-45deg);
        margin: 0 10px;
        transition: all .2s ease;
    }

    .navbar-contact a {
        display: none;
    }

    /* Styles for the dropdown toggle button */
    .navbar-toggler {
        display: block;
    }
}
.navbar-toggler span {
    display: block;
    background-color: #4f4f4f;
    height: 3px;
    width: 25px;
    margin-top: 5px;
    margin-bottom: 5px;
    position: relative;
    left: 0;
    opacity: 1;
    transition: all 0.35s ease-out;
    transform-origin: center left;
}
</style>