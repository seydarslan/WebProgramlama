<template>
    <v-container style="width: 940px; height: 400px">
        <v-carousel cycle
        
        hide-delimiters
                    height="400">
            <v-carousel-item class="image"
                             v-for="(item,i) in items"
                             :key="i"
                             :src="item.src">

                            

            </v-carousel-item>
        </v-carousel>

    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        src: require('@/assets/slide1.jpg')
                    },
                    {
                        src: require('@/assets/Slide2.jpg')
                    },


                ],
            }
        },
    }
</script>

<style scoped>
    .image {
        height: 400px;
    }

</style>