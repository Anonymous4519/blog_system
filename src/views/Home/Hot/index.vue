<template>
  <div class="container" ref="container">
    <div class="hot_head">
      <h2 class="hot_article">热门文章</h2>
      <div class="title">
        <span>xxxxxxx</span>
        <span>xxxxxxxxxxxxx</span>
        <span>xxxxxxx</span>
      </div>
      <div class="hot_list">
        <ul>
          <li>
            <div class="article_icon"></div>
            <h2 class="article_title">少年不惧岁月长</h2>
            <div class="publish_time">2024-12-20 22:43</div>
            <div class="description">
              测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </div>
            <div class="count">
              <!-- 浏览量 -->
              <div class="read">
                <i class="icon iconfont icon-icon-"></i>
                <span>999</span>
              </div>
              <!-- 点赞量 -->
              <div class="like">
                <i class="icon iconfont icon-dianzan"></i>
                <span>999</span>
              </div>
              <!-- 收藏量 -->
              <div class="collect">
                <i class="icon iconfont icon-shoucang8"></i>
                <span>999</span>
              </div>
            </div>
            <a href="#" class="article_all">查看原文></a>
          </li>
          <li>
            <div class="article_icon"></div>
            <h2 class="article_title">少年不惧岁月长</h2>
            <div class="publish_time">2024-12-20 22:43</div>
            <div class="description">
              测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </div>
            <a href="#" class="article_all">查看原文></a>
          </li>
          <li>
            <div class="article_icon"></div>
            <h2 class="article_title">少年不惧岁月长</h2>
            <div class="publish_time">2024-12-20 22:43</div>
            <div class="description">
              测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </div>
            <a href="#" class="article_all">查看原文></a>
          </li>
          <li>
            <div class="article_icon"></div>
            <h2 class="article_title">少年不惧岁月长</h2>
            <div class="publish_time">2024-12-20 22:43</div>
            <div class="description">
              测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </div>
            <a href="#" class="article_all">查看原文></a>
          </li>
          <li>
            <div class="article_icon"></div>
            <h2 class="article_title">少年不惧岁月长</h2>
            <div class="publish_time">2024-12-20 22:43</div>
            <div class="description">
              测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </div>
            <a href="#" class="article_all">查看原文></a>
          </li>
          <li>
            <div class="article_icon"></div>
            <h2 class="article_title">少年不惧岁月长</h2>
            <div class="publish_time">2024-12-20 22:43</div>
            <div class="description">
              测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </div>
            <a href="#" class="article_all">查看原文></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hot",
};
</script>

<style lang="less" scoped>
.container {
  width: 80%;
  // background-color: gray;
  border: 1px solid gray;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 50px;

  .hot_head {
    display: flex;
    flex-direction: column;
    align-items: center;

    .hot_article {
      font-size: 30px;
      position: relative;
      margin-bottom: 20px;
    }

    .hot_article::after {
      content: "";
      position: absolute;
      left: -50%;
      bottom: -10px;
      width: 250px;
      height: 2px;
      background-color: #000;
      border-bottom: 1px solid #ccc;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .hot_list {
    width: 100%;

    ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      margin: 20px 0;
    }

    ul>li {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
      height: 400px;
      background-color: #ccc;
      margin: 20px;
    }

    .article_title {
      font-size: 18px;
      margin: 20px 0 10px 0;
    }

    .publish_time {
      font-size: 12px;
      color: #666;
      margin-bottom: 10px;
    }

    .article_icon {
      width: 400px;
      height: 220px;
      background-color: pink;
    }

    .description {
      padding: 0 12px;
      word-break: break-all;
    }

    .article_all {
      position: absolute;
      right: 5px;
      bottom: 10px;
    }

    .count {
      display: flex;
      position: absolute;
      left: 40px;
      bottom: 10px;

      div {
        margin-right: 40px;
      }
    }
  }
}
</style>