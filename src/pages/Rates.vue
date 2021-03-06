<template>
  <div>
    <Header title="Crypto Live Rates" />
    <div class="container mb-3">
      <!-- FAV COINS TABLE -->
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
        @toggleModal="toggleModal"
      />

      <!-- ALL RATES TABLE -->
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
      <!-- SKELETON -->
      <SRatesTable v-if="loading && !rates.length" />
      <!-- DATA -->
      <RatesTable
        v-else-if="!loading && rates.length"
        :tableData="rates"
        :keyword="searchTerm"
        @toggleModal="toggleModal"
      />
      <!-- NO RESULTS FOUND -->
      <p v-else>Sorry, no results were found</p>
    </div>
    <Modal :isModalActive="isModalActive" @close="toggleModal" />
    <Footer />
  </div>
</template>

<script>
import { WS_GET_RATES } from "/src/utils/constants.js";
import RatesTable from "/src/components/rates/RatesTable.vue";
import Title from "@/components/common/Title.vue";
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import Modal from "@/components/common/Modal.vue";
import TextInput from "@/components/common/TextInput.vue";
import SRatesTable from "@/components/skeleton/SRatesTable.vue";

export default {
  name: "Rates",
  props: {},
  components: {
    Header,
    TextInput,
    Title,
    Modal,
    RatesTable,
    SRatesTable,
    Footer
  },
  data() {
    return {
      loading: true,
      rates: [],
      searchTerm: "",
      favCoinSearchTerm: "",
      isModalActive: false
    };
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
        this.loading = false;
      }
    });
  },
  methods: {
    toggleModal() {
      this.isModalActive = !this.isModalActive;
    }
  }
};
</script>

<style scoped lang="scss">
.section-header {
  @include flexbox();
  margin-top: 2rem;
  margin-bottom: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @include until($tablet) {
    flex-direction: column;
  }
}
</style>
