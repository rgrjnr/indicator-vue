<template>
    <div class="startup-panel scrollable pl-10">
        <nuxt-link :to="localePath('/startups')" class="shape-btn shape-btn-sm mb-4 back-btn">
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
        <h2 class="lowercase">
            <span class="block text-primary text-lg mb-4" ref="title">
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

            <template
                v-for="tag in [
                    'long_description',
                    'product_description',
                    'problem_x_solution_description',
                ]">
                <template v-if="startup[0][tag]">
                    <div class="uppercase opacity-50 text-sm mt-4">
                        {{ $t(`startups.${tag}`) }}
                    </div>
                    <p class="mb-2">{{ startup[0][tag] }}</p>
                </template>
            </template>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const { $gsap } = useNuxtApp();
const title = ref();

const { data: startup } = await $useFetch("/startups", {
    query: {
        slug: route.params.slug,
    },
});

setSeo(route.params.slug, "startups");

onMounted(() => {
    $gsap.to(title.value, {
        duration: 1,
        scrambleText: startup.value[0].title.rendered,
        delay: 0.5,
    });
});
</script>

<style lang="scss">
@media screen and (min-width: 80rem) {
    .back-btn {
        display: none;
    }
}
</style>
