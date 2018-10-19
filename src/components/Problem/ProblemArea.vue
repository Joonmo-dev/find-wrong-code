<template>
  <div class="problem-area">
    <problem-line
      v-for="(line, index) in lines"
      :key="index"
      :line-number="index + 1"
      v-model="userAnswer[index]"
      :value="index + 1"
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
    problemAnswer: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      userAnswer: [],
    };
  },
  computed: {
    lines() {
      return this.problemData.split('\n');
    },
    // Need Refactoring
    isAnswer() {
      let result = this.userAnswer.some(answer => answer);
      this.userAnswer.forEach((answer, index) => {
        if (answer) {
          if (this.problemAnswer !== index + 1) {
            result = false;
          }
        }
      });
      return result;
    },
  },
  watch: {
    isAnswer(result) {
      this.$emit('change-answer', result);
    },
  },
  created() {
    for (let i = 0; i < this.lines.length; i += 1) {
      this.userAnswer.push(false);
    }
  },
};
</script>

<style scoped lang="scss">

</style>
