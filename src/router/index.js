import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入路由组件
import Home from "@/views/Home";
import BlogArticle from "@/views/BlogArticle";
import FriendLink from "@/views/FriendLink";
import Message from "@/views/Message";
import About from "@/views/About";
import Login from "@/views/Login";
import Register from "@/views/Register";
import InnermostWords from "@/views/InnermostWords";
import Resource from "@/views/Resource";

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      name: "home",
      path: "/home",
      component: Home,
    },
    {
      name: "blogArticle",
      path: "/blogArticle",
      component: BlogArticle,
    },
    {
      name: "friendLink",
      path: "/friendLink",
      component: FriendLink,
    },
    {
      name: "message",
      path: "/message",
      component: Message,
    },
    {
      name: "about",
      path: "/about",
      component: About,
    },
    {
      name: "login",
      path: "/login",
      component: Login,
    },
    {
      name: "register",
      path: "/register",
      component: Register,
    },
    {
      name: "innermostWords",
      path: "/innermostWords",
      component: InnermostWords,
    },
    {
      name: "resource",
      path: "/resource",
      component: Resource,
    },
  ],
});
