<template>
  <div class="menu">
    <b-container-fluid align-v="center">
      <b-row>
        <b-col class="menu-image" lg="6" md="12" sm="6">
          <a href="/">
            <img src="@/assets/logo.png" alt="Stefcodes-logo-web-developer" />
          </a>
        </b-col>
        <b-col class="menu-items" lg="6" md="12" sm="6">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/work/">Work</router-link>
            </li>
            <li>
              <router-link to="/contact/">Contact</router-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container-fluid>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {}
};
</script>

<style lang="scss" scoped>
.menu {
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 100;
  height: 150px;

  .menu-image {
    text-align: left;
    padding: 35px 50px;
    img {
      width: 80px;
      height: auto;
      margin-bottom: 5px;
      margin-left: 15px;
    }
  }

  .menu-items {
    margin-left: auto;
    text-align: right;
    padding: 50px;
    ul {
      margin-bottom: 0px;
      padding-left: 0px;
      padding-right: 15px;
      margin-top: 16px;
      li {
        display: inline-block;
        padding: 10px 25px;
        a {
          color: #009688;
          text-decoration: none;
          font-size: 2rem;
          transition: 0.5s;
          font-weight: 500;
        }
        :hover {
          color: #009688;
        }
      }
    }
  }
}
.router-link-exact-active {
  text-decoration: line-through !important;
  text-decoration-color: #403c58 !important;
}
</style>