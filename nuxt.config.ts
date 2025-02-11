// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "main", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-umami",
  ],
  css: ["~/assets/css/main.css", "~/assets/css/themes.css"],
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
    strategy: "no_prefix",
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
  colorMode: {
    preference: "dark",
    classPrefix: "",
    classSuffix: "",
    storage: "cookie",
    storageKey: "color-theme",
    fallback: "dark",
  },
  icon: {
    customCollections: [
      {
        dir: "./app/icons/logo",
        prefix: "logo",
      },
    ],
    serverBundle: "local",
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 256,
    },
  },
  umami: {
    id: "32614c2d-a4b9-45ac-909e-ae176bc20470",
    host: "https://cloud.umami.is",
    autoTrack: true,
    logErrors: true,
    useDirective: true,
  },
});
