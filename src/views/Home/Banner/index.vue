<template>
  <div class="container" ref="container">
    <div>
      <div class="banner">轮播区</div>
      <el-button
        class="next_btn"
        type="success"
        icon="el-icon-check"
        circle
      ></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {},
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: skyblue;
  .next_btn {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
  .banner {
    height: 600px;
    width: 80%;
    margin: 0 auto;
    background-color: gray;
    // background: url(https://haowallpaper.com/link/common/file/previewFileImg/15918235730955648)
    //   no-repeat center 0px;
    // background-position: center 0px;
    // background-size: cover;
  }
}
</style>