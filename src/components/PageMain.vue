<template>
  <div class="page-main">
    <unit-container>
      <unit-title align-center>
        Finding Wrong Code
      </unit-title>
      <unit-title
        :level="3"
        align-center
      >
        언어 선택
      </unit-title>
      <unit-flex-box justify-center>
        <unit-btn class="link-btn">C</unit-btn>
        <unit-btn class="link-btn">Javascript</unit-btn>
      </unit-flex-box>
    </unit-container>
  </div>
</template>

<script>
import Units from './Units/Units';

export default {
  name: 'PageMain',
  components: {
    ...Units,
  },
};
</script>

<style scoped>
.link-btn {
  margin: 0 20px;
}
</style>
