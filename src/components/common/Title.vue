<template>
  <h2 class="title is-4 has-text-weight-bold mb-0">{{ value }}</h2>
</template>

<script>
export default {
  name: "Title",
  props: { value: { type: String, default: "", required: true } }
};
</script>

<style lang="scss" scoped></style>
