<template>
    <div class="content">
        <div class="panel panel-stretch overflow-y-scroll scrollable panel-main">
            <h1 class="mt-14 mb-4">{{ $t("team.h1") }}</h1>
            <div class="members">
                <div
                    :class="{ 'is-active': useRoute().params.slug == member.slug, member: true }"
                    v-for="member in members"
                    @click="navigateTo(localePath('/team/' + member.slug))">
                    <div class="member-photo-wrapper">
                        <img
                            :src="member._embedded['wp:featuredmedia'][0].source_url"
                            class="member-photo" />
                    </div>
                    <div class="member-details">
                        <div class="member-name">{{ member.title.rendered }}</div>
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
const { data: members } = await $useFetch("/team");

setSeo("team");
</script>

<style lang="scss">
.members {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-right: 1rem;
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
    z-index: 1;
}

@media screen and (max-width: 80rem) {
    .page-team,
    .page-team-slug {
        .content {
            padding: 0;
        }
        .panel {
            padding: var(--content-padding);
        }
        .panel-secondary {
            aspect-ratio: unset;
            flex: 1;
        }

        .panel-inside {
            mask-image: unset;
        }

        .noise {
            display: none;
        }
    }

    .page-team {
        .panel-secondary {
            display: none;
        }
        .content {
            padding: 0;
        }
        .panel {
            padding: var(--content-padding);
        }
    }

    .page-team-slug {
        .panel-main {
            display: none;
        }
        .panel-shape {
            display: none;
        }

        .member-tags {
            margin: 0;
            margin-bottom: 10rem;
        }
    }
}

@media screen and (max-width: 40rem) {
    .members {
        grid-template-columns: 1fr 1fr;
        padding-bottom: 3rem;
    }
}
</style>
