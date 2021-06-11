<template>
  <div class="container">
    <div v-if="favCoinsRates.length">
      <div
        class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center mb-2"
      >
        <Title value="Favourite Coins" />
        <TextInput
          :value="favCoinSearchTerm"
          @input="val => (favCoinSearchTerm = val)"
          @clear="favCoinSearchTerm = ''"
          :clearable="true"
        />
      </div>
      <RatesTable :tableData="favCoinsRates" :keyword="favCoinSearchTerm" />
    </div>
    <div
      class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center mb-2"
    >
      <Title value="All Rates" />
      <TextInput
        :value="searchTerm"
        @input="val => (searchTerm = val)"
        @clear="searchTerm = ''"
        :clearable="true"
      />
    </div>
    <RatesTable :tableData="rates" :keyword="searchTerm" />
  </div>
</template>

<script>
import RatesTable from "/src/components/RatesTable.vue";
import { WS_GET_RATES } from "/src/utils/constants.js";
import Title from "@/components/common/Title.vue";
import TextInput from "@/components/common/TextInput.vue";

export default {
  name: "Rates",
  props: {},
  components: { TextInput, Title, RatesTable },
  data() {
    return { rates: [], searchTerm: "", favCoinSearchTerm: "" };
  },
  computed: {
    favCoinsRates() {
      return this.rates.filter(r =>
        this.$store.getters.getFavCoins.some(f => f === r.symbol)
      );
    }
  },
  created() {
    this.axios.get(WS_GET_RATES).then(res => {
      if (res.data) {
        this.rates = Object.values(res.data);
      }
    });
  }
};
</script>

<style scoped lang="scss"></style>
