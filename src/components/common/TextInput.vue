<template>
  <b-input
    :value="value"
    @input="$emit('input', $event)"
    icon-right="times"
    :icon-right-clickable="clearable"
    @icon-right-click="$emit('clear')"
  >
  </b-input>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    value: { type: String, default: "", required: true },
    clearable: { type: Boolean, default: false, required: false }
  }
};
</script>

<style lang="scss" scoped></style>
