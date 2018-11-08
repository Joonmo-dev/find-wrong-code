<template>
  <div class="page-main">
    <unit-title
      v-animate-css="{
        classes: 'fadeInUp',
      }"
      align-center
    >
      결과
    </unit-title>
    <unit-title
      v-animate-css="{
        classes: 'fadeInUp',
        delay: 500,
      }"
      :level="4"
      align-center
    >
      문제 점수 {{ correctScore }}점, 남은 시간 {{ lastTime }}초
    </unit-title>
    <unit-title
      v-animate-css="{
        classes: 'fadeInUp',
        delay: 750,
      }"
      :level="3"
      align-center
    >
      최종 점수 {{ finalScore }}점
    </unit-title>
    <unit-title
      v-animate-css="{
        classes: 'fadeInUp',
        delay: 1000,
      }"
      :level="4"
      align-center
    >
      틀린 문제 정답 확인
    </unit-title>
    <template
      v-for="(problem, index) in typedProblems"
      v-if="!userAnswerArray[index]"
    >
      <unit-title
        v-animate-css="{
          classes: 'fadeIn',
          delay: 1000 + (100 * (index + 1)),
        }"
        :key="`title-${index}`"
        :level="4"
        align-left
      >
        {{ index + 1 }}번: {{ problem.score }}점
      </unit-title>
      <problem-area
        v-animate-css="{
          classes: 'fadeIn',
          delay: 1000 + (100 * (index + 1)),
        }"
        :key="`problem-${index}`"
        :problem-data="problem.data"
        :problem-answer="problem.answer"
        class="problem-check"
        read-only
      />
    </template>
    <unit-flex-box
      justify-center
      class="goto-main-btn"
    >
      <unit-btn @on-click="gotoMain">
        메인으로 돌아가기
      </unit-btn>
    </unit-flex-box>
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
    lastTime: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    correctScore() {
      return this.userAnswerArray.reduce((result, value) => result + value);
    },
    typedProblems() {
      return problem[this.type];
    },
    finalScore() {
      return this.correctScore + parseInt(this.lastTime / 10, 10);
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
