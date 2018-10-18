<template>
  <div class="problem-area">
    <problem-line
      v-for="(line, index) in lines"
      :key="index"
      :line-number="index + 1"
    >
      {{ line }}
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
  props: {
    problemData: {
      type: String,
      required: true,
    },
  },
  computed: {
    lines() {
      return this.problemData.split('\n');
    },
  },
};
</script>

<style scoped lang="scss">

</style>
