<template>
  <b-input
    :value="value"
    @input="$emit('input', $event)"
    :icon="icon"
    :icon-right="clearable ? 'times' : null"
    :icon-right-clickable="clearable"
    @icon-right-click="$emit('clear')"
    :placeholder="placeholder"
    class="inputBar"
  >
  </b-input>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    value: { type: String, default: "", required: true },
    icon: { type: String, default: "", required: false },
    placeholder: { type: String, default: "", required: false },
    clearable: { type: Boolean, default: false, required: false }
  }
};
</script>

<style lang="scss" scoped>
.inputBar {
  @include until($tablet) {
    width: 95% !important;
  }
}
</style>
