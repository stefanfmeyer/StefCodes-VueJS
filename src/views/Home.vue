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
          <b-col class="home-info-4 mb-small-custom" lg="9" md="9" sm="12" data-aos="fade-right">
            <p>Reach out to me anywhere and I'll get back to you.</p>
          </b-col>
          <b-col class="footer-info mb-small-custom" lg="6" md="9" sm="12" data-aos="fade-right">
            <ul class="left-ul">
              <li>
                <p>Liverpool</p>
              </li>
              <li>
                <p>United Kingdom</p>
              </li>
            </ul>
            <ul class="right-ul">
              <li>
                <a href="mailto:info@stefcodes.com">info@stefcodes.com</a>
              </li>
              <li>
                <a href="tel:07563197460">+44 7563 1974 60</a>
              </li>
            </ul>
            <ul class="last-ul">
              <li>
                <a href="https://instagram.com/stefcodes">Instagram</a>
              </li>
              <li>
                <a href="https://github.com/stefanfmeyer">GitHub</a>
              </li>
              <li>
                <a href="https://github.com/stefanfmeyer">LinkedIn</a>
              </li>
            </ul>
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
  padding: 20% 33% 1% 10%;
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
.mb-custom-small {
  margin-bottom: 10rem;
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
  padding-top: 3%;
}
.home-info-4 {
  text-align: left;
  padding-right: 24%;
  p {
    font-size: 4.8rem;
    font-weight: 700;
    margin-bottom: 14%;
  }
}
.footer-info {
  ul.left-ul {
    padding-left: 0px;
    text-align: left;
    width: 50%;
    float: left;
    li {
      display: block;
      p {
        font-size: 2.2rem;
        color: #000;
      }
    }
  }
  ul.right-ul {
    padding-right: 30px;
    text-align: left;
    width: 50%;
    float: right;
    li {
      display: block;
      a {
        font-size: 2.2rem;
        color: #000;
        text-decoration: none;
      }
      :hover {
        color: #5dbcd2;
        transition: 0.5s;
      }
    }
  }
  ul.last-ul {
    margin-top: 14rem;
    margin-bottom: 20rem;
    padding-left: 0px;
    text-align: left;
    li {
      display: inline-block;
      padding-right: 30px;
      a {
        font-size: 1.8rem;
        color: #000;
        text-decoration: none;
      }
      :hover {
        color: #5dbcd2;
        transition: 0.5s;
      }
    }
  }
}
</style>