<template>
  <div class="container" ref="container">
    <div>
      <div class="banner">
        <div class="personal">
          <div class="title">Anonymous_Blog</div>
          <div class="logo">
            <img src="./images/logo.jpg" alt="">
          </div>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for="item in swiperList" :key="item.id" class="swiper-slide">
              <img :src="item.imgUrl" alt="">
            </div>
          </div>
          <!-- <div class="swiper-pagination"></div> -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'; // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入
export default {
  name: "Banner",
  data() {
    return {
      swiper: null,
      swiperList: [{
        id: 1,
        title: '采集国家二级保护野生植物审批',
        imgUrl: require("@/views/Home/Banner/images/banner1.jpg"),
      },
      {
        id: 2,
        title: '采集国家二级保护野生植物审批',
        imgUrl: require("@/views/Home/Banner/images/banner1.jpg"),
      },
      {
        id: 3,
        title: '采集国家二级保护野生植物审批',
        imgUrl: require("@/views/Home/Banner/images/banner1.jpg"),
      },
      ]
    }
  },
  mounted() {
    this.getSwiper()
  },
  methods: {
    scrollHot() {
      this.$emit("scrollToHot");
    },

    getSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        loop: true, // 无缝
        autoplay: { //自动开始
          delay: 3000, //时间间隔
          disableOnInteraction: false, //*手动操作轮播图后不会暂停*
        },
        paginationClickable: true,
        slidesPerView: 4, // 一组三个
        spaceBetween: 30, // 间隔
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 窗口变化,重新init,针对F11全屏和放大缩小,必须加
        observer: true,
        observeParents: true,
        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true, // 分页器可以点击
        // },
      })
    }
  },
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: #ccc;
  box-sizing: border-box;

  .next_btn {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
  }

  .banner {
    height: 800px;
    width: 100%;
    margin: 0 auto;
    // background-color: gray;

    // background: url(https://haowallpaper.com/link/common/file/previewFileImg/15918235730955648)
    //   no-repeat center 0px;
    // background-position: center 0px;
    // background-size: cover;

    .personal {
      display: flex;
      flex-flow: column;
      align-items: center;
      height: 300px;
      padding-top: 70px;

      .title {
        font-size: 40px;
      }

      .logo {
        margin-top: 20px;
        width: 180px;
        height: 180px;
        border-radius: 50%;

        img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }

    .swiper-container {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      width: 80%;
      height: 60vh;


      .swiper-wrapper {
        width: 100%;
        height: 100%;

        img {
          height: 100%;
        }
      }
    }
  }
}
</style>