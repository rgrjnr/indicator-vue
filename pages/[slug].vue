<template>
    <div class="content">
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

if (page.value.redirect) {
    return navigateTo(page.value.redirect_to);
}
</script>
