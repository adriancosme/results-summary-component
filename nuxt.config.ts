// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/tablet.css', '~/assets/css/desktop.css'],
  app: {
    head: {
      title: "Frontend Mentor - Results summary component",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: ""
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&display=swap"
        },
      ]
    }
  }
})
