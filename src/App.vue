<template>
<div>
      <Header/><Menu/>
      <router-view class="view"></router-view>
</div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu"

export default {
  name: 'App',

  components: {
    Menu,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
