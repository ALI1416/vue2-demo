/* 一般vue文件都是大写字母开头 */
/* 模板，写HTML代码 */
<template>
  <div>
    <span class="title">{{ msg }}</span>
    <!-- 使用组件cpn -->
    <Cpn />
  </div>
</template>

/* 脚本，写js代码 */
<script>
// 引用组件cpn，在webpack中配置忽略拓展名后可以不写拓展名
import Cpn from "./Cpn";
export default {
  data() {
    return {
      msg: "Hi Vue",
    };
  },
  components: {
    Cpn,
  },
};
</script>

/* 样式，写css代码 */
<style scoped>
.title {
  color: red;
}
</style>