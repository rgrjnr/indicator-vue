<script setup lang="ts">
withDefaults(
    defineProps<{
        title?: string;
        type?: string;
        image?: string;
    }>(),
    {
        title: "title",
        type: "pages",
    }
);
</script>

<template>
    <div
        style="
            background-color: var(--color-black);
            color: #e2fdff;
            font-family: 'Indicator', monospace;
        ">
        <div class="flex items-center justify-center h-full w-full">
            <div class="flex flex-col justify-between w-full h-full">
                <div v-if="type != 'pages'" class="flex p-20" style="position: relative">
                    <div class="relative">
                        <svg
                            width="17"
                            height="20"
                            viewBox="0 0 17 20"
                            fill="none"
                            style="display: inline; position: absolute"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.42375 4.32507H2.48999V19.957H5.42375V4.32507Z"
                                fill="#E2FDFF" />
                            <path d="M4.39089 4.32507H0V7.26388H4.39089V4.32507Z" fill="#E2FDFF" />
                            <path
                                d="M5.42375 0.0262451H2.48999V2.96505H5.42375V0.0262451Z"
                                fill="#E2FDFF" />
                            <path
                                d="M13.4985 0.0262451L9.45093 19.957H12.4374L16.4849 0.0262451H13.4985Z"
                                fill="#FFDA29" />
                            <path d="M0 17.0182V19.957H7.28662L7.88351 17.0182H0Z" fill="#E2FDFF" />
                        </svg>
                        <span class="text-[32px]" style="position: absolute; left: 30px; top: -5px">
                            {{ type }}
                        </span>
                    </div>
                </div>
                <h1 class="text-[80px] p-20 font-black text-left">
                    {{ title }}
                </h1>
            </div>
        </div>
    </div>
</template>
