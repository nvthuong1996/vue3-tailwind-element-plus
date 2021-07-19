import { BaseService } from "./base.service";
import { initAuthStore, setToken, getToken } from "@/utils/auth.util";
import { store } from "@/store";

class AuthService extends BaseService {
  async login(payload) {
    const { data } = await this.axios.post("auth/login", payload);
    setToken("Bearer " + data.accessToken);

    await initAuthStore();
    return data;
  }

  async profile() {
    const token = getToken();

    console.log("token in request profile", token);
    const { data } = await this.axios.get("/me", {
      timeout: 1000,
    });
    return data;
  }

  async logout() {
    setToken(null);
    store.commit("auth/SET_USER", null);
  }
}

export const authService = new AuthService();
