// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/fonts", "@nuxtjs/seo", "shadcn-nuxt"],
    site: {
        url: "https://indicator.capital/",
        name: "Indicator Capital",
        description: "Boosting deep tech heores",
    },
    runtimeConfig: {
        public: {
            wordpressURL: "https://api.indicator.capital/wp-json/wp/v2",
            posthogPublicKey: "phc_DWTtMlaVbqzMIpEDL8ZsPHmGFZtwnpKastUjQwmnn4Z",
            posthogHost: "https://eu.i.posthog.com",
        },
    },
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: "./components/ui",
    },
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
            team: {
                en: "/team",
                pt: "/time",
            },
            media: {
                en: "/media",
                pt: "/midia",
            },
        },
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        // layoutTransition: { name: 'layout', mode: 'out-in' },

        head: {
            templateParams: {
                separator: "/",
            },
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
    routeRules: {
        "/apply": { redirect: "/start" },
        "/apply/*": { redirect: "/start/*" },
        "/pt/apply": { redirect: "/pt/start" },
        "/pt/apply/*": { redirect: "/pt/start/*" },
        "/startups": { redirect: "/portfolio" },
        "/pt/startups": { redirect: "/pt/portfolio" },
        "/pt/team": { redirect: "/pt/time" },
        "/pt/media": { redirect: "/pt/midia" },
    },
});
