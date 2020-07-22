<template>
  <div role="tablist">
    <b-card no-body class="mb-accordion accordion-header">
      <b-card-header header-tag="header" class="accordion-header" role="tab">
        <b-button class="accordion-header" block v-b-toggle.accordion-1 variant="info">{{ah1}}</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body class="accordion-card-body">
          <b-card-text class="accordion-card-text">{{ac1}}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-accordion accordion-header">
      <b-card-header header-tag="header" class="accordion-header" role="tab">
        <b-button class="accordion-header" block v-b-toggle.accordion-2 variant="info">{{ah2}}</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <b-card-body class="accordion-card-body">
          <b-card-text class="accordion-card-text">{{ac2}}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-accordion accordion-header">
      <b-card-header header-tag="header" class="accordion-header" role="tab">
        <b-button class="accordion-header" block v-b-toggle.accordion-3 variant="info">{{ah3}}</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body class="accordion-card-body">
          <b-card-text class="accordion-card-text">{{ac3}}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
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
  }
};
</script>

<style lang="scss" scoped>
.accordion-header {
  font-size: 2.8rem;
  color: #000 !important;
  text-align: left;
  border: none !important;
  box-shadow: none !important;
  background-color: #fff !important;
  padding: 0px !important;
}
.accordion-card-body {
  padding: 2px 0px !important;
}
.accordion-card-text {
  padding: 2px 0px !important;
}
.mb-accordion {
  margin-bottom: 20px;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
}
.black {
  color: #000;
  font-weight: 600;
}
</style>