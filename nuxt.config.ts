// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  ssr: false,
  generate: {
    fallback: true,
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/device",
  ],
  ui: {
    icons: ["mdi", "simple-icons"],
  },
  colorMode: {
    preference: "system",
    fallback: "dark",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
});