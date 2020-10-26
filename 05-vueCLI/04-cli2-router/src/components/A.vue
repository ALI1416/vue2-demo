<template>
  <div>
    这是A页面
    <br />
    <router-link to="/A/A_A">A_A页面</router-link>
    <router-link to="/A/A_B">A_B页面</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "A",
  data() {
    return {
      // 记录当前路径
      path: "/A/A_A",
    };
  },
  created() {
    console.log("A created");
  },
  destroyed() {
    console.log("A destroyed");
  },

  /* 组件是否活跃 */
  // activated和deactivated只有在包裹keep-alive时才有效
  // 活跃的
  activated() {
    console.log("A activated");
    // 设置路径
    if (this.$route.path != "/A/A_A") {
      this.$router.push(this.path);
    }
  },
  // 不再活跃
  deactivated() {
    console.log("A deactivated");
  },
  // 路由进入
  beforeRouteEnter(to, from, next) {
    console.log("A beforeRouteEnter");
    next();
  },

  /* 组件内路由守卫 */
  // 路由离开
  beforeRouteLeave(to, from, next) {
    console.log("A beforeRouteLeave");
    // 记录并替换路由离开时路径
    this.path = this.$route.path;
    next();
  },
};
</script>
<style scoped>
</style>