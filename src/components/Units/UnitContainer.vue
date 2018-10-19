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

<style scoped lang="scss">
.container {
  max-width: 100vw;
  min-height: 100vh;
  padding: 100px 400px;
  background-color: #333;
}
</style>
