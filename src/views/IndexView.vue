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
        <ServiceAbout />
    </div>
    <div>
        <AboutHistoryVue />
    </div>
    <div>
        <FeaturedVue />
    </div>
    <div class="product">
        <div class="container">
            <div class="product-content">
                <ProductVue />
                <ProductVue />
                <ProductVue />
                <ProductVue />
                <ProductVue />
                <ProductVue />
                <ProductVue />
                <ProductVue />
            </div>
        </div>
    </div>
    <div>
        <FooterVue/>
    </div>
</template>

<script setup>
import HeaderVue from '../components/header/Header.vue';
import NavBarVue from '../components/header/NavBar.vue';
import BannerVue from '../components/header/Banner.vue';
import ServiceAbout from '../components/about/ServiceAbout.vue';
import AboutHistoryVue from '../components/about/AboutHistory.vue';
import FeaturedVue from '../components/produit/Featured.vue';
import ProductVue from '../components/produit/Product.vue';
import FooterVue from '../components/footer/Footer.vue'
</script>

<style scoped>
.product-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>