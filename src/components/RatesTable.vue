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
    <b-table-column field="symbol" label="" width="40" sortable v-slot="props">
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

    <b-table-column field="sellRate" label="Sell" sortable v-slot="props">
      {{ props.row.sellRate || "—" }}
    </b-table-column>

    <b-table-column field="rate" label="Buy" sortable v-slot="props">
      {{ props.row.rate || "—" }}
    </b-table-column>

    <b-table-column centered v-slot="props">
      <b-button
        rounded
        type="is-success is-size-7"
        @click="handleBuyOrSell(props.row.symbol)"
        >Buy / Sell</b-button
      >
    </b-table-column>

    <b-table-column centered v-slot="props">
      <b-icon @click="favCoin(props.row.symbol)" pack="fa" icon="star">
      </b-icon>
    </b-table-column>
  </b-table>
</template>

<script>
import { STATIC_IMG_URL } from "/src/utils/constants.js";

export default {
  name: "RatesTable",
  props: {
    tableData: { type: Object, default: null, required: true }
  },
  computed: {
    renderData() {
      return (this.tableData && Object.values(this.tableData)) || [];
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
    handleBuyOrSell(symbol) {
      console.log(symbol);
    },
    handleFavCoin(symbol) {
      console.log(symbol);
    }
  }
};
</script>

<style scoped lang="scss">
.b-image-wrapper {
  width: 1.5rem;
  height: 1.5rem;
}

.b-table {
  margin: 2rem 0;
  ::v-deep .table-wrapper {
    @include box-shadow($glowBlue, 0.8);
    background: $white;
    border-radius: 0.5rem;
  }
}
</style>
