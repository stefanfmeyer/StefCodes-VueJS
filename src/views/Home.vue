<template>
  <div>
    <div class="home">
      <b-container-fluid align-v="center">
        <b-row>
          <b-col class="home-title" lg="12" md="12" sm="12">
            <h1>Stefan Meyer is a creative developer that delivers bespoke solutions for your brand or agency.</h1>
            <div class="blue-banner-small"></div>
          </b-col>
          <b-col class="home-image mb-standard" lg="12" md="12" sm="12">
            <img src="@/assets/phpcode.jpg" alt />
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
    <div class="second">
      <b-container-fluid>
        <b-row class="custom">
          <b-col class="home-info-1 mb-standard" lg="6" offset-md="6" md="6" sm="12">
            <p>I partner with creative agencies, brands and individuals to create stunning, bespoke web experiences.My creations are fully responsive, engaging and user focused works of art.</p>
            <p>My development journey started in 2012 creating sites for small local businesses. Fast forward to 2020 and I have worked on over 60+ bespoke websites and CRM systems.</p>
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
    <div class="third">
      <b-container-fluid>
        <b-row>
          <b-col class="home-info-1 mb-standard" lg="6" offset-md="6" md="6" sm="12">
            <p>I partner with creative agencies, brands and individuals to create stunning, bespoke web experiences.</p>
            <p>My creations are fully responsive, engaging and user focused works of art.</p>
            <p></p>
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    /* SkillBox Props */
    img: {
      type: String
    },
    skillTextFirst: {
      type: String
    },
    skillTextLast: {
      type: String
    }
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 6rem;
  line-height: 7.8rem;
  font-family: "Raleway", sans-serif;
  margin-bottom: 20px;
}
h2 {
  font-size: 3.2rem;
  font-weight: 400;
}
h3 {
  font-size: 2.3rem;
}
.home {
  text-align: left;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.home-title {
  padding: 10% 33% 1% 10%;
  margin-bottom: 23rem;
}
.home-image {
  padding-left: 25vw;

  img {
    height: 800px;
    width: 100%;
  }
}
.mb-standard {
  margin-bottom: 27rem;
}
.custom {
  padding-left: 10vw;
  padding-right: 10vw;
}
.home-info-1 {
  text-align: left;

  p {
    font-size: 2.8rem;
  }
}
</style>