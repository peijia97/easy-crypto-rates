<template>
  <div class="container">
    <div class="is-flex is-flex-direction-row is-justify-content-space-between">
      <h2 class="title is-4">All Rates</h2>
      <b-input v-model="searchTerm"> </b-input>
    </div>
    <RatesTable :tableData="rates" />
  </div>
</template>

<script>
import RatesTable from "/src/components/RatesTable.vue";
import { WS_GET_RATES } from "/src/utils/constants.js";

export default {
  name: "Rates",
  props: {},
  components: { RatesTable },
  data() {
    return { rates: {}, searchTerm: "" };
  },
  created() {
    this.axios.get(WS_GET_RATES).then(response => {
      this.rates = response.data;
    });
  }
};
</script>

<style scoped lang="scss"></style>
