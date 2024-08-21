<template>
    <div>
        <div class="member-panel panel-inside scrollable">
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

        <div class="member-social">
            <div v-if="member[0]['instagram']">
                <a :href="member[0]['instagram']" class="member-social-btn">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="18" height="18" stroke="black" stroke-width="2" />
                        <rect x="1" y="1" width="18" height="18" stroke="black" stroke-width="2" />
                        <circle cx="10" cy="10" r="4" stroke="black" stroke-width="2" />
                        <circle cx="4.5" cy="4.5" r="1" stroke="black" />
                    </svg>
                </a>
            </div>
            <div v-if="member[0]['youtube']">
                <a :href="member[0]['youtube']" class="member-social-btn">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="18" height="18" stroke="black" stroke-width="2" />
                        <path d="M13 10L7 13V7L13 10Z" stroke="black" stroke-width="2" />
                    </svg>
                </a>
            </div>
            <div v-if="member[0]['linkedin']">
                <a :href="member[0]['linkedin']" class="member-social-btn">
                    <span>Connect on Linkedin</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();

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
</style>
