<template>
  <div>
    <b-container-fluid>
      <b-row>
        <b-col lg="4" md="6" sm="12">
          <img src alt />
          <h2>First Portfolio</h2>
          <p>My development journey started in 2012 creating sites for small local businesses. Fast forward to 2020 and I have worked on over 60+ bespoke websites and CRM systems.</p>
        </b-col>
      </b-row>
    </b-container-fluid>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    info: String,
    img: URL
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.work-card-outer {
}

img {
}
h2 {
  color: #000 !important;
  font-size: 30px;
}
p {
  color: #000 !important;
  font-size: 24px !important;
}
</style>