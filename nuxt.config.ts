// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/i18n",
    "@nuxt/fonts",
    "@nuxt/image",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
  ],
  css: ["~/assets/css/main.css"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  image: {
    format: ["webp"],
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
  components: {
    dirs: [
      {
        path: "@/components/inspira-ui",
        prefix: "",
      },
      "~/components",
    ],
  },
});
