<template>
    <div class="content">
        <div
            class="lines"
            style="position: fixed; top: 0; right: 0; bottom: 0; left: 0; pointer-events: none">
            <div
                v-for="line in lines"
                class="constellation-line"
                :style="`transform: translate(${line.x}px, ${line.y}px) rotate(${line.angle}deg) scaleX(${line.scaleX})`"></div>
        </div>
        <div class="startup-tutorial">
            <div class="instructions">
                {{ $t("startups.instructions") }}
            </div>
            <svg
                width="401"
                height="532"
                viewBox="0 0 401 532"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M48.4076 516H15V97.6211L78.2986 34.3368H243.578L262.919 15H347.318L386 53.6737V516H296.327L284.019 503.695H60.7156L48.4076 516Z"
                    fill="#2A2F30"
                    stroke="#E2FDFF" />
                <path d="M376 431.925L386 442L386 365L376 375.075L376 431.925Z" fill="#E2FDFF" />
                <path d="M25 169.075L15 159L15 236L25 225.925L25 169.075Z" fill="#E2FDFF" />
                <path d="M187.178 373.198H211.806" stroke="#E2FDFF" />
                <path d="M123.849 373.198H148.477" stroke="#E2FDFF" />
                <path d="M250.507 373.198H275.135" stroke="#E2FDFF" />
                <path d="M199.492 360.884L199.492 385.512" stroke="#E2FDFF" />
                <path d="M199.492 297.555L199.492 322.183" stroke="#E2FDFF" />
                <path d="M199.492 424.213L199.492 448.841" stroke="#E2FDFF" />
                <circle cx="199.492" cy="373.198" r="50.5149" stroke="#E2FDFF" />
                <mask id="path-11-inside-1_516_798" fill="white">
                    <path
                        d="M221.052 326.963C213.755 323.56 205.757 321.933 197.712 322.214C189.666 322.495 181.801 324.676 174.759 328.579L177.975 334.38C184.101 330.984 190.943 329.086 197.943 328.842C204.943 328.598 211.901 330.013 218.249 332.973L221.052 326.963Z" />
                </mask>
                <path
                    d="M221.052 326.963C213.755 323.56 205.757 321.933 197.712 322.214C189.666 322.495 181.801 324.676 174.759 328.579L177.975 334.38C184.101 330.984 190.943 329.086 197.943 328.842C204.943 328.598 211.901 330.013 218.249 332.973L221.052 326.963Z"
                    stroke="#E2FDFF"
                    stroke-width="2"
                    mask="url(#path-11-inside-1_516_798)" />
                <mask id="path-12-inside-2_516_798" fill="white">
                    <path
                        d="M245.727 394.758C249.13 387.462 250.757 379.463 250.476 371.418C250.195 363.372 248.014 355.507 244.111 348.466L238.31 351.681C241.706 357.807 243.604 364.649 243.848 371.649C244.092 378.649 242.677 385.607 239.717 391.955L245.727 394.758Z" />
                </mask>
                <path
                    d="M245.727 394.758C249.13 387.462 250.757 379.463 250.476 371.418C250.195 363.372 248.014 355.507 244.111 348.466L238.31 351.681C241.706 357.807 243.604 364.649 243.848 371.649C244.092 378.649 242.677 385.607 239.717 391.955L245.727 394.758Z"
                    stroke="#E2FDFF"
                    stroke-width="2"
                    mask="url(#path-12-inside-2_516_798)" />
                <path
                    d="M215.272 315.146C226.952 318.427 237.389 325.112 245.253 334.35C253.118 343.587 258.052 354.958 259.427 367.011"
                    stroke="#E2FDFF" />
                <path
                    d="M151.826 412.998C143.429 402.909 138.506 390.383 137.787 377.277"
                    stroke="#E2FDFF" />
                <mask id="path-15-inside-3_516_798" fill="white">
                    <path
                        d="M177.932 419.433C185.229 422.836 193.227 424.463 201.273 424.182C209.318 423.901 217.183 421.72 224.225 417.817L221.009 412.016C214.884 415.412 208.041 417.31 201.041 417.554C194.041 417.798 187.083 416.383 180.735 413.423L177.932 419.433Z" />
                </mask>
                <path
                    d="M177.932 419.433C185.229 422.836 193.227 424.463 201.273 424.182C209.318 423.901 217.183 421.72 224.225 417.817L221.009 412.016C214.884 415.412 208.041 417.31 201.041 417.554C194.041 417.798 187.083 416.383 180.735 413.423L177.932 419.433Z"
                    stroke="#E2FDFF"
                    stroke-width="2"
                    mask="url(#path-15-inside-3_516_798)" />
                <mask id="path-16-inside-4_516_798" fill="white">
                    <path
                        d="M153.257 351.638C149.855 358.934 148.227 366.933 148.508 374.978C148.789 383.024 150.97 390.889 154.873 397.93L160.674 394.715C157.278 388.589 155.381 381.747 155.136 374.747C154.892 367.747 156.307 360.789 159.267 354.441L153.257 351.638Z" />
                </mask>
                <path
                    d="M153.257 351.638C149.855 358.934 148.227 366.933 148.508 374.978C148.789 383.024 150.97 390.889 154.873 397.93L160.674 394.715C157.278 388.589 155.381 381.747 155.136 374.747C154.892 367.747 156.307 360.789 159.267 354.441L153.257 351.638Z"
                    stroke="#E2FDFF"
                    stroke-width="2"
                    mask="url(#path-16-inside-4_516_798)" />
                <circle cx="199.492" cy="373.198" r="32.9236" stroke="#E2FDFF" />
                <path
                    d="M1 127.777V92.0091L72.5147 20.3688H237.739L257.074 1H353.093L400 47.9892V83.7575M1 504.588V531H54.2827L66.5867 518.674H278.167L290.471 531H400V504.588"
                    stroke="#E2FDFF" />
                <path d="M90.3789 1H246L233.621 13H78L90.3789 1Z" fill="#E2FDFF" />
                <circle cx="199.5" cy="373.5" r="19.5" fill="#E2FDFF" />
                <circle cx="100.5" cy="321.5" r="3.5" fill="#E2FDFF" />
                <circle cx="303.5" cy="313.5" r="3.5" fill="#E2FDFF" />
                <circle cx="306.5" cy="389.5" r="3.5" fill="#E2FDFF" />
                <circle cx="266.5" cy="320.5" r="3.5" fill="#E2FDFF" />
                <circle cx="60.5" cy="406.5" r="3.5" fill="#E2FDFF" />
                <circle cx="144.5" cy="439.5" r="3.5" fill="#E2FDFF" />
                <circle cx="43.5" cy="290.5" r="3.5" fill="#E2FDFF" />
                <circle cx="221.5" cy="259.5" r="3.5" fill="#E2FDFF" />
                <circle cx="335.5" cy="350.5" r="3.5" fill="#E2FDFF" />
                <circle cx="296.5" cy="457.5" r="3.5" fill="#E2FDFF" />
            </svg>
        </div>
        <div class="panel panel-main">
            <div id="filters" :class="{ active: currentTag }">
                <button class="filter-btn shape-btn" @click="showFilter = !showFilter">
                    <template v-if="tags.filter((tag) => tag.id == currentTag).length > 0">
                        Showing <{{ tags.filter((tag) => tag.id == currentTag)[0].name }}>
                    </template>
                    <template v-else>{{ $t("startups.filters") }}</template>
                    <svg
                        viewBox="0 0 431 161"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="filter-svg"
                        preserveAspectRatio="none">
                        <path
                            d="M401.5 160.5H1V1H430.5V131.5L401.5 160.5Z"
                            vector-effect="non-scaling-stroke" />
                    </svg>
                </button>
                <button
                    v-if="currentTag"
                    @click="changeFilter(null)"
                    style="
                        position: absolute;
                        border: 1px solid var(--color-white);
                        height: 2rem;
                        width: 2rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        right: 0;
                        transform: translateX(calc(100% - 1px));
                    ">
                    x
                </button>
                <div class="filter-groups scrollable overflow-y-auto" v-if="showFilter">
                    <div
                        :class="{ 'filter-group': true, hide: !showFilter }"
                        v-for="group in groups">
                        <div class="uppercase opacity-50 text-sm mb-2 mt-2">{{ group.name }}</div>
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
            </div>
            <div class="startups-space" :style="``" ref="space">
                <!-- Stars -->
                <div
                    v-for="startup in startups"
                    v-bind:key="startup.slug"
                    ref="startupRef"
                    :id="startup.slug"
                    :class="{
                        'startup-wrapper': true,
                        'select-none': true,
                        active: useRoute().params.slug == startup.slug && !forceHide,
                        'current-group': startup.group.includes(currentTag),
                        'not-current-group': !startup.group.includes(currentTag),
                        exit: startup.group.includes(exitGroup),
                    }"
                    @click="
                        navigateTo(localePath('/portfolio/' + startup.slug));
                        showFilter = false;
                        forceHide = false;
                    "
                    :style="
                        startup.position &&
                        `transform: translate3d(${startup.position[0] || 0}px, ${
                            startup.position[1] || 0
                        }px, ${startup.position[2] || 0}px) rotateY(${-1 * rotation}deg)`
                    ">
                    <div class="star-reference"></div>
                    <div class="star-rotation">
                        <svg
                            width="362"
                            height="362"
                            viewBox="0 0 362 362"
                            fill="none"
                            class="startup-focus"
                            v-if="useRoute().params.slug == startup.slug && !forceHide"
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
        </div>
        <div
            :class="{
                panel: true,
                'startups-panel': true,
                active: !forceHide && useRoute().params.slug,
                scrollable: true,
                'overflow-y-auto': true,
            }">
            <NuxtPage />
        </div>
    </div>
