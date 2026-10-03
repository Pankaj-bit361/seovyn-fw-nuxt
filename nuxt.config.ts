export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  app: {
    baseURL: "/seovyn-fw-nuxt/",
    head: { htmlAttrs: { lang: "en" }, title: "Bloom & Root Nursery", meta: [{ name: "description", content: "Houseplants, patio plants and garden advice in Seattle" }] },
  },
  css: ["~/assets/main.css"],
  nitro: { prerender: { crawlLinks: true, routes: ["/", "/sitemap.xml"] } },
  compatibilityDate: "2025-01-01",
});
