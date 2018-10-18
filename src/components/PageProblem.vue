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
    </unit-container>
  </div>
</template>

<script>
import Units from './Units/Units';

export default {
  name: 'PageProblem',
  components: {
    ...Units,
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
};
</script>

<style>

</style>
