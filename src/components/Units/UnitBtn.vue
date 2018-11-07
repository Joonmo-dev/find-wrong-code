<template>
  <button
    :style="styles"
    class="btn"
    @click="onClick"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'UnitBtn',
  props: {
    width: {
      type: String,
      default: '200px',
    },
    square: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    height() {
      return this.square ? this.width : '50px';
    },
    styles() {
      return {
        width: this.width,
        height: this.height,
      };
    },
  },
  methods: {
    onClick(event) {
      this.$emit('on-click', event);
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  background-color: #666;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  font-size: 20px;
  color: #fff;
  transition: 0.5s;
  cursor: pointer;
}
.btn:hover {
  background-color: #777;
}
</style>
