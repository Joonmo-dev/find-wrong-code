<template>
  <div class="problem-area">
    <problem-line :line-number="1">
      content
    </problem-line>
  </div>
</template>

<script>
import ProblemLine from './ProblemLine';

export default {
  name: 'ProblemArea',
  components: {
    ProblemLine,
  },
};
</script>

<style scoped lang="scss">

</style>
