<template>
    <ul :class="{ 'main-menu': true, active: menuIsActive }">
        <li v-for="page in pages">
            <router-link
                :to="localePath(page.path)"
                @click="menuIsActive = false"
                class="nav-link block px-3 py-2 uppercase text-xs">
                <span>{{ $t(`${page.slug}.title`) }}</span>
            </router-link>
        </li>
        <li>
            <router-link
                @click="menuIsActive = false"
                :to="localePath(`/apply`)"
                class="nav-link block px-3 py-2 uppercase text-xs">
                <span class="bg-primary text-black">
                    {{ $t("apply.title") }}
                </span>
            </router-link>
        </li>
        <router-link
            class="nav-link px-1 py-2 uppercase text-xs"
            v-for="locale in availableLocales"
            :key="locale"
            @click="menuIsActive = false"
            :to="switchLocalePath(locale)">
            {{ locale }}
        </router-link>
    </ul>
    <button :class="{ 'menu-toggle': true, active: menuIsActive }" @click="toggleMenu">
        <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            class="close"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_514_750)">
                <path
                    d="M16.0309 54.9942L14.5884 53.5517C13.5065 52.4698 13.5065 50.7162 14.5884 49.6343L21.1079 43.1148C21.6312 42.5915 22.3312 42.3016 23.0666 42.3016H34.451C35.1864 42.3016 35.8864 42.5915 36.4097 43.1148L42.9292 49.6343C44.0111 50.7162 44.0111 52.4698 42.9292 53.5517L41.4867 54.9942C40.4048 56.076 38.6512 56.076 37.5693 54.9942L33.2701 50.6949C32.7469 50.1717 32.0468 49.8818 31.3114 49.8818H26.2061C25.4707 49.8818 24.7707 50.1717 24.2474 50.6949L19.9482 54.9942C18.8664 56.076 17.1127 56.076 16.0309 54.9942Z"
                    fill="#E2FDFF" />
                <path
                    d="M55.494 40.9864L54.0515 42.4289C52.9696 43.5108 51.216 43.5108 50.1341 42.4289L43.6146 35.9094C43.0913 35.3861 42.8014 34.6861 42.8014 33.9507L42.8014 22.5663C42.8014 21.8309 43.0984 21.1238 43.6146 20.6076L50.1341 14.0881C51.216 13.0062 52.9696 13.0062 54.0515 14.0881L55.494 15.5306C56.5758 16.6125 56.5758 18.3661 55.494 19.4479L51.1947 23.7472C50.6715 24.2704 50.3816 24.9705 50.3816 25.7058L50.3816 30.8112C50.3816 31.5465 50.6715 32.2466 51.1947 32.7698L55.494 37.0691C56.5758 38.1509 56.5758 39.9045 55.494 40.9864Z"
                    fill="#E2FDFF" />
                <path
                    d="M40.7797 0.815812L42.2222 2.25831C43.304 3.34018 43.304 5.09381 42.2222 6.17568L35.7027 12.6952C35.1794 13.2185 34.4794 13.5084 33.744 13.5084L22.3595 13.5084C21.6242 13.5084 20.9241 13.2185 20.4009 12.6952L13.8813 6.17568C12.7995 5.0938 12.7995 3.34018 13.8813 2.25831L15.3238 0.815812C16.4057 -0.266061 18.1593 -0.266064 19.2412 0.81581L23.5404 5.11502C24.0637 5.63828 24.7637 5.92819 25.4991 5.92819H30.6044C31.3398 5.92819 32.0398 5.63828 32.5631 5.11502L36.8623 0.815812C37.9442 -0.266061 39.6978 -0.266061 40.7797 0.815812Z"
                    fill="#E2FDFF" />
                <path
                    d="M1.31561 14.8235L2.75811 13.381C3.83998 12.2992 5.59361 12.2992 6.67548 13.381L13.195 19.9006C13.7183 20.4238 14.0082 21.1239 14.0082 21.8593L14.0082 33.2437C14.0082 33.9791 13.7183 34.6791 13.195 35.2024L6.67548 41.7219C5.59361 42.8038 3.83998 42.8038 2.75811 41.7219L1.31561 40.2794C0.23374 39.1975 0.23374 37.4439 1.31561 36.362L5.61482 32.0628C6.13808 31.5396 6.42799 30.8395 6.42799 30.1041V24.9988C6.42799 24.2634 6.13808 23.5634 5.61482 23.0401L1.31561 18.7409C0.233738 17.659 0.23374 15.9054 1.31561 14.8235Z"
                    fill="#E2FDFF" />
            </g>
            <defs>
                <clipPath id="clip0_514_750">
                    <rect width="56.55" height="56.45" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            width="84"
            height="75"
            class="open"
            viewBox="0 0 84 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84 33C84 31.3431 82.6569 30 81 30H3C1.34315 30 0 31.3431 0 33V41C0 42.6569 1.34314 44 3 44H81C82.6569 44 84 42.6569 84 41V33Z"
                fill="#E2FDFF" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84 60C84 58.3431 82.6569 57 81 57H3C1.34315 57 0 58.3431 0 60V63V69V72C0 73.6569 1.34315 75 3 75H29C30.6569 75 32 73.6569 32 72V72C32 70.3431 33.3431 69 35 69H81C82.6569 69 84 67.6569 84 66V60Z"
                fill="#E2FDFF" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84 3C84 1.34315 82.6569 0 81 0H54.5C53.1193 0 52 1.11929 52 2.5V2.5C52 3.88071 50.8807 5 49.5 5H3C1.34315 5 0 6.34315 0 8V14C0 15.6569 1.34314 17 3 17H81C82.6569 17 84 15.6569 84 14V12V5V3Z"
                fill="#E2FDFF" />
        </svg>
    </button>
</template>

<script setup>
const localePath = useLocalePath();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const menuIsActive = ref(false);

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
});
const pages = [
    { slug: "home", path: "/" },
    // { slug: "thesis", path: "/thesis" },
    { slug: "team", path: "/team" },
    { slug: "startups", path: "/startups" },
    { slug: "media", path: "/media" },
];

const toggleMenu = () => {
    menuIsActive.value = !menuIsActive.value;
};
</script>

<style lang="scss">
.router-link-active {
    @apply text-primary;
}

.nav-link:hover span {
    @apply bg-primary text-black font-bold;
}

.main-menu {
    @apply flex text-sm;
}

.menu-toggle {
    display: none;
}

@media screen and (max-width: 40rem) {
    .main-menu {
        pointer-events: none;
        animation-name: flicker-off;
        animation-duration: 300ms;
        animation-fill-mode: forwards;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: fixed;
        background-color: var(--color-black);
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        padding: var(--content-padding);
        @apply text-md;
        z-index: 10000;
        align-items: center;
    }

    .main-menu.active {
        pointer-events: initial;
        animation-name: flicker-on;
        animation-duration: 300ms;
        animation-fill-mode: forwards;
    }

    .menu-toggle {
        position: fixed;
        top: 0rem;
        right: 0rem;
        padding: 1rem;
        z-index: 10001;
        display: block;

        .close {
            display: none;
        }

        &.active {
            .close {
                display: block;
            }

            .open {
                display: none;
            }
        }

        .open,
        .close {
            height: 1.25rem;
            width: auto;
        }
    }
}
</style>
