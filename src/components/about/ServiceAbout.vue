<template>
    <div class="aboutServices">
        <div class="container">
            <div class="service-content">
                <div class="freeShopping">
                    <span>
                        <HeadPhone />
                    </span>
                    <div class="shopping-content">
                        <h4>Free Shopping</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur! <br>
                            Lorem ipsum, dolor sit</p>
                    </div>
                </div>
                <div class="freeShopping">
                    <span>
                        <HeadPhone />
                    </span>
                    <div class="shopping-content">
                        <h4>Save up to 25%</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur! <br>
                            Lorem ipsum, dolor sit</p>
                    </div>
                </div>
                <div class="freeShopping">
                    <span>
                        <HeadPhone />
                    </span>
                    <div class="shopping-content">
                        <h4>24/7 </h4>
                        <p>Lorem ipsum, dolor sit amet consectetur! <br>
                            Lorem ipsum, dolor sit</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.service-content {
    margin: 35px 0;
    display: flex;
    justify-content: space-between;
}

.freeShopping {
    display: flex;
    gap: 8px;
}

.shopping-content h4 {
    color: var(--secondary-color);
}
</style>