</template>
<script setup>
const localePath = useLocalePath();

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
const exitGroup = tags.value.filter((g) => g.slug == "exit")[0].id;

const forceHide = ref(false);

setSeo("startups");

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

const onResize = () => {
    window.location.href = localePath("/portfolio");
};

// Clean up listener when component is unmounted
onUnmounted(() => {
    window.removeEventListener("resize", onResize);
});

const render = () => {
    // if (rotating.value) {
    //     const duration = 100;
    //     const peak = 3;

    //     rotationTime.value += 1 / duration;
    //     const t = ease(rotationTime.value);
    //     extraRotationSpeed.value = (-4 * t * t + 4 * t) * peak;
    //     if (rotationTime.value >= 1) rotating.value = false;
    // } else {
    //     rotationTime.value = 0; // Reset time when not rotating
    //     extraRotationSpeed.value = 0;
    // }

    lines.value = [];

    for (let i = 0; i < constellation.value.length - 1; i++) {
        const a = constellation.value[i].getBoundingClientRect();
        const b = constellation.value[i + 1].getBoundingClientRect();

        // Calculate the center coordinates of the bounding boxes
        const ax = a.x + a.width / 2;
        const ay = a.y + a.height / 2;
        const bx = b.x + b.width / 2;
        const by = b.y + b.height / 2;

        // Calculate the distance between the points
        const dx = bx - ax;
        const dy = by - ay;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate the rotation angle
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Create a new line object
        const line = {
            x: ax.toFixed(4),
            y: ay.toFixed(4),
            angle: angle.toFixed(2),
            scaleX: distance.toFixed(2),
        };

        lines.value.push(line);
    }

    requestAnimationFrame(render);
};

