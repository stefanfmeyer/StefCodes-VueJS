<template>
  <div id="app">
    <VueScrollProgress></VueScrollProgress>
    <Menu />
    <div class="router-view" id="top">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
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
  overflow-y: hidden;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
/* VUE PROGRESS BAR */
/* play with some lines below */
#progress-container-el {
  /* background */
  background-color: transparent !important;
  bottom: calc(100% - 10%) !important;
}
#progress-el {
  /* progress bar */
  background-color: #32bed5 !important;
}
</style>