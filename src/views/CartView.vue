<template>
    <div>
        <HeaderVue />
    </div>
    <div>
        <NavBarVue />
    </div>
    <div>
        <TopBannerVue />
    </div>
    <div class="cart">
        <div class="container">
            <div class="cart-content">
                <div class="cart-table">
                    <table>
                        <thead>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Increment Product</th>
                            <th>Cost Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span>
                                        <img src="../assets/img/about-image2.jpg" alt="">
                                    </span>
                                </td>
                                <td>avent</td>
                                <td>15000 fcfa</td>
                                <td class="incrementCart">
                                    <button>+</button>
                                    <button>1</button>
                                    <button>-</button>
                                </td>
                                <td>15000 fcfa</td>
                            </tr>
                            <tr>
                                <td>
                                    <span>
                                        <img src="../assets/img/about-image2.jpg" alt="">
                                    </span>
                                </td>
                                <td>avent</td>
                                <td>15000 fcfa</td>
                                <td class="incrementCart">
                                    <button>+</button>
                                    <button>1</button>
                                    <button>-</button>
                                </td>
                                <td>15000 fcfa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="cartAdd-orderArticles-btn-content">
                    <button>Add Order Articles</button>
                    <button>Add Order Articles</button>
                </div>
            </div>
        </div>
    </div>
    <div class="cartRessu">
        <div class="container">
            <div class="cartRessu-content">
                <div class="ressu-contentLeft">
                    <div class="cardRessu">
                        <p>Welcome to Avent <span>Avent Digitl Innovation, nous vous remercions</span></p>
                    </div>
                </div>
                <div class="ressu-contentRight">
                    <div class="productLenght-content">
                        <div class="productLenght">
                            <span>Nombre de produit</span>
                        </div>
                        <div class="productPrice">
                            <span>22500 fcfa</span>
                        </div>
                    </div>
                    <div class="productLenght-content">
                        <div class="productLenght">
                            <span>Nombre de produit</span>
                        </div>
                        <div class="productPrice">
                            <span>22500 fcfa</span>
                        </div>
                    </div>
                    <div class="ressuBuy-content">
                        <button>Buy Articles</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <FeaturedVue />
    </div>
    <div class="cartProduct">
        <div class="container">
            <div class="cartProduct-content">
                <ProductVue />
                <ProductVue />
                <ProductVue />
                <ProductVue />
            </div>
        </div>
    </div>
    <div>
        <FooterVue />
    </div>
</template>

<script setup>
import HeaderVue from '../components/header/Header.vue';
import NavBarVue from '../components/header/NavBar.vue';
import TopBannerVue from '../components/header/TopBanner.vue';
import FeaturedVue from '../components/produit/Featured.vue'
import ProductVue from '../components/produit/Product.vue'
import FooterVue from '../components/footer/Footer.vue'
</script>

<style scoped>
.cart {
    margin: 35px 0;
}

.cart-table table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

.cart-table table th,
.cart-table table td {
    padding: 15px;
    text-align: center;
}

tbody tr td span img {
    max-width: 40px;
    max-height: 40px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

tbody tr .incrementCart button {
    display: inline-block;
    width: 55px;
    margin: 0 3px;
    font-weight: bold;
    background: none;
    padding: 2px 8px;
    cursor: pointer;
    border: none;
}

tbody tr .incrementCart :nth-child(1) {
    border: solid 2px #ccc;
    cursor: pointer;
}

tbody tr .incrementCart :nth-child(3) {
    border: solid 2px #ccc;
    cursor: pointer;
}

.cartAdd-orderArticles-btn-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cartAdd-orderArticles-btn-content button {
    padding: 10px 12px;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    color: var(--primary-color);
    font-weight: bold;
    background-color: var(--secondary-color);
}

.cardRessu {
    background-color: #eeeeee;
    padding: 10px 10px;
}

.cardRessu p span {
    color: var(--secondary-color);
    font-weight: bold;
}

.cartRessu-content {
    display: flex;
    /*   align-items: center; */
    justify-content: space-between;

}

.productLenght-content {
    display: flex;
    padding: 10px 10px;
    justify-content: space-between;
    width: 500px;
    font-weight: bold;
}

.ressu-contentRight {
    background-color: var(--primary-color);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 10px 25px;
}

.ressuBuy-content {
    margin-top: 25px;
}

.ressuBuy-content button {
    width: 100%;
    padding: 10px 12px;
    border-radius: 2px;
    border: none;
    color: var(--primary-color);
    font-weight: bold;
    background-color: var(--secondary-color);
}

.cartProduct-content {
    display: flex;
    gap: 35px;
}
</style>