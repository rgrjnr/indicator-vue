export const $useFetch = (request, opts = {}) => {
    var l;
    try {
        const { locale } = useI18n();
        l = locale.value;
    } catch (e) {}
    const config = useRuntimeConfig();

    return useFetch(request, {
        baseURL: config.public.wordpressURL,
        method: "get",
        ...opts,
        query: {
            _embed: true,
            per_page: 100,
            lang: l,
            ...opts?.query,
        },
    });
};
