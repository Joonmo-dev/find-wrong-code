<template>
  <div class="problem-line">
    <div class="line-number">
      <p-check
        v-model="model"
        class="p-icon p-pulse problem-checkbox"
        color="warning"
        @change="$emit('change', model)"
      >
        <i
          slot="extra"
          class="icon mdi mdi-check"
        />
        {{ lineNumber }}
      </p-check>
    </div>
    <div class="code">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProblemLine',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    lineNumber: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      model: this.checked,
    };
  },
};
</script>

<style scoped lang="scss">
.problem-line {
  display: flex;
  font-size: 18px;
}
.line-number {
  width: 60px;
}
.problem-checkbox {
  color: #fff;
}
.code {
  flex: 1;
  color: #000;
  background-color: #fff;
  font-family: Consolas, monaco, monospace;
  padding-left: 10px;
}
</style>
