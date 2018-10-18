<template>
  <button
    class="btn"
    @click="onClick"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'UnitBtn',
  methods: {
    onClick(event) {
      this.$emit('on-click', event);
    },
  },
};
</script>

<style scoped>
.btn {
  width: 200px;
  height: 50px;
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
