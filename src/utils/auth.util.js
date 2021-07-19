import { store } from "@/store";
import { authService } from "@/services/auth.service";
import { CookieStorage as storage } from "cookie-storage";
// import { useRouter } from "vue-router";
// const router = useRouter();

/**
 * Mạc định nếu chưa login sẽ đi vào loginPath nếu đã login rồi thì các trang sử dụng
 * auth: guest sẽ redirect vào homePage
 * @param {*} router
 * @param {*} param1
 */
export function createAuthGuard(
  router,
  { loginPath = "/login", homePage = "/home" } = {}
) {
  // eslint-disable-next-line no-unused-vars
  router.afterEach(async (to, from) => {
    const matched = to.matched[0];
    if (matched) {
      const auth = matched.components.default.auth;
      const user = store.state.auth.user;
      if (!user && auth !== false && auth !== "guest") {
        router.push(loginPath);
        // window.location.href = loginPath;
      }
      if (user && auth === "guest") {
        router.push(homePage);
      }
    }
  });
}

let TOKEN = null;

export function getToken() {
  if (TOKEN) {
    return TOKEN;
  } else {
    return storage.getItem("token");
  }
}

export function setToken(token) {
  TOKEN = token;
  return storage.setItem("token", token);
}

export async function initAuthStore() {
  if (store.state.auth.user) {
    return;
  }
  try {
    const user = await authService.profile();
    store.commit("auth/SET_USER", user);
  } catch (ex) {
    store.commit("auth/SET_USER", null);
  }
}
