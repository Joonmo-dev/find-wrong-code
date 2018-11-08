<template>
  <unit-floater position-top>
    <transition enter-active-class="animated fadeInDown">
      <unit-flex-box
        v-if="isVisible"
        justify-center
      >
        <div class="timer">
          <countdown
            ref="countdown"
            :time="initialTime"
            @countdownprogress="emitSeconds"
            @countdownend="close"
          >
            <template slot-scope="props">
              {{ props.minutes }}:{{ props.seconds }}
            </template>
          </countdown>
        </div>
      </unit-flex-box>
    </transition>
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
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    this.$bus.$on('start-timer', () => {
      this.show();
    });
    this.$bus.$on('stop-timer', () => {
      this.hide();
    });
  },
  methods: {
    emitSeconds({ totalSeconds }) {
      this.$emit('countdown', totalSeconds);
    },
    show() {
      this.isVisible = true;
    },
    hide() {
      this.isVisible = false;
    },
    close() {
      this.emitSeconds(0);
      this.hide();
      this.$bus.$emit('goto-result');
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
