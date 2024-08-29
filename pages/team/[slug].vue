<template>
    <div class="member-panel panel-inside scrollable">
        <nuxt-link :to="localePath('/team')" class="shape-btn shape-btn-sm mb-4 back-btn">
            {{ $t("go_back") }}

            <svg
                viewBox="0 0 431 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path
                    d="M401.5 160.5H1V1H430.5V131.5L401.5 160.5Z"
                    vector-effect="non-scaling-stroke" />
            </svg>
        </nuxt-link>
        <h2 class="lowercase mb-6">
            <span class="block text-primary text-lg">
                {{ member[0].title.rendered.split(" ")[0] }}
            </span>
            <span class="block text-md">
                {{ member[0].title.rendered.split(" ").slice(1).join(" ") }}
            </span>
        </h2>

        <div>
            <div v-for="startup in member[0].startups_involved"></div>
        </div>

        <div class="member-tags">
            <div
                v-for="tag in ['role', 'bio', 'personal_achievements', 'education']"
                class="member-tag">
                <div class="member-tag-icon">
                    <img :src="`/images/${tag}.svg`" style="min-width: 2rem; height: auto" />
                </div>
                <div class="member-tag-info">
                    <div class="uppercase opacity-50 text-sm">
                        {{ $t(`team.tags.${tag}`) }}
                    </div>
                    <div v-if="tag == 'education'">
                        <div v-for="item in member[0][tag]">
                            <strong>{{ item.name }}</strong>
                            <br />
                            <small class="opacity-50">{{ item.description }}</small>
                        </div>
                    </div>
                    <div v-else="tag == 'education'">
                        {{ member[0][tag] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();

const localePath = useLocalePath();

const { data: member } = await useFetch(
    config.public.wordpressURL + "/team?slug=" + route.params.slug,
    {
        method: "get",
    }
);

const tags = [
    "role",
    "bio",
    "personal_achievements",
    "education",
    "startups_involved",
    "linkedin",
    "instagram",
    "youtube",
    "email",
];
</script>

<style lang="scss">
.member-tags {
    display: grid;
    gap: 1rem;
    margin-left: 10%;
}
.member-tag {
    display: flex;
    gap: 1rem;
}
.member-tag-info {
    padding-left: 1rem;
    border-left: 1px solid;
    @apply border-white;
}

.member-panel {
    overflow-x: hidden;
}

.media-panel strong {
    font-weight: bold;
    background-color: var(--color-white);
    color: var(--color-black);
}

.member-social {
    position: fixed;
    bottom: calc(1.5 * var(--content-padding));
    right: calc(1.5 * var(--content-padding));
    display: flex;
    gap: 0.25rem;
    height: 3.5rem;
    z-index: 2;
}

.member-social-btn {
    background-color: var(--color-white);
    color: var(--color-black);
    display: inline-block;
    padding: 1rem;
    transform: skew(-10deg);
    text-transform: uppercase;
    height: 3.5rem;

    span,
    svg {
        transform: skew(10deg);
    }

    &:hover {
        animation: flicker-on 300ms linear;
        animation-fill-mode: forwards;
        background-color: var(--color-primary);
    }
}

@media screen and (min-width: 80rem) {
    .back-btn {
        display: none;
    }
}
</style>
