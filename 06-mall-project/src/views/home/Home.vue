<template>
  <div id="home">
    <nav-bar class="navbar-home">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      banner: [],
      category: [],
      recommend: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.banner;
      this.category = res.category;
      this.recommend = res.recommend;
    });
  },
};
</script>

<style scoped>
.navbar-home {
  background-color: var(--color-tint);
}
</style>