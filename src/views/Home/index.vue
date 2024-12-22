<template>
  <div class="container">
    <Transition>
      <Header v-show="isShow" />
    </Transition>
    <Banner />
    <Hot />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Banner from "@/views/Home/Banner";
import Hot from "@/views/Home/Hot";
export default {
  name: "Home",
  components: {
    Hot,
    Banner,
  },
  data() {
    return {
      flag: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 200) {
        this.$store.commit("CHANGESHOW", this.flag);
      }
      if (window.scrollY <= 200) {
        this.$store.commit("CHANGESHOW", !this.flag);
      }
    },
  },
  computed: {
    ...mapState({
      isShow: (state) => {
        return state.home.isShow;
      },
    }),
  },
};
</script>

<style lang="less" scoped>
</style>