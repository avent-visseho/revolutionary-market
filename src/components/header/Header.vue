
<template>
    <!-- === HEADER === -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <span>Plongez dans un monde de shopping unique !</span>
            </div>
        </div>
    </header>
    <!-- === NAV === -->
    <nav class="navBar">
        <div class="container">
            <div class="navBar-content">
                <div class="navBarLinks">
                    <ul>
                        <li>
                            <router-link to="/chemin-de-la-page">Accueil</router-link>
                        </li>
                        <li>
                            <router-link to="/chemin-de-la-page">A propos</router-link>
                        </li>
                        <li>
                            <router-link to="/chemin-de-la-page">Produits</router-link>
                        </li>
                        <li>
                            <router-link to="/chemin-de-la-page">Contact</router-link>
                        </li>

                    </ul>
                </div>
                <div class="navBarLogo">
                    <router-link to=""><img src="../../assets/img/logo2.png" alt=""></router-link>
                </div>
                <div class="navBarIconeLinks">
                    <ul>
                        <li>
                            <router-link to="/chemin-de-la-page">
                                <SearchVue />
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/chemin-de-la-page">
                                <UserVue />
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/chemin-de-la-page">
                                <ShoppingCart />
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- === BANNER === -->
    <div class="banner">
        <div class="banner-effet">
            <div class="banner-effet-content">
                <div class="container">
                    <div class="banner-effet-content">
                        <div class="banner-subtitle">
                            <h4>Ecommerce</h4>
                        </div>
                        <div class="banner-title">
                            <h1>The only Cosmetics <br> You'll Need</h1>
                        </div>
                        <div class="tirets"></div>
                        <div class="banner-paragraphe">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi libero dolores,
                                eius
                                ratione error expedita non laboriosam nam aliquid rem inventore, tempore blanditiis commodi
                                doloribus laborum aut repellendus dicta!</p>
                        </div>
                        <div class="banner-filter-search">
                            <div class="banner-search">
                                <span><input type="text" placeholder="search an article.."></span>
                               <!--  <span>
                                    <select name="" id="">
                                        <option value="">good</option>
                                        <option value="">good</option>
                                        <option value="">good</option>
                                        <option value="">good</option>
                                    </select>
                                </span> -->
                                <span>
                                    <button type="submit"><SearchVue /></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SearchVue from '../icons/Search.vue'
import UserVue from '../icons/User.vue'
import ShoppingCart from '../icons/ShoppingCart.vue'
</script>

<style scoped>
header.header {
    background-color: var(--secondary-color);
}

.header-content {
    display: flex;
    justify-content: center;
    padding: 16px 20px;
}

.header-content span {
    color: var(--primary-color);
    font-weight: bold;
}

nav.navBar {
    background-color: var(--primary-color);
    box-shadow: var(--box-shadow);
}

.navBar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.navBarLinks ul,
.navBarIconeLinks ul {
    display: flex;
    gap: 25px;
}

.navBarLinks ul li a {
    color: var(--secondary-color);
    font-weight: bold;
}

.navBarIconeLinks ul li a {
    color: var(--third-color);
    font-weight: bold;
}

.navBarLogo a {
    display: inline-block;
    width: 90px;
}

.banner {
    background-image: url('../../assets/img/banner2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 124px);
}

/* .banner-effet{
    background-color: #00000096;
    height: 100%;
} */

.banner-effet{
    display: flex;
    justify-content: center;
}

.banner-effet-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: calc(100vh - 124px);
}

.banner-title {
    text-align: center;
}

.banner-subtitle h4 {
    color: var(--secondary-color);
    font-weight: bold;
}

.banner-title h1 {
    color: var(--primary-color);
    margin: 18px 0;
    line-height: 1.3;
}

.tirets {
    width: 100px;
    height: 5px;
    margin: 18px 0;
    background-color: var(--primary-color);
}

.banner-paragraphe p{
    color: white;
    text-align: center;
    font-size: 12px;
}

.banner-search {
    display: flex;
    align-items: center;
    margin-top: 35px;
}


.banner-search input[type="text"]{
    height: 37px;
    width: 230px;
    outline: none;
    padding: 0 12px;
}
/* 
.banner-search select{
    height: 37px;
    width: 85px;
    border: none;
    outline: none;
    padding: 0 12px;
} */

.banner-search button{
    width: 65px;
    border-radius: none;
    padding: 5px 15px;
    padding: none;
    text-align: center;
}
</style>