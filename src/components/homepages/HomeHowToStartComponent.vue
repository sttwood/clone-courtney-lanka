<template>
    <div class="container-fluid">
        <div class="homepage-process-title text-center">
            <h5>How to Start</h5>
            <h2>Easy Process</h2>
            <p>
                We specialize in helping you build a team of expert developers, testers, and leaders.
            </p>
        </div>

        <div class="homepage-process-methods d-flex justify-content-between align-items-baseline mt-4">
            <div class="homepage-process-method">
                <img class="img-fluid pb-3" alt="you-get" src="@/assets/svg/Group-1.svg" />
                <div class="homepage-process-method-title d-flex align-items-baseline">
                    <h2>01</h2>
                    <h3>YOU ASK</h3>
                </div>
            </div>

            <div class="homepage-process-method">
                <img class="img-fluid pb-3" alt="we-proceed" src="@/assets/svg/Group.svg" />
                <div class="homepage-process-method-title d-flex align-items-baseline">
                    <h2>02</h2>
                    <h3>WE PROCEED</h3>
                </div>
            </div>

            <div class="homepage-process-method">
                <img class="img-fluid pb-3" alt="negotiate" src="@/assets/svg/handshake.svg" />
                <div class="homepage-process-method-title d-flex align-items-baseline">
                    <h2>03</h2>
                    <h3>NEGOTIATE</h3>
                </div>
            </div>

            <div class="homepage-process-method">
                <img class="img-fluid pb-3" alt="you-get" src="@/assets/svg/medal.svg" />
                <div class="homepage-process-method-title d-flex align-items-baseline">
                    <h2>04</h2>
                    <h3>YOU GET</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
.homepage-process {
    background: linear-gradient(90deg, #FF9900 0%, #F2CB00 100%);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);
    /* height: 590px; */
    width: 100%;
    margin-top: 100px;
    padding-bottom: 90px;
}

.homepage-process .container-fluid {
    width: 80%;
}

.homepage-process .homepage-process-title h2 {
    color: #16205F;
    font-size: 46px;
    font-weight: 600;
    margin: 0;
    padding-top: 22px;
}

.homepage-process .homepage-process-title h5 {
    color: #FFFFFF;
    font-size: 22px;
    padding-top: 75px;
    margin: 0;
}

.homepage-process .homepage-process-title p {
    color: #16205F;
    font-size: 18px;
    margin: 0;
    padding-top: 16px;
}

.homepage-process-method {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #16205F;
}

.homepage-process-method img {
    filter: invert(100%) sepia(63%) saturate(0%) hue-rotate(312deg) brightness(109%) contrast(100%);
    ;
}

.homepage-process-method-title h2 {
    font-weight: 600;
    font-size: 46px;
    padding-right: 10px;
}

.homepage-process-method-title h3 {
    font-weight: 600;
    font-size: 28px;
}

@media screen and (max-width: 1165px) {
    .homepage-process-method-title h2 {
        font-size: 42px;
        padding-right: 10px;
    }

    .homepage-process-method-title h3 {
        font-size: 24px;
    }
}

@media screen and (max-width: 910px) {
    .homepage-process-method img {
        max-width: 120px;
        max-height: 120px;
    }

    .homepage-process-method-title h2 {
        font-size: 30px;
        padding-right: 5px;
    }

    .homepage-process-method-title h3 {
        font-size: 18px;
    }
}

@media (max-width: 768px) {
    .homepage-process .homepage-process-title h2 {
        font-size: 36px;
        color: #FFFFFF;
    }
    .homepage-process .homepage-process-title h5 {
        font-size: 22px;
    }
    .homepage-process .homepage-process-title p {
        font-size: 16px;
        max-width: 252px;
        margin: 0 auto 54px auto;
    }
    .homepage-process-methods {
        flex-direction: column;
        justify-content: center !important;
        align-items: center !important;
    }
    .homepage-process-method {
        margin-bottom: 75px;
    }
    .homepage-process-method-title h2 {
        font-size: 46px;
        padding-right: 10px;
    }

    .homepage-process-method-title h3 {
        font-size: 28px;
    }
}
</style>