<template>
    <div class="content">
        <div :class="['thesis-wrapper', selectedPlatform, learnMore ? 'learn-more' : '']">
            <div class="thesis-map">
                <div class="thesis-info">
                    <div
                        class="scramble"
                        v-if="selectedPlatform"
                        v-html="
                            platforms.find((platform) => platform.slug === selectedPlatform)
                                .description
                        "></div>
                    <div class="thesis-control">
                        <button @click="selectPlatform(null)">{{ $t("thesis.reset") }}</button>
                        <button
                            @click="
                                selectPlatform(
                                    platforms[
                                        (platforms.findIndex((p) => p.slug === selectedPlatform) +
                                            1) %
                                            platforms.length
                                    ].slug
                                )
                            ">
                            {{ $t("thesis.next") }}
                        </button>
                    </div>
                </div>
                <City class="thesis-image" />
            </div>
            <div class="thesis-panel">
                <div class="thesis-panel-title" v-if="!selectedPlatform">
                    {{ $t("thesis.select") }}
                </div>
                <div class="platforms">
                    <div
                        :class="[
                            'platform',

                            platform.type,
                            selectedPlatform === platform.slug && selectedPlatform != null
                                ? 'selected'
                                : '',
                        ]"
                        ref="platformsRef"
                        v-for="(platform, index) in platforms"
                        :key="platform.slug"
                        @click="selectPlatform(platform.slug)"
                        :style="`--platform-index: ${index}`">
                        <div class="platform-content" v-if="platform.slug !== null">
                            <img
                                :src="`/images/platforms/${platform.slug || 'default'}.svg`"
                                class="platform-image" />
                            <p class="platform-name">{{ platform.name }}</p>
                        </div>
                        <svg
                            width="217"
                            height="136"
                            viewBox="0 0 217 136"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.79015 62.4364L1.29004 63.3025L1.29032 72.0275L1.79029 72.8935L107.997 134.216L108.366 134.342L108.371 134.342L109.002 134.217L215.209 72.8942L215.709 72.0284L215.711 63.3165L215.709 63.3125V63.3031L215.701 63.2984L215.209 62.4488L215.207 62.4475L214.963 62.8724L214.954 62.8672L215.199 62.443L109.001 1.13396L108.001 1.13391L1.79015 62.4364Z"
                                stroke-width="2"
                                stroke-linejoin="bevel" />
                            <rect
                                width="122.639"
                                height="8.72502"
                                transform="matrix(0.86601 0.500028 3.18351e-05 1 108.5 2)" />
                            <rect
                                width="122.639"
                                height="8.72502"
                                transform="matrix(0.86601 -0.500028 -3.18351e-05 1 2.29541 63.323)" />
                            <rect
                                width="122.639"
                                height="122.639"
                                transform="matrix(0.866041 0.499972 -0.866041 0.499972 108.5 10.7183)" />
                            <rect
                                x="0.21651"
                                y="0.375007"
                                width="122.139"
                                height="8.22502"
                                transform="matrix(0.86601 0.500028 3.18351e-05 1 2.31953 63.1945)"
                                stroke-width="0.5" />
                            <rect
                                x="0.216494"
                                y="0.124993"
                                width="122.139"
                                height="8.22502"
                                transform="matrix(0.86601 -0.500028 -3.18351e-05 1 108.532 124.735)"
                                stroke-width="0.5" />
                            <rect
                                x="0.433021"
                                width="122.139"
                                height="122.139"
                                transform="matrix(0.866041 -0.499972 0.866041 0.499972 2.34853 63.5329)"
                                stroke-width="0.5" />
                        </svg>
                    </div>
                </div>
                <button
                    @click="learnMore = !learnMore"
                    v-if="selectedPlatform"
                    style="margin-top: 1rem">
                    {{ $t("thesis.learnMore") }}
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
const { locale, setLocale } = useI18n();
const selectedPlatform = ref();
const { $gsap } = useNuxtApp();
const learnMore = ref(false);

const currentLocale = useI18n().locale.value;
const platformsRef = ref([]);

const { data: thesis } = await $useFetch("/thesis");
console.log(thesis);

const selectPlatform = (slug) => {
    if (slug === null) learnMore.value = false;
    if (selectedPlatform.value === slug) return;
    selectedPlatform.value = slug;
    $gsap.to(".scramble", {
        duration: 1,
        scrambleText: {
            speed: 0.1,
            chars: "dkjo30iudjkmlz,@#!)I(@J)          ",
            text: platforms
                .find((platform) => platform.slug === slug)
                .description.replace(/<[^>]*>/g, ""),
        },
    });
};

onMounted(() => {
    $gsap.to(".scramble", {
        duration: 1,
        delay: 0.5,
        scrambleText: {
            speed: 0.1,
            chars: "dkjo30iudjkmlz,@#!)I(@J)          ",
            text: "{original}",
        },
    });

    $gsap.fromTo(
        platformsRef.value,
        {
            duration: 1,
            opacity: 0,
            stagger: 0.1,
            y: -100,
            ease: "power1.inOut",
        },
        {
            stagger: 0.1,
            opacity: 1,
            y: 0,
        }
    );
});

const platforms = [
    { slug: null },
    ...thesis.value.map((platform) => ({
        slug: platform.slug,
        name: platform.title.rendered,
        description: platform.content.rendered,
    })),
];
</script>

