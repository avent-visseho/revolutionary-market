<template>
    <div id="aboutBanner">
        <div class="aboutBanner-content">
            <div class="aboutBanner-contentInfo">
                <div class="about-title">
                    <h1>About</h1>
                </div>
                <div class="aboutBanner-tirets">
                    <TiretHorizontalVue />
                </div>
                <div class="aboutBanner-paragraphe">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur</p>
                </div>
            </div>
        </div>
    </div>
    <section class="aboutBanner-beauty">
        <div class="container">
            <div class="aboutBanner-beauty-content">
                <div class="Beauty-item">
                    <img src="../../assets/img/banner1.jpg" alt="">
                </div>
                <div class="Beauty-item">
                    <img src="../../assets/img/aboutBanner2.jpg" alt="">
                </div>
                <div class="Beauty-item">
                    <img src="../../assets/img/banner2.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import TiretHorizontalVue from '../tiret/TiretHorizontal.vue'
</script>

<style scoped>
#aboutBanner {
    background: url('../../assets/img/aboutBanner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    background-position: center;
}

.aboutBanner-content {
    text-align: center;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    color: var(--primary-color);
    font-weight: bold;
}

.aboutBanner-tirets{
    display: flex;
    justify-content: center;
}

.aboutBanner-beauty-content{
    display: flex;
   /*  flex-wrap: wrap; */
    gap: 25px;
    margin: 65px 0;
}

.Beauty-item{
    overflow: hidden;
    border-radius: 4px;
    width: 33%;
    height: 350px;
}
</style>