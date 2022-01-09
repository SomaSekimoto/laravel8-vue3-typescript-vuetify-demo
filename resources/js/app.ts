import "vuetify/styles";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";
import App from "./components/App.vue";

const app = createApp(App);
const vuetify = createVuetify({ components, directives });
app.use(vuetify);
app.mount("#app");
