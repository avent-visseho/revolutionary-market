<template>
    <div class="featured">
        <div class="container">
            <div class="featured-content">
                <div class="featured-content-info">
                    <div class="feactured-subTitle">
                        <h4>Product</h4>
                    </div>
                    <div class="feactured-title">
                        <h2>Our Featured Product</h2>
                    </div>
                    <div class="featured-tiretContent">
                        <TiretHorizontal />
                    </div>
                    <div class="featured-paragraphe">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut reprehenderit hic error modi.
                            Dicta, non illo vel dolorum dolorem vitae dolor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TiretHorizontal from '../tiret/TiretHorizontal.vue';

</script>

<style scoped>
.featured-content {
    text-align: center;
    margin: 65px 0;
    display: flex;
    justify-content: center;
}

.featured-content-info{
    width: 600px;
}

.featured-tiretContent {
    display: flex;
    justify-content: center;
}
</style>