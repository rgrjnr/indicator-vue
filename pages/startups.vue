<template>
    <div class="content">
        <div class="panel panel-stretch overflow-y-visible" ref="space">
            <div id="filters">
                <div
                    v-for="(industry, i) in industries"
                    :key="industry.id"
                    :class="{
                        'filter-item': true,
                        active: currentIndustry == industry.id,
                    }"
                    @click="currentIndustry = industry.id">
                    {{ industry.name }}
                </div>
                <br />
                <br />
                <div
                    v-for="(status, i) in statuses"
                    :key="status.id"
                    :class="{
                        'filter-item': true,
                        active: currentStatus == status.id,
                    }"
                    @click="changeCurrentStatus(status.id)">
                    {{ status.name }}
                </div>
            </div>
            <!-- Lines -->
            <div
                v-for="(line, i) in lines"
                class="constellation-line"
                :style="`transform: translate(${line.x - 33}px, ${line.y - 104}px) rotate(${
                    line.angle
                }deg) scaleX(${line.scaleX})`"></div>

            <div class="startups-space" :style="`transform: rotateY(${rotation}deg)`">
                <!-- Stars -->
                <div
                    v-for="startup in startups"
                    v-bind:key="startup.slug"
                    ref="startupRef"
                    :id="startup.slug"
                    :class="{
                        'startup-wrapper': true,
                        'select-none': true,
                        active: useRoute().params.slug == startup.slug,
                        'current-status': startup.status.includes(currentStatus),
                    }"
                    @click="navigateTo(localePath('/startups/' + startup.slug))"
                    :style="
                        startup.position &&
                        `transform: translate3d(${startup.position[0] || 0}px, ${
                            startup.position[1] || 0
                        }px, ${startup.position[2] || 0}px) rotateY(${-1 * rotation}deg)`
                    ">
                    <svg
                        width="362"
                        height="362"
                        viewBox="0 0 362 362"
                        fill="none"
                        class="startup-focus"
                        v-if="useRoute().params.slug == startup.slug"
                        xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path
                                d="M75.0265 67.078L153.137 28.0346L239.957 37.419L307.92 92.2519L335.45 175.124L313.805 259.724L249.858 319.193L163.912 334.648L83.2531 301.184L33.4907 229.425L30.424 142.153L75.0265 67.078Z"
                                stroke="#FFDA29" />
                            <path
                                d="M84.8849 31.6827L180.567 3.58788L276.249 31.6827L341.553 107.047L355.744 205.753L314.319 296.463L230.428 350.377H130.706L46.8152 296.463L5.3894 205.753L19.5812 107.047L84.8849 31.6827Z"
                                stroke="#FFDA29" />
                        </g>
                    </svg>

                    <div class="startup-star">
                        <img
                            v-if="startup._embedded['wp:featuredmedia']"
                            :src="startup._embedded['wp:featuredmedia'][0].source_url"
                            :alt="startup.title.rendered"
                            class="startup-logo" />
                    </div>
                </div>
            </div>
        </div>
        <div
            :class="{
                panel: true,
                'startups-panel': true,
                active: useRoute().params.slug,
                scrollable: true,
                'overflow-y-auto': true,
            }">
            <NuxtPage />
        </div>
    </div>
</template>
<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();
const space = ref();
const rotation = ref(0);
const currentIndustry = ref(null);
const currentStatus = ref(74);
const constellation = ref([]);
const startupRef = ref();
const lines = ref([]);
const rotating = ref(false);
const extraRotationSpeed = ref(0);
const rotationTime = ref(0);

useSeoMeta({
    title: "Indicator Capital",
    ogTitle: "Indicator Capital",
    description: "This is Indicator Capital, let me tell you all about it.",
    ogDescription: "This is Indicator Capital, let me tell you all about it.",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();

const { data: startups } = await useFetch(
    config.public.wordpressURL + "/startups?_embed&per_page=100&lang=" + locale.value,
    {
        method: "get",
    }
);
const { data: statuses } = await useFetch(
    config.public.wordpressURL + "/status?lang=" + locale.value,
    {
        method: "get",
    }
);
const { data: industries } = await useFetch(
    config.public.wordpressURL + "/industry?lang=" + locale.value,
    {
        method: "get",
    }
);

const reorderConstellation = () => {
    if (constellation.value.length < 2) return;

    // Function to calculate distance between two points
    const distance = (a, b) => {
        const rectA = a.getBoundingClientRect();
        const rectB = b.getBoundingClientRect();
        const dx = rectB.x - rectA.x;
        const dy = rectB.y - rectA.y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const reordered = [];
    const used = new Set();

    // Start with the first point
    let currentPoint = constellation.value[0];
    reordered.push(currentPoint);
    used.add(currentPoint);

    // Iteratively find the closest point
    while (reordered.length < constellation.value.length) {
        let closestPoint = null;
        let minDistance = Infinity;

        for (const point of constellation.value) {
            if (!used.has(point)) {
                const dist = distance(currentPoint, point);
                if (dist < minDistance) {
                    minDistance = dist;
                    closestPoint = point;
                }
            }
        }

        reordered.push(closestPoint);
        used.add(closestPoint);
        currentPoint = closestPoint;
    }

    constellation.value = reordered;
};

function ease(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

const render = () => {
    rotation.value += 0.01 + extraRotationSpeed.value;

    if (rotating.value) {
        const duration = 100;
        const peak = 3;

        rotationTime.value += 1 / duration;
        const t = ease(rotationTime.value);
        extraRotationSpeed.value = (-4 * t * t + 4 * t) * peak;
        if (rotationTime.value >= 1) rotating.value = false;
    } else {
        rotationTime.value = 0; // Reset time when not rotating
        extraRotationSpeed.value = 0;
    }

    lines.value = [];

    for (let i = 0; i < constellation.value.length - 1; i++) {
        const a = constellation.value[i].getBoundingClientRect();
        const b = constellation.value[i + 1].getBoundingClientRect();

        // Calculate the distance between the points
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate the rotation angle
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Create a new line object
        const line = {
            x: a.x.toFixed(2),
            y: a.y.toFixed(2),
            angle: angle.toFixed(2),
            scaleX: distance.toFixed(2),
        };

        lines.value.push(line);
    }

    requestAnimationFrame(render);
};

const changeCurrentStatus = (statusId) => {
    currentStatus.value = statusId;
    constellation.value = [];
    startups.value.forEach((startup, i) => {
        if (startup.status.includes(statusId)) {
            constellation.value.push(startupRef.value[i]);
        }
    });

    reorderConstellation();
    rotating.value = true;
    rotationTime.value = 0; // Reset time when not rotating
    extraRotationSpeed.value = 0;
};

onMounted(() => {
    const box = space.value.getBoundingClientRect();
    startups.value.forEach((item, i) => {
        startups.value[i].position = [
            Math.random() * box.width,
            Math.random() * box.height,
            Math.random() * box.width - box.width / 2,
        ];
    });

    render();
    changeCurrentStatus(74);
});
</script>

<style lang="scss">
#filters {
    display: grid;
}
.constellation-mark {
    width: 1rem;
    height: 1rem;
    // background-color: blue;
    position: absolute;
}

.constellation-line {
    height: 1px;
    width: 1px;
    background-color: var(--color-white);
    position: absolute;
    transform-origin: left;
}
.filter-item {
    display: inline;
    width: fit-content;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 0.5em;
    cursor: pointer;

    &:hover {
        background-color: var(--color-white);
        color: var(--color-black);
    }

    &.active {
        background-color: var(--color-primary);
        color: var(--color-black);
    }
}
.startup-wrapper {
    position: absolute;
    border-radius: 50%;
    width: 8rem;
    height: 8rem;

    &:hover,
    &.active {
        .startup-star {
            transform: translate(-50%, -50%) scale(1);

            animation-name: flicker-on;
            animation-duration: 150ms;
            animation-fill-mode: forwards;
            background-color: var(--color-primary);
        }

        .startup-logo {
            opacity: 1;
        }
    }

    &.active {
        pointer-events: none;
        .startup-focus g {
            transform-origin: center center;
            animation-name: flicker-on;
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }
        .startup-star {
            background-color: var(--color-black);
            border: 1px solid var(--color-white);
            width: 10rem;
            height: 10rem;
        }

        .startup-logo {
            filter: brightness(0) invert(1);
        }
    }
}

.startup-logo {
    opacity: 0;
    filter: brightness(0);
    max-height: 4rem;
    object-fit: contain;
}

.startup-star {
    width: 8rem;
    height: 8rem;
    background-color: var(--color-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    transform: translate(-50%, -50%) scale(0.1);
    transition: transform 150ms ease-out;
    top: 50%;
    left: 50%;
    position: absolute;
    cursor: pointer;
}

.startups-space {
    transform-style: preserve-3d;
    transform-origin: 50%;
}

.startups-panel {
    background-image: url("/images/startups-panel.svg");
    background-size: 100% 100%;
    max-width: 30rem;
    margin: calc(-1 * var(--content-padding) - 1px);
    padding: var(--content-padding);
    transform: translateX(100%);
    transition: all 300ms ease-out;
    &.active {
        transform: translate(0);
    }
}

.startup-focus {
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    path {
        transform-origin: center;
        animation: rotate 60s linear infinite;
    }

    path:nth-child(2) {
        animation-duration: 30s;
    }
}

.current-status {
    .startup-star {
        background-color: var(--color-primary);
    }
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}

#filters {
    position: absolute;
}
</style>
