<template>
  <div
    :style="styles"
    class="title"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'UnitTitle',
  props: {
    alignCenter: {
      type: Boolean,
      default: false,
    },
    level: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    textAlign() {
      return this.alignCenter ? 'center' : '';
    },
    fontSize() {
      return `${80 - (this.level * 15)}px`;
    },
    styles() {
      return {
        textAlign: this.textAlign,
        fontSize: this.fontSize,
      };
    },
  },
};
</script>

<style scoped>
.title {
  font-weight: bolder;
  color: #fff;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
