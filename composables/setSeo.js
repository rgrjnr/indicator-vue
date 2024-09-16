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

    console.log(page.value[0]?._embedded["wp:featuredmedia"][0]?.source_url);
    const title = page.value[0]?.title?.rendered;
    const description = page.value[0]?.short_description || page.value[0]?.content?.rendered;

    useHead({
        title: () => title,
        description: () => description,
        ogImage: page.value[0]?._embedded["wp:featuredmedia"]
            ? page.value[0]?._embedded["wp:featuredmedia"].source_url
            : "https://indicator.capital/images/OG.png",
        titleTemplate: options.resetTemplate ? "%s" : "%s %separator %siteName",
    });
};