const changeFilter = async (tag) => {
    currentTag.value = tag;
    constellation.value = [];
    startups.value.forEach((startup, i) => {
        if (startup.group.includes(tag)) {
            constellation.value.push(startupRef.value[i]);
        }
    });

    forceHide.value = true;
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
                randomBetween(20, box.width - 20),
                randomBetween(50, box.height - 50),
                randomBetween(-1 * box.width, box.width) / 3,
            ];
        });

        render();
    }
    window.addEventListener("resize", onResize);
});
</script>
<style lang="scss">
// Layout and positioning
.page-portfolio {
    @media screen and (max-width: 80rem) {
        .content {
            overflow-y: scroll;
        }
    }
}

.panel-main {
    @media screen and (max-width: 80rem) {
        margin-bottom: var(--content-padding);
    }
}

// Startup tutorial
.startup-tutorial {
    aspect-ratio: 401 / 532;
    max-height: 50vh;
    position: fixed;
    z-index: 0;
    bottom: calc(2 * var(--content-padding) - 1rem);
    right: calc(2 * var(--content-padding) - 1rem);

    .title {
        position: absolute;
        color: var(--color-black);
        z-index: 1;
        margin-left: 2rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.8rem;
        top: 0.3rem;
    }

    .instructions {
        position: absolute;
        top: 15%;
        z-index: 1;
        margin: 3rem;
        text-align: center;
    }

    svg {
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 80rem) {
        display: none;
    }
}

// Constellation
.constellation-mark {
    width: 1rem;
    height: 1rem;
    position: absolute;
}

.constellation-line {
    height: 1px;
    width: 1px;
    background-color: var(--color-white);
    position: fixed;
    transform-origin: left;
}

// Filters
#filters {
    position: absolute;
    display: grid;
    z-index: 100;
    min-width: 10rem;
    padding-bottom: var(--content-padding);
    gap: 0.5rem;

    @media screen and (max-width: 80rem) {
        position: relative;
        &.active {
            width: calc(100% - 2rem);
        }
    }
}

