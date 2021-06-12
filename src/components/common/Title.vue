<template>
  <h2 class="title is-4 has-text-weight-bold">{{ value }}</h2>
</template>

<script>
export default {
  name: "Title",
  props: { value: { type: String, default: "", required: true } }
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 0 !important;
  @include until($tablet) {
    margin-bottom: 0.5rem !important;
  }
}
</style>
