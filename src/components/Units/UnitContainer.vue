<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'UnitContainer',
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding: 100px;
  background-color: #333;
}
</style>
