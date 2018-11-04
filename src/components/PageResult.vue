<template>
  <div class="page-main">
    <unit-container>
      <unit-title
        v-animate-css="{
          classes: 'fadeInUp',
        }"
        align-center
      >
        최종결과
      </unit-title>
      <unit-title
        v-animate-css="{
          classes: 'fadeInUp',
          delay: 500,
        }"
        :level="2"
        align-center
      >
        {{ finalScore }}점
      </unit-title>
      <unit-title
        v-animate-css="{
          classes: 'fadeInUp',
          delay: 1000,
        }"
        :level="4"
        align-center
      >
        정답 확인
      </unit-title>
      <problem-area
        v-animate-css="{
          classes: 'fadeIn',
          delay: 1000 + (100 * (index + 1)),
        }"
        v-for="(problem, index) in typedProblems"
        :key="problem.id"
        :problem-data="problem.data"
        :problem-answer="problem.answer"
        class="problem-check"
        read-only
      />
      <unit-flex-box
        justify-center
        class="goto-main-btn"
      >
        <unit-btn @on-click="gotoMain">
          메인으로 돌아가기
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
  name: 'PageResult',
  components: {
    ...Units,
    ProblemArea,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    userAnswerArray: {
      type: Array,
      required: true,
    },
  },
  computed: {
    finalScore() {
      return this.userAnswerArray.reduce((result, value) => result + value);
    },
    typedProblems() {
      return problem[this.type];
    },
  },
  methods: {
    gotoMain() {
      this.$bus.$emit('clear-answer');
      this.$router.push({
        name: 'PageMain',
      });
    },
  },
};
</script>

<style scoped lang="scss">
.problem-check {
  margin-top: 50px;
}
.goto-main-btn {
  margin-top: 200px;
}
</style>
