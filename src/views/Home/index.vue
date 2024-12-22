<template>
  <div class="container">
    <Banner />
    <Hot />
  </div>
</template>

<script>
import Banner from "@/views/Home/Banner";
import Hot from "@/views/Home/Hot";
export default {
  name: "Home",
  components: {
    Hot,
    Banner,
  },
  mounted() {},
  methods: {},
};
</script>

<style>
</style>