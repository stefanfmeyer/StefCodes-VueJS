<template>
  <div class="work-item">
    <a href="/work/" class>
      <div
        class="work-item__inner"
        :style="{ backgroundImage: 'url(' + require('@/assets/press.jpg') + ')' }"
      >
        <!-- <img src="@/assets/press.jpg" /> -->
      </div>
      <div class="work-item__title"></div>
    </a>
  </div>
</template>

<script>
export default {
  name: "WorkItem"
};
</script>

<style lang="scss" scoped>
.work-item {
  width: 100px;
  height: 100px;
  a {
    height: 100%;
    width: 100%;
  }
}
.work-item__inner {
  position: relative;
  overflow: hidden;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
    transform: scale(1);
    transition: transform 0.5s;
    :hover {
      transform: scale(1.5);
    }
  }
}
.work-item__title {
  position: absolute;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
}
.work-item__title,
.work-titles {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}
</style>