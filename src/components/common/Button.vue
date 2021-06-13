<template>
  <b-button
    :rounded="rounded"
    :type="variant"
    :icon-left="icon"
    :icon-pack="iconPack"
    :class="
      `${size === 'is-large' ? 'is-size-8' : 'is-size-7'} ${
        iconOnly ? 'icon-only' : ''
      } btn-action`
    "
  >
    {{ label }}
  </b-button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: { type: String, default: "", required: false },
    rounded: { type: Boolean, default: false, required: false },
    variant: { type: String, default: "is-success", required: false },
    size: { type: String, default: "is-medium", required: false },
    icon: { type: String, default: "", required: false },
    iconOnly: { type: Boolean, default: false, required: false },
    iconPack: { type: String, default: "", required: false }
  }
};
</script>

<style lang="scss" scoped>
.btn-action {
  font-family: inherit;
  padding: 1.1rem 1.8em;
}
.icon-only {
  width: 2rem;
  height: 2rem !important;
  padding: 1.2rem !important;
  border-radius: 50% !important;
  background-color: $white !important;
  color: $grey900 !important;
  ::v-deep .icon {
    margin: 0 !important;
    font-size: 1rem;
  }
}
</style>
