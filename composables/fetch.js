export const $useFetch = (request, opts) => {
    const { locale } = useI18n();
    const config = useRuntimeConfig();

    return useFetch(request, {
        baseURL: config.public.wordpressURL,
        method: "get",
        query: {
            _embed: true,
            per_page: 100,
            lang: locale.value,
        },
        ...opts,
    });
};
