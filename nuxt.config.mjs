export default {
  ssr: true,
  app: {
    baseURL: '/sanshina-website/'
  },
  nitro: {
    preset: 'static'
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-07-01'
}
