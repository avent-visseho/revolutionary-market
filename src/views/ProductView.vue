<template>
    <div>
        <HeaderVue />
    </div>
    <div>
        <NavBarVue />
    </div>
    <div>
        <TopBanner />
    </div>
    <div id="filterSearch">
        <div class="container">
            <div class="filterSearch-content">

                <div class="filterSearch-content-title">
                    <p>Hello world welcome</p>
                </div>

                <div class="category-searchBar-content">
                    <div class="category-content">
                        <form action="" method="post">
                            <select name="genr" id="select">
                                <option value="homme" class="options-item"> homme</option>
                                <option value="femme"> femme</option>
                                <option value="bebe"> bébé</option>

                            </select>
                        </form>
                    </div>

                    <div class="filterSearch-content">
                        <div class="Search">
                            <input type="search" placeholder="Search a student">
                            <input type="submit" value="Search" id="searchbtn">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="product-SoughtProduct">
        <div class="container">
            <div class="product-SoughtProduct-content">
                <div class="productContent">
                    <ProductVue />
                    <ProductVue />
                    <ProductVue />
                    <ProductVue />
                    <ProductVue />
                    <ProductVue />
                    <ProductVue />
                    <ProductVue />
                    <ProductVue />
                    <ProductVue />
                    <ProductVue />
                    <ProductVue />
                </div>
                <div class="soughtProduct-content">
                    <div class="soughtProduct-title">
                        <h4>Popular Product</h4>
                    </div>
                    <div class="soughtProduct-titleUnderline">
                        <TiretHorizontalVue />
                    </div>
                    <div class="popularPicture-subtitile-content">
                        <PopularVue/>
                        <PopularVue/>
                        <PopularVue/>
                        <PopularVue/>
                        <PopularVue/>
                        <PopularVue/>
                    </div>
                </div> 
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
import TopBanner from '../components/header/TopBanner.vue';
import ProductVue from '../components/produit/Product.vue';
import TiretHorizontalVue from '../components/tiret/TiretHorizontal.vue';
import PopularVue from '../components/produit/Popular.vue'
import FooterVue from '../components/footer/Footer.vue'
</script>

<style scoped>
/* search style */


.filterSearch-content {
    margin: 35px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.category-searchBar-content {
    display: flex;
    align-items: center;
    gap: 45px;
}

.Search input {
    display: inline-block;
    border: solid 1px #ccc;
    border-right: none;
    height: 38px;
    outline: none;
    padding: 0 15px;
}

#searchbtn {
    border: none;
    cursor: pointer;
    border-radius: 0 4px 4px 0;
    margin-left: -5px;
    color: var(--primary-color);
    font-weight: bold;
    background-color: var(--secondary-color);
}

#select {
    display: inline-block;
    border: solid 1px #ccc;
    background-color: var(--primary-color);
    height: 38px;
    outline: none;
    padding: 0 15px;
    width: 205px;
}

.product-SoughtProduct-content {
    display: flex;
    gap: 25px;
    /*     border: solid 4px red; */
}

.product-SoughtProduct-content .productContent {
    max-width: 820px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
    /*     border: solid blue 4px; */
}

.product-SoughtProduct-content .soughtProduct-content {
    max-width: 291px;
    width: 100%;
}
</style>