<template>
  <div>
    <VueScrollProgress></VueScrollProgress>
    <div class="home">
      <!-- <a href="#top" class="go-top" v-smooth-scroll>GO TOP</a> -->
      <b-container-fluid align-v="center">
        <b-row>
          <b-col class="home-title mb-custom" lg="12" md="12" sm="12">
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
          <b-col
            class="home-info-1 mb-standard"
            lg="6"
            offset-md="6"
            md="6"
            sm="12"
            data-aos="fade-left"
          >
            <p>I partner with creative agencies, brands and individuals to create stunning, bespoke web experiences. My creations are fully responsive, engaging, user-focused works of art.</p>
            <p>My development journey started in 2012 creating sites for small local businesses. Fast forward to 2020 and I have worked on over 60+ bespoke websites and CRM systems.</p>
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
    <div class="third">
      <b-container-fluid>
        <b-row class="custom">
          <b-col class="home-info-2 mb-custom" lg="9" md="9" sm="12" data-aos="fade-right">
            <p>From design to development, everything is kept under one roof. This allows for greater continuity between your ideas and the final product.</p>
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
    <div class="fourth">
      <b-container-fluid>
        <b-row class="custom">
          <b-col class="home-info-3 mb-standard" lg="6" md="6" sm="12" data-aos="fade-right">
            <img src="@/assets/grow.jpg" alt />
          </b-col>
          <b-col
            class="home-info-3-accordion mb-standard"
            data-aos="fade-left"
            lg="6"
            md="6"
            sm="12"
          >
            <Accordion
              ah1="Front-End Development"
              ac1="Development is an essential part of the creative process. Extensive research and planning helps to connect the user to your bespoke web experience."
              ah2="Back-End Development"
              ac2="A secure foundation is crucial, ensuring your website is built on the strongest foundations will allow you to scale-up and expand according to demand."
              ah3="UX/UI Design"
              ac3="Creating an experience that emotionally connects people with your brand is key to your success online. Extensive research to discover your distinct brand character is required for me to produce the best possible results."
            />
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
    <div class="fifth">
      <b-container-fluid>
        <b-row class="custom">
          <Contact />
        </b-row>
      </b-container-fluid>
    </div>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";
import Contact from "@/components/Contact.vue";
export default {
  name: "Home",
  props: {
    /* Accordion Props */
    ah1: {
      type: String
    },
    ac1: {
      type: String
    },
    ah2: {
      type: String
    },
    ac2: {
      type: String
    },
    ah3: {
      type: String
    },
    ac3: {
      type: String
    }
  },
  components: {
    Accordion,
    Contact
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>