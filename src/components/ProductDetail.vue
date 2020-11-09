<template>
    <v-container>
        <v-row>
            <v-col cols="2"><v-btn>Ürün Açıklaması</v-btn></v-col>
            <v-col cols="2" style="margin-left: -20px"><v-btn>Yorumlar</v-btn></v-col>
            <v-col cols="2" style="margin-left: -70px"><v-btn>Taksit Seçenekleri</v-btn></v-col>
            <v-col cols="2"><v-btn>İlgili Ürünler</v-btn></v-col>
            <v-col cols="5"></v-col>
        </v-row>
        <v-row>
            <v-textarea
                    outlined
                    name="input-7-4"
                    background-color="#d1e1f0"
                    height="30"
                    value="Ürüne ait yorum bulunamamıştır."
            ></v-textarea>
        </v-row>
        <v-row>
            <v-col cols="4">Adınız
            <br>
                <v-textarea
                        solo
                        name="input-7-4"
                        height="4"
                ></v-textarea>
            </v-col>
        </v-row>
                <v-row style="margin-top: -45px"><v-col cols="4">E-Posta Adresiniz
                <br>
                <v-textarea
                        solo
                        name="input-7-4"
                        height="10"
                ></v-textarea>
                </v-col>
                </v-row>
        <v-row style="margin-top: -45px"><v-col cols="4">Güvenlik resmi
            <br><span style="font-size: 12px">Lütfen resimdeki 3 karakterli yazıyı kutuya sırasıyla yazınız.</span>
        </v-col></v-row>
        <v-row>
            <v-col cols="4"><vue-recaptcha sitekey="Your key here" :loadRecaptchaScript="true"></vue-recaptcha></v-col>
               <v-col style="margin-left: -90px">
                   <v-textarea solo
                   height="20"
                   style="width: 100px"></v-textarea>
               </v-col>
        </v-row>
        <v-row>
            <v-btn
                    style="font-size: 22px; width: 380px; height: 30px;margin-top: 20px"
            >TAMAM
            </v-btn>
        </v-row>

    </v-container>
</template>

<script>
    import VueRecaptcha from 'vue-recaptcha';
    export default {
        components: { VueRecaptcha }
    }
</script>

<style scoped>

</style>