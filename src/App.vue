<template>
  <div id="app">
    <router-view :user-answer-array="userAnswerArray"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userAnswerArray: [],
    };
  },
  created() {
    this.$bus.$on('add-score', (score) => {
      this.userAnswerArray.push(score);
    });
    this.$bus.$on('clear-answer', () => {
      this.userAnswerArray = [];
    });
  },
};
</script>

<style lang="scss">
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
@import '~pretty-checkbox/src/pretty-checkbox.scss';

body {
  margin: 0;
  font-family: "Nanum Gothic", sans-serif;
}

body, div, span, h1, h2, h3, h4, h5, h6, button {
  box-sizing: border-box;
}
</style>
