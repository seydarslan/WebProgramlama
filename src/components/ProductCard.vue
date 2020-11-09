<template>
    <v-container>
        <v-row>
            <v-col>
                <v-carousel
                        style="width: 350px"
                        height="400">
                    <v-carousel-item
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"

                    ></v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col style="margin-left: 120px; margin-top: 60px">
                <h2 class="yazi3">Korg LP380CB 73 Tuş Dijital Piyano (Krem-Siyah)</h2>
                <span>Marka: Korg </span>
                <p>Korg LP380-CB-73 Tuş </p>
                <v-row style="margin-top: 50px">
                    <v-col><span class="yazi4">Fiyat</span>
                        <v-row>
                            <span style="color: dimgrey; margin-left: 10px">$1,178.82</span>
                        </v-row>
                        <v-row>
                            <p style="color: black; margin-left: 10px; font-size: 22px"><b>8,841.15 TL</b></p>
                        </v-row>
                    </v-col>
                    <v-col><span class="yazi4">Havale / Kapıda Ödeme
                        Fiyatı</span>
                        <v-row>
                            <p style="color: black; margin-left: 10px; font-size: 22px"><b>8,399.09 TL</b></p>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row style="margin-top: 35px"><number-input v-model="value" :min="1" :max="10" inline controls
                style="width: 120px"></number-input>
                    <v-btn
                    color="black"
                    style="background-color: black;color: white">ADET</v-btn>
                    <v-btn
                            color="black"
                            style="background-color: black;color: white">SEPETE EKLE</v-btn>
                </v-row>
            </v-col>


        </v-row>
        <div>

        </div>

    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                value: 1,
                items: [
                    {
                        src: require('@/assets/piano1.jpg')
                    },
                    {
                        src: require('@/assets/piano2.jpg')
                    },
                ],
            };
        },
    };
</script>

<style scoped>
    .yazi3 {
        color: #c00;
    }

    .yazi4 {
        font-size: 15px;
    }

</style>