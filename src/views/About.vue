<template>
  <div>
    <VueScrollProgress></VueScrollProgress>
    <div class="about">
      <b-container-fluid align-v="center">
        <b-row>
          <b-col class="about-title mb-custom" lg="12" md="12" sm="12">
            <h1>Stefan Meyer is a creative developer that delivers bespoke solutions for your brand or agency.</h1>
            <div class="blue-banner-small"></div>
          </b-col>
          <b-col class="about-image mb-standard" lg="12" md="12" sm="12">
            <img src="@/assets/phpcode.jpg" alt />
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.about {
  text-align: left;
  background-color: #fff;
  color: #252733;
}
.about-title {
  padding: 20% 33% 1% 10%;
}
.about-image {
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