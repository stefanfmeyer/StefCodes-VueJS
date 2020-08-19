<template>
  <div class="contact">
    <VueScrollProgress></VueScrollProgress>
    <div class="fifth home-title">
      <b-container-fluid>
        <b-row>
          <Contact />
        </b-row>
      </b-container-fluid>
    </div>
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  components: {
    Contact
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>