// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/fonts"],
    devtools: { enabled: true },
    fonts: {
        families: [
            // do not resolve this font with any provider from `@nuxt/fonts`
            { name: "Azeret Mono", provider: "google" },
        ],
    },
    tailwindcss: {
        cssPath: "~/assets/stylesheets/main.css",
    },
    i18n: {
        strategy: "prefix_except_default",
        defaultLocale: "en",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root", // recommended
        },
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
            wordpressURL: "https://rogerjunior.com/stage/wp-json/wp/v2",
        },
    },
});
