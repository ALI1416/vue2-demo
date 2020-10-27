<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 最好用div包裹slot，加的标签不会丢失 -->
    <!-- 使用具名插槽 -->
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="activeTextStyle"><slot name="item-text"></slot></div>
    <!-- 3、抽取到插槽 -->
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div> -->
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  // 接收外部传来的属性
  props: {
    link: String,
    activeTextColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    // 判断是否活跃页面
    isActive() {
      // $route.path当前活跃页面找到path，和link比较，path中不存在link=-1
      return this.$route.path.indexOf(this.link) != -1;
    },
    activeTextStyle() {
      return this.isActive ? { color: this.activeTextColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  /* 使用49px的比较多 */
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin: 4px 0 -4px 0;
}
.active {
  color: red;
}
</style>