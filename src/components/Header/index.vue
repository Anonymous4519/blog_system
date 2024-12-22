<template>
  <div style="height: 60px">
    <div class="header">
      <div class="log">log</div>
      <ul class="navList">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/blogArticle">博文</router-link>
        </li>
        <li>
          <router-link to="/innermostWords">心语</router-link>
        </li>
        <li>
          <router-link to="/resource">资源</router-link>
        </li>
        <li>
          <router-link to="/message">留言</router-link>
        </li>
        <li>
          <router-link to="/about">关于</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.header {
  box-sizing: border-box;
  display: flex;
  // display: none;
  justify-content: space-between;
  text-align: center;
  background-color: gray;
  line-height: 60px;
  padding: 0 10%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* 确保它在其他内容上方 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影以增强固定效果 */
  .navList {
    display: flex;
    li {
      padding: 0 10px;
    }
  }
}
</style>