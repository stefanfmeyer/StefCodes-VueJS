<template>
  <div>
    <b-col class="home-info-4 mb-small-custom" lg="12" md="12" sm="12" data-aos="fade-right">
      <p>Reach out to me anywhere and I'll get back to you.</p>
    </b-col>
    <b-col class="footer-info mb-small-custom" lg="12" md="12" sm="12">
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
          <a href="https://www.linkedin.com/in/stefcodes/">LinkedIn</a>
        </li>
      </ul>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss" scoped>
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
        color: #263238;
      }
    }
  }
  ul.right-ul {
    padding-right: 30px;
    text-align: left;
    width: 50%;
    float: right;
    margin-bottom: 50px;
    li {
      display: block;
      a {
        font-size: 2.2rem;
        color: #263238;
        text-decoration: none;
      }
      :hover {
        color: #009688;
        transition: 0.5s;
      }
    }
  }
  ul.last-ul {
    margin-top: 14rem;
    margin-bottom: 10rem;
    padding-left: 0px;
    text-align: left;
    li {
      display: inline-block;
      padding-right: 30px;
      a {
        font-size: 1.8rem;
        color: #263238;
        text-decoration: none;
      }
      :hover {
        color: #009688;
        transition: 0.5s;
      }
    }
  }
}
</style>