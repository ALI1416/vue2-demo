<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in banners" :key="item.url">
        <div>
          <!-- <a :href="item.link"> -->
          <img :src="item.url" />
          <!-- </a> -->
        </div>
      </swiper-slide>
      <div class="swiper-scrollbar"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
// 引入第三方轮播图库 npm install swiper vue-awesome-swiper --save
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
<style scoped>
</style>