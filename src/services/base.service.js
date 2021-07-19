import { axios } from "@/utils/axios.util";

export class BaseService {
  constructor() {
    this.axios = axios;
  }
}
