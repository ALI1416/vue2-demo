<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in category" :key="item.url">
        <div>
          <a :href="item.link">
            <img :src="item.url" />
            <p>{{ item.title }}</p>
          </a>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "HomeCategory",
  props: {
    category: {
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
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style scoped>
.swiper {
  height: 180px;
  margin-left: auto;
  margin-right: auto;
}
.swiper div {
  text-align: center;
}
.swiper p {
  font-size: 14px;
}
.swiper-slide {
  height: 70px;
}
.swiper-slide img {
  width: 50px;
}
</style>