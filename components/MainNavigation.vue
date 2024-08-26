<template>
    <ul class="flex text-xs">
        <li v-for="page in pages">
            <router-link
                :to="localePath(page.path)"
                class="nav-link block px-3 py-2 uppercase text-xs">
                <span>{{ $t(`${page.slug}.title`) }}</span>
            </router-link>
        </li>
        <li>
            <router-link
                :to="localePath(`/apply`)"
                class="nav-link block px-3 py-2 uppercase text-xs">
                <span class="bg-primary text-black">
                    {{ $t("apply") }}
                </span>
            </router-link>
        </li>
        <router-link
            class="nav-link px-1 py-2 uppercase text-xs"
            v-for="locale in availableLocales"
            :key="locale"
            :to="switchLocalePath(locale)">
            {{ locale }}
        </router-link>
    </ul>
</template>

<script setup>
const localePath = useLocalePath();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
});
const pages = [
    { slug: "home", path: "/" },
    { slug: "thesis", path: "/thesis" },
    { slug: "team", path: "/team" },
    { slug: "startups", path: "/startups" },
    { slug: "media", path: "/media" },
];
</script>

<style>
.router-link-active {
    @apply text-primary;
}

.nav-link:hover span {
    @apply bg-primary text-black font-bold;
}
</style>
