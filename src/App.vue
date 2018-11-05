<template>
  <div id="app">
    <unit-container>
      <router-view :user-answer-array="userAnswerArray"/>
    </unit-container>
  </div>
</template>

<script>
import Units from './components/Units/Units';

export default {
  name: 'App',
  components: {
    ...Units,
  },
  data() {
    return {
      userAnswerArray: Array(100).fill(0),
    };
  },
  created() {
    this.$bus.$on('add-score', (index, score) => {
      this.userAnswerArray[index] = score;
    });
    this.$bus.$on('clear-answer', () => {
      this.userAnswerArray = Array(100).fill(0);
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
