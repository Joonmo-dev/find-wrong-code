<template>
  <div class="page-problem">
    <unit-container>
      <unit-title
        v-animate-css="{
          classes: 'fadeInUp',
        }"
      >
        {{ CapitalizedType }} {{ id }}
      </unit-title>
      <problem-area :problem-data="problemData"/>
      <unit-flex-box
        v-animate-css="{
          classes: 'fadeIn',
          delay: 500,
        }"
        justify-end
        class="link-btn-container"
      >
        <unit-btn
          class="link-btn"
          @on-click="gotoNextProblem"
        >
          Next
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
      type: String,
      required: true,
    },
  },
  data() {
    return {
      problemData: problem.c[0].data,
      problemAnswer: problem.c[0].answer,
    };
  },
  computed: {
    CapitalizedType() {
      return this.type[0].toUpperCase() + this.type.slice(1);
    },
  },
  methods: {
    gotoNextProblem() {

    },
  },
};
</script>

<style scoped lang="scss">

</style>
