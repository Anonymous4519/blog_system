import axios from "axios";

import Nprogress from "nprogress";
import "nprogress/nprogress.css";

// axios二次封装
// 利用axios的create方法，创建一个axios实例
// request就是axios，稍微配置一下
const requests = axios.create({
  // 配置对象
  // 基础路径，发请求时，路径会让会出现/api
  baseURL: "/mock",
  // 请求超时的时间5s
  timeout: 5000,
});

// 请求拦截器：发出请求之前，请求拦截器可以检测到，并做一些事情
requests.interceptors.request.use((config) => {
  // config配置对象，有一个很重要的属性，headers请求头
  // 开启进度条
  Nprogress.start();
  return config;
});

// 响应拦截器：服务器返回数据时，响应拦拦截器可以检测到，并做一些事情
requests.interceptors.response.use(
  (response) => {
    // 成功的回调
    // 关闭进度条
    Nprogress.done();
    return response.data;
  },
  (error) => {
    // 失败的回调
    return Promise.reject(new Error("faile"));
  }
);

export default requests;
