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
        locales: ["en", "pt"],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root", // recommended
        },
        customRoutes: "config",
        pages: {
            thesis: {
                en: "/thesis",
                pt: "/tese",
            },
        },
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        // layoutTransition: { name: 'layout', mode: 'out-in' },

        head: {
            meta: [
                {
                    charset: "utf-8",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
            ],
        },
    },
    plugins: [{ src: "~/plugins/gsap.js", mode: "client" }],
    runtimeConfig: {
        public: {
            wordpressURL: "https://rogerjunior.com/stage/wp-json/wp/v2",
        },
    },
});
