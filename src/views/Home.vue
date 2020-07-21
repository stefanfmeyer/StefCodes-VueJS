<template>
  <div>
    <div class="home">
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
          <b-col class="home-info-1 mb-standard" lg="6" offset-md="6" md="6" sm="12">
            <p>I partner with creative agencies, brands and individuals to create stunning, bespoke web experiences. My creations are fully responsive, engaging, user-focused works of art.</p>
            <p>My development journey started in 2012 creating sites for small local businesses. Fast forward to 2020 and I have worked on over 60+ bespoke websites and CRM systems.</p>
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
    <div class="third">
      <b-container-fluid>
        <b-row class="custom">
          <b-col class="home-info-2 mb-custom" lg="9" md="9" sm="12">
            <p>From design to development, everything is kept under one roof. This allows for greater continuity between your ideas and the final product.</p>
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
    <div class="fourth">
      <b-container-fluid>
        <b-row class="custom">
          <b-col class="home-info-3" lg="6" md="6" sm="12">
            <img src="@/assets/grow.jpg" alt />
          </b-col>
          <b-col class="home-info-3-accordion mb-standard" lg="6" md="6" sm="12">
            <Accordion
              ah1="Front-End Development"
              ac1="Development is a key part of the creative process. Extensive research and planning helps to connect the user to your bespoke web experience."
              ah2="Back-End Development"
              ac2="A secure foundation is crucial, ensuring your website is built on the strongest foundations will allow you to scale-up and expand according to demand."
              ah3="UX/UI Design"
              ac3="Creating an experience that emotionally connects people with your brand is crucial to your success online. Extensive research to discover your distinct brand character is vital for me to produce the best possible results."
            />
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";
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
    Accordion
  },
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
.mb-custom {
  margin-bottom: 23rem;
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
.home-info-2 {
  text-align: left;
  padding-right: 50px;
  p {
    font-size: 4.8rem;
    font-weight: 700;
  }
}
.home-info-3 {
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
}
.home-info-3-accordion {
  text-align: left;
  padding-left: 6%;
  padding-top: 6%;
}
</style>