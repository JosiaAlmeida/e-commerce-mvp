// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: "4STRON4UTAS",
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        }
      ]
    }
  },
  css: ["@/public/style/scss/index.scss", "@/public/style/css/index.css"],
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts', [
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
  ], 'pinia-plugin-persistedstate/nuxt', 'nuxt-auth-utils'],

  runtimeConfig: {
    public: {
      api: 'http://localhost:3001'
    }
  }
})