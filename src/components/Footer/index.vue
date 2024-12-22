<template>
  <div class="footer">
    <el-row :gutter="20" style="height: 100%">
      <el-col :span="4">
        <div class="f_left f">
          <div class="logo">图片</div>
          <div class="title">少年不惧岁月长，彼方尚有荣光在</div>
          <el-button type="primary">About Me</el-button>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="f_center f">
          <ol>
            <dt>相关链接</dt>
            <dd>xxxxxxxxxx</dd>
            <dd>xxxxxxxxxx</dd>
            <dd>xxxxxxxxxx</dd>
            <dd>xxxxxxxxxx</dd>
          </ol>
          <ol>
            <dt>相关链接</dt>
            <dd>xxxxxxxxxx</dd>
            <dd>xxxxxxxxxx</dd>
            <dd>xxxxxxxxxx</dd>
            <dd>xxxxxxxxxx</dd>
          </ol>
          <ol>
            <dt>相关链接</dt>
            <dd>xxxxxxxxxx</dd>
            <dd>xxxxxxxxxx</dd>
            <dd>xxxxxxxxxx</dd>
            <dd>xxxxxxxxxx</dd>
          </ol>
        </div>
        <div class="copyright">
          <p>&copy; 2024 你的公司或个人名 - 保留所有权利</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="f_right f">
          <div class="wechat_icon">图片</div>
          <div class="title">加我微信</div>
          <div class="about">
            <ul>
              <li>QQ邮箱：xxxxxxx.com</li>
              <li>163邮箱：xxxxxxx.com</li>
              <li>电话：111111111111</li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 300px;
  background-color: gray;
  .el-col {
    height: 100%;
  }
  .f {
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: pink;
  }
  .f_left {
    flex-direction: column;
    align-items: center;
    .logo {
      width: 120px;
      height: 60px;
      background-color: skyblue;
    }
    .title {
      text-align: center;
      margin: 20px 0;
    }
    .el-button {
      width: 100px;
    }
  }

  .f_center {
    height: 80%;
    box-sizing: border-box;
    justify-content: space-around;
    padding-top: 50px;
    ol > dt {
      font-size: 24px;
      margin-bottom: 20px;
    }
    ol > dd {
      font-size: 18px;
      margin: 12px 0;
    }
  }
  .copyright {
    margin-top: 30px;
    font-size: 14px;
    // color: #ccc;  /* 版权文字颜色 */
    text-align: center;
  }
  .f_right {
    flex-direction: column;
    align-items: center;
    .wechat_icon {
      width: 180px;
      height: 180px;
      background-color: green;
    }
    .title {
      margin: 5px 0;
    }
    .about > ul > li {
      margin: 3px 0;
    }
  }
}
</style>