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
        level="3"
        align-center
      >
        100점
      </unit-title>
      <unit-flex-box justify-center>
        <unit-btn @on-click="gotoMain">
          메인으로 돌아가기
        </unit-btn>
      </unit-flex-box>
    </unit-container>
  </div>
</template>

<script>
import Units from './Units/Units';

export default {
  name: 'PageResult',
  components: {
    ...Units,
  },
  methods: {
    gotoMain() {
      this.$router.push({
        name: 'PageMain',
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
