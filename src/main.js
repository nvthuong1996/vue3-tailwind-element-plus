import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { store } from "@/store";
import ElementPlus from "element-plus";
import { createAuthGuard, initAuthStore } from "@/utils/auth.util";

// css
import "./theme/tailwind.css";
import "element-plus/lib/theme-chalk/index.css";

createAuthGuard(router, { homePage: "/" });

initAuthStore()
  .then(async () => {
    const app = createApp(App).use(router).use(store).use(ElementPlus);
    await router.isReady();
    return app;
  })
  .then((app) => {
    app.mount("#app");
  });
