<template>
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
            <div v-for="tag in tags" class="member-tag">
                <div class="member-tag-icon">
                    <img :src="`/images/${tag}.svg`" style="min-width: 2rem; height: auto" />
                </div>
                <div class="member-tag-info">
                    <div class="uppercase opacity-50 text-sm">
                        {{ $t(`team.tags.${tag}`) }}
                    </div>
                    <div>
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

<style>
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
</style>
