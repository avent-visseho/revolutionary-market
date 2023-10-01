<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footerLogo">
                    <img src="../../assets/img/logo2.png" alt="">
                </div>
                <div class="footer-colonnes-content">
                    <div class="footer-colonnes">
                        <div class="colonnesTitle">
                            <h4>
                                <TiretHorizontalVue />
                            </h4>
                        </div>
                        <div class="colonnesParagraphe">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perferendis possimus magnam
                                magnam
                                !</p>
                        </div>
                        <div class="colonnneIco">
                            <TweeterVue class="icoColor" />
                            <InstagramVue class="icoColor" />
                            <FacebookVue class="icoColor" />
                            <MailVue class="icoColor" />
                        </div>
                    </div>
                    <div class="footer-colonnes">
                        <div class="colonnesTitle">
                            <h4>
                                Contact
                            </h4>
                        </div>
                        <div class="colonnesParagraphe">
                            <span>
                                <MapVue class="icoColor" />
                            </span>
                            <span>
                                Ouidah (Pahou) von en face de l'ex Musée Avimadjessi
                            </span>
                        </div>
                        <div class="colonnneIco">
                            <span>
                                <PhoneVue class="icoColor" />
                            </span>
                            <span>
                                (00229) 91 26 28 20
                            </span>
                        </div>
                        <div class="colonnneIco">
                            <span>
                                <MailVue class="icoColor" />
                            </span>
                            <span>
                                <router-link to="mailto">aventvisseho@gmail.com</router-link>
                            </span>
                        </div>
                    </div>
                    <div class="footer-colonnes">
                        <div class="colonnesTitle">
                            <h4>
                                Quick Link
                            </h4>
                        </div>
                        <div class="colonnesParagraphe">
                            <router-link to="">Acceuil</router-link>
                        </div>
                        <div class="colonnneIco">
                            <router-link to="">A propos</router-link>
                        </div>
                        <div class="colonnneIco">
                            <router-link to="">Produits</router-link>
                        </div>
                        <div class="colonnneIco">
                            <router-link to="">Contact</router-link>
                        </div>
                    </div>
                    <div class="footer-colonnes">
                        <div class="colonnesTitle">
                            <h4>
                                Compagny
                            </h4>
                        </div>
                        <div class="colonnesParagraphe">
                            <span>
                                <MapVue class="icoColor" />
                            </span>
                            <span>
                                Ouidah (Pahou) von en face de l'ex Musée Avimadjessi
                            </span>
                        </div>
                        <div class="colonnneIco">
                            <span>
                                <PhoneVue class="icoColor" />
                            </span>
                            <span>
                                (00229) 91 26 28 20
                            </span>
                        </div>
                        <div class="colonnneIco">
                            <span>
                                <MailVue class="icoColor" />
                            </span>
                            <span>
                                <router-link to="mailto">aventvisseho@gmail.com</router-link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="horizontalTirets-footer">
                <hr>
            </div>
            <div class="footBottom-content">
                <div class="leftFoot">
                    © Avent Digital Solution | tout droit réservé 
                </div>
                <div class="rightFoot">
                    <span>Privacy</span>
                    <span>Politique</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import TiretHorizontalVue from '../tiret/TiretHorizontal.vue';
import TweeterVue from '../icons/Tweeter.vue';
import InstagramVue from '../icons/Instagram.vue'
import FacebookVue from '../icons/Facebook.vue'
import MailVue from '../icons/Mail.vue'
import MapVue from '../icons/Map.vue'
import PhoneVue from '../icons/Phone.vue'
</script>


<style scoped>
.footer {
    margin-top: 55px;
    background-color: rgb(255, 255, 255);
    /* background-color: var(--primary-color); */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.footerLogo {
    display: inline-block;
    width: 90px;
}

.footer-colonnes-content {
    display: flex;
    gap: 50px;
}

.footer-colonnes {
    width: 245px;
}

.colonnneIco {
    display: flex;
    margin-top: 15px;
    gap: 18px;
}

.colonnesParagraphe {
    display: flex;
    gap: 15px;
    align-items: center;
}

hr{
    height: 5px;
    background-color: var(--secondary-color);
    border: none;
    margin: 25px 0;
}

.footBottom-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.rightFoot{
    display: flex;
    align-items: center;
    gap: 25px;
}
</style>