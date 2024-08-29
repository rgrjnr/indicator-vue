export const $useFetch = (request, opts) => {
    const { locale } = useI18n();
    const config = useRuntimeConfig();

    return useFetch(request, {
        baseURL: config.public.wordpressURL,
        method: "get",
        ...opts,
        query: {
            _embed: true,
            per_page: 100,
            lang: locale.value,
            ...opts?.query,
        },
    });
};
