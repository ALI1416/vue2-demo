<template>
  <div>
    <vue-slick-carousel v-bind="settings">
      <!-- <div>1</div> -->
      <div v-for="(item, index) in banners" :key="item.url">
        {{ index }}-{{ item.url }}...
      </div>
      <!-- <div>2</div> -->
      <!-- <div v-for="item in a" :key="item">{{ item }}</div> -->
    </vue-slick-carousel>
  </div>
</template>
<script>
// 引入第三方轮播图库 npm i vue-slick-carousel
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
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
  data() {
    return {
      a: [1, 3, 5, 7],
      settings: {
        arrows: false,
        dots: true,
        // lazyLoad: "ondemand",
      },
    };
  },
  components: {
    VueSlickCarousel,
  },
};
</script>
<style scoped>
</style>