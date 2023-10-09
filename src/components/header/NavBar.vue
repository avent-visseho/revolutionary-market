<template>
    <!-- === NAV === -->
    <nav class="navBar">
        <div class="container">
            <div class="navBar-content">
                <div class="navBarLinks">
                    <ul>
                        <li>
                            <router-link to="/">Accueil</router-link>
                        </li>
                        <li>
                            <router-link to="/about">A propos</router-link>
                        </li>
                        <li>
                            <router-link to="/product">Produits</router-link>
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
</template>

<script setup>
import SearchVue from '../icons/Search.vue'
import UserVue from '../icons/User.vue'
import ShoppingCart from '../icons/ShoppingCart.vue'
</script>

<style scoped>
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
</style>