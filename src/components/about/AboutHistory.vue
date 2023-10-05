<template>
    <div class="aboutHistory">
        <div class="container">
            <!-- about history -->
            <div class="AboutHistory-content">
                <div class="about-history-left">
                    <div class="about-first-image-content">
                        <img src="../../assets/img/about-image1.jpg" alt="">
                    </div>
                </div>
                <div class="about-history-right">
                    <div class="about-first-info-content">
                        <div class="about-midle-title">
                            <h3>About</h3>
                        </div>
                        <div class="about-title">
                            <h2>Litle History About Us</h2>
                            <TiretHorizontal />
                        </div>
                        <div class="firstAbout-paragraphe">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem laudantium dolorum
                                impedit aspernatur, enim qui assumenda iure laboriosam.</p>
                        </div>
                        <div class="secondAbout-paragraphe">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem laudantium dolorum
                                impedit aspernatur, enim qui assumenda iure laboriosam.Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Similique rem laudantium dolorum
                                impedit aspernatur, enim qui assumenda iure laboriosam.</p>
                        </div>
                        <div class="thirdAbout-paragraphe">
                            <VerticalTiretVue />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem laudantium dolorum
                                impedit aspernatur, enim qui assumenda iure laboriosam.Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Similique rem laudantium dolorum
                                impedit aspernatur, enim qui assumenda iure laboriosam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeadPhone from '../icons/HeadPhone.vue'
import TiretHorizontal from '../tiret/TiretHorizontal.vue';
import VerticalTiretVue from '../tiret/VerticalTiret.vue';
</script>

<style scoped>

.AboutHistory-content  {
    margin: 35px 0;
    display: flex;
    gap: 45px;
}

.about-first-image-content {
    height: 600px;
    width: 520px;
}

.about-first-info-content {
    height: 600px;
}

.secondAbout-paragraphe {
    margin: 45px 0;
}

.thirdAbout-paragraphe{
    display: flex;
    gap: 15px;
}
</style>