<template>
  <div
    :key="individualKey"
    class="page-problem"
  >
    <problem-home-btn
      v-animate-css="{
        classes: 'fadeIn',
        delay: 1500,
      }"
    />
    <unit-title
      v-animate-css="{
        classes: 'fadeInUp',
      }"
    >
      {{ capitalizedType }} {{ id }}
    </unit-title>
    <problem-area
      v-animate-css="{
        classes: 'fadeIn',
        delay: 500,
      }"
      :problem-data="problemData"
      :problem-answer="problemAnswer"
      :individual-key="individualKey"
      @change-answer="onChangeAnswer"
    />
    <unit-flex-box
      v-animate-css="{
        classes: 'fadeIn',
        delay: 1000,
      }"
      justify-end
      class="link-btn-container"
    >
      <unit-btn
        class="link-btn"
        @on-click="gotoNextProblem"
      >
        {{ btnText }}
      </unit-btn>
    </unit-flex-box>
  </div>
</template>

<script>
import Units from './Units/Units';
import ProblemArea from './Problem/ProblemArea';
import ProblemHomeBtn from './Problem/ProblemHomeBtn';
import problem from '../problems/problems';

export default {
  name: 'PageProblem',
  components: {
    ...Units,
    ProblemArea,
    ProblemHomeBtn,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      isCorrect: false,
    };
  },
  computed: {
    capitalizedType() {
      return this.type[0].toUpperCase() + this.type.slice(1);
    },
    numericId() {
      return Number(this.id);
    },
    problemData() {
      return problem[this.type][this.numericId - 1].data;
    },
    problemAnswer() {
      return problem[this.type][this.numericId - 1].answer;
    },
    problemScore() {
      return problem[this.type][this.numericId - 1].score;
    },
    numOfProblem() {
      return problem[this.type].length;
    },
    btnText() {
      return this.numericId < this.numOfProblem ? 'Next' : 'Finish';
    },
    individualKey() {
      return `${this.type}${this.id}`;
    },
  },
  methods: {
    gotoNextProblem() {
      this.$bus.$emit('set-score', this.numericId - 1, this.isCorrect ? this.problemScore : 0);
      if (this.numericId < this.numOfProblem) {
        this.$router.push({
          name: 'PageProblem',
          params: {
            type: this.type,
            id: this.numericId + 1,
          },
        });
      } else {
        this.$bus.$emit('stop-timer');
        this.$router.push({
          name: 'PageResult',
          params: {
            type: this.type,
          },
        });
      }
    },
    onChangeAnswer(result) {
      this.isCorrect = result;
    },
  },
};
</script>

<style scoped lang="scss">
.link-btn-container {
  margin-top: 100px;
}
</style>
