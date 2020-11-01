<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import "normalize.css";
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>
<style scoped>
@import "assets/css/base.css";
</style>
