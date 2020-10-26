<template>
  <div>这是B页面</div>
</template>
<script>
export default {
  name: "B",
  created() {
    console.log("A created");
  },
  destroyed() {
    console.log("A destroyed");
  },
};
</script>
<style scoped>
</style>