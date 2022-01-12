import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import VueUniversalModal from "vue-universal-modal";
import "vue-universal-modal/dist/index.css";

createApp(App)
  .use(router)
  .use(VueUniversalModal, {
    teleportTarget: "#modals",
  })
  .mount("#app");
