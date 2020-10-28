<template>
  <div>
    A页面
    <br />
    <!-- {{ counter }} -->
    <!-- 从$store.getters中获取getters计算属性 -->
    数值x2：{{ $store.getters.counterx2 }}
    <br />
    数值x4：{{ $store.getters.counterx4 }}
    <br />
    数值x5：{{ $store.getters.counterxn(5) }}
  </div>
</template>
<script>
export default {
  name: "HelloVuex",
  // 普通方法，通过父子组件进行传递
  // 对于复杂的关系，不好处理
  // props: {
  //   counter: Number,
  // },
};
</script>
<style scoped>
</style>