.filter-groups {
    max-height: calc(100svh - 6rem - 4.25rem - 3.5rem - var(--content-padding));
    padding: 0.25rem 1rem var(--content-padding) 0;
    display: grid;
    gap: 0.5rem;

    @media screen and (max-width: 80rem) {
        max-height: fit-content;
    }
}

.filter-group {
    display: grid;
    background: var(--color-black);
    border: 1px solid var(--color-white);
    animation-name: flicker-on;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
    padding: 1rem;
    opacity: 0;

    &.hide {
        display: none;
    }

    @for $i from 2 through 4 {
        &:nth-of-type(#{$i}) {
            animation-delay: #{($i - 1) * 100}ms;
        }
    }
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

.filter-svg {
    max-height: 3.5rem !important;
}

// Startups space
.startups-space {
    --orbit-duration: 240s;
    transform-style: preserve-3d;
    transform-origin: 50%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    &:has(.current-group) {
        .not-current-group {
            pointer-events: none;
            .startup-star {
                opacity: 0.5;
            }
        }
    }

    @media screen and (max-width: 80rem) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        position: relative;
        gap: 3px;
        padding-bottom: var(--content-padding);

        &:has(.current-group) {
            .startup-wrapper:not(.current-group) {
                display: none;
            }

            .not-current-group {
                pointer-events: none;
                .startup-star {
                    opacity: 0.5;
                }
            }
        }
    }

    @media screen and (max-width: 60rem) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 52rem) {
        grid-template-columns: repeat(2, 1fr);
    }
}

.star-rotation {
    transform-style: preserve-3d;
    transform-origin: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
}

// Startup wrapper
.star-reference {
    transform-style: preserve-3d;
    transition: none;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.startup-wrapper {
    position: absolute;
    // border-radius: 50%;
    width: 4rem;
    height: 4rem;
    transform-style: preserve-3d;
    transform-origin: center center;

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

        .star-reference {
            transform-style: preserve-3d;
            position: absolute;
            z-index: 99999;
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

    @media screen and (max-width: 80rem) {
        position: relative;
        border-radius: 0;
        width: auto;
        height: auto;
        aspect-ratio: 1/1;

        &:hover .startup-logo {
            filter: brightness(0);
        }
    }
}

.startup-logo {
    opacity: 0;
    filter: brightness(0);
    max-height: 4rem;
    object-fit: contain;

    @media screen and (max-width: 80rem) {
        opacity: 1;
        max-width: 15rem;
        width: 100%;
        filter: brightness(0) invert(1);
    }
}

.startup-star {
    width: 8rem;
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

    @media screen and (max-width: 80rem) {
        transform: translate(-50%, -50%) scale(1);
        position: relative;
        border-radius: 0;
        background-color: transparent;
        border: 1px solid var(--color-white);
        width: 100%;
    }
}

.exit .startup-star {
    background-color: #989898;
}

.current-group {
    .startup-star {
        background-color: var(--color-primary);
    }

    @media screen and (max-width: 80rem) {
        .startup-star {
            background-color: transparent;
        }
    }
}

// Startup focus
.startup-focus {
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    path {
        transform-origin: center;
        animation: rotate 60s linear infinite;

        &:nth-child(2) {
            animation-duration: 30s;
        }
    }
}

// Startups panel
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

    @media screen and (max-width: 80rem) {
        display: none;
        margin-left: calc(-1 * var(--content-padding) - 1px);
    }
}

// Specific page styles
.page-portfolio-slug {
    @media screen and (max-width: 80rem) {
        .panel-main {
            display: none;
        }
        .startups-panel {
            display: block;
            max-width: unset;
            background-image: none;
        }

        .startup-panel {
            padding-left: 0;
        }
        .panel-shape {
            display: none;
        }
        .panel-inside {
            mask-image: unset;
        }
        .has-shape {
            aspect-ratio: unset;
            overflow: unset;
            width: 100%;
        }
    }
}

@media screen and (min-width: 80rem) {
    .startups-space {
        animation: orbit var(--orbit-duration) linear infinite;
    }

    .star-rotation {
        animation: counter-orbit var(--orbit-duration) linear infinite;
    }

    .star-reference {
        animation: counter-orbit var(--orbit-duration) linear infinite;
    }
}

// Animations
@keyframes orbit {
    to {
        transform: rotateY(360deg);
    }
}

@keyframes counter-orbit {
    to {
        transform: rotateY(-360deg);
    }
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}
</style>
