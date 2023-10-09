<template>
    <div class="popular-content">
        <div class="popularPicture">
            <img src="../../assets/img/product1.jpg" alt="">
        </div>
        <div class="popularSubtitle">
            <h5>Women Clothing</h5>
            <h5 class="secondPopular-subtitle">Clothing</h5>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.popular-content {
    display: flex;
    gap: 20px;
    margin: 25px 0;
}

.popularPicture {
    width: 80px;
    height: 80px;
}

.secondPopular-subtitle {
    color: var(--secondary-color);
}
</style>