<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);

body {
  margin: 0;
  font-family: "Nanum Gothic", sans-serif;
}

body, div, span, h1, h2, h3, h4, h5, h6, button {
  box-sizing: border-box;
}
</style>
