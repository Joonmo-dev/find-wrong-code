<template>
  <div
    :style="styles"
    class="floater"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'UnitFloater',
  props: {
    positionTop: {
      type: Boolean,
      default: false,
    },
    positionBottom: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    top() {
      return this.positionTop ? '50px' : 'unset';
    },
    bottom() {
      return this.positionBottom ? '50px' : 'unset';
    },
    styles() {
      return {
        top: this.top,
        bottom: this.bottom,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.floater {
  position: absolute;
  z-index: 10;
  left: 0;
  width: 100%;
}
</style>
