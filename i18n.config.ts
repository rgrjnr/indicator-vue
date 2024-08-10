export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en: {
            welcome: "Welcome",
            home: { title: "Home" },
            thesis: { title: "Thesis" },
            team: { title: "Team", h1: "Our Team" },
            startups: { title: "Startups" },
            media: { title: "Media" },
        },
        pt: {
            welcome: "Bem-vindo",
            home: { title: "Home" },
            thesis: { title: "Tese" },
            team: { title: "Time", h1: "Nosso Time" },
            startups: { title: "Startups" },
            media: { title: "Mídia" },
        },
    },
}));
