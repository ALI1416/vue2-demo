<template>
  <div id="home">
    <nav-bar class="navbar-home">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
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
      banners: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.banners;
    });
  },
};
</script>

<style scoped>
.navbar-home {
  background-color: var(--color-tint);
}
</style>