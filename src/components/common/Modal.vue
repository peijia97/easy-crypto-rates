<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content"></div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: { value: { type: String, default: "", required: true } }
};
</script>

<style lang="scss" scoped></style>
