<template>
  <div style="height: 78px">
    <div class="header">
      <div class="log">blog</div>
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
import { mapState } from 'vuex';
export default {
  name: "Header",
  data() {
    return {
    };
  },
  mounted() {
    // 发请求获取headList数据
    this.$store.dispatch('getHeadList')
  },
  methods: {},
  computed: {
  }
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
  height: 78px;
  line-height: 78px;
  padding: 0 10%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  /* 确保它在其他内容上方 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  /* 添加阴影以增强固定效果 */
  .navList {
    display: flex;

    li {
      width: 70px;
      margin: 0 5px;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
  }
}

.active {
  color: #fff;
  background-color: orange;
}
</style>