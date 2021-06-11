import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { KEY_FAV_COINS } from "@/utils/constants";

export const store = new Vuex.Store({
  state: {
    favCoins: JSON.parse(localStorage.getItem(KEY_FAV_COINS)) || []
  },
  getters: {
    getFavCoins: state => state.favCoins
  },
  mutations: {
    addFavCoin(state, value) {
      state.favCoins = [...state.favCoins, value];
      localStorage.setItem(KEY_FAV_COINS, JSON.stringify(state.favCoins));
    },
    removeFavCoin(state, value) {
      state.favCoins = state.favCoins.filter(c => c !== value);
      localStorage.setItem(KEY_FAV_COINS, JSON.stringify(state.favCoins));
    }
  }
});
