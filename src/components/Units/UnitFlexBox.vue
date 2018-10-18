<template>
  <div
    :style="styles"
    class="flex-box"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'UnitFlexBox',
  props: {
    justifyCenter: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    textAlign() {
      return this.justifyCenter ? 'center' : '';
    },
    styles() {
      return {
        justifyContent: this.textAlign,
      };
    },
  },
};
</script>

<style scoped>
.flex-box {
  display: flex;
}
</style>
