<template>
    <v-container>
        <v-row>
            <v-col cols="8">
                <v-row>
                    <h4><b>Sepetim</b></h4>
                </v-row>
                 <v-row>
                     <v-col cols="6" class="yazi5">Ürün</v-col>
                     <v-col cols="2" class="yazi5">Adet</v-col>
                     <v-col cols="2" class="yazi5">Tutar</v-col>
                     <v-col cols="2" class="yazi5">Sil</v-col>
                 </v-row>
                <v-row>
                    <v-col cols="6"><img src="@/assets/piano1.jpg" width="90px" height="90px"></v-col>
                    <v-col cols="2"><v-textarea
                            solo
                            name="input-7-4"
                            label="1"
                            style="width: 40px"
                            height="1"
                    ></v-textarea></v-col>
                    <v-col cols="2">8,841.15 TL</v-col>
                    <v-col cols="2" style="margin-top: -25px"><v-checkbox></v-checkbox></v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "ShopingCard"
    }
</script>

<style scoped>
    .yazi5{
        color: dimgrey;
        font-size: 13px;
    }

</style>