<template>
  <div class="page-problem">
    <unit-container>
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
    </unit-container>
  </div>
</template>

<script>
import Units from './Units/Units';
import ProblemArea from './Problem/ProblemArea';
import problem from '../problems/problems';

export default {
  name: 'PageProblem',
  components: {
    ...Units,
    ProblemArea,
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
      userAnswer: false,
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
    btnText() {
      return this.numericId < 5 ? 'Next' : 'Finish';
    },
  },
  methods: {
    gotoNextProblem() {
      this.$bus.$emit('add-score', this.userAnswer ? this.problemScore : 0);
      if (this.numericId < 5) {
        this.$router.push({
          name: 'PageProblem',
          params: {
            type: this.type,
            id: this.numericId + 1,
          },
        });
      } else {
        this.$router.push({
          name: 'PageResult',
        });
      }
    },
    onChangeAnswer(result) {
      this.userAnswer = result;
    },
  },
};
</script>

<style scoped lang="scss">
.link-btn-container {
  margin-top: 100px;
}
</style>
