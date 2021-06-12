<template>
  <b-table
    ref="table"
    detailed
    custom-detail-row
    :data="renderData"
    :show-detail-icon="showDetailIcon"
    :paginated="isPaginated"
    :per-page="perPage"
    :current-page.sync="currentPage"
    :pagination-position="paginationPosition"
    :default-sort-direction="defaultSortDirection"
    :sort-icon="sortIcon"
    :sort-icon-size="sortIconSize"
    :mobile-cards="hasMobileCards"
    :opened-detailed="defaultOpenedRow"
    :narrowed="isMobile"
    @click="toggleRow"
    @details-open="collapseOtherRows"
    default-sort="symbol"
    aria-next-label="Next page"
    aria-previous-label="Previous page"
    aria-page-label="Page"
    aria-current-label="Current page"
  >
    <!-- ICON -->
    <b-table-column field="symbol" width="40" sortable v-slot="props">
      <b-image
        :src="format(STATIC_IMG_URL, props.row.symbol)"
        :alt="props.row.symbol"
        ratio="601by235"
      ></b-image>
    </b-table-column>

    <!-- NAME -->
    <b-table-column field="name" label="Name" sortable v-slot="props">
      {{ props.row.name }}
    </b-table-column>

    <!-- SYMBOL -->
    <b-table-column field="symbol" label="Symbol" sortable v-slot="props">
      {{ props.row.symbol }}
    </b-table-column>

    <!-- SELL RATE -->
    <b-table-column
      field="sellRate"
      label="Sell"
      numeric
      sortable
      v-slot="props"
      :visible="!isMobile"
    >
      {{
        props.row.sellRate ? `$${Number(props.row.sellRate).toFixed(2)}` : "—"
      }}
    </b-table-column>

    <!-- BUY RATE -->
    <b-table-column
      field="rate"
      :label="!isMobile ? 'Buy' : 'Rate'"
      numeric
      sortable
      v-slot="props"
    >
      {{ props.row.rate ? `$${Number(props.row.rate).toFixed(2)}` : "—" }}
    </b-table-column>

    <!-- WEEKLY -->
    <b-table-column
      field="weekly"
      label="Weekly"
      numeric
      sortable
      v-slot="props"
      :visible="!isMobile"
    >
      <span
        :class="
          Number(props.row.weekly) > 0 ? 'has-text-success' : 'has-text-danger'
        "
      >
        {{ props.row.weekly ? `${Number(props.row.weekly).toFixed(2)}%` : "—" }}
      </span>
    </b-table-column>

    <!-- SPARKLINE -->
    <b-table-column centered label="Last 1M" :visible="!isMobile">
      <Sparkline />
    </b-table-column>

    <!-- ACTIONS -->
    <b-table-column centered v-slot="props">
      <span class="whitespace-nowrap">
        <Button
          rounded
          v-if="!isMobile"
          label="Buy / Sell"
          class="mr-4"
          @click.native="e => handleBuyOrSell(e, props.row.symbol)"
        />
        <b-icon
          @click.native="e => handleFavCoin(e, props.row.symbol)"
          :pack="isFavCoin(props.row.symbol) ? 'fas' : 'far'"
          icon="star"
          class="star"
        >
        </b-icon>
      </span>
    </b-table-column>

    <!-- EXTRA -->
    <!-- Expandable Chart -->
    <template slot="detail" slot-scope="props">
      <td class="detail-container" colspan="12">
        <h4 class="detail-name">{{ props.row.name }}</h4>
        <Chart />

        <div>
          <Button
            label="Buy"
            class="mr-4"
            size="is-large"
            icon="caret-up"
            @click.native="e => handleBuyOrSell(e, props.row.symbol)"
          />
          <Button
            label="Sell"
            variant="is-danger"
            size="is-large"
            icon="caret-down"
            @click.native="e => handleBuyOrSell(e, props.row.symbol)"
          />
        </div>

        <RatesLink title="Website:" icon="globe" :link="props.row.website" />
        <RatesLink title="Wallet:" icon="wallet" :link="props.row.wallet" />
      </td>
    </template>
  </b-table>
</template>

<script>
import { STATIC_IMG_URL } from "/src/utils/constants.js";
import mixins from "/src/utils/mixins.js";
import Chart from "/src/components/common/Chart.vue";
import Sparkline from "/src/components/common/Sparkline.vue";
import Button from "/src/components/common/Button.vue";
import RatesLink from "/src/components/rates/RatesLink.vue";

export default {
  name: "RatesTable",
  props: {
    tableData: { type: Array, default: null, required: true },
    keyword: { type: String, default: "", required: false }
  },
  components: { Chart, Sparkline, Button, RatesLink },
  mixins: [mixins],
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
      defaultOpenedRow: [],
      hasMobileCards: false,
      showDetailIcon: false,
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
    handleBuyOrSell(e, symbol) {
      console.log(symbol, this.$store.getters.getFavCoins);
      // Prevents mouse event from bubbling up (which triggers expandable chart)
      e.stopPropagation();
    },
    handleFavCoin(e, symbol) {
      this.$store.getters.getFavCoins.find(c => c === symbol)
        ? this.$store.commit("removeFavCoin", symbol)
        : this.$store.commit("addFavCoin", symbol);
      // Prevents mouse event from bubbling up (which triggers expandable chart)
      e.stopPropagation();
    },
    toggleRow(row) {
      this.$refs.table.toggleDetails(row);
    },
    collapseOtherRows(row) {
      this.defaultOpenedRow = [row];
    }
  }
};
</script>

<style scoped lang="scss">
.b-image-wrapper {
  width: 2rem;
  height: 2rem;
  @include until($tablet) {
    width: 1.5rem;
    height: 1.5rem;
  }
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
    margin-top: 0.2rem;
  }

  .detail-container {
    box-shadow: inset 0 1px 3px $grey300;
    background: $grey400;
    .detail-name {
      font-weight: bold;
      margin-left: 1rem;
      float: left;
    }
  }

  .whitespace-nowrap {
    white-space: nowrap;
  }

  @include until($tablet) {
    width: 95%;
    margin: auto;
  }
}

::v-deep .table td,
::v-deep .table th {
  padding: 15px 20px;
  vertical-align: middle;
  text-align: left;

  @include until($tablet) {
    font-size: 0.85rem;
  }
}
::v-deep .table thead tr th {
  border-bottom: 1px solid $grey200;
}
::v-deep .table tbody tr {
  cursor: pointer;
}
</style>
