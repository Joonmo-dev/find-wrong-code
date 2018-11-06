<template>
  <unit-floater position-top>
    <unit-flex-box justify-center>
      <div class="timer">
        <countdown
          :time="initialTime"
          @countdownprogress="emitSeconds"
        >
          <template slot-scope="props">
            {{ props.minutes }}:{{ props.seconds }}
          </template>
        </countdown>
      </div>
    </unit-flex-box>
  </unit-floater>
</template>

<script>
import Units from '../Units/Units';

export default {
  name: 'ProblemCountdownTimer',
  components: {
    ...Units,
  },
  props: {
    initialTime: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    emitSeconds({ totalSeconds }) {
      this.$emit('countdown', totalSeconds);
    },
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
