
<template>
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
                        <TiretHorizontal/>
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
                                    <button type="submit">
                                        <SearchVue />
                                    </button>
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
import TiretHorizontal from '../tiret/TiretHorizontal.vue';
</script>

<style scoped>
.banner {
    background-image: url('../../assets/img/banner2c.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 124px);
}

/* .banner-effet{
    background-color: #00000096;
    height: 100%;
} */

.banner-effet {
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


.banner-paragraphe p {
    color: white;
    text-align: center;
    font-size: 12px;
}

.banner-search {
    display: flex;
    align-items: center;
    margin-top: 35px;
}


.banner-search input[type="text"] {
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

.banner-search button {
    width: 65px;
    border-radius: none;
    padding: 5px 15px;
    padding: none;
    text-align: center;
}
</style>