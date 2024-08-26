<template>
    <div class="panel-inside scrollable">
        <nuxt-link :to="localePath('/media')" class="shape-btn shape-btn-sm mb-4 back-btn">
            {{ $t("Go back") }}

            <svg
                viewBox="0 0 431 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path
                    d="M401.5 160.5H1V1H430.5V131.5L401.5 160.5Z"
                    vector-effect="non-scaling-stroke" />
            </svg>
        </nuxt-link>
        <h2 class="media-title block text-primary text-md text-center mb-6">
            {{ media[0].title.rendered }}
        </h2>
        <vue-markdown :source="media[0].content" :options="{ html: true }" class="media-content" />
    </div>
</template>

<script setup>
import VueMarkdown from "vue-markdown-render";
const config = useRuntimeConfig();
const route = useRoute();

const { data: media } = await useFetch(
    config.public.wordpressURL + "/press?slug=" + route.params.slug,
    {
        method: "get",
    }
);
</script>

<style lang="scss">
.media-tags {
    display: grid;
    gap: 1rem;
}
.media-tag {
    display: flex;
    gap: 1rem;
}
.media-tag-info {
    padding-left: 1rem;
    border-left: 1px solid;
    @apply border-white;
}

.media-panel ul {
    list-style: square;
    padding-left: 1rem;
}

.media-panel strong {
    font-weight: bold;
    background-color: var(--color-white);
    color: var(--color-black);
}

.media-content {
    margin-left: 10%;
}

.media-panel p {
    margin-bottom: 1rem;
}

.media-content p {
    margin-bottom: 1rem;
}

.media-content ul {
    margin-left: 1rem;
}

.media-content li {
    margin-bottom: 1rem;

    &:before {
        content: "";
        display: inline-block;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 0 0.8em 0.8em;
        margin-right: 1rem;
        border-color: transparent transparent var(--color-white) transparent;
        transform: rotate(0deg);
    }
}

.media-content strong {
    background-color: var(--color-white);
    color: var(--color-black);
}
@media screen and (min-width: 80rem) {
    .back-btn {
        display: none;
    }
}
@media screen and (max-width: 80rem) {
    .media-content {
        margin-left: 0;
    }

    .media-title {
        text-align: left;
    }
}
</style>
