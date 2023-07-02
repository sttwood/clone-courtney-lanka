<template>
    <div class="homepage-head-title">
        <h5>Expertise</h5>
        <h2>Hire Permanent and Remote Developers</h2>
        <p>
            From full-time remote engineering teams to hourly contractors, work with remote devs as needed
        </p>
    </div>

    <div class="homepage-expertise-content row">
        <article class="col">
            <img src="../../assets/svg/link.svg" alt="dedicated-teams">
            <div class="homepage-expertise-content-text">
                <h3>Dedicated Teams</h3>
                <p>Find your next team member</p>
            </div>
        </article>

        <article class="col">
            <img src="../../assets/svg/management.svg" alt="staff-augmentation">
            <div class="homepage-expertise-content-text">
                <h3>Staff Augmentation</h3>
                <p>Build a distributed development team</p>
            </div>
        </article>

        <article class="col">
            <img src="../../assets/svg/outsourcing.svg" alt="software-outsourcing">
            <div class="homepage-expertise-content-text">
                <h3>Software Outsourcing</h3>
                <p>End-to-End Software Development Outsourcing Solutions</p>
            </div>
        </article>

        <article class="col">
            <img src="../../assets/svg/world.svg" alt="remote-office">
            <div class="homepage-expertise-content-text">
                <h3>Remote Office</h3>
                <p>Open your own remote development center and grow your business</p>
            </div>
        </article>
    </div>
</template>

<script>
</script>

<style>
.homepage-expertise {
    margin-top: 100px;
    color: #16205F;
}
.homepage-expertise-content {
    margin-bottom: 120px;
}
.homepage-expertise-content article img {
    background: #FFF856;
    border-radius: 12px;
    padding: 5px;
    margin-bottom: 23px;
}
.homepage-expertise-content-text h3 {
    font-weight: 600;
}
.homepage-expertise-content-text p {
    font-size: 18px;
}

@media screen and (max-width: 1115px) {
    .homepage-expertise-content article img {
        max-width: 74px;
    }
    .homepage-expertise-content-text h3 {
        font-size: 22px;
    }
    .homepage-expertise-content-text p {
        font-size: 16px;
    }
}

@media screen and (max-width: 1005px) {
    .homepage-expertise-content article img {
        max-width: 70px;
    }
    .homepage-expertise-content-text h3 {
        font-size: 20px;
    }
    .homepage-expertise-content-text p {
        font-size: 14px;
    }
}

@media screen and (max-width: 895px) {
    .homepage-expertise-content article img {
        max-width: 65px;
    }
    .homepage-expertise-content-text h3 {
        font-size: 18px;
    }
    .homepage-expertise-content-text p {
        font-size: 12px;
    }
}
</style>