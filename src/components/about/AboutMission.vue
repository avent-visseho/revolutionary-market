<template>
    <div class="AboutMission">
        <div class="container">
            <div class="AboutMission-content">
                <div class="AboutMission-left">
                    <div class="about-first-info-content">
                        <div class="about-title">
                            <h2>Vision & Mission</h2>
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
                            <div class="thirdAbout-paragraphe-content">
                                <div class="thirdAbout-paragraphe-firstContent">
                                    <span>
                                        <ArrowRighttVue />
                                    </span>
                                    <span>
                                        Avent Digital Solution
                                    </span>
                                </div>
                                <div class="thirdAbout-paragraphe-firstContent">
                                    <span>
                                        <ArrowRighttVue />
                                    </span>
                                    <span>
                                        Avent Digital Solution
                                    </span>
                                </div>
                            </div>
                            <div class="thirdAbout-paragraphe-content">
                                <div class="thirdAbout-paragraphe-firstContent">
                                    <span>
                                        <ArrowRighttVue />
                                    </span>
                                    <span>
                                        Avent Digital Solution
                                    </span>
                                </div>
                                <div class="thirdAbout-paragraphe-firstContent">
                                    <span>
                                        <ArrowRighttVue />
                                    </span>
                                    <span>
                                        Avent Digital Solution
                                    </span>
                                </div>
                            </div>
                            <div class="thirdAbout-paragraphe-content">
                                <div class="thirdAbout-paragraphe-firstContent">
                                    <span>
                                        <ArrowRighttVue />
                                    </span>
                                    <span>
                                        Avent Digital Solution
                                    </span>
                                </div>
                                <div class="thirdAbout-paragraphe-firstContent">
                                    <span>
                                        <ArrowRighttVue />
                                    </span>
                                    <span>
                                        Avent Digital Solution
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="AboutMission-right">
                    <div class="AboutMission-rightImage">
                        <img src="../../assets/img/about-image3.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TiretHorizontal from '../tiret/TiretHorizontal.vue';
import VerticalTiretVue from '../tiret/VerticalTiret.vue';
import ArrowRighttVue from '../icons/ArrowRight.vue'
</script>

<style scoped>
.AboutMission-content {
    display: flex;
    gap: 45px;
    margin: 35px 0;
}

.about-first-info-content {
    height: 600px;
   /*  width: 547px; */
}

.AboutMission-rightImage {
    height: 600px;
    width: 520px;
}

.secondAbout-paragraphe {
    margin: 45px 0;
}

.thirdAbout-paragraphe-content {
    width: 100%;
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}

.thirdAbout-paragraphe-firstContent {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>