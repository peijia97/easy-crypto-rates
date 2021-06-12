<template>
  <section
    class="has-text-centered mb-6 ec-section has-wave-bottom section-purple"
  >
    <div class="container">
      <h1 class="title is-2 is-size-4-mobile has-text-white">{{ title }}</h1>
    </div>
    <b-image :src="require('/public/imgs/wave.svg')" alt="wave" />
  </section>
</template>

<script>
export default {
  name: "Header",
  props: { title: { type: String, default: "", required: true } }
};
</script>

<style lang="scss" scoped>
.section-purple {
  padding: 5rem 0;
  background: url(/imgs/purple.jpg) top center no-repeat #3c0e9b;
  background-size: cover;
  position: relative;

  .b-image-wrapper {
    width: 100%;
    position: absolute;
    bottom: -1px;
  }
}
</style>
