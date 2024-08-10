// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
    devtools: { enabled: true },
    tailwindcss: {
        cssPath: "~/assets/stylesheets/main.css",
    },
    i18n: {
        strategy: "prefix_except_default",
        defaultLocale: "en",
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        // layoutTransition: { name: 'layout', mode: 'out-in' },

        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
        },
    },

    runtimeConfig: {
        public: {
            wordpressURL: "http://indicator.local/wp-json/wp/v2",
        },
    },
});
