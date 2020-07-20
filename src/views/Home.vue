<template>
  <div>
    <div class="home">
      <b-container-fluid align-v="center">
        <b-row>
          <b-col lg="7" md="6" sm="12">
            <div class="home-title">
              <h1>I am Stefcodes.</h1>
              <div class="blue-banner-small"></div>
            </div>
          </b-col>
          <b-col lg="5" md="6" sm="12">
            <div class="home-information">
              <h2>
                A passionate developer and UX/UI designer based in the UK.
                National and international customers have relied on me for development,
                implementation, and management of their digital media.
                As a freelancer, I have worked with web agencies, companies,
                startups and individuals.
                <br />
              </h2>
              <h2></h2>
              <p></p>
            </div>
          </b-col>
          <b-col lg="12" md="12" sm="12">
            <!-- Add animated scroll @click -->
            <div class="scroll">
              <a href="#">
                <img src="@/assets/down-scroll.png" alt="scroll-down-icon" />
              </a>
            </div>
            <!--  -->
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
    <!-- Below Fold -->
    <div class="second-page">
      <b-container>
        <b-row>
          <b-col lg="12" md="12" sm="12">
            <div class="second-page-inner">
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum error dolorem, saepe ratione laudantium culpa! Doloribus laborum quia nobis nostrum alias, aut explicabo placeat fugiat quisquam, impedit cumque, quibusdam minima?</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="second-page">
      <b-container>
        <b-row>
          <b-col lg="12" md="12" sm="12">
            <div class="second-page-inner" data-aos="fade-in">
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum error dolorem, saepe ratione laudantium culpa! Doloribus laborum quia nobis nostrum alias, aut explicabo placeat fugiat quisquam, impedit cumque, quibusdam minima?</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
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
h1 {
  font-size: 13rem;
  line-height: 12rem;
}
h2 {
  font-size: 2.8rem;
}
h3 {
  font-size: 2rem;
}
.home {
  text-align: left;
  .home-title {
    padding: 5% 10% 10% 10%;
  }
  .home-information {
    padding: 30% 40% 15% 1%;
  }
}
.scroll {
  text-align: center;
}
.second-page {
}
.second-page-inner {
  padding: 50% 20px;
}
</style>