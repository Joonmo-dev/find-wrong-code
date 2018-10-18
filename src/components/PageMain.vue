<template>
  <div class="page-main">
    <unit-container>
      <img
        v-animate-css="{
          classes: 'fadeIn',
        }"
        src="../assets/logo_page-main.png"
        alt="re logo"
        class="main-logo"
      >
      <unit-title
        v-animate-css="{
          classes: 'fadeInUp',
        }"
        align-center
      >
        Finding Wrong Code
      </unit-title>
      <unit-title
        v-animate-css="{
          classes: 'fadeInUp',
          delay: 1500,
        }"
        :level="3"
        align-center
      >
        언어 선택
      </unit-title>
      <unit-flex-box
        v-animate-css="{
          classes: 'fadeInUp',
          delay: 2000,
        }"
        justify-center
        class="link-btn-container"
      >
        <unit-btn
          class="link-btn"
          @on-click="gotoC"
        >
          C
        </unit-btn>
        <unit-btn
          class="link-btn"
          @on-click="gotoJavascript"
        >
          Javascript
        </unit-btn>
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
  methods: {
    gotoC() {
      this.$router.push({
        name: 'PageProblem',
        params: {
          type: 'c',
          id: 1,
        },
      });
    },
    gotoJavascript() {
      this.$router.push({
        name: 'PageProblem',
        params: {
          type: 'javascript',
          id: 1,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.main-logo {
  width: 200px;
  margin: 0 auto;
  display: block;
  margin-bottom: 200px;
}
.link-btn-container {
  margin-top: 100px;
}
.link-btn {
  margin: 0 20px;
}
</style>
