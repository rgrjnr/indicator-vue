export const setSeo = async (slug) => {
    const { locale } = useI18n();
    const config = useRuntimeConfig();

    const { data: page } = await useFetch("/pages", {
        baseURL: config.public.wordpressURL,
        method: "get",
        query: {
            _embed: true,
            per_page: 100,
            lang: locale.value,
            slug,
        },
    });

    useSeoMeta({
        title: () => page.value[0]?.title?.rendered + " - Indicator Capital" || "",
        ogTitle: () => page.value[0]?.title?.rendered + " - Indicator Capital" || "",
        description: () => page.value[0]?.content?.rendered || "",
        ogDescription: () => page.value[0]?.content?.rendered || "",
        ogImage: "https://example.com/image.png",
        twitterCard: "summary_large_image",
    });
};
