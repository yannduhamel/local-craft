// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/leaflet',
  ],
  fonts: {
    families: [
      {
        name: 'Clash Grotesk',
        src: '/assets/fonts/ClashGrotesk-Variable.woff2',
        style: 'normal',
        weight: '100 900',
        global: true,
      },
    ],
  },
  icon: {
    size: '24px',
  }
  })