<template>
    <div>
        <HeaderVue />
    </div>
    <div>
        <NavBarVue />
    </div>
    <div>
        <AboutBannerVue/>
    </div>
    <div>
        <AboutHistoryVue/>
    </div>
    <div>
        <AboutMissionVue/>
    </div>
    <div>
        <FooterVue/>
    </div>
</template>

<script setup>
import HeaderVue from '../components/header/Header.vue';
import NavBarVue from '../components/header/NavBar.vue';
import AboutBannerVue from '../components/about/AboutBanner.vue';
import AboutHistoryVue from '../components/about/AboutHistory.vue'
import AboutMissionVue from '../components/about/AboutMission.vue';
import FooterVue from '../components/footer/Footer.vue'
</script>