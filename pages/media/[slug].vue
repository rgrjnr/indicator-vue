<template>
    <div class="panel-inside scrollable">
        <h2>
            <span class="block text-primary text-md text-center mb-6">
                {{ media[0].title.rendered }}
            </span>
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

<style>
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
</style>
