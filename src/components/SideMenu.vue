<template>
    <v-container>
        <v-row>
            <v-col cols="3" style="margin-left: -10px">
                <div style="width: 256px" class="menus">

                    <a-menu
                            class="menus"
                            :default-selected-keys="['1']"
                            mode="inline"
                            :inline-collapsed="collapsed"
                    >

                        <a-sub-menu class="menus" key="sub1">
                            <span slot="title"><span>DJ Ürünleri</span></span>
                            <a-menu-item key="2">
                                Kontrol Cihazları
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu class="menus" key="sub2">
                            <span slot="title"><span>Piyanolar</span></span>
                            <a-menu-item key="3">
                                Akustik Duvar Piyanoları
                            </a-menu-item>
                            <a-menu-item key="4">
                                Akustik Kuyruklu Piyanolar
                            </a-menu-item>
                            <a-menu-item key="5">
                                Piyano Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="6">
                                Dijital Piyanolar
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu class="menus" key="sub3">
                            <span slot="title"><span>Gitarlar</span></span>
                            <a-menu-item key="7">
                                Custom Shop
                            </a-menu-item>
                            <a-menu-item key="8">
                                Elektro Gitarlar
                            </a-menu-item>
                            <a-menu-item key="9">
                                Elektro Bas Gitarlar
                            </a-menu-item>
                            <a-menu-item key="10">
                                Akustik Gitarlar
                            </a-menu-item>
                            <a-menu-item key="11">
                                Klasik Gitarlar
                            </a-menu-item>
                            <a-menu-item key="12">
                                Elektro Klasik Gitarlar
                            </a-menu-item>
                            <a-menu-item key="13">
                                Solak Gitarlar
                            </a-menu-item>
                            <a-menu-item key="14">
                                Akustik Bas Gitarlar
                            </a-menu-item>
                            <a-menu-item key="15">
                                12 Telliler
                            </a-menu-item>
                            <a-menu-item key="16">
                                Elektro Gitar Setleri
                            </a-menu-item>
                            <a-menu-item key="17">
                                Akustik Gitar Setleri
                            </a-menu-item>
                            <a-menu-item key="18">
                                Klasik Gitar Setleri
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu class="menus" key="sub4">
                            <span slot="title"><span>Klavyeler</span></span>
                            <a-menu-item key="19">
                                Akordeonlar
                            </a-menu-item>
                            <a-menu-item key="20">
                                Klavye Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="21">
                                Klavye Amfileri
                            </a-menu-item>
                            <a-menu-item key="22">
                                Midi Klavyeler
                            </a-menu-item>
                            <a-menu-item key="23">
                                Sampler
                            </a-menu-item>
                            <a-menu-item key="24">
                                Dijital Klavyeler
                            </a-menu-item>
                            <a-menu-item key="25">
                                Org
                            </a-menu-item>
                            <a-menu-item key="26">
                                Synthesizer
                            </a-menu-item>
                            <a-menu-item key="27">
                                Workstation
                            </a-menu-item>
                            <a-menu-item key="28">
                                Arrenger
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu class="menus" key="sub5">
                            <span slot="title"><span>Nefesli Çalgıları</span></span>
                            <a-menu-item key="29">
                                Trombon
                            </a-menu-item>
                            <a-menu-item key="30">
                                Melodika
                            </a-menu-item>
                            <a-menu-item key="31">
                                Kornet
                            </a-menu-item>
                            <a-menu-item key="32">
                                Nefesli Çalgı Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="33">
                                Flugel Horn
                            </a-menu-item>
                            <a-menu-item key="34">
                                Korno
                            </a-menu-item>
                            <a-menu-item key="35">
                                Bariton Efanyum Tuba
                            </a-menu-item>
                            <a-menu-item key="36">
                                Elektronik Nefesliler
                            </a-menu-item>
                            <a-menu-item key="37">
                                Yan Flüt
                            </a-menu-item>
                            <a-menu-item key="38">
                                Blok Flüt
                            </a-menu-item>
                            <a-menu-item key="39">
                                Mızıka
                            </a-menu-item>
                            <a-menu-item key="40">
                                Klarnet
                            </a-menu-item>
                            <a-menu-item key="41">
                                Saksafon
                            </a-menu-item>
                            <a-menu-item key="42">
                                Trompetler
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu class="menus" key="sub6">
                            <span slot="title"><span>Yaylı Çalgılar</span></span>
                            <a-menu-item key="43">
                                Yaylı Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="44">
                                Elektro Yaylılar
                            </a-menu-item>
                            <a-menu-item key="45">
                                Keman
                            </a-menu-item>
                            <a-menu-item key="46">
                                Viyola
                            </a-menu-item>
                            <a-menu-item key="47">
                                Çello
                            </a-menu-item>
                            <a-menu-item key="48">
                                Kontrbass
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu class="menus" key="sub7">
                            <span slot="title"><span>Perküsyon Ürünleri</span></span>
                            <a-menu-item key="49">
                                Orf Aletleri
                            </a-menu-item>
                            <a-menu-item key="50">
                                Senfonik Enstrumanlar
                            </a-menu-item>
                            <a-menu-item key="51">
                                Kılıf ve Kutular
                            </a-menu-item>
                            <a-menu-item key="52">
                                Perküsyon Aksam
                            </a-menu-item>
                            <a-menu-item key="53">
                                Akustik Perküsyon
                            </a-menu-item>
                            <a-menu-item key="54">
                                Eletronik Perküsyon
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu class="menus" key="sub8">
                            <span slot="title"><span>Aksesuarlar</span></span>
                            <a-menu-item key="55">
                                OUTLET Ürünleri
                            </a-menu-item>
                            <a-menu-item key="56">
                                Nota Standları
                            </a-menu-item>
                            <a-menu-item key="57">
                                Gitar Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="58">
                                Amfi Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="59">
                                Davul Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="60">
                                Yaylı Çalgı Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="61">
                                Nefesli Çalgı Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="62">
                                Klavye Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="63">
                                Perküsyon Aksesuarları
                            </a-menu-item>

                        </a-sub-menu>
                        <a-sub-menu class="menus" key="sub9">
                            <span slot="title"><span>Amfiler</span></span>
                            <a-menu-item key="64">
                                Kulaklık Amfileri
                            </a-menu-item>
                            <a-menu-item key="65">
                                Elektro Gitar Amfileri
                            </a-menu-item>
                            <a-menu-item key="66">
                                Bas Gitar Amfileri
                            </a-menu-item>
                            <a-menu-item key="67">
                                Akustik - Klasik Gitar Amfileri
                            </a-menu-item>
                            <a-menu-item key="68">
                                Kabinler
                            </a-menu-item>
                            <a-menu-item key="69">
                                Elektro Davul Amfileri
                            </a-menu-item>
                            <a-menu-item key="70">
                                Klavye Amfileri
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu class="menus" key="sub10">
                            <span slot="title"><span>Pedallar</span></span>
                            <a-menu-item key="71">
                                Pedal Adaptörleri
                            </a-menu-item>
                            <a-menu-item key="72">
                                Pedal Footswitch
                            </a-menu-item>
                            <a-menu-item key="73">
                                Volume Pedalları
                            </a-menu-item>
                            <a-menu-item key="74">
                                WAH Pedalları
                            </a-menu-item>
                            <a-menu-item key="75">
                                Pedal Board
                            </a-menu-item>
                            <a-menu-item key="76">
                                Efekt ve Pedal Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="77">
                                Bas Gitar Pedalları
                            </a-menu-item>
                            <a-menu-item key="78">
                                Elektro Gitar Pedalları
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu class="menus" key="sub11">
                            <span slot="title"><span>Davul Ekipmanları</span></span>
                            <a-menu-item key="79">
                                Aksesuarlar
                            </a-menu-item>
                            <a-menu-item key="80">
                                Bando Davul ve Aksesuar
                            </a-menu-item>
                            <a-menu-item key="81">
                                Akustik Davul Setleri
                            </a-menu-item>
                            <a-menu-item key="82">
                                Elektronik Davul Setleri
                            </a-menu-item>
                            <a-menu-item key="83">
                                Aksamlar
                            </a-menu-item>
                            <a-menu-item key="84">
                                Bagetler
                            </a-menu-item>
                            <a-menu-item key="85">
                                Deriler
                            </a-menu-item>
                            <a-menu-item key="86">
                                Kick Pedallar
                            </a-menu-item>
                            <a-menu-item key="87">
                                Tabureler
                            </a-menu-item>
                            <a-menu-item key="88">
                                Trampetler
                            </a-menu-item>
                            <a-menu-item key="89">
                                Ziller
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu class="menus" key="sub12">
                            <span slot="title"><span>Prosesörler</span></span>
                            <a-menu-item key="90">
                                Foot Controller
                            </a-menu-item>
                            <a-menu-item key="91">
                                Prosesor Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="92">
                                Gitar Synthesizer
                            </a-menu-item>
                            <a-menu-item key="93">
                                Touch Pad Efekt Cihazları
                            </a-menu-item>
                            <a-menu-item key="94">
                                Akustik Gitar Prosesörleri
                            </a-menu-item>
                            <a-menu-item key="95">
                                Bas Gitar Prosesörleri
                            </a-menu-item>
                            <a-menu-item key="96">
                                Elektro Gitar Prosesörleri
                            </a-menu-item>
                            <a-menu-item key="97">
                                Ritm Aletleri
                            </a-menu-item>
                            <a-menu-item key="98">
                                Vokal Prosesörler
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub13">
                            <span slot="title"><span>Ukulele</span></span>
                            <a-menu-item key="99">
                                Buzuki
                            </a-menu-item>
                            <a-menu-item key="100">
                                Banjo
                            </a-menu-item>
                            <a-menu-item key="101">
                                Udlar
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub14">
                            <span slot="title"><span>Mandolin</span></span>

                        </a-sub-menu>
                        <a-sub-menu key="sub15">
                            <span slot="title"><span>Stüdyo-Sahne Ekipmanları</span></span>
                            <a-menu-item key="102">
                                Ses Kartları
                            </a-menu-item>
                            <a-menu-item key="103">
                                Monitörler
                            </a-menu-item>
                            <a-menu-item key="104">
                                Kayıt Cihazları
                            </a-menu-item>
                            <a-menu-item key="105">
                                Kulaklıklar
                            </a-menu-item>
                            <a-menu-item key="106">
                                Aksesuarları
                            </a-menu-item>
                            <a-menu-item key="107">
                                Mikrofonlar
                            </a-menu-item>
                            <a-menu-item key="108">
                                Preamfiler
                            </a-menu-item>
                            <a-menu-item key="109">
                                Wireless Sistemler
                            </a-menu-item>
                            <a-menu-item key="110">
                                Kablolar
                            </a-menu-item>
                            <a-menu-item key="111">
                                Paneller
                            </a-menu-item>
                            <a-menu-item key="112">
                                Mikrofon Sehpaları
                            </a-menu-item>
                            <a-menu-item key="113">
                                Midi Klavyeler
                            </a-menu-item>
                            <a-menu-item key="114">
                                Yalıtım Malzemesi
                            </a-menu-item>
                            <a-menu-item key="115">
                                Di-Box
                            </a-menu-item>

                        </a-sub-menu>

                    </a-menu>

                </div>
            </v-col>
            <v-col cols="8">
                <MainSlider></MainSlider>
            </v-col>
        </v-row>

    </v-container>


</template>

<script>
    import MainSlider from "./MainSlider";

    export default {
        data() {
            return {
                collapsed: false,
            };
        },
        methods: {
            toggleCollapsed() {
                this.collapsed = !this.collapsed;
            },
        },
        components: {
            MainSlider,
        }
    };

</script>

<style scoped>
    .menus {
        background-color: black;
        color: white;
        font-size: 12px;
    }

</style>