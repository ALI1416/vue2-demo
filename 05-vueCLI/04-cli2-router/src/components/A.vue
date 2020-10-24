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
};
</script>
<style scoped>
</style>