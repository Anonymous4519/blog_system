<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/views/Home";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
