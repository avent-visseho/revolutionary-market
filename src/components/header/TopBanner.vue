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
</style>