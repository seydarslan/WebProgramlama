<template>
    <div>
        <v-container>
            <v-row style="width: 1200px; height: 100px">
                <v-col cols="4">
                   <router-link to="/"> <v-img
                            max-width="328"
                            height="90"
                            src="@/assets/logo.png"></v-img></router-link>
                </v-col>
                <v-col cols="6">
                    <v-spacer style="padding-bottom: 5px; padding-top: 5px">

                        <div class="yazilar">
                            <a style="color: black">Hakkımızda</a>
                            <a style="color: black; margin-left: 20px">S.S.S</a>
                            <a style="color: black; margin-left: 20px"> İletişim</a>
                            <router-link to="/signin"> <a style="color: black; margin-left: 120px">Giriş Yap</a></router-link>
                            <router-link to="/login"><a style="color: black; margin-left: 15px">Kayıt Ol</a></router-link>
                            <a style="color: black; margin-left: 15px"> Şifre Hatırlat</a>


                        </div>


                    </v-spacer>

                    <v-toolbar
                            max-height="40" max-width="470">
                        <v-spacer></v-spacer>

                        <v-icon style="padding-bottom:30px">mdi-magnify</v-icon>


                    </v-toolbar>


                </v-col>

                <v-col class="yazilar2" style="padding-right: 100px">
                  <router-link to="/sepetim" style="color: black">  Sepetim(0) </router-link>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .yazilar {
        font-family: "Roboto", sans-serif;
        font-size: 13px;
    }

    .yazilar2 {
        font-family: "Roboto", sans-serif;
        font-size: 14px;
    }

</style>