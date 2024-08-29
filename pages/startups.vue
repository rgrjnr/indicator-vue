<template>
    <div class="content">
        <div class="panel panel-stretch overflow-y-visible panel-main">
            <div id="filters">
                <button class="filter-btn shape-btn" @click="showFilter = !showFilter">
                    {{ $t("startups.filters") }}
                    <svg
                        viewBox="0 0 431 161"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none">
                        <path
                            d="M401.5 160.5H1V1H430.5V131.5L401.5 160.5Z"
                            vector-effect="non-scaling-stroke" />
                    </svg>
                </button>
                <div :class="{ 'filter-group': true, hide: !showFilter }" v-for="group in groups">
                    <div class="uppercase opacity-50 text-sm">{{ group.name }}</div>
                    <div
                        v-for="(tag, i) in tags.filter((t) => t.parent == group.id)"
                        :key="tag.id"
                        :class="{
                            'filter-item': true,
                            active: currentTag == tag.id,
                        }"
                        @click="changeFilter(tag.id)">
                        {{ tag.name }}
                    </div>
                </div>
            </div>
            <!-- Lines -->
            <div
                v-for="(line, i) in lines"
                class="constellation-line"
                :style="`transform: translate(${line.x}px, ${line.y}px) rotate(${line.angle}deg) scaleX(${line.scaleX})`"></div>

            <div class="startups-space" :style="`transform: rotateY(${rotation}deg)`" ref="space">
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
                        'current-group': startup.group.includes(currentTag),
                    }"
                    @click="
                        navigateTo(localePath('/startups/' + startup.slug));
                        showFilter = false;
                    "
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
const space = ref();
const rotation = ref(0);
const currentTag = ref();
const constellation = ref([]);
const startupRef = ref();
const lines = ref([]);
const rotating = ref(false);
const extraRotationSpeed = ref(0);
const rotationTime = ref(0);
const showFilter = ref(false);

const { data: startups } = await $useFetch("/startups");
const { data: tags } = await $useFetch("/group");

const groups = tags.value.filter((g) => g.parent == 0);

if (!useRoute().name.includes("slug")) setSeo("startups");

function randomBetween(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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
    rotation.value += 0.05 + extraRotationSpeed.value;

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

const changeFilter = (tag) => {
    currentTag.value = tag;
    constellation.value = [];
    startups.value.forEach((startup, i) => {
        if (startup.group.includes(tag)) {
            constellation.value.push(startupRef.value[i]);
        }
    });

    showFilter.value = false;

    reorderConstellation();
    rotating.value = true;
    rotationTime.value = 0; // Reset time when not rotating
    extraRotationSpeed.value = 0;
};

onMounted(() => {
    if (process.client && window.innerWidth > 80 * 16) {
        const box = space.value.getBoundingClientRect();
        startups.value.forEach((item, i) => {
            startups.value[i].position = [
                randomBetween(10, box.width - 10),
                randomBetween(0, box.height - 10),
                randomBetween(-1 * box.width, box.width) / 3,
            ];
        });

        render();
    }
});
</script>

<style lang="scss">
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
    position: fixed;
    transform-origin: left;
    top: 4rem;
    left: 4rem;
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
    width: 100%;
    aspect-ratio: 1/1;
    height: auto;
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
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.startups-panel {
    background-image: url("/images/startups-panel.svg");
    background-size: 100% 100%;
    max-width: 30rem;
    margin: calc(-1 * var(--content-padding) - 1px);
    margin-left: 0;
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

.current-group {
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
    display: grid;
    z-index: 100;
    gap: 1rem;
    min-width: 10rem;
}

.filter-group.hide {
    display: none;
}
.filter-group {
    display: grid;
    background-color: var(--color-black);
    border: 1px solid var(--color-white);
    padding: 1rem;
    animation-name: flicker-on;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
}

.filter-group {
    opacity: 0;
}

.filter-group:nth-of-type(2) {
    animation-delay: 100ms;
}
.filter-group:nth-of-type(3) {
    animation-delay: 200ms;
}
.filter-group:nth-of-type(4) {
    animation-delay: 300ms;
}

@media screen and (max-width: 80rem) {
    .panel-main {
        overflow-y: scroll;
    }
    .startups-space {
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;
        gap: 3px;

        &:has(.current-group) {
            .startup-wrapper:not(.current-group) {
                display: none;
            }
        }
    }

    .current-group .startup-star {
        background-color: transparent;
    }

    .startup-wrapper {
        position: relative;
        border-radius: 0;
        width: auto;
        height: auto;
        aspect-ratio: 1/1;

        &:hover .startup-logo {
            filter: brightness(0);
        }
    }

    .startup-star {
        transform: translate(-50%, -50%) scale(1);
        border-radius: 0;
        background-color: transparent;
        border: 1px solid var(--color-white);
    }

    .startup-logo {
        opacity: 1;
        max-width: 15rem;
        width: 100%;
        filter: brightness(0) invert(1);
    }

    .startups-panel {
        display: none;
    }

    .page-startups-slug {
        .panel-main {
            display: none;
        }
        .startups-panel {
            display: block;
            max-width: unset;
        }
    }
}
</style>
