<template>
  <div id="tab-bar">
    <!-- 2、抽取到TabBarItem.vue -->
    <slot></slot>
    <!-- <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="" />
      <div>首页</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/shopcart.svg" alt="" />
      <div>购物车</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/order.svg" alt="" />
      <div>订单</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/profile.svg" alt="" />
      <div>我的</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  padding: 2px;
  display: flex;
  background-color: #eee;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  /* 元素添加阴影：水平阴影的位置，垂直阴影的位置（，模糊距离，阴影的大小，阴影的颜色，从外层的阴影（开始时）改变阴影内侧阴影） */
  box-shadow: 0px -1px 1px rgba(128, 128, 128, 0.1);
}
/* 2、抽取到TabBarItem.vue */
/* .tab-bar-item {
  flex: 1;
  text-align: center; */
/* 使用49px的比较多 */
/* height: 49px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
} */
</style>
