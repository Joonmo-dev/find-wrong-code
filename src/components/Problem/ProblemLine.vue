<template>
  <div class="problem-line">
    <p-check
      class="p-icon p-pulse"
      color="warning"
    >
      <i
        slot="extra"
        class="icon mdi mdi-check"
      />
      Interested
    </p-check>
    <div class="code">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProblemLine',
};
</script>

<style scoped lang="scss">

</style>
