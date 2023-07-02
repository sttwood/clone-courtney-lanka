<template>
    <section class="consultation-component container-fluid">
        <img 
            src="../assets/images/desktop/image-connect.png" 
            alt="get-consultation" 
            class="img-fluid"
        />
    
        <div class="get-consultatuib-card card">
            <div class="card-body">
                <h1 class="card-title">Connect With Your Next Great Hire Today!</h1>
                <form>
                    <div class="row">
                        <div class="col">
                            <label for="company" class="form-label">Company</label>
                            <input
                                class="form-control"
                                name="company"
                                placeholder="Enter your company"
                                type="text"
                            />
                        </div>
                        <div class="col">
                            <label for="name" class="form-label">Your Name</label>
                            <input
                                class="form-control"
                                name="name"
                                placeholder="Enter your name"
                                type="text"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="phone_num" class="form-label">Phone Number</label>
                            <input
                                class="form-control"
                                name="phone_num"
                                placeholder="Enter your phone number"
                                type="text"
                            />
                        </div>
                        <div class="col">
                            <label for="email" class="form-label">Email</label>
                            <input
                                class="form-control"
                                name="name"
                                placeholder="Enter your email"
                                type="text"
                            />
                        </div>
                    </div>
                    
                    <label for="project_detail" class="form-label">Project Detail</label>
                    <textarea
                        class="form-control"
                        placeholder="Enter your project detail"
                        name="project_detail"
                        rows="2"
                    ></textarea>
                    
                    <div class="form-check d-flex">
                        <input type="checkbox" class="form-check-input" id="policyCheck">
                        <label for="policyCheck" class="form-check-label">
                            By sending this form I confirm that I have read and accept the 
                            <router-link to="/">Privacy Policy</router-link>
                        </label>
                    </div>

                    <div class="consultation-button">

                        <button class="arrow-button">
                            Get consultation
                            <span class="arrow"></span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.container-fluid {
    width: 80%;
    padding: 0;
    font-family: 'Poppins';
}
.card {
    color: #16205F;
    font-family: Poppins;
    font-size: 16px;
    border-radius: 100px 0px 0px 0px;
    border: none;
    outline: none;
}
.card-title {
    max-width: 528px;
    font-size: 46px;
    margin-bottom: 50px;
    font-weight: 600;
}
.card-body {
    padding: 86px 0px 86px 86px;
}
.consultation-component {
    position: relative;
    margin-bottom: 93px;
}
.consultation-component .get-consultatuib-card {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
}
.get-consultatuib-card label {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
}
.get-consultatuib-card input, textarea {
    padding: 20px;
    font-size: 14px;
    margin-bottom: 44px;
    border-radius: 8px;
    border: 1px solid #C5E0FF;
}
.get-consultatuib-card .form-control:focus {
    box-shadow: inset 0 0 0;
}
.get-consultatuib-card .form-check-input:focus {
    box-shadow: inset 0 0 0;
}
.get-consultatuib-card textarea {
    padding: 20px;
    font-size: 14px;
    margin-bottom: 40px;
    border-radius: 8px;
    border: 1px solid #C5E0FF;
}
.get-consultatuib-card .form-check input:checked {
    background-color: #16205F;
}
.get-consultatuib-card .form-check label {
    max-width: 512px;
    font-weight: 400;
    padding-left: 16px;
    margin-bottom: 20px;
}
.get-consultatuib-card .form-check label a {
    font-weight: 600;
    text-decoration: none;
    color: #16205F;
}
.consultation-button {
    width: 100%;
    display: flex;
    justify-content: start;
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
@media (max-width: 1450px) {
    .card {
        font-size: 16px;
    }
    .card-title {
        max-width: 528px;
        font-size: 36px;
    }
    .get-consultatuib-card label {
        font-size: 16px;
    }
    .get-consultatuib-card input, textarea {
        font-size: 14px;
    }
    .get-consultatuib-card textarea {
        font-size: 14px;
    }
    .card-body {
        max-width: 600px;
        margin: 0 auto;
    }
}
@media (max-width: 1265px) {
    .consultation-component img {
        width: 80%;
    }
    .card-title {
        max-width: 428px;
        font-size: 30px;
        margin-bottom: 25px;
    }
    .get-consultatuib-card label {
        font-size: 16px;
    }
    .get-consultatuib-card input, textarea {
        font-size: 14px;
    }
    .get-consultatuib-card textarea {
        font-size: 14px;
        padding: 10px;
    }
    .get-consultatuib-card input, textarea {
        padding: 10px;
        margin-bottom: 24px;
    }
    .card-body {
        max-width: 500px;
        margin: 0 auto;
        height: 700px;
        padding: 60px 0px 60px 60px;
    }
}
@media (max-width: 1150px) {
    .card-title {
        max-width: 328px;
        font-size: 25px;
        margin-bottom: 15px;
    }
    .get-consultatuib-card label {
        font-size: 14px;
    }
    .get-consultatuib-card input, textarea {
        font-size: 12px;
    }
    .get-consultatuib-card textarea {
        font-size: 12px;
        padding: 10px;
    }
    .get-consultatuib-card input, textarea {
        padding: 10px;
        margin-bottom: 12px;
    }
    .form-check-label {
        font-size: 12px;
    }
    .card-body {
        max-width: 500px;
        height: 600px;
    }
}
@media (max-width: 1000px) {
    .card-title {
        max-width: 278px;
        font-size: 20px;
        margin-bottom: 15px;
    }
    .get-consultatuib-card label {
        font-size: 12px;
    }
    .get-consultatuib-card input, textarea {
        font-size: 12px;
    }
    .get-consultatuib-card textarea {
        font-size: 12px;
        padding: 10px;
    }
    .get-consultatuib-card input, textarea {
        padding: 10px;
        margin-bottom: 12px;
    }
    .form-check-label {
        font-size: 12px;
    }
    .card-body {
        max-width: 450px;
        height: 550px;
    }
}
@media (max-width: 910px) {
    .card-title {
        max-width: 278px;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .get-consultatuib-card label {
        font-size: 12px;
    }
    .get-consultatuib-card input, textarea {
        font-size: 10px;
    }
    .get-consultatuib-card textarea {
        font-size: 10px;
        padding: 10px;
    }
    .get-consultatuib-card input, textarea {
        padding: 10px;
        margin-bottom: 5px;
    }
    .form-check-label {
        font-size: 10px;
    }
    .card-body {
        max-width: 400px;
        height: 500px;
    }
    .arrow-button {
        padding: 10px 20px;
        font-size: 14px;
    }
    .arrow-button .arrow {
        width: 10px;
        height: 10px;
    }
}
</style>