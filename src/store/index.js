import { createStore } from "vuex";
import * as auth from "./auth";

export const store = createStore({
  modules: {
    auth,
  },
});
