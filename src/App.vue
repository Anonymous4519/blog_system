<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Home from "@/views/Home";
export default {
  name: "App",
  components: {
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
