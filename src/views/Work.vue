<template>
  <div>
    <VueScrollProgress></VueScrollProgress>
    <div class="work">
      <b-container-fluid align-v="center">
        <b-row>
          <b-col class="work-title mb-custom" lg="12" md="12" sm="12">
            <h1>Some of my latest work</h1>
            <div class="blue-banner-small"></div>
          </b-col>
          <b-col class="work-image mb-standard" lg="12" md="12" sm="12"></b-col>
        </b-row>
      </b-container-fluid>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.work-title {
  padding: 20% 33% 1% 10%;
}
.work-image {
  padding-left: 25vw;
  img {
    height: 800px;
    width: 100%;
  }
}
.mb-standard {
  margin-bottom: 27rem;
}
.mb-custom {
  margin-bottom: 23rem;
}
.mb-custom-small {
  margin-bottom: 10rem;
}
.custom {
  padding-left: 10vw;
  padding-right: 10vw;
}
</style>