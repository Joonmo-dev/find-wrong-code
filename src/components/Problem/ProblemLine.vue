<template>
  <div class="problem-line">
    <div class="line-number">
      <p-check
        class="p-icon p-pulse problem-checkbox"
        color="warning"
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
  props: {
    lineNumber: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.problem-line {
  display: flex;
  font-size: 18px;
}
.problem-checkbox {
  color: #fff;
}
.code {
  flex: 1;
  color: #000;
  background-color: #fff;
  font-family: Consolas, monaco, monospace;
}
</style>
