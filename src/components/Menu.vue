<template>
    <v-container>
        <v-row style="width: 1200px; height: 58px; background-color: black">

            <v-col class="menuyazilari" cols="1">
               <router-link to="/pagination" style="color: white"> DJ Ürünleri </router-link>
            </v-col>
            <v-col class="menuyazilari" cols="1">
                Piyanolar
            </v-col>
            <v-col class="menuyazilari" cols="1">
                Gitarlar
            </v-col>
            <v-col class="menuyazilari" cols="1">
                Klavyeler
            </v-col>
            <v-col class="menuyazilari" cols="2">
                Nefesli Çalgılar
            </v-col>
            <v-col class="menuyazilari" cols="2" style="margin-left: -80px">
                Yaylı Çalgılar
            </v-col>
            <v-col class="menuyazilari" cols="2" style="margin-left: -80px">
                Perküsyon Ürünleri
            </v-col>
            <v-col class="menuyazilari" cols="1" style="margin-left: -50px">
                Aksesuarlar
            </v-col>


        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Menu",

    }
</script>

<style scoped>

    .menuyazilari {
        color: white;
        font-size: 14px;

    }

    .menuyazilari:hover {
        background-color: red;
    }

</style>