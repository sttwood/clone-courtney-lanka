<template>
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">Building dev team, Quickly and Affordably</h1>
                <p class="card-text">
                    We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to
                    deliver long term solutions, or scale to different needs quickly.
                </p>
                <button class="arrow-button">
                    Build a team
                    <span class="arrow"></span>
                </button>
            </div>
        </div>

        <img src="../../assets/images/desktop/homepage/header-homepage.png" alt="homepage-header-image" class="img-fluid">
</template>

<script>
</script>

<style>
.homepage-header {
    position: relative;
    margin-top: 30px;
}

.homepage-header .card {
    max-width: 730px;
    max-height: 584px;
    border: none;
    outline: none;
    border-radius: 0px 100px 0px 0px;
    color: #16205F;
    padding: 50px 105px 40px 0px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 0;
}

.homepage-header .card-body {
    padding: 0;
}

.homepage-header .card-title {
    font-weight: 600;
    font-size: 64px;
    /* line-height: 78px; */
}

.homepage-header .card-text {
    font-size: 24px;
    /* line-height: 36px; */
}

@media screen and (max-width: 1400px) {
    .homepage-header img {
        width: 85%;
    }

    .homepage-header .card {
        max-width: 630px;
        max-height: 484px;
        padding: 50px 95px 40px 0px;
    }

    .homepage-header .card-title {
        font-size: 50px;
    }

    .homepage-header .card-text {
        font-size: 20px;
    }
}

@media screen and (max-width: 1250px) {
    .homepage-header img {
        width: 80%;
    }

    .homepage-header .card {
        max-width: 630px;
        max-height: 384px;
        padding: 40px 95px 40px 0px;
    }

    .homepage-header .card-title {
        font-size: 45px;
    }

    .homepage-header .card-text {
        font-size: 20px;
    }

    .homepage-header .card .arrow-button {
        font-size: 12px;
        padding: 10px 25px;
    }
}

@media screen and (max-width: 1100px) {
    .homepage-header img {
        width: 80%;
    }

    .homepage-header .card {
        max-width: 530px;
        max-height: 384px;
        padding: 30px 85px 40px 0px;
    }

    .homepage-header .card-title {
        font-size: 40px;
    }

    .homepage-header .card-text {
        font-size: 16px;
    }

}

@media screen and (max-width: 1050px) {
    .homepage-header img {
        width: 75%;
    }

    .homepage-header .card {
        max-width: 460px;
        max-height: 384px;
        padding: 30px 85px 40px 0px;
    }

    .homepage-header .card-title {
        font-size: 30px;
    }

    .homepage-header .card-text {
        font-size: 14px;
    }

}

@media screen and (max-width: 960px) {
    .homepage-header img {
        width: 75%;
    }

    .homepage-header .card {
        max-width: 430px;
        max-height: 284px;
        padding: 30px 75px 40px 0px;
    }

    .homepage-header .card-title {
        font-size: 30px;
    }

    .homepage-header .card-text {
        font-size: 14px;
    }

    .homepage-header .card .arrow-button {
        font-size: 12px;
        padding: 10px 25px;
    }
}

@media screen and (max-width: 880px) {
    .homepage-header img {
        width: 75%;
    }

    .homepage-header .card {
        max-width: 350px;
        max-height: 224px;
        padding: 30px 75px 40px 0px;
    }

    .homepage-header .card-title {
        font-size: 24px;
    }

    .homepage-header .card-text {
        font-size: 12px;
    }

    .homepage-header .card .arrow-button {
        font-size: 12px;
        padding: 5px 10px;
    }
}

/* Arrow button */
.homepage-header .arrow-button {
    display: flex;
    color: #FFFFFF;
    background: linear-gradient(90deg, #FF9900 0%, #F2CB00 100%);
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    border: none;
    outline: none;
    transition: all .3s ease;
    font-weight: 600;
    cursor: pointer;
    align-items: center;
    font-size: 16px;
    padding: 15px 30px;
}

.homepage-header .arrow-button .arrow {
    width: 10px;
    height: 10px;
    border-right: 2px solid #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    position: relative;
    transform: rotate(-45deg);
    margin: 0 10px;
    transition: all .3s ease;
}

.homepage-header .arrow-button .arrow::before {
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

.homepage-header .arrow-button:hover .arrow {
    transform: rotate(-45deg) translate(4px, 4px);
    border-color: text-hover-color;
}

.homepage-header .arrow-button:hover .arrow::before {
    opacity: 1;
    width: 16px;
}
</style>