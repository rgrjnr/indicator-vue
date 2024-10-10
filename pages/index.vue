<template>
    <div
        :class="{ content: true, 'game-is-active': gameIsActive, 'player-shoot': playerShoot }"
        ref="content">
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
        <div class="tutorial">
            <div class="title">How to play</div>
            <div class="instructions">
                Use your arrow keys to move the ship and the spacebar to shoot.
            </div>
            <svg
                width="600"
                height="241"
                viewBox="0 0 600 241"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="position: absolute">
                <path
                    d="M1.5 160.435V31.9391H328.404H328.611L328.757 31.7923L359.991 0.5H515.433L591.5 76.7087V233.5H272.126L254.49 215.831L254.344 215.685H254.136H56.6463L1.5 160.435Z"
                    fill="#3C4344"
                    stroke="#E2FDFF" />
                <path d="M599 77.5V240H269.644L251.84 222.246H53.9033L1 169.492" stroke="#E2FDFF" />
                <path d="M27.0695 0L1 26H324.93L351 0H27.0695Z" fill="#E2FDFF" />
                <rect
                    x="431.686"
                    y="126.965"
                    width="23.4186"
                    height="23.4186"
                    fill="#E2FDFF"
                    fill-opacity="0.8"
                    stroke="#E2FDFF"
                    stroke-width="1.23256" />
                <rect
                    x="330.616"
                    y="126.965"
                    width="82.5814"
                    height="23.4186"
                    fill="#E2FDFF"
                    fill-opacity="0.8"
                    stroke="#E2FDFF"
                    stroke-width="1.23256" />
                <path
                    d="M354.419 135.514C354.419 135.889 354.562 136.175 354.848 136.372C355.134 136.569 355.489 136.737 355.913 136.875C356.347 137.013 356.811 137.146 357.304 137.274C357.807 137.402 358.265 137.58 358.679 137.806C359.103 138.033 359.448 138.339 359.715 138.724C359.991 139.108 360.119 139.631 360.099 140.291C360.089 140.498 360.05 140.774 359.981 141.12C359.912 141.465 359.754 141.805 359.507 142.14C359.271 142.466 358.921 142.752 358.457 142.998C358.004 143.235 357.383 143.353 356.594 143.353C355.992 143.353 355.445 143.274 354.952 143.116C354.459 142.949 354.04 142.712 353.695 142.406C353.359 142.101 353.098 141.726 352.911 141.282C352.723 140.839 352.63 140.336 352.63 139.774V139.567H354.005C354.084 140.395 354.331 141.001 354.745 141.386C355.169 141.761 355.736 141.948 356.446 141.948C356.702 141.948 356.963 141.928 357.23 141.889C357.496 141.849 357.737 141.77 357.954 141.652C358.171 141.534 358.349 141.376 358.487 141.179C358.625 140.972 358.694 140.705 358.694 140.38C358.694 139.897 358.551 139.532 358.265 139.286C357.989 139.029 357.639 138.827 357.215 138.679C356.801 138.521 356.347 138.388 355.854 138.28C355.361 138.171 354.903 138.018 354.479 137.821C354.064 137.624 353.714 137.353 353.428 137.008C353.152 136.663 353.014 136.18 353.014 135.558C353.014 135.124 353.093 134.735 353.251 134.39C353.409 134.045 353.631 133.754 353.917 133.517C354.203 133.281 354.548 133.103 354.952 132.985C355.356 132.857 355.805 132.792 356.298 132.792C357.313 132.792 358.132 133.059 358.753 133.591C359.374 134.114 359.71 134.878 359.759 135.884H358.383C358.275 135.262 358.048 134.824 357.703 134.567C357.358 134.311 356.904 134.183 356.342 134.183C355.78 134.183 355.317 134.296 354.952 134.523C354.597 134.74 354.419 135.07 354.419 135.514ZM365.578 132.926C365.982 132.926 366.362 133.004 366.717 133.162C367.081 133.32 367.397 133.532 367.663 133.798C367.929 134.064 368.136 134.38 368.284 134.745C368.442 135.1 368.521 135.479 368.521 135.884C368.521 136.288 368.442 136.673 368.284 137.037C368.136 137.392 367.929 137.703 367.663 137.969C367.397 138.235 367.081 138.447 366.717 138.605C366.362 138.753 365.982 138.827 365.578 138.827H362.708V143.279H361.303V132.926H365.578ZM365.578 137.422C365.795 137.422 365.997 137.382 366.184 137.304C366.371 137.225 366.534 137.116 366.672 136.978C366.81 136.83 366.919 136.663 366.998 136.475C367.076 136.288 367.116 136.091 367.116 135.884C367.116 135.667 367.076 135.465 366.998 135.277C366.919 135.09 366.81 134.927 366.672 134.789C366.534 134.641 366.371 134.528 366.184 134.449C365.997 134.37 365.795 134.331 365.578 134.331H362.708V137.422H365.578ZM373.605 132.94L376.371 143.279H374.921L374.123 140.291H370.203L369.404 143.279H367.955L370.721 132.94H373.605ZM373.738 138.901L372.525 134.331H371.8L370.573 138.901H373.738ZM380.292 132.852C380.824 132.852 381.312 132.93 381.756 133.088C382.2 133.246 382.584 133.478 382.91 133.783C383.245 134.079 383.511 134.449 383.708 134.893C383.906 135.327 384.019 135.825 384.049 136.387H382.658C382.599 135.696 382.372 135.169 381.978 134.804C381.593 134.439 381.017 134.257 380.247 134.257C379.883 134.257 379.567 134.306 379.301 134.405C379.035 134.493 378.808 134.622 378.62 134.789C378.443 134.947 378.3 135.134 378.192 135.351C378.083 135.568 378.004 135.805 377.955 136.061V136.076C377.935 136.194 377.915 136.451 377.896 136.845C377.886 137.24 377.881 137.673 377.881 138.147C377.881 138.61 377.886 139.054 377.896 139.478C377.915 139.902 377.945 140.198 377.984 140.365C378.093 140.868 378.32 141.263 378.665 141.549C379.01 141.834 379.547 141.977 380.277 141.977C380.701 141.977 381.061 141.928 381.357 141.83C381.653 141.731 381.894 141.583 382.082 141.386C382.269 141.189 382.407 140.947 382.496 140.661C382.584 140.365 382.639 140.025 382.658 139.641H384.049C384.049 140.203 383.945 140.715 383.738 141.179C383.541 141.632 383.27 142.027 382.925 142.362C382.579 142.687 382.18 142.939 381.727 143.116C381.273 143.294 380.79 143.383 380.277 143.383C379.764 143.383 379.276 143.294 378.813 143.116C378.359 142.929 377.96 142.668 377.615 142.332C377.279 141.987 377.013 141.578 376.816 141.105C376.619 140.632 376.52 140.109 376.52 139.537V136.697C376.52 136.086 376.614 135.544 376.801 135.07C376.989 134.587 377.245 134.183 377.57 133.857C377.906 133.532 378.305 133.285 378.768 133.118C379.232 132.94 379.74 132.852 380.292 132.852ZM385.237 143.279V132.926H392.218V134.316H386.627V137.304H390.813V138.694H386.627V141.874H392.218V143.279H385.237Z"
                    fill="#131415" />
                <path
                    d="M439.698 137.639L446.605 134.977V136.426L441.088 138.556V138.97L446.605 141.1V142.55L439.698 139.887V137.639Z"
                    fill="#131415" />
                <rect
                    opacity="0.2"
                    x="459.418"
                    y="126.349"
                    width="24.6512"
                    height="24.6512"
                    fill="#E2FDFF" />
                <rect
                    x="460.035"
                    y="98.6163"
                    width="23.4186"
                    height="23.4186"
                    fill="#E2FDFF"
                    fill-opacity="0.8"
                    stroke="#E2FDFF"
                    stroke-width="1.23256" />
                <rect
                    x="488.384"
                    y="126.965"
                    width="23.4186"
                    height="23.4186"
                    fill="#E2FDFF"
                    fill-opacity="0.8"
                    stroke="#E2FDFF"
                    stroke-width="1.23256" />
                <path
                    d="M503.791 139.71L496.883 142.372L496.883 140.923L502.4 138.793L502.4 138.379L496.883 136.249L496.883 134.799L503.791 137.462L503.791 139.71Z"
                    fill="#131415" />
                <path
                    d="M472.78 106.628L475.442 113.535L473.992 113.535L471.863 108.018L471.448 108.018L469.319 113.535L467.869 113.535L470.531 106.628L472.78 106.628Z"
                    fill="#131415" />
                <path d="M9 63V41H31" stroke="#E2FDFF" />
                <path d="M581 176.925L591 187L591 110L581 120.075L581 176.925Z" fill="#E2FDFF" />
                <path d="M11 139.794L0.999996 150L1 72L11 82.2056L11 139.794Z" fill="#E2FDFF" />
            </svg>
        </div>

        <div class="panel flex flex-col justify-between">
            <svg
                width="1062"
                height="1062"
                viewBox="0 0 1062 1062"
                fill="none"
                class="absolute pointer-events-none"
                style="transform: translate(-40%, -30%)"
                xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.1" cx="531" cy="531" r="530.5" stroke="#E2FDFF" />
                <circle opacity="0.1" cx="531" cy="531" r="321.5" stroke="#E2FDFF" />
            </svg>
            <h1 :content="$t('boosting deep tech heroes')" class="split-text relative" ref="h1">
                {{ $t("boosting deep-tech heroes") }}
            </h1>
            <svg
                width="362"
                height="362"
                viewBox="0 0 362 362"
                fill="none"
                class="pointer-events-none solid"
                style="position: absolute; left: 50%"
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

            <div class="panel-box flex-col md:flex-row">
                <a
                    @click="navigateTo(localePath('/apply'))"
                    class="btn items-center flex! text-center justify-center">
                    {{ $t("apply.title") }}
                </a>
                <span class="mx-8 my-4 self-center">
                    {{ $t("home.intro") }}
                </span>
            </div>
        </div>
        <div class="panel has-shape panel-game hidden sm:block">
            <img
                src="/images/starship.svg"
                alt=""
                class="starship"
                style="
                    max-width: 80%;
                    height: auto;
                    display: block;
                    margin: auto;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 68%;
                    transform: translate(-40%, -50%);
                    max-height: calc(100svh - 20rem);
                " />
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

                    <template v-for="bullet in bullets">
                        <div
                            class="bullet"
                            :style="`position: absolute;transform:  translate(${
                                bullet.position[0]
                            }px, ${bullet.position[1]}px) rotate(${bullet.angle + 90}deg)`"></div>
                    </template>
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
import { useNuxtApp } from "#app";
const localePath = useLocalePath();
const { $gsap, $SplitText } = useNuxtApp();

const { locale, setLocale } = useI18n();
const player = ref();
const content = ref();
const h1 = ref();
const playerShoot = ref(false);

setSeo("home", "pages", {
    resetTemplate: true,
});

const shipAcceleration = 0.3;
const shipMaxSpeed = 10;
const shipRotationSpeed = 15;
var isAccelerating = false;
const angle = ref(270);
const position = ref([0, 0]);
const firstCorner = ref([0, 0]);
const secondCorner = ref([0, 0]);
const initialPosition = ref([0, 0]);
const speed = ref(0);
const gameIsActive = ref(false);
const bullets = ref([]);

const createBullet = () => {
    bullets.value.push({
        position: position.value,
        angle: angle.value,
    });
};

const startGame = () => {
    if (gameIsActive.value) return;
    gameIsActive.value = true;

    new $SplitText(".split-text", {
        type: "chars, words",
        charsClass: "solid",
    });

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
        if (e.key == "ArrowDown") {
            speed.value -= shipAcceleration;
            speed.value = Math.max(speed.value, 0);
        }
        if (e.key == " ") {
            playerShoot.value = true;
            createBullet();
        }
    });

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

function isColliding(x, y, div2) {
    const rect2 = div2.getBoundingClientRect();

    return !(
        x + initialPosition.value[0] < rect2.left ||
        x + initialPosition.value[0] > rect2.right ||
        y + initialPosition.value[1] < rect2.top ||
        y + initialPosition.value[1] > rect2.bottom
    );
}

const render = () => {
    angle.value %= 360;
    angle.value = angle.value < 0 ? angle.value + 360 : angle.value;
    let a = (angle.value * Math.PI) / 180;
    position.value = [
        speed.value * Math.cos(a) + position.value[0],
        speed.value * Math.sin(a) + position.value[1],
    ];

    bullets.value.forEach((bullet, i) => {
        let a = (bullet.angle * Math.PI) / 180;
        bullets.value[i].position = [
            10 * Math.cos(a) + bullets.value[i].position[0],
            10 * Math.sin(a) + bullets.value[i].position[1],
        ];

        document.querySelectorAll(".solid").forEach((solid) => {
            if (isColliding(bullet.position[0], bullet.position[1], solid)) {
                bullets.value.splice(i, 1);
                solid.classList.add("colided");
                solid.classList.remove("solid");
            }
        });

        if (
            bullet.position[0] + firstCorner.value[0] >
                secondCorner.value[0] - initialPosition.value[0] ||
            bullet.position[1] + initialPosition.value[1] > secondCorner.value[1] ||
            bullet.position[0] + initialPosition.value[0] < firstCorner.value[0] ||
            bullet.position[1] + initialPosition.value[1] < firstCorner.value[1]
        ) {
            bullets.value.splice(i, 1);
        }
    });
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

onNuxtReady(() => {
    render();
});
</script>

<style lang="scss">
@use "sass:math";
#game-buttons {
    display: grid;
    gap: 0.5em;
    position: absolute;
    top: 0;
}

.game-button {
    @apply border-white border-[1px] border-solid;
    aspect-ratio: 1/1;
    max-width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @for $i from 0 through 4 {
        &:nth-child(#{$i}) {
            --delay: #{$i * 100}ms;
        }
    }

    circle,
    path,
    rect {
        animation-delay: var(--delay);
        @apply fill-white;
    }
}

.content:not(.game-is-active) .game-button:hover {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    animation: flicker-on 150ms linear;
    animation-fill-mode: forwards;
    circle,
    path,
    rect {
        @apply fill-black;
    }
}

.game-is-active {
    .tutorial {
        display: block;
        animation-name: flicker-on;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
    .game-button {
        border-color: transparent;
    }

    .game-button:not(.game-button-player) {
        circle,
        path,
        rect {
            animation-name: flicker-off;
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }
    }

    .panel-game .panel-shape,
    .starship,
    .bg-p,
    .panel-box {
        animation-name: flicker-off;
        animation-duration: 1s;
        animation-fill-mode: forwards;
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
    align-items: stretch;
    @apply border-white;
}

.panel-box .btn {
    padding: 1rem;
    display: block;
    @apply text-lg bg-white text-black;

    &:hover {
        animation: flicker-on 300ms linear;
        animation-fill-mode: forwards;
    }
}

.panel-game {
    overflow: visible !important;
}

.bullet {
    width: 5px;
    height: 5px;
    background-color: var(--color-primary);
}

.colided {
    animation: collision 300ms ease-out;
    animation-fill-mode: forwards;
}

@keyframes collision {
    to {
        transform: scale(1.4) rotate(5deg);
        opacity: 0;
    }
}

.tutorial {
    width: 598px;
    height: 240px;
    position: fixed;
    z-index: 2;
    bottom: calc(2 * var(--content-padding) - 1rem);
    right: calc(2 * var(--content-padding) - 1rem);
    display: none;

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
        top: 45%;
        z-index: 1;
        max-width: 30ch;
        margin-left: 3rem;
    }
}

.player-shoot .tutorial {
    animation-name: flicker-off;
}
</style>
