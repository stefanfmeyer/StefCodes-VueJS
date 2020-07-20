<template>
  <div class="home">
    <b-container align-v="center">
      <b-row>
        <b-col lg="6" md="6" sm="12">
          <div class="home-title my-auto">
            <h1>Stefan</h1>
            <h1>Meyer</h1>
            <div class="blue-banner-small"></div>
          </div>
        </b-col>
        <b-col lg="6" md="6" sm="12">
          <div class="home-information my-auto">
            <p>– Introduction</p>
            <h2>Full Stack Developer</h2>
            <p></p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
  text-align: left;
  .home-title {
  }
  .home-information {
  }
}
</style>