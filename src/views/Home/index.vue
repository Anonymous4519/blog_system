<template>
  <div class="container">
    <Header v-show="isShow" />
    <Banner ref="banner" @scrollToHot="scrollToHot" />
    <Hot ref="hot" />
    <Lore />
  </div>
</template>

<script>
import { reqGetHeadList } from "@/api";
import { mapState } from "vuex";
import Banner from "@/views/Home/Banner";
import Hot from "@/views/Home/Hot";
import Lore from '@/views/Home/Lore'
export default {
  name: "Home",
  components: {
    Hot,
    Banner,
    Lore
  },
  data() {
    return {
      flag: true,
      hasScrolledToHot: false, // 新增标识，判断是否已经滚动到 Hot
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.getHeadList()

  },
  activated() {
  },
  methods: {
    async getHeadList() {
      const result = await reqGetHeadList()
      console.log(result);

    },


    handleScroll() {
      const banner = this.$refs.banner.$refs.container;
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop >= 200) {
        this.$store.commit("CHANGESHOW", this.flag);
      }
      if (scrollTop <= 200) {
        this.$store.commit("CHANGESHOW", !this.flag);
      }

      if (scrollTop <= banner.offsetHeight / 2) {
        this.resetScrollStatus();
      }

      // 如果已经滚动到 Hot，则不再滚动
      if (this.hasScrolledToHot) return;
      // 判断是否滚动到 Banner 一半，自动滚动到 Hot
      if (scrollTop >= banner.offsetTop + banner.offsetHeight / 2) {
        this.scrollToHot();
      }
    },
    // 屏幕滚动跳转hot事件
    scrollToHot() {
      const hot = this.$refs.hot.$refs.container;
      if (this.hasScrolledToHot) return; // 防止重复滚动

      this.hasScrolledToHot = true; // 标记已滚动到 Hot
      window.scrollTo({
        top: hot.offsetTop - 60, // 加上 header 高度，避免被遮挡
        behavior: "smooth",
      });
    },

    // 重置滚动状态
    resetScrollStatus() {
      this.hasScrolledToHot = false; // 允许重新滚动到 Hot
    },
  },
  computed: {
    ...mapState({
      isShow: (state) => {
        return state.home.isShow;
      },
    }),
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped></style>