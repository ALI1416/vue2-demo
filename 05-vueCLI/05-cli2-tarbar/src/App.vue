<template>
  <div id="app">
    <!-- 1、以下抽取到TarBar.vue中 -->
    <!-- <div id="tab-bar">
      <div id="tab-bar-item">首页</div>
      <div id="tab-bar-item">购物车</div>
      <div id="tab-bar-item">订单</div>
      <div id="tab-bar-item">我的</div>
    </div> -->
    <!-- 调用组件 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// 导入组件
import TabBar from "./components/tabbar/TabBar";
export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>

<style>
/* 1、以下抽取到TarBar.vue中 */
/* style中导入全局配置使用@import */
/* @import "./assets/css/base.css";
#tab-bar {
  display: flex;
  background-color: #eee;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px; */
/* 元素添加阴影：水平阴影的位置，垂直阴影的位置（，模糊距离，阴影的大小，阴影的颜色，从外层的阴影（开始时）改变阴影内侧阴影） */
/* box-shadow: 0px -1px 1px #eee;
}
#tab-bar-item {
  flex: 1;
  text-align: center; */
/* 使用49px的比较多 */
/* height: 49px;
} */
</style>
