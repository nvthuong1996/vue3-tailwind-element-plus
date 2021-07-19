import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const envs = {};
Object.keys(process.env).forEach((key) => {
  if (key.startsWith("VUE_APP")) {
    envs["process.env." + key] = `'${process.env[key]}'`;
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    host: "0.0.0.0",
    port: process.env.PORT,
  },
  define: envs,
});
