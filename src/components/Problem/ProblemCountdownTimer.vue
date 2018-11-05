<template>
  <unit-floater position-top>
    <unit-flex-box justify-center>
      <div class="timer">
        00:00
      </div>
    </unit-flex-box>
  </unit-floater>
</template>

<script>
import Units from '../Units/Units';

export default {
  components: {
    ...Units,
  },
};
</script>

<style>
.timer {
  width: 200px;
  background-color: #fff;
  text-align: center;
  font-size: 40px;
  border-radius: 5px;
}
</style>
