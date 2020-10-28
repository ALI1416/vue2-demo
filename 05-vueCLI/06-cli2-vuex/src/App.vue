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
    异步请求：{{ $store.state.async }}
    <br />
    <button @click="asyncMutation">Mutation</button>
    <button @click="asyncAction">Action</button>
    <button @click="asyncAction1">Action 函数回调</button>
    <button @click="asyncAction2">Action Promise回调</button>
    <br />
    模块：
    <br />
    <!-- 需要通过 $store.state.模块名.属性名 来使用属性 -->
    模块内state：{{ $store.state.a.name }}
    <br />
    <button @click="changeName">模块内Mutation修改state</button>
    <br />
    <!-- getters方法不变，和root相同 -->
    模块内getter：
    <br />
    {{ $store.getters.name2 }}
    <br />
    {{ $store.getters.name3 }}
    <br />
    {{ $store.getters.name4 }}
    <br />
    <button @click="actionModule">ActionModule</button>
    <br />
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
    asyncMutation() {
      this.$store.commit("asyncMutation");
    },
    asyncAction() {
      // 调用action方法使用this.$store.dispatch
      this.$store.dispatch("asyncAction");
    },
    // 函数回调
    asyncAction1() {
      this.$store.dispatch("asyncAction1", {
        message: "asyncAction1携带的信息",
        success(res) {
          console.log("asyncAction1函数回调成功");
          console.log(res);
        },
      });
    },
    // Promise回调
    asyncAction2() {
      // 由于$store.dispatch返回的是Promise类型，所以可以直接调用then方法
      this.$store
        .dispatch("asyncAction2", "asyncAction2携带的信息")
        .then((res) => {
          console.log("asyncAction2Promise回调成功");
          console.log(res);
        });
    },
    // 调用模块内mutation，和root的相同，不要和root内mutation同名
    changeName() {
      this.$store.commit("changeName", "changeName");
    },
    actionModule() {
      this.$store.dispatch("asyncActionModule");
    },
  },
};
</script>

<style>
</style>
