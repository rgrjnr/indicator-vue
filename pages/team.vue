<template>
    <div class="content">
        <div class="panel overflow-y-scroll">
            <h1 class="mt-12">{{ $t("team.h1") }}</h1>
            <div class="members">
                <div
                    :class="{ 'is-active': useRoute().params.slug == member.slug, member: true }"
                    v-for="member in members"
                    @click="navigateTo('/team/' + member.slug)">
                    <div class="member-photo-wrapper">
                        <img :src="member.photo" alt="" class="member-photo" />
                    </div>
                    <div class="member-details">
                        <div class="member-name">{{ member.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel has-shape">
            <NuxtPage />

            <svg
                preserveAspectRatio="none"
                class="panel-shape"
                width="524"
                height="714"
                viewBox="0 0 524 714"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M477.5 713H45V215.5L1 171.5V1H477.5L523.5 47V667L477.5 713Z"
                    stroke="#E2FDFF" />
            </svg>
        </div>
    </div>
</template>
<script setup>
const { locale, setLocale } = useI18n();

const members = [
    {
        photo: "/images/member-01.jpg",
        name: "Fabio Iunis de Paula",
        slug: "fabio",
    },
    {
        photo: "/images/member-02.jpg",
        name: "Thomas Lundgren Bittar",
        slug: "thomas",
    },
    {
        photo: "/images/member-03.jpg",
        name: "Derek Lundgen Bittar",
        slug: "derek",
    },
    {
        photo: "/images/member-01.jpg",
        name: "Fabio Iunis de Paula",
        slug: "fabio1",
    },
    {
        photo: "/images/member-02.jpg",
        name: "Thomas Lundgren Bittar",
        slug: "thomas2",
    },
    {
        photo: "/images/member-03.jpg",
        name: "Derek Lundgen Bittar",
        slug: "derek3",
    },
];
useSeoMeta({
    title: "Team - Indicator Capital",
    ogTitle: "Team - Indicator Capital",
    description: "This is Indicator Capital, let me tell you all about it.",
    ogDescription: "This is Indicator Capital, let me tell you all about it.",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});
</script>

<style lang="scss">
h1 {
    @apply text-4xl;
    text-transform: lowercase;
}

.members {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

    gap: 0.5rem;
}

.member {
    mix-blend-mode: exclusion;
    border: 1px solid var(--color-white);
    position: relative;
    overflow: hidden;

    --square-size: 1.5rem;

    &::before,
    &::after {
        content: " ";
        width: var(--square-size);
        height: var(--square-size);
        background-color: var(--color-primary);
        position: absolute;
        z-index: 10;
        transform: rotate(45deg) scale(0);
        transition: all 100ms;
    }

    &::before {
        top: calc(-0.5 * var(--square-size));
        right: calc(-0.5 * var(--square-size));
    }

    &::after {
        bottom: calc(-0.5 * var(--square-size));
        left: calc(-0.5 * var(--square-size));
    }
}

.member-name {
    @apply text-base;
    padding: 1.5rem;
    text-transform: lowercase;
}

.member-photo {
    filter: grayscale(0.5) contrast(0.95);
    width: 100%;
    transition: all 100ms ease-out;
}

.member-photo-wrapper {
    position: relative;
}

.member-photo-wrapper::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #1d76a5;
    mix-blend-mode: soft-light;
    transition: all 100ms ease-out;
}

.member-photo-wrapper::before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(transparent, black);
    height: 3rem;
    z-index: 9;
}

.member:hover,
.member.is-active {
    border-color: var(--color-primary);
    color: var(--color-primary);
    cursor: pointer;

    &::before,
    &::after {
        transform: rotate(45deg) scale(1);
    }

    .member-photo {
        filter: none;
    }

    .member-photo-wrapper::after {
        opacity: 0;
    }
}

.member-panel {
    padding: 2rem;
    padding-left: 4rem;
    position: absolute;
    right: 2rem;
    left: 2rem;
    bottom: 2rem;
    top: 2rem;
    overflow-y: scroll;
    z-index: 1;
    scrollbar-gutter: stable both-edges;
    overflow-y: hidden;

    &:hover {
        overflow-y: auto;
    }
}

/* Scrollbar styles for WebKit browsers */
.member-panel::-webkit-scrollbar {
    width: 0.5em;
}

.member-panel::-webkit-scrollbar-thumb {
    background-color: hsl(250 15% 70%);
}

.member-panel::-webkit-scrollbar-thumb:hover {
    background-color: hsl(250 15% 60%);
}

.member-panel::-webkit-scrollbar-track {
    background-color: hsl(250 15% 85%);
}

.member-panel::-webkit-scrollbar-track {
    background-color: hsl(250 15% 90%);
}

.member-panel::-webkit-scrollbar-thumb {
    background-color: hsl(250 15% 85%);
}

.member-panel:hover::-webkit-scrollbar-track {
    background-color: hsl(250 15% 85%);
}

.member-panel:hover::-webkit-scrollbar-thumb {
    background-color: hsl(250 15% 70%);
}

.noise {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    video {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        filter: grayscale(1);
        mask-image: url("/images/team-shape.svg");
        opacity: 0.4;
        object-fit: cover;
        mask-size: cover;
        z-index: -1;
    }
}
</style>
