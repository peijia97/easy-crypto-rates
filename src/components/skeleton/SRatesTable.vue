<template>
  <section class="mb-3">
    <div class="card" aria-id="contentIdForA11y3">
      <span v-for="n in skeletonCount" :key="n" class="card-header-title">
        <b-skeleton animated></b-skeleton>
      </span>
    </div>
    <div class="card-content">
      <span v-for="n in 10" :key="n" class="card-header-title">
        <b-skeleton animated></b-skeleton>
      </span>
    </div>
  </section>
</template>

<script>
import mixins from "/src/utils/mixins.js";
export default {
  name: "SRatesTable",
  mixins: [mixins],
  computed: {
    skeletonCount() {
      return this.isMobile ? 4 : 7;
    }
  },
  props: { value: { type: String, default: "", required: true } }
};
</script>

<style lang="scss" scoped>
.card {
  @include flexbox();
  flex-direction: row !important;
  padding: 0.5rem 0;

  @include until($desktop) {
    padding: 0;
    width: 95%;
    margin: auto;
  }
}

.card-content {
  background: $white;
  span {
    padding: 1rem 0;
    border-bottom: 1px solid $grey200;
    @include until($desktop) {
      padding: 0.8rem;
    }
  }

  @include until($desktop) {
    padding: 0;
    width: 95%;
    margin: auto;
  }
}
</style>
