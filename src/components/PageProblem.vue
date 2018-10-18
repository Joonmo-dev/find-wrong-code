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
  },
  methods: {
    gotoNextProblem() {
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
  },
};
</script>

<style scoped lang="scss">
.link-btn-container {
  margin-top: 100px;
}
</style>
