<template>
    <div>
        <HeaderVue />
    </div>
    <div>
        <NavBarVue />
    </div>
    <div>
        <BannerVue />
    </div>
    <div>
        <ServiceAbout/>
    </div>
    <div>
        <AboutHistoryVue />
    </div>
    <FeaturedVue/>
</template>

<script setup>
import HeaderVue from '../components/header/Header.vue';
import NavBarVue from '../components/header/NavBar.vue';
import BannerVue from '../components/header/Banner.vue';
import ServiceAbout from '../components/about/ServiceAbout.vue';
import AboutHistoryVue from '../components/about/AboutHistory.vue';
import FeaturedVue from '../components/produit/Featured.vue';
</script>