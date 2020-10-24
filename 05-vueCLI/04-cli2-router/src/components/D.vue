<template>
  <div>
    这是D页面
    <div>query是{{ queryD }}</div>
  </div>
</template>
<script>
export default {
  name: "D",
  computed: {
    queryD() {
      // 通过$route可以获得当前活跃的组件，query获得query
      return this.$route.query;
    },
  },
};
</script>
<style scoped>
</style>