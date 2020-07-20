<template>
  <div class="menu">
    <b-container-fluid align-v="center">
      <b-row>
        <b-col class="menu-image" lg="6" md="12">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="Stefcodes-logo-web-developer" />
          </router-link>
        </b-col>
        <b-col class="menu-items" lg="6" md="12">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
            <li>
              <a href="https://instagram.com/stefcodes/" target="_blank">Instagram</a>
            </li>
            <li>
              <a href="https://github.com/stefanfmeyer" target="_blank">Github</a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container-fluid>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="scss" scoped>
.menu {
  padding: 10px 15px;
  position: fixed;
  width: 100%;
  z-index: 100;
  height: 100vh;

  .menu-image {
    text-align: left;
    padding-left: 15px;
    img {
      width: 54px;
      height: auto;
      margin-bottom: 5px;
    }
  }

  .menu-items {
    margin-left: auto;
    text-align: right;
    ul {
      margin-bottom: 0px;
      padding-left: 0px;
      padding-right: 15px;
      margin-top: 16px;
      li {
        display: inline-block;
        padding: 10px 20px;
        a {
          color: #343645;
          text-decoration: none;
          font-size: 2rem;
          transition: 1s;
          font-weight: 500;
        }
        :hover {
          color: #5dbcd2;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .menu-items {
    ul {
      li {
        padding: 5px 10px;
        a {
        }
      }
    }
  }
}
</style>