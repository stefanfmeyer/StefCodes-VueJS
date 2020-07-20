<template>
  <div id="app">
    <Menu />
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
export default {
  name: "App",
  components: {
    Menu
  }
};
</script>
<style lang="scss">
html {
  font-family: "Montserrat", sans-serif;
  font-display: swap;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>