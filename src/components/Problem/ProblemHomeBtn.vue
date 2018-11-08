<template>
  <unit-floater position-bottom>
    <unit-flex-box justify-end>
      <unit-btn
        width="80px"
        square
        class="btn"
        @on-click="onClick"
      >
        <span class="btn-font">
          <home-icon class="home-icon"/>
        </span>
      </unit-btn>
    </unit-flex-box>
  </unit-floater>
</template>

<script>
import HomeIcon from 'vue-material-design-icons/Home';
import 'vue-material-design-icons/styles.css';
import Units from '../Units/Units';

export default {
  name: 'ProblemHomeBtn',
  components: {
    HomeIcon,
    ...Units,
  },
  methods: {
    onClick() {
      this.$emit('on-click');
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  margin-right: 50px;
}
.btn-font {
  font-size: 30px;
}
</style>
