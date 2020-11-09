<template>
    <v-container>
        <v-row>
            <v-col cols="2" style="margin-top: 12px; margin-left: 18px">Adınız *</v-col>
            <v-col cols="4" style="margin-left: -118px">
                <v-textarea
                        solo
                        name="input-7-4"
                        height="10"
                ></v-textarea>

            </v-col>
            <v-col style="margin-left: 240px;margin-top: 20px" class="yazi">
                <p><b>E-Bülten</b></p>
                <p>Periyodik olarak e-posta adresiniz aracılığıyla sizinle iletişim kurulsun mu?</p>
            </v-col>


        </v-row>
        <v-row style="margin-top: -30px">
            <v-col cols="2" style="margin-top: 12px">Soyadınız *</v-col>
            <v-col cols="4" style="margin-left: -100px">
                <v-textarea
                        solo
                        name="input-7-4"
                        height="10"
                ></v-textarea>

            </v-col>
            <v-col style="margin-left: 240px;margin-top: 20px" class="yazi">
                <v-checkbox
                        v-model="ex4"

                        color="black"
                        value="true"
                        hide-details>
                    <template v-slot:label>
                        <span class="yazi">Evet, modamuzik.com yeniliklerinden haberdar olmak istiyorum.</span>
                    </template>
                </v-checkbox>
                <v-checkbox
                        v-model="ex4"
                        color="black"
                        value="true"
                        hide-details>
                    <template v-slot:label>
                        <span class="yazi2">
                            Üyelik sözleşmesini
                        </span>
                        <span style="color: white">a</span>
                        <span class="yazi">okudum ve kabul ediyorum.</span>
                    </template>
                </v-checkbox>

            </v-col>

        </v-row>
        <v-row style="margin-top: -50px">
            <v-col cols="2" style="margin-top: 12px; margin-left: -50px">E-Posta Adresiniz *</v-col>
            <v-col cols="4" style="margin-left: -48px">
                <v-textarea
                        solo
                        name="input-7-4"
                        height="10"
                ></v-textarea>
            </v-col>
            <v-col style="margin-left: 240px;margin-top: 50px">
                <v-btn
                        style="font-size: 22px; background-color: #444; color: white; width: 260px; height: 40px"
                >ÜYE OL
                </v-btn>

            </v-col>
        </v-row>
        <v-row style="margin-top: -30px">
            <v-col cols="2" style="margin-top: 12px; margin-left: 10px">Şifreniz *</v-col>
            <v-col cols="4" style="margin-left: -108px">
                <v-textarea
                        solo
                        name="input-7-4"
                        height="10"
                ></v-textarea>
            </v-col>
            <v-col style="margin-left: 240px;margin-top: 50px">
                <span class="yazi" style="color: red!important;">* Zorunlu bilgi alanlarını gösterir. Lütfen bu bilgileri giriniz.
                </span>

            </v-col>
        </v-row>
        <v-row style="margin-top: -30px">
            <v-col cols="2" style="margin-top: 12px; margin-left: -23px">Cep Telefonu *</v-col>
            <v-col cols="4" style="margin-left: -73px">
                <v-textarea
                        solo
                        name="input-7-4"
                        height="10"
                ></v-textarea>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                ex4: true,
            }
        },
    }
</script>

<style scoped>
    .yazi {
        font-size: 13px;
        color: black;
    }

    .yazi2 {
        font-size: 15px;
        color: black;
    }


</style>