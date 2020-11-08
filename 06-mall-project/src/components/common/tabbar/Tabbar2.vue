<template>
  <div class="tabbar">
    <div
      class="item"
      v-for="(i, index) in item"
      :key="i.normal.title"
      @click="itemClick(index)"
    >
      <div>
        <img
          :src="getImgUrl(index)"
          :alt="getTitle(index)"
          :style="getImgStyle(index)"
        />
      </div>
      <div>
        <span :style="getTextStyle(index)">{{ getTitle(index) }}</span>
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
    getTitle(i) {
      const normalTitle = item[i].normal.title;
      const activeTitle = item[i].active.title;
      return this.isActive(i)
        ? activeTitle == undefined
          ? normalTitle
          : activeTitle
        : normalTitle;
    },
    getImgStyle(i) {
      const normalImgStyleDefault = defaultStyle.normal.img;
      const activeImgStyleDefault = defaultStyle.active.img;
      const normalImgStyle = item[i].normal.style.img;
      const activeImgStyle = item[i].active.style.img;
      let normalImgStyleUsed = {};
      if (normalImgStyleDefault == undefined) {
        if (normalImgStyle == undefined) {
          normalImgStyleUsed = {};
        } else {
          normalImgStyleUsed = normalImgStyle;
        }
      } else {
        if (normalImgStyle == undefined) {
          normalImgStyleUsed = normalImgStyleDefault;
        } else {
          normalImgStyleUsed = { normalImgStyleDefault, normalImgStyle };
        }
      }
      let activeImgStyleUsed = {};
      if (activeImgStyleDefault == undefined) {
        if (activeImgStyle == undefined) {
          activeImgStyleUsed = {};
        } else {
          activeImgStyleUsed = activeImgStyle;
        }
      } else {
        if (activeImgStyle == undefined) {
          activeImgStyleUsed = activeImgStyleDefault;
        } else {
          activeImgStyleUsed = { activeImgStyleDefault, activeImgStyle };
        }
      }
      return this.isActive(i)
        ? { normalImgStyleUsed, activeImgStyleUsed }
        : activeImgStyleUsed;
    },
    getTextStyle(i) {
      // let style = this.isActive(i)
      //   ? this.defaultActiveStyle
      //   : this.defaultNormalStyle;
    },
  },
  methods: {
    itemClick(i) {
      this.currentIndex = i;
      // this.$router.replace(this.link);
    },
  },
};
</script>

<style scoped>
.tabbar {
  padding: 2px;
  display: flex;
  color: #333;
  background-color: #eee;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0px -1px 1px rgba(128, 128, 128, 0.1);
}
.item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.item img {
  height: 24px;
  width: 24px;
  margin: 4px 0 -4px 0;
}
.item-active {
  color: #f33;
}
</style>
