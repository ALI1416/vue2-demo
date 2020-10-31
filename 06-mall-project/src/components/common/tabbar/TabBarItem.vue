<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="activeTextStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    activeTextColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
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