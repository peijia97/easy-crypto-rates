<template>
  <b-table
    :data="renderData"
    :paginated="isPaginated"
    :per-page="perPage"
    :current-page.sync="currentPage"
    :pagination-position="paginationPosition"
    :default-sort-direction="defaultSortDirection"
    :sort-icon="sortIcon"
    :sort-icon-size="sortIconSize"
    default-sort="symbol"
    aria-next-label="Next page"
    aria-previous-label="Previous page"
    aria-page-label="Page"
    aria-current-label="Current page"
  >
    <b-table-column field="symbol" width="40" sortable v-slot="props">
      <b-image
        :src="format(STATIC_IMG_URL, props.row.symbol)"
        :alt="props.row.symbol"
        ratio="601by235"
      ></b-image>
    </b-table-column>

    <b-table-column field="name" label="Name" sortable v-slot="props">
      {{ props.row.name }}
    </b-table-column>

    <b-table-column field="symbol" label="Symbol" sortable v-slot="props">
      {{ props.row.symbol }}
    </b-table-column>

    <b-table-column
      field="sellRate"
      label="Sell"
      numeric
      sortable
      v-slot="props"
    >
      {{
        props.row.sellRate ? `$${Number(props.row.sellRate).toFixed(2)}` : "—"
      }}
    </b-table-column>

    <b-table-column field="rate" label="Buy" numeric sortable v-slot="props">
      {{ props.row.rate ? `$${Number(props.row.rate).toFixed(2)}` : "—" }}
    </b-table-column>

    <b-table-column
      field="weekly"
      label="Weekly"
      numeric
      sortable
      v-slot="props"
    >
      <span
        :class="
          Number(props.row.weekly) > 0 ? 'has-text-success' : 'has-text-danger'
        "
      >
        {{ props.row.weekly ? `${Number(props.row.weekly).toFixed(2)}%` : "—" }}
      </span>
    </b-table-column>

    <b-table-column centered v-slot="props">
      <b-button
        rounded
        class="mr-4 is-success is-size-7 btn-action"
        @click="handleBuyOrSell(props.row.symbol)"
        >Buy / Sell</b-button
      >
      <b-icon
        @click.native="handleFavCoin(props.row.symbol)"
        :pack="isFavCoin(props.row.symbol) ? 'fas' : 'far'"
        icon="star"
        class="star"
      >
      </b-icon>
    </b-table-column>
  </b-table>
</template>

<script>
import { STATIC_IMG_URL } from "/src/utils/constants.js";

export default {
  name: "RatesTable",
  props: {
    tableData: { type: Array, default: null, required: true },
    keyword: { type: String, default: "", required: false }
  },
  computed: {
    renderData() {
      return (
        this.tableData.filter(
          d =>
            d.name.toUpperCase().includes(this.keyword.trim().toUpperCase()) ||
            d.symbol.toUpperCase().includes(this.keyword.trim().toUpperCase())
        ) || []
      );
    }
  },
  data() {
    return {
      STATIC_IMG_URL,
      isPaginated: true,
      paginationPosition: "bottom",
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 20
    };
  },
  methods: {
    format(str2Format, ...args) {
      return str2Format.replace(
        /(\{\d+\})/g,
        a => args[+a.substr(1, a.length - 2) || 0]
      );
    },
    isFavCoin(symbol) {
      return this.$store.getters.getFavCoins.find(c => c === symbol);
    },
    handleBuyOrSell(symbol) {
      console.log(symbol, this.$store.getters.getFavCoins);
    },
    handleFavCoin(symbol) {
      this.$store.getters.getFavCoins.find(c => c === symbol)
        ? this.$store.commit("removeFavCoin", symbol)
        : this.$store.commit("addFavCoin", symbol);
    }
  }
};
</script>

<style scoped lang="scss">
.b-image-wrapper {
  width: 2rem;
  height: 2rem;
}

.b-table {
  margin-bottom: 2rem;
  ::v-deep .table-wrapper {
    @include box-shadow($glowBlue, 0.8);
    background: $white;
    border-radius: 0.7rem;
  }
  ::v-deep .star {
    color: $grey300;
    cursor: pointer;
    margin-top: 0.2em;
  }

  .btn-action {
    font-family: inherit;
    padding: 1.1rem 1.8em;
  }
}

::v-deep .table td,
::v-deep .table th {
  padding: 15px 20px;
  vertical-align: middle;
}

::v-deep .table thead tr th {
  border-bottom: 1px solid $grey200;
}
</style>
