<template>
    <v-container>
        <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="2"><v-checkbox
            label="Stokta Olanlar"></v-checkbox></v-col>
            <v-col cols="2"> <v-select
                    :items="items"
                    filled
                    label="Ürün Sayısı"

            ></v-select></v-col>
            <v-col cols="2"> <v-select
                    :items="items"
                    filled
                    label="Ürünleri Göster"

            ></v-select></v-col>
            <v-col>
            <v-pagination
                    style="color: dimgrey"
                    :length="3"

            ></v-pagination>
            </v-col>
        </v-row>
        <ProductCard />
        <ProductDetail />

    </v-container>
</template>

<script>
    import ProductCard from "./ProductCard";
    import ProductDetail from "./ProductDetail";
    export default {
        data: () => ({
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }),
        components:{
            ProductDetail,
            ProductCard
        }
    }
</script>

<style scoped>

</style>