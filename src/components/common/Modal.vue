<template>
  <b-modal
    v-model="isActive"
    @close="$emit('close')"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-label="Buy/Sell Modal"
    aria-modal
  >
    <div class="card">
      <h1>
        Quick buy / sell
      </h1>

      <div class="has-text-left">
        <h2 class="mt-2">From</h2>
        <TextInput
          placeholder="Enter Amount"
          :value="fromAmount"
          @input="val => (toAmount = val)"
        />
        <h2 class="mt-2">To</h2>
        <TextInput
          placeholder="Enter Amount"
          :value="toAmount"
          @input="val => (fromAmount = val)"
        />
      </div>

      <div class="button-group">
        <Button size="is-large" label="Buy Now" />
        <Button variant="is-ghost" size="is-large" label="... or sell" />
      </div>
    </div>
  </b-modal>
</template>

<script>
import Button from "/src/components/common/Button.vue";
import TextInput from "@/components/common/TextInput.vue";

export default {
  name: "Modal",
  props: { isModalActive: { type: Boolean, default: false, required: true } },
  components: { Button, TextInput },
  data() {
    return {
      toAmount: "",
      fromAmount: "",
      localModalActive: false
    };
  },
  computed: {
    isActive: {
      get() {
        return this.isModalActive;
      },
      set(val) {
        this.localModalActive = val;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 25rem;
  padding: 2rem;
  margin: auto;
  @include until($tablet) {
    width: 20rem;
  }
  h1 {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .button-group {
    width: 35%;
    margin: auto;
    margin-top: 2rem;
    @include flexbox();
    flex-direction: column;
  }
}
</style>
