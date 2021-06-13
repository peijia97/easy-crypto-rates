<template>
  <section class="has-text-centered ec-section has-wave-bottom section-purple">
    <div class="container">
      <Navbar />
      <h1 class="title is-2 is-size-4-mobile has-text-white">
        {{ title }}
      </h1>
    </div>
    <b-image :src="require('/public/imgs/wave.svg')" alt="wave" />
  </section>
</template>

<script>
import Navbar from "/src/components/common/Navbar.vue";

export default {
  name: "Header",
  props: { title: { type: String, default: "", required: true } },
  components: { Navbar }
};
</script>

<style lang="scss" scoped>
.section-purple {
  background: url(/easy-crypto-rates/imgs/purple.jpg) top center no-repeat
    $primary;
  padding: 2rem 0 5rem;
  background-size: cover;
  position: relative;

  @include until($tablet) {
    padding: 0.5rem 0 5rem;
  }

  .b-image-wrapper {
    width: 100%;
    position: absolute;
    bottom: -1px;
  }

  .title {
    margin: 3rem 0;
    @include until($tablet) {
      margin: 1.5rem 0 0rem;
    }
  }
}
</style>
