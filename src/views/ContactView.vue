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
    <div class="contactForm-CartMap">
        <div class="container">
            <div class="contactForm-cartMap-title">
                <h4>Contact</h4>
            </div>
            <div class="contactForm-CartMap-content">
                <div class="cartMap-content">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.043487481813!2d2.3793707740625156!3d6.388390024720587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023559dc98dc347%3A0x8c812e28a5d8ee4a!2sBloLab!5e0!3m2!1sfr!2sbj!4v1697101954653!5m2!1sfr!2sbj"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="contactForm-content">
                    <div class="contactForm-title">
                        <h2>Get In touch</h2>
                    </div>
                    <div class="contactForm-title-underline">
                        <TiretHorizontalVue />
                    </div>
                    <div class="contactForm-paragraphe-description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, autem nobis. Vitae
                            laudantium pariatur repellat. Deserunt exercitationem, facere, dicta explicabo asperiores,
                            obcaecati ut iure non provident earum nemo aut facilis.</p>
                    </div>
                    <div class="contactForm">
                        <form action="">
                            <div class="input-field">
                                <input type="text" placeholder="Enter your Name">
                            </div>
                            <div class="input-field">
                                <input type="text" placeholder="Enter the Object">
                            </div>
                            <div class="input-field">
                                <textarea name="" id="" cols="30" rows="10" placeholder="Enter the message"></textarea>
                            </div>
                            <div class="input-field">
                                <input type="submit" value="Send">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="orderContact-services">
        <div class="container">
            <div class="orderContact-services-content">
                <div class="orderContact-card">
                    <div class="orderContact-cardIcone-content">
                        <HeadPhoneVue />
                    </div>
                    <div class="orderContact-cardInfo-content">
                        <div class="orderContact-cardInfo-title">
                            <h4>Phone</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elitm.</p>
                        </div>
                    </div>
                </div>
                <div class="orderContact-card">
                    <div class="orderContact-cardIcone-content">
                        <HeadPhoneVue />
                    </div>
                    <div class="orderContact-cardInfo-content">
                        <div class="orderContact-cardInfo-title">
                            <h4>Mail</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elitm.</p>
                        </div>
                    </div>
                </div>
                <div class="orderContact-card">
                    <div class="orderContact-cardIcone-content">
                        <HeadPhoneVue />
                    </div>
                    <div class="orderContact-cardInfo-content">
                        <div class="orderContact-cardInfo-title">
                            <h4>Tweet</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elitm.</p>
                        </div>
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
import TopBannerVue from '../components/header/TopBanner.vue';
import TiretHorizontalVue from '../components/tiret/TiretHorizontal.vue';
import HeadPhoneVue from '../components/icons/HeadPhone.vue';
import FooterVue from '../components/footer/Footer.vue';
</script>

<style scoped>
.contactForm-CartMap-content {
    display: flex;
    gap: 35px;
}

.cartMap-content {
    max-width: 550px;
    width: 100%;
}

.contactForm-content {
    max-width: calc(100% - 550px);
    width: 100%;
}

.contactForm-cartMap-title {
    margin: 25px 0;
    text-align: center;
    color: var(--secondary-color);
}

.contactForm-CartMap {
    margin: 35px 0;
}

.input-field {
    margin: 15px 0;
}

.input-field input,
textarea {
    display: inline-block;
    width: 100%;
    padding: 15px;
    border: solid 2px #ccc;
    outline: none;
}

.input-field input {
    height: 50px;
}

.contactForm form input[type="submit"] {
    background-color: var(--secondary-color);
    border: none;
    font-weight: bold;
    color: var(--primary-color);
}

.orderContact-services{
    padding: 25px 0;
    background-color: var(--secondary-color);
}

.orderContact-services-content{
    display: flex;
    align-items: center;
    gap: 35px;
}

.orderContact-card{
    background-color: var(--primary-color);
    display: flex;
    padding: 12px;
    align-items: center;
}

.orderContact-cardIcone-content{
    height: 55px;
    max-width: 55px;
    margin: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>