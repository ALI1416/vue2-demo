<template>
  <div id="app">
    App页面
    <br />
    <!-- 数值：{{ counter }} -->
    <!-- 从$store.state中获取变量 -->
    数值：{{ $store.state.counter }}
    <br />
    <!-- <button @click="counter--">-</button> -->
    <!-- <button @click="counter++">+</button> -->
    <!-- 通过$store.state.counter--可以实现vuex中属性变化，但是非常不推荐 -->
    <!-- <button @click="$store.state.counter--">-</button> -->
    <!-- <button @click="$store.state.counter++">+</button> -->
    <button @click="sub">-</button>
    <button @click="add">+</button>
    <button @click="subn(2)">-2</button>
    <button @click="addn(2)">+2</button>
    <!-- 普通方法，通过父子组件进行传递 -->
    <!-- 对于复杂的关系，不好处理 -->
    <!-- <hello-vuex :counter="counter"></hello-vuex> -->
    <br />
    个人简介：{{ $store.state.profile }}
    <br />
    <button @click="addProfileInfo">新增</button>
    <button @click="delProfileInfo">删除</button>
    <br />
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

// 导入mutations常量
import * as types from "./store/mutations-types";

export default {
  name: "App",
  data() {
    return {
      // 保存到vuex中，就不需要在本地保存了
      // counter: 100,
    };
  },
  components: {
    HelloVuex,
  },
  methods: {
    // 可以使用mutations来定义方法名，方法名可以使用['方法名']来定义
    [types.add]() {
      // 通过this.$store.commit('add')来提交mutations，参数是方法名
      // 普通提交类型
      // 可以使用mutations来定义方法名
      this.$store.commit(types.add);
    },
    sub() {
      // this.$store.commit("sub");
      // 对象提交类型
      this.$store.commit({
        // 方法名
        type: "sub",
      });
    },
    addn(n) {
      // 第二个参数payload(负载)可以传递到vuex
      this.$store.commit("addn", n);
    },
    subn(n) {
      // this.$store.commit("subn", n);
      // 对象提交类型（带参数）
      this.$store.commit({
        // 方法名
        type: "subn",
        n,
      });
    },
    addProfileInfo() {
      this.$store.commit("addProfileInfo");
    },
    delProfileInfo() {
      this.$store.commit("delProfileInfo");
    },
  },
};
</script>

<style>
</style>
