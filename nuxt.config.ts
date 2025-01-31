// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
  ],
  css: ["~/assets/css/main.css"],
  i18n: {
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        file: "en-US.json",
        name: "English",
      },
      {
        code: "it-IT",
        iso: "it-IT",
        file: "it-IT.json",
        name: "Italian",
      },
    ],
    defaultLocale: "en-US",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    lazy: false,
    strategy: "no_prefix",
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
