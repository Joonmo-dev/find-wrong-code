<template>
  <div class="problem-area">
    <div
      v-for="(line, index) in lines"
      :key="`${individualKey}${index}`"
      class="problem-line"
    >
      <div class="line-number">
        <p-radio
          v-model="userAnswer"
          :color="readOnly ? 'danger' : 'warning'"
          :disabled="readOnly"
          :value="index + 1"
          class="p-curve p-pulse"
        >
          {{ index + 1 }}
        </p-radio>
      </div>
      <div class="code">
        {{ line.replace(/\s/g, '&nbsp;') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProblemArea',
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
      userAnswer: this.readOnly ? this.problemAnswer : 0,
    };
  },
  computed: {
    lines() {
      return this.problemData.split('\n');
    },
    isAnswer() {
      return this.userAnswer === this.problemAnswer;
    },
  },
  watch: {
    isAnswer(result) {
      this.$emit('change-answer', result);
    },
  },
  created() {
    this.$emit('change-answer', this.isAnswer);
  },
};
</script>

<style scoped lang="scss">
.problem-line {
  display: flex;
  font-size: 18px;
}
.line-number {
  width: 60px;
  color: #fff;
}
.code {
  flex: 1;
  color: #000;
  background-color: #fff;
  font-family: Consolas, monaco, monospace;
  padding-left: 10px;
}
</style>
