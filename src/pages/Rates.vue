<template>
  <div>
    <Header title="Crypto Live Rates" />
    <div class="container">
      <div class="section-header" v-if="favCoinsRates.length">
        <Title value="Favourite Coins" />
        <TextInput
          icon="search"
          placeholder="Search"
          :value="favCoinSearchTerm"
          @input="val => (favCoinSearchTerm = val)"
          @clear="favCoinSearchTerm = ''"
          :clearable="true"
        />
      </div>
      <RatesTable
        v-if="favCoinsRates.length"
        :tableData="favCoinsRates"
        :keyword="favCoinSearchTerm"
      />

      <div class="section-header">
        <Title value="All Rates" />
        <TextInput
          icon="search"
          placeholder="Search"
          :value="searchTerm"
          @input="val => (searchTerm = val)"
          @clear="searchTerm = ''"
          :clearable="true"
        />
      </div>
      <RatesTable :tableData="rates" :keyword="searchTerm" />
    </div>
  </div>
</template>

<script>
import RatesTable from "/src/components/RatesTable.vue";
import { WS_GET_RATES } from "/src/utils/constants.js";
import Title from "@/components/common/Title.vue";
import Header from "@/components/common/Header.vue";
import TextInput from "@/components/common/TextInput.vue";

export default {
  name: "Rates",
  props: {},
  components: { Header, TextInput, Title, RatesTable },
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

<style scoped lang="scss">
.section-header {
  @include flexbox();
  margin-bottom: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @include until($tablet) {
    flex-direction: column;
  }
}
</style>
