<template>
    <div>
        <HeaderVue />
    </div>
    <div>
        <NavBarVue />
    </div>
    <div class="detailMenu-items">
        <div class="container">
            <div class="detailMenu-item-content">
                <ul>
                    <li>
                        <router-link to="#">FIRST</router-link>
                    </li>
                    <li>
                        <router-link to="#">| SECOND |</router-link>
                    </li>
                    <li>
                        <router-link to="#">THIRD</router-link>
                    </li>
                </ul>
            </div>
            <div class="detailMenu-item-horizontalUnderline">
                <hr>
            </div>
            <div class="detail-image-info-content">
                <div class="deatail-image-content">
                    <img src="../assets/img/f3.jpg" alt="">
                </div>
                <div class="detail-info-content">
                    <div class="detail-info-title">
                        <h2>Eye shadow</h2>
                    </div>
                    <div class="detail-info-start-content">
                        <div class="stars-content">
                            <StarVue />
                            <StarVue />
                            <StarVue />
                        </div>
                        <div class="stars-comment">
                            <p>Avent digital solution</p>
                        </div>
                    </div>
                    <div class="detail-info-price">
                        <h2>27 500 FCFA</h2>
                    </div>
                    <div class="detail-info-detail-paragraphe">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur
                            adipisicing elitm elitm?</p>
                    </div>
                    <div class="detail-info-articleNumber-form">
                        <form action="" class="detail-info-articleNumber">
                            <div class="articleNumberIncrementation">
                                <input type="number" value="0">
                            </div>
                            <div class="articleSubmit-btn">
                                <input type="submit" value="Add to Cart">
                            </div>
                        </form>
                    </div>
                    <div class="detail-share-product-content">
                        <div class="detail-share-product-title">
                            <h4>Share product</h4>
                        </div>
                        <div class="detail-share-product-socialIcone">
                            <TweeterVue />
                            <LinkedinVue />
                            <InstagramVue />
                        </div>
                    </div>
                </div>
            </div>
            <div class="detailDescription-content">
                <div class="detailDescription-subtitle">
                    <div class="detailDescription-subtitle-first">
                        <h5>digit Avent</h5>
                    </div>
                    <div class="detailDescription-subtitle-second">
                        <h5>digit Avent</h5>
                    </div>
                </div>
                <div class="detailDescription-title">
                    <h4>Description</h4>
                </div>
                <div class="detailDescription-paragraphe">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio consequatur dolorem laborum
                        commodi beatae neque doloribus voluptates ad excepturi ducimus possimus, non eaque tempora culpa
                        inventore officia aliquid minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                        distinctio consequatur dolorem laborum
                        commodi beatae neque doloribus voluptates ad excepturi ducimus possimus, non eaque tempora culpa
                        inventore officia aliquid minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                        distinctio consequatur dolorem laborum
                        commodi beatae neque doloribus voluptates ad excepturi ducimus possimus, non eaque tempora culpa
                        inventore officia aliquid minima.</p>
                </div>
            </div>
        </div>
        <div>
            <FeaturedVue />
        </div>
        <div class="detailProduct-product">
            <div class="container">
                <div class="detailProduct-product-content">
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
    </div>
</template>

<script setup>
import HeaderVue from '../components/header/Header.vue';
import NavBarVue from '../components/header/NavBar.vue';
import StarVue from '../components/icons/Star.vue';
import TweeterVue from '../components/icons/Tweeter.vue';
import LinkedinVue from '../components/icons/Linkedin.vue'
import InstagramVue from '../components/icons/Instagram.vue';
import FeaturedVue from '../components/produit/Featured.vue'
import ProductVue from '../components/produit/Product.vue';
import FooterVue from '../components/footer/Footer.vue'
</script>

<style scoped>
.detailMenu-items {
    margin: 25px 0;
}

.detailMenu-item-content ul {
    display: flex;
    gap: 15px;
}

.detail-image-info-content {
    display: flex;
    gap: 25px;
}

.deatail-image-content {
    max-width: 480px;
    width: 100%;
    height: 600px;
}

.detail-info-content {
    max-width: 540px;
    width: 100%;
    padding: 25px;
    height: 600px;
}

.detail-info-start-content,
.stars-content {
    display: flex;
    margin: 10px 0;
    gap: 15px;
    align-items: center;
}

.stars-content {
    gap: 5px;
}

.detail-info-detail-paragraphe {
    margin: 15px 0;
}

.detail-info-articleNumber {
    display: flex;
    align-items: center;
    gap: 15px;
}

.articleNumberIncrementation input {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: solid 2px var(--secondary-color);
    border-radius: 5px;
    text-align: center;
}

.articleSubmit-btn input {
    display: inline-block;
    width: 245px;
    cursor: pointer;
    height: 40px;
    color: var(--primary-color);
    font-weight: bold;
    border: none;
    border-radius: 2px;
    background-color: var(--secondary-color);
}

.detail-share-product-content {
    margin: 35px 0;
}

.detail-share-product-socialIcone {
    display: flex;
    align-items: center;
    margin: 35px 0;
    gap: 20px;
}

.detailDescription-content {
    margin: 35px 0;

}

.detailDescription-subtitle {
    display: flex;
    align-items: center;
    gap: 25px;
}

.detailDescription-title {
    margin: 35px 0;
    color: var(--secondary-color);
}

.detailProduct-product-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>