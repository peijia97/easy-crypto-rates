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
import { faStar, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

library.add(faStar, faArrowUp);
Vue.component("vue-fontawesome", FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas"
});
Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App)
}).$mount("#app");
