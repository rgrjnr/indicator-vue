<template>
    <div class="content single-page">
        <div class="panel panel-stretch overflow-y-scroll scrollable panel-main">
            <h1 class="mt-14 mb-4">{{ page[0].title.rendered }}</h1>
            <article v-html="page[0].content.rendered"></article>
        </div>
    </div>
</template>

<script setup>
const { data: page } = await $useFetch("/pages", {
    query: {
        slug: useRoute().params.slug,
    },
});

if (page.value[0].redirect) {
    navigateTo(page.value[0].redirect_url, { external: true });
}
</script>

<style>
.single-page article h2 {
    @apply text-lg;
    margin-top: 1em;
}

.single-page article {
    max-width: 120ch;
    margin: 0 auto;
}

.single-page h1 {
    margin: auto;
    text-align: center;
}
</style>
