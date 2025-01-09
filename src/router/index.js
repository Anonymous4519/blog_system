import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

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

let router = new VueRouter({
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
  linkActiveClass: "active", //希望元素动态添加的class名 “active”
});

// 全局前置路由守卫----初始化时调用、每次切换路由之前调用
router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.path === "/home") {
    store.state.home.isShow = false;
  }
  next();
});

export default router;
