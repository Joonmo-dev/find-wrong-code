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
      <problem-area/>
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

<style>

</style>
