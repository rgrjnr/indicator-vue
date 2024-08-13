<template>
    <div :class="{ content: true, 'game-is-active': gameIsActive }" ref="content">
        <p class="bg-p">
            Apollo 11 (July 16–24, 1969) was the American spaceflight that first landed humans on
            the Moon. Commander Neil Armstrong and Lunar Module Pilot Buzz Aldrin landed the Apollo
            Lunar Module Eagle on July 20, 1969, at 20:17 UTC, and Armstrong became the first person
            to step onto the Moon's surface six hours and 39 minutes later, on July 21 at 02:56 UTC.
            Aldrin joined him 19 minutes later, and they spent about two and a quarter hours
            together exploring the site they had named Tranquility Base upon landing. Armstrong and
            Aldrin collected 47.5 pounds (21.5 kg) of lunar material to bring back to Earth as
            pilot Michael Collins flew the Command Module Columbia in lunar orbit, and were on the
            Moon's surface for 21 hours, 36 minutes before lifting off to rejoin Columbia.
        </p>
        <p class="bg-p">
            Apollo 11 (July 16–24, 1969) was the American spaceflight that first landed humans on
            the Moon. Commander Neil Armstrong and Lunar Module Pilot Buzz Aldrin landed the Apollo
            Lunar Module Eagle on July 20, 1969, at 20:17 UTC, and Armstrong became the first person
            to step onto the Moon's surface six hours and 39 minutes later, on July 21 at 02:56 UTC.
            Aldrin joined him 19 minutes later, and they spent about two and a quarter hours
            together exploring the site they had named Tranquility Base upon landing. Armstrong and
            Aldrin collected 47.5 pounds (21.5 kg) of lunar material to bring back to Earth as
            pilot Michael Collins flew the Command Module Columbia in lunar orbit, and were on the
            Moon's surface for 21 hours, 36 minutes before lifting off to rejoin Columbia.
        </p>
        <div class="panel flex flex-col justify-between">
            <svg
                width="1062"
                height="1062"
                viewBox="0 0 1062 1062"
                fill="none"
                class="absolute"
                style="transform: translate(-40%, -30%)"
                xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.1" cx="531" cy="531" r="530.5" stroke="#E2FDFF" />
                <circle opacity="0.1" cx="531" cy="531" r="321.5" stroke="#E2FDFF" />
            </svg>

            <h1 :content="$t('boosting deep tech heroes')">
                {{ $t("boosting deep tech heroes") }}
            </h1>
            <svg
                width="362"
                height="362"
                viewBox="0 0 362 362"
                fill="none"
                style="position: absolute"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M75.0265 67.078L153.137 28.0346L239.957 37.419L307.92 92.2519L335.45 175.124L313.805 259.724L249.858 319.193L163.912 334.648L83.2531 301.184L33.4907 229.425L30.424 142.153L75.0265 67.078Z"
                    stroke="#FFDA29" />
                <path
                    d="M84.8849 31.6827L180.567 3.58788L276.249 31.6827L341.553 107.047L355.744 205.753L314.319 296.463L230.428 350.377H130.706L46.8152 296.463L5.3894 205.753L19.5812 107.047L84.8849 31.6827Z"
                    stroke="#FFDA29" />
                <path d="M176 151.5V219" stroke="#FFDA29" />
                <path d="M142.25 185.25H209.75" stroke="#FFDA29" />
            </svg>

            <div class="panel-box">
                <a href="/apply" class="btn">{{ $t("Apply") }}</a>
                <span>Some text in here</span>
            </div>
        </div>
        <div class="panel has-shape panel-game">
            <div id="game-buttons">
                <div class="game-button">
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                            x="21"
                            y="9.57397"
                            width="15.8576"
                            height="15.8576"
                            transform="rotate(45 21 9.57397)"
                            fill="#D9D9D9" />
                    </svg>
                </div>
                <div class="game-button">
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 9L32.4127 17.2918L28.0534 30.7082H13.9466L9.58732 17.2918L21 9Z"
                            fill="#D9D9D9" />
                    </svg>
                </div>
                <div class="game-button game-button-player" @click="startGame">
                    <svg
                        ref="player"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        :style="`transform:  translate(${position[0]}px, ${position[1]}px) rotate(${
                            angle + 90
                        }deg)`"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 11L31.3923 29H10.6077L21 11Z" fill="#D9D9D9" />
                    </svg>
                </div>
                <div class="game-button">
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21.5" cy="21.5" r="10.5" fill="#D9D9D9" />
                    </svg>
                </div>
            </div>
            <svg
                width="533"
                height="745"
                viewBox="0 0 533 745"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                class="panel-shape">
                <path
                    vector-effect="non-scaling-stroke"
                    d="M473 744.5H144H1V685.5V512.5L70 443.5V58.5L127.5 1H462.5L532 70.5V685.5L473 744.5Z"
                    stroke="#E2FDFF" />
            </svg>
        </div>
    </div>
</template>
<script setup>
const { locale, setLocale } = useI18n();
const player = ref();
const content = ref();

useSeoMeta({
    title: "Indicator Capital",
    ogTitle: "Indicator Capital",
    description: "This is Indicator Capital, let me tell you all about it.",
    ogDescription: "This is Indicator Capital, let me tell you all about it.",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});

const shipAcceleration = 0.1;
const shipMaxSpeed = 10;
const shipRotationSpeed = 10;
var isAccelerating = false;
const angle = ref(270);
const position = ref([0, 0]);
const firstCorner = ref([0, 0]);
const secondCorner = ref([0, 0]);
const initialPosition = ref([0, 0]);
const speed = ref(0);
const gameIsActive = ref(false);

const startGame = () => {
    if (gameIsActive.value) return;
    gameIsActive.value = true;
    window.addEventListener("keydown", (e) => {
        if (e.key == "ArrowRight") {
            angle.value += shipRotationSpeed;
        }
        if (e.key == "ArrowLeft") {
            angle.value -= shipRotationSpeed;
        }
        if (e.key == "ArrowUp") {
            speed.value += shipAcceleration;
            speed.value = Math.min(speed.value, shipMaxSpeed);
        }
    });
    console.log(player.value.getBoundingClientRect());
    console.log();
    firstCorner.value = [
        content.value.getBoundingClientRect().x,
        content.value.getBoundingClientRect().y,
    ];
    secondCorner.value = [
        content.value.getBoundingClientRect().x + content.value.getBoundingClientRect().width,
        content.value.getBoundingClientRect().y + content.value.getBoundingClientRect().height,
    ];
    initialPosition.value = [
        player.value.getBoundingClientRect().x,
        player.value.getBoundingClientRect().y,
    ];
    render();
};
const render = () => {
    angle.value %= 360;
    angle.value = angle.value < 0 ? angle.value + 360 : angle.value;
    let a = (angle.value * Math.PI) / 180;
    position.value = [
        speed.value * Math.cos(a) + position.value[0],
        speed.value * Math.sin(a) + position.value[1],
    ];

    // if (position.value[0] + firstCorner.value[0] < firstCorner.value[0]) {
    //     position.value[0] = secondCorner.value[0];
    // }

    // if (position.value[1] + firstCorner.value[1] < firstCorner.value[1]) {
    //     position.value[1] = secondCorner.value[1];
    // }

    // if (position.value[0] + firstCorner.value[0] < firstCorner.value[0]) {
    //     position.value[0] = secondCorner.value[0];
    // }

    // Right
    if (
        position.value[0] + firstCorner.value[0] >
            secondCorner.value[0] - initialPosition.value[0] &&
        (angle.value < 90 || angle.value > 270)
    ) {
        position.value[0] = firstCorner.value[0] - initialPosition.value[0];
    }

    // Bottom
    if (position.value[1] + initialPosition.value[1] > secondCorner.value[1] && angle.value < 180) {
        position.value[1] = firstCorner.value[1] - initialPosition.value[1];
    }

    // Left Corner
    if (
        position.value[0] + initialPosition.value[0] < firstCorner.value[0] &&
        angle.value > 90 &&
        angle.value < 270
    ) {
        position.value[0] = secondCorner.value[0] - initialPosition.value[0];
    }

    // Top
    if (position.value[1] + initialPosition.value[1] < firstCorner.value[1] && angle.value > 180) {
        position.value[1] = secondCorner.value[1] - initialPosition.value[1];
    }

    requestAnimationFrame(render);
};

onMounted(() => {
    render();
});
</script>

<style lang="scss">
#game-buttons {
    display: grid;
    gap: 0.5em;
}

.game-button {
    @apply border-white border-[1px] border-solid;
    aspect-ratio: 1/1;
    max-width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    circle,
    path,
    rect {
        @apply fill-white;
    }
}

.content:not(.game-is-active) .game-button:hover {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    circle,
    path,
    rect {
        @apply fill-black;
    }
}

.game-is-active {
    .game-button {
        border-color: transparent;
    }

    .game-button:not(.game-button-player) {
        circle,
        path,
        rect {
            opacity: 0;
        }
    }
}

.page-index h1 {
    width: 10ch;
    margin-block: auto;

    &::after {
        content: attr(content);
        display: block;
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--color-white);
        opacity: 0.2;
    }
}

.bg-p {
    position: fixed;
    width: 60ch;
    opacity: 0.1;
    left: 1.5rem;
    text-transform: uppercase;
    font-family: "Azeret Mono";
    font-size: 0.6rem;
    text-align: justify;
}

.bg-p:nth-child(2) {
    bottom: 10%;
    left: 50%;
}

.panel-box {
    border: 1px solid;
    display: flex;
    align-items: center;

    @apply border-white;
}

.panel-box .btn {
    padding: 1rem;
    display: block;
    @apply text-lg bg-white text-black;
}

.panel-game {
    overflow: visible !important;
}
</style>
