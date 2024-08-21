<template>
    <div class="startup-panel scrollable pl-10">
        <h2 class="lowercase">
            <span class="block text-primary text-lg mb-4">
                {{ startup[0].title.rendered }}
            </span>
        </h2>

        <div class="startup-tags">
            <p class="mb-2">{{ startup[0].short_description }}</p>
            <img src="/images/separator.svg" class="w-full mb-4" />
            <div class="uppercase opacity-50 text-sm">
                {{ $t("Founders") }}
            </div>
            <div class="mb-4">
                <div v-for="founder in startup[0]['founders']">
                    <a :href="founder.linkedin" target="_blank">
                        {{ founder.name }} - {{ founder.role }}
                    </a>
                </div>
            </div>
            <img src="/images/separator.svg" class="w-full mb-4" />
            <p class="mb-2">{{ startup[0].long_description }}</p>
            <template v-if="startup[0].problem_x_solution_description">
                <div class="uppercase opacity-50 text-sm">
                    {{ $t("Problem x Solution") }}
                </div>
                <p class="mb-2">{{ startup[0].problem_x_solution_description }}</p>
            </template>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();

const { data: startup } = await useFetch(
    config.public.wordpressURL + "/startups?slug=" + route.params.slug,
    {
        method: "get",
    }
);
</script>

<style lang="scss"></style>
