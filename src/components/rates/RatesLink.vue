<template>
  <div class="link-container">
    <span>
      <b-icon pack="fas" :icon="icon" class="icon"> </b-icon>
      <h4>{{ title }}</h4>
    </span>
    <a :href="link" class="ml-5">{{ link || "—" }}</a>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: { type: String, default: "", required: true },
    icon: { type: String, default: "", required: true },
    link: { type: String, default: "", required: true }
  }
};
</script>

<style lang="scss" scoped>
.link-container {
  text-align: left;
  margin: 0.5rem 0 1rem;
  span {
    @include flexbox();
    align-items: center;
    h4 {
      font-weight: bold;
    }
  }
}
</style>
