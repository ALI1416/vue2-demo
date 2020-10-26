<template>
  <div id="app">
    这是App页面
    <br />
    <br />
    <!-- router-link是vue-router已经注册过的全局标签，可以直接使用，相当于a标签 -->
    <!-- to属性是url -->
    <router-link to="/A">A页面（a标签）</router-link>
    <router-link to="/B">B页面（a标签）</router-link>
    <br />
    <br />
    <!-- tag属性是转为对应的标签 -->
    <router-link to="/A" tag="button">A页面（button按钮）</router-link>
    <router-link to="/B" tag="div">B页面（div）</router-link>
    <br />
    <br />
    <!-- replace属性是使用replaceState，用户无法点击前进和返回按钮 -->
    <router-link to="/A" replace>A页面（不能前进后退）</router-link>
    <router-link to="/B" replace>B页面（不能前进后退）</router-link>
    <br />
    <br />
    <!-- active-class属性是会修改点击时的class值，默认是router-link-active，也可以到router中统一修改 -->
    <router-link to="/A" replace active-class="active"
      >A页面（修改class）</router-link
    >
    <router-link to="/B" replace active-class="active"
      >B页面（修改class）</router-link
    >
    <br />
    <br />
    <!-- 通过代码进行跳转 -->
    <button @click="AClick">A页面（js跳转）</button>
    <button @click="BClick">B页面（js跳转）</button>
    <br />
    <br />
    <!-- 动态路由 -->
    <router-link :to="'/C/' + idC">C页面（params参数传递）</router-link>
    <router-link :to="queryD">D页面（query查询传递）</router-link>
    <button @click="CClick">C页面（js跳转，params参数传递）</button>
    <button @click="DClick">D页面（js跳转，query查询传递）</button>
    <br />
    <br />
    <!-- router-view是要显示的页面 -->
    显示的页面
    <br />
    <br />
    <!-- keep-alive保活，可以使以前的页面不被销毁 -->
    <!-- include包含，exclude排除，组件名，用逗号,分开 -->
    <keep-alive exclude="B">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // params参数传递
      idC: "121212",
      // query查询传递
      queryD: {
        // 跳转的页面
        path: "/D",
        // 查询对象
        query: {
          name: "ddd",
          age: "22",
          gender: "男",
        },
      },
    };
  },
  methods: {
    AClick() {
      // $router是vue-router中内置属性，push压入栈，replace替换
      // 这样会出现问题，要跳转的页面和当前页面url相同时会报错
      if (this.$route.path != "/A") {
        this.$router.push("/A");
        // this.$router.replace('/A');
      }
    },
    BClick() {
      if (this.$route.path != "/B") {
        this.$router.push("/B");
      }
    },
    CClick() {
      if (this.$route.path != "/C/" + this.idC) {
        this.$router.push("/C/" + this.idC);
      }
    },
    DClick() {
      if (this.$route.path != this.queryD.path) {
        this.$router.push(this.queryD);
      }
    },
  },
  /* 生命周期 */
  // 创建前
  beforeCreate() {
    console.log("beforeCreate");
  },
  // 创建完成
  created() {
    console.log("created");
  },
  // 挂载前
  beforeMount() {
    console.log("beforeMount");
  },
  // 挂载完成
  mounted() {
    console.log("mounted");
  },
  // 更新前
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  // 更新完成
  updated() {
    console.log("updated");
    // 可以在此处更改标题，但是比较麻烦
    // 推荐到router去更改
    // document.title = "首页";
  },
  // 销毁前
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  // 销毁完成
  destroyed() {
    console.log("destroyed");
  },
};
</script>
<style>
.active {
  color: red;
}
</style>
