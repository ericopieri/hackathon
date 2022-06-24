import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/estilo.css";
import "./assets/estilo2.css";
import './plugins/firebase.js'
import VueMask from 'v-mask'
import VueSweetalert2 from 'vue-sweetalert2';

import mdiVue from "mdi-vue";
import * as mdijs from "@mdi/js";

Vue.use(mdiVue, {
  icons: mdijs,
});
Vue.use(VueMask);
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
