<template>
    <div class="content">
        <div class="panel">
            <div class="tabs mt-14">
                <div class="tabs-header text-xl">
                    <div :class="{ 'tab-title': true, active: showing == tab }" v-for="tab in tabs">
                        {{ $t(tab) }}
                    </div>
                </div>
                <div class="tab-content">
                    <div class="releases scrollable">
                        <div
                            class="release"
                            @click="navigateTo('/media/' + release.slug)"
                            v-for="release in items.filter((media) => media.type == 'release')">
                            <div class="release-thumbnail-wrapper" v-if="release._embedded">
                                <img
                                    :src="
                                        (release._embedded &&
                                            release._embedded['wp:featuredmedia'][0].source_url) ||
                                        ''
                                    "
                                    alt=""
                                    class="release-thumbnail" />
                            </div>
                            <div class="release-info">
                                <div class="release-title">{{ release.title.rendered }}</div>
                                <div class="release-date">
                                    {{ $t("months." + new Date(release.date).getMonth()) }}
                                    {{ new Date(release.date).getFullYear() }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="medias">
                <div
                    :class="{ 'is-active': useRoute().params.slug == media.slug, media: true }"
                    v-for="media in medias"
                    @click="navigateTo('/media/' + media.slug)"></div>
            </div>
        </div>
        <div class="panel has-shape">
            <NuxtPage />
            <svg
                preserveAspectRatio="none"
                class="panel-shape"
                width="602"
                height="802"
                viewBox="0 0 602 802"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M548.177 801H51.5263V185.831L1 136.393V1H548.177L601 52.6854V749.315L548.177 801Z"
                    stroke="#E2FDFF" />
            </svg>
        </div>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();
const showing = ref("releases");
const tabs = ["releases", "news"];

const { data: items } = await useFetch(config.public.wordpressURL + "/press?_embed", {
    method: "get",
});

console.log(items.value[0]);

useSeoMeta({
    title: "Media - Indicator Capital",
    ogTitle: "Media - Indicator Capital",
    description: "This is Indicator Capital, let me tell you all about it.",
    ogDescription: "This is Indicator Capital, let me tell you all about it.",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});
</script>

<style lang="scss">
.tabs-header {
    display: flex;
    gap: 1rem;
}

.releases {
    display: grid;
    gap: 1rem;
}
.release {
    border: 1px solid var(--color-white);
    display: flex;
}

.release-thumbnail-wrapper {
    border-right: 1px solid var(--color-white);
}
.release-thumbnail {
    max-width: 20rem;
    aspect-ratio: 4/2;
    object-fit: cover;
}

.release-info {
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-direction: column;
}

.release-date {
    opacity: 0.5;
}

.tab-title {
    opacity: 0.5;
}

.tab-title.active {
    opacity: 1;
}
</style>
