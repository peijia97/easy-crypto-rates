<template>
  <b-button
    :rounded="rounded"
    :type="variant"
    :class="`${size === 'is-large' ? 'is-size-8' : 'is-size-7'} btn-action`"
  >
    {{ label }}
  </b-button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: { type: String, default: "", required: true },
    rounded: { type: Boolean, default: false, required: false },
    variant: { type: String, default: "is-success", required: false },
    size: { type: String, default: "is-medium", required: false }
  }
};
</script>

<style lang="scss" scoped>
.btn-action {
  font-family: inherit;
  padding: 1.1rem 1.8em;
}
</style>
