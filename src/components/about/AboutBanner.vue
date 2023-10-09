<template>
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