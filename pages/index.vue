<template>
    <div class="content">
        <div class="panel">
            <h1 :content="$t('boosting deep tech heroes')">
                {{ $t("boosting deep tech heroes") }}
            </h1>
            <div>
                <a href="/apply">{{ $t("Apply") }}</a>
                <span>Some text in here</span>
            </div>
        </div>
        <div class="panel has-shape">
            <div id="game-buttons">
                <div class="game-button">
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                            x="21"
                            y="9.57397"
                            width="15.8576"
                            height="15.8576"
                            transform="rotate(45 21 9.57397)"
                            fill="#D9D9D9" />
                    </svg>
                </div>
                <div class="game-button">
                    <div class="game-button">
                        <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 9L32.4127 17.2918L28.0534 30.7082H13.9466L9.58732 17.2918L21 9Z"
                                fill="#D9D9D9" />
                        </svg>
                    </div>
                </div>
                <div class="game-button">
                    <div class="game-button">
                        <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 11L31.3923 29H10.6077L21 11Z" fill="#D9D9D9" />
                        </svg>
                    </div>
                </div>
                <div class="game-button">
                    <div class="game-button">
                        <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21.5" cy="21.5" r="10.5" fill="#D9D9D9" />
                        </svg>
                    </div>
                </div>
            </div>

            <svg
                width="533"
                height="745"
                viewBox="0 0 533 745"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                class="panel-shape">
                <path
                    vector-effect="non-scaling-stroke"
                    d="M473 744.5H144H1V685.5V512.5L70 443.5V58.5L127.5 1H462.5L532 70.5V685.5L473 744.5Z"
                    stroke="#E2FDFF" />
            </svg>
        </div>
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

<style lang="scss">
#game-buttons {
    display: grid;
    gap: 0.5em;
}

.game-button {
    @apply border-white border-[1px] border-solid;
    aspect-ratio: 1/1;
    max-width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    circle,
    path,
    rect {
        @apply fill-white;
    }
}

.page-index h1 {
    @apply text-4xl;

    &::after {
        content: attr(content);
        display: block;
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--color-white);
    }
}
</style>
