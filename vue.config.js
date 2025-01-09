const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // 如果需要自定义配置，可以在这里添加
        },
      },
    },
  },
});
