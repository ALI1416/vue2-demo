<template>
  <div id="app">
    <!-- 1、以下抽取到TarBar.vue中 -->
    <!-- <div id="tab-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">订单</div>
      <div class="tab-bar-item">我的</div>
    </div> -->
    <router-view></router-view>
    <!-- 1、调用组件 -->
    <tab-bar>
      <!-- 使用插槽 -->
      <tab-bar-item link="/home" activeTextColor="green">
        <!-- 使用具名插槽 -->
        <!-- 可以使用别名，要到webpack.base.conf.js的resolve-alias去配置 -->
        <!-- html代码解析需要在别名前面加上~ -->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <!-- <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="" /> -->
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/shopcart">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/order">
        <img slot="item-icon" src="./assets/img/tabbar/order.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/order_active.svg"
          alt=""
        />
        <div slot="item-text">订单</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// 导入组件
// 可以使用别名，要到webpack.base.conf.js的resolve-alias去配置
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
// import TabBar from "./components/tabbar/TabBar";
// import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
/* style中导入全局配置使用@import */
@import "./assets/css/base.css";

/* 1、以下抽取到TarBar.vue中 */
/* #tab-bar {
  display: flex;
  background-color: #eee;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px; */
/* 元素添加阴影：水平阴影的位置，垂直阴影的位置（，模糊距离，阴影的大小，阴影的颜色，从外层的阴影（开始时）改变阴影内侧阴影） */
/* box-shadow: 0px -1px 1px #eee;
}
.tab-bar-item {
  flex: 1;
  text-align: center; */
/* 使用49px的比较多 */
/* height: 49px;
} */
</style>
