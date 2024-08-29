export const setSeo = async (slug, type = "pages", options = {}) => {
    const { locale } = useI18n();
    const config = useRuntimeConfig();

    const { data: page } = await useFetch("/" + type, {
        baseURL: config.public.wordpressURL,
        method: "get",
        query: {
            lang: locale.value,
            slug,
            _embed: true,
        },
    });

    const title = page.value[0]?.title?.rendered;
    const description = page.value[0]?.short_description || page.value[0]?.content?.rendered;

    defineOgImageComponent("Default", {
        title,
        type,
        description,
    });

    useHead({
        title: () => title,
        description: () => description,
        titleTemplate: options.resetTemplate ? "%s" : "%s %separator %siteName",
    });
};
