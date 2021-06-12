import Vue from "vue";
import App from "./App.vue";
// Axios
import axios from "axios";
import VueAxios from "vue-axios";
// Buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";
// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faArrowUp,
  faAngleLeft,
  faAngleRight,
  faTimes,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Vuex
import { store } from "@/store/index";
// Apex charts
import VueApexCharts from "vue-apexcharts";

Vue.config.productionTip = false;

library.add(
  faStar,
  faArrowUp,
  faAngleLeft,
  faAngleRight,
  faTimes,
  faSearch,
  farStar
);
Vue.component("vue-fontawesome", FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas"
});
Vue.use(VueAxios, axios);

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
