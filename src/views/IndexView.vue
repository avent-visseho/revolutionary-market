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
        <AboutHistoryVue />
    </div>
</template>

<script setup>
import HeaderVue from '../components/header/Header.vue';
import NavBarVue from '../components/header/NavBar.vue';
import BannerVue from '../components/header/Banner.vue';
import AboutHistoryVue from '../components/about/AboutHistory.vue';
</script>