<style lang="scss">
.thesis-control {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
}
.thesis-wrapper button {
    background-color: var(--color-white);
    color: var(--color-black);
    text-transform: uppercase;
    cursor: pointer;
}
.thesis-panel-title {
    animation-name: flicker-on;
    animation-duration: 1000ms;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
    margin-bottom: 1rem;
}
.page-thesis h1 {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background: radial-gradient(ellipse at top left, var(--color-black) 0%, transparent 80%),
        radial-gradient(ellipse at top left, var(--color-black) 0%, transparent 50%);
    padding: var(--content-padding);
    padding-bottom: 10rem;
    line-height: 1;
    span {
        animation-name: flicker-on;
        animation-duration: 300ms;
        animation-delay: 300ms;
        animation-fill-mode: forwards;
    }
}
.thesis-image {
    width: 100%;
    height: auto;
    transform: scale(2.5);
    mix-blend-mode: screen;
    transition: 500ms ease-in-out all;
}
#agribusiness,
#cloud,
#security,
#sensors,
#data,
#health,
#smart_cities,
#connectivity,
#industry40,
#battery-platform-active,
#energy-platform-active,
#smartcities-platform-active,
#city-platform-active,
#industry40-platform-active,
#agribusiness-platform-active,
#health-platform-active {
    opacity: 0;
    display: none;
}

%flicker-on {
    display: block;
    animation-name: flicker-on;
    animation-duration: 600ms;
    animation-fill-mode: forwards;
    animation-delay: 300ms;
}

.envirormentandsociety .thesis-image {
    transform: scale(0.85);

    #battery-platform-active,
    #energy-platform-active,
    #smartcities-platform-active,
    #city-platform-active,
    #industry40-platform-active,
    #agribusiness-platform-active,
    #health-platform-active {
        @extend %flicker-on;
    }
}
.agribusiness .thesis-image {
    transform: scale(2.5) translate(3%, -35%);

    #agribusiness {
        @extend %flicker-on;
    }
}
.industry40 .thesis-image {
    transform: scale(2.2) translate(-28%, -21%);

    #industry40 {
        @extend %flicker-on;
    }
}
.health .thesis-image {
    transform: scale(2.3) translate(28%, -15%);

    #health {
        @extend %flicker-on;
    }
}
.smartcities .thesis-image {
    transform: scale(2.3) translate(30.3%, 10%);

    #smart_cities {
        @extend %flicker-on;
    }
}
.sensorsanddevices .thesis-image {
    transform: scale(0.85);

    #sensors {
        @extend %flicker-on;
    }
}
.connectivity .thesis-image {
    transform: scale(2.5) translate(-26%, 28%);

    #connectivity {
        @extend %flicker-on;
    }
}
.cloud .thesis-image {
    transform: scale(2.5) translate(-36%, 0%);

    #cloud {
        @extend %flicker-on;
    }
}
.dataintelligence .thesis-image {
    transform: scale(0.85);

    #data {
        @extend %flicker-on;
    }
}
.securityandblockchain .thesis-image {
    transform: scale(0.85);

    #security {
        @extend %flicker-on;
    }
}

.thesis-wrapper {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    .thesis-info {
        position: absolute;
        bottom: var(--content-padding);
        left: var(--content-padding);
        z-index: 10;
        .scramble {
            max-width: 20rem;
            padding: 1rem;
            background-color: var(--color-black);
            color: var(--color-white);
            border: 1px solid var(--color-white);
        }
    }
}

.thesis-map {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.thesis-panel {
    background-color: var(--color-black);
    padding: 2rem;
    z-index: 10;
    border-left: 1px solid var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.platforms {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-height: 50rem) {
        svg {
            width: 9rem;
            height: auto;
        }

        .platform-image {
            width: 5rem;
            height: auto;
        }

        .platform-name {
            font-size: 0.8rem;
        }
    }
}

.platform {
    opacity: 0;
    position: relative;
    margin-top: -50%;
    z-index: calc(20 - var(--platform-index, 0));
    transition: 500ms ease-in-out margin;
    cursor: pointer;
    --accent-color: var(--color-primary);
}

.platform path,
.platform rect {
    stroke: var(--color-white);
    fill: var(--color-black);
}

.platform-image {
    margin-bottom: -20%;
}

.platform-name {
    text-shadow: 0 0 25px var(--color-black), 0 0 10px var(--accent-color),
        0 0 15px var(--color-black), 0 0 20px var(--color-black);
}

.platform.selected,
.platform:not(:first-child):hover {
    margin-top: 20%;

    path,
    rect {
        stroke: var(--accent-color);
    }

    .platform-content {
        animation-name: flicker-on;
        animation-duration: 100ms;
        animation-fill-mode: forwards;
        animation-delay: 300ms;
    }
}

.platform:first-child {
    margin-top: 0;
    cursor: default;
}

.platform-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -50%;
    left: 0;
    right: 0;
    bottom: 40%;
    opacity: 0;
}

.industry {
}

.media {
    --accent-color: var(--color-primary);
}

@media (max-width: 52rem) {
    .thesis-panel {
        width: 100%;
        border-left: 0;
        transition: 500ms ease-in-out transform;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
    }

    .learn-more {
        .thesis-panel {
            transform: translateX(100%);
        }
    }
}
</style>
