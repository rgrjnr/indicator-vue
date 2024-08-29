<template>
    <div class="content">
        <div class="panel panel-main">
            <div class="tabs mt-14">
                <div class="tabs-header text-xl">
                    <div
                        :class="{ 'tab-title': true, active: showing == tab }"
                        v-for="tab in tabs"
                        @click="showing = tab">
                        {{ $t(`media.${tab}`) }}
                    </div>
                </div>
                <div class="tab-content">
                    <div class="releases scrollable" v-if="showing == 'releases'">
                        <div
                            class="release"
                            @click="navigateTo(localePath('/media/' + release.slug))"
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
                    <div class="releases scrollable" v-if="showing == 'news'">
                        <div
                            class="release"
                            @click="navigateTo(localePath('/media/' + item.slug))"
                            v-for="item in items.filter((item) => item.type == 'media')">
                            <div class="release-info pb-4">
                                <div class="release-date opacity-50">
                                    {{ $t("months." + new Date(item.date).getMonth()) }}
                                    {{ new Date(item.date).getFullYear() }} -
                                    {{
                                        sources.filter((source) =>
                                            item.source.includes(source.id)
                                        )[0]?.name
                                    }}
                                </div>
                                <div class="release-title">{{ item.title.rendered }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel has-shape panel-secondary">
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
const localePath = useLocalePath();
const showing = ref("releases");
const tabs = ["releases", "news"];

const { data: items } = await $useFetch("/press");
const { data: sources } = await $useFetch("/source");
setSeo("media");
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
    cursor: pointer;

    &:hover {
        background-color: var(--color-white);
        color: var(--color-black);
        animation: flicker-on 100ms linear;
        animation-fill-mode: forwards;
    }
}

.release-thumbnail-wrapper {
    border-right: 1px solid var(--color-white);
    max-width: min(20rem, 50%);
    aspect-ratio: 5/2;
    overflow: hidden;
}
.release-thumbnail {
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
    cursor: pointer;
}

.tab-title.active {
    opacity: 1;
}

@media screen and (max-width: 80rem) {
    .page-media {
        .panel-secondary {
            display: none;
        }
        .content {
            padding: 0;
        }
        .panel-main {
            padding: var(--content-padding);
        }
    }

    .page-media-slug {
        .panel-main {
            display: none;
        }
        .panel-shape {
            display: none;
        }
        .content {
            padding: 0;
        }
        .panel-inside {
            mask-image: unset;
        }
        .has-shape {
            aspect-ratio: unset;
            overflow: unset;
            width: 100%;
        }
    }
}

@media screen and (max-width: 40rem) {
    .release {
        flex-direction: column;
    }

    .release-thumbnail-wrapper {
        width: 100%;
        max-width: unset;
        border-bottom: 1px solid var(--color-white);
    }
}
</style>
