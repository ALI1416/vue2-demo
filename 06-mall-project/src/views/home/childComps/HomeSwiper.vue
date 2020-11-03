<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in banner" :key="item.url">
        <div>
          <a :href="item.link">
            <img :src="item.url" class="swiper-img" />
          </a>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
// 引入第三方轮播图库 npm install swiper@5 vue-awesome-swiper@4 --save
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
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
        autoplay: {
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
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
.swiper-img {
  width: 100%;
}
.swiper-container {
  --swiper-navigation-color: #fff6;
  --swiper-pagination-color: #fff8;
}
</style>