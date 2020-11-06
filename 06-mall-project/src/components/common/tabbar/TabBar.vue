<template>
  <div class="tabbar">
    <div
      class="item"
      v-for="(i, index) in item"
      :key="i.title"
      @click="itemClick(index)"
    >
      <div>
        <img :src="getImgUrl(index)" :alt="i.title" :style="getImgStyle" />
      </div>
      <div>
        <span :style="getTextStyle">{{ i.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    tabbar,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    isActive(i) {
      return this.currentIndex == i ? true : false;
    },
    item(i) {
      return this.tabbar.item[i];
    },
    defaultStyle() {
      return this.tabbar.default.style;
    },
    getImgUrl(i) {
      const normalImgUrl = item[i].normal.url;
      const activeImgUrl = item[i].active.url;
      return this.isActive(i)
        ? activeImgUrl == undefined
          ? normalImgUrl
          : activeImgUrl
        : normalImgUrl;
    },
    getImgStyle(i) {
      // const normalImgStyle=
      let style = this.isActive(i)
        ? this.defaultActiveStyle
        : this.defaultNormalStyle;
    },
    getTextStyle(i) {
      let style = this.isActive(i)
        ? this.defaultActiveStyle
        : this.defaultNormalStyle;
    },
  },
  methods: {
    itemClick(i) {
      this.currentIndex = i;
      this.$router.replace(this.link);
    },
  },
};
</script>

<style scoped>
.tabbar {
  padding: 2px;
  display: flex;
  background-color: #eee;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0px -1px 1px rgba(128, 128, 128, 0.1);
}
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img {
  height: 24px;
  width: 24px;
  margin: 4px 0 -4px 0;
}
.tabbar-item-text-active {
  color: red;
}
</style>
