<template>
  <div class="problem-area">
    <problem-line
      v-for="(line, index) in lines"
      :key="`${individualKey}${index}`"
      :line-number="index + 1"
      v-model="userAnswer[index]"
      :value="index + 1"
      :read-only="readOnly"
    >
      {{ line.replace(/\s/g, '&nbsp;') }}
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
    individualKey: {
      type: String,
      default: '',
    },
    readOnly: {
      type: Boolean,
      default: false,
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
    lines() {
      this.userAnswer = [];
      for (let i = 0; i < this.lines.length; i += 1) {
        this.userAnswer.push(false);
      }
    },
  },
  created() {
    for (let i = 0; i < this.lines.length; i += 1) {
      this.userAnswer.push(false);
    }
    if (this.readOnly) {
      this.userAnswer[this.problemAnswer - 1] = true;
    }
  },
};
</script>

<style scoped lang="scss">

</style>
