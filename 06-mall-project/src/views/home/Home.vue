<template>
  <div id="home">
    <nav-bar class="navbar-home">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-category :category="category"></home-category>
    <img :src="recommendImg.url" alt="" class="recommend-img" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeCategory from "./childComps/HomeCategory";
import HomeRequest from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeCategory,
  },
  data() {
    return {
      banner: [],
      category: [],
      recommendImg: {},
      recommend: [],
    };
  },
  created() {
    HomeRequest.init().then((res) => {
      this.banner = res.banner;
      this.category = res.category;
      this.recommendImg = res.recommendImg;
      this.recommend = res.recommend;
    });
  },
};
</script>

<style scoped>
.navbar-home {
  background-color: var(--color-tint);
}
.recommend-img {
  width: 100%;
}
</style>