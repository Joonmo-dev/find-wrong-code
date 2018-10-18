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
    justifyStart: {
      type: Boolean,
      default: true,
    },
    justifyCenter: {
      type: Boolean,
      default: false,
    },
    justifyEnd: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    justifyContent() {
      let value;
      if (this.justifyEnd) {
        value = 'flex-end';
      } else if (this.justifyStart) {
        value = 'center';
      } else if (this.justifyLeft) {
        value = 'flex-start';
      }
      return value;
    },
    styles() {
      return {
        justifyContent: this.justifyContent,
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
