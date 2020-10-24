<template>
  <div>
    这是C页面
    <div>id是{{ idC }}</div>
  </div>
</template>
<script>
export default {
  name: "C",
  computed: {
    idC() {
      // 通过$route可以获得当前活跃的组件，parans获得参数，id是参数名（和router中映射的名字相同）
      return this.$route.params.idC;
      // $route和$router不一样，后者是new出来的Router对象
    },
  },
};
</script>
<style scoped>
</style>