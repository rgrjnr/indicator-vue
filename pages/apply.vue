<template>
    <div>
        <h1>{{ $t("apply") }}</h1>
        <button @click="setLocale('en')">en</button>
        <button @click="setLocale('pt')">pt</button>
    </div>
</template>
<script setup>
const { locale, setLocale } = useI18n();
useSeoMeta({
    title: "Indicator Capital",
    ogTitle: "Indicator Capital",
    description: "This is Indicator Capital, let me tell you all about it.",
    ogDescription: "This is Indicator Capital, let me tell you all about it.",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});
</script>
