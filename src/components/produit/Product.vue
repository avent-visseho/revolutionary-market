<template>
    <div class="productCard">
        <div class="productCard-image">
            <img src="../../assets/img/product1.jpg" alt="">
        </div>
        <div class="productCard-info">
            <div class="product-info-content">
                <div class="product-name">
                    <h5>lotions</h5>
                </div>
                <div class="product-stars">
                    <StarVue />
                    <StarVue />
                    <StarVue />
                </div>
                <div class="product-price">
                    <h5>15.000 FCFA</h5>
                </div>
                <div class="product-btn">
                    <button type="submit" class="product-btn">Ajouter au panier</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import StarVue from '../icons/Star.vue'
</script>

<style scoped>
.productCard {
    padding: 8px;
    border: solid 3px var(--secondary-color );
    border-radius: 2px;
    width: 265px;
    margin: 15px 0;
}

.productCard-info{
    display: flex;
    justify-content: center;
    align-items: baseline;
    text-align: center;
}

.product-stars {
    display: flex;
    justify-content: center;
}
</style>