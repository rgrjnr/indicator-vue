<template>
    <NuxtLayout>
        <div class="content">
            <div
                :class="[
                    'panel',
                    'panel-stretch',
                    'overflow-y-scroll',
                    'scrollable panel-main',
                    'game-' + gameState,
                ]">
                <div id="container">
                    <div id="dino">
                        <svg
                            width="320"
                            height="86"
                            viewBox="0 0 320 86"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M60 42H56V56H52V62H48V66H44V82H48V86H40V74H36V70H32V74H28V78H24V82H28V86H20V70H16V66H12V62H8V58H4V54H0V30H4V38H8V42H12V46H20V42H24V38H30V34H36V30H40V4H44V0H76V4H80V22H60V26H72V30H56V38H64V46H60V42ZM48 6V10H52V6H48Z"
                                fill="#E2FDFF" />
                            <path
                                d="M140 42H136V56H132V62H128V66H124V82H128V86H120V74H116V70H112V74H108V78V82H100V70H96V66H92V62H88V58H84V54H80V30H84V38H88V42H92V46H100V42H104V38H110V34H116V30H120V4H124V0H156V4H160V22H140V26H152V30H136V38H144V46H140V42ZM128 6V10H132V6H128Z"
                                fill="#E2FDFF" />
                            <path
                                d="M220 42H216V56H212V62H208V66H204V78H208V82H200V74H196V70H192V74H188V78H184V82H188V86H180V70H176V66H172V62H168V58H164V54H160V30H164V38H168V42H172V46H180V42H184V38H190V34H196V30H200V4H204V0H236V4H240V22H220V26H232V30H216V38H224V46H220V42ZM208 6V10H212V6H208Z"
                                fill="#E2FDFF" />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M296 42H300V46H304V38H296V30H312V26H316V22H320V4H316V0H284V4H280V30H276V34H270V38H264V42H260V46H252V42H248V38H244V30H240V54H244V58H248V62H252V66H256V70H260V86H268V82H264V78H268V74H272V70H276V74H280V86H288V82H284V66H288V62H292V56H296V42ZM291 9H293V11H291V9ZM288 6H291H293H296V9V11V14H293H291H288V11V9V6Z"
                                fill="#E2FDFF" />
                        </svg>
                    </div>
                    <div id="block">
                        <svg
                            width="52"
                            height="100"
                            viewBox="0 0 52 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 64V100H32V76H40H44V72H48V68H52V36H48V32H44V36H40V40V56V60V64H36H32V36V4H28V0H24H20V4H16V48H12V12H8V8H4V12H0V56H4V60H8V64H12Z"
                                fill="#E2FDFF" />
                        </svg>
                    </div>
                    <div id="road">
                        <svg
                            width="3347"
                            height="43"
                            viewBox="0 0 3347 43"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.5 2H1679.5M33 15H43.5M73.5 28.5H90.5M145.5 15H160.5M180 36H186M276 28.5H298.5M377 15H383M421 32H432.5M513 15H525M610.5 36H628.5M700.5 32H713.5M812.5 23.5H848.5M865 23.5H872.5M997 15H1012.5M1113.5 41H1131M1176 15H1219.5M1282 35.5H1289M1364 19H1379.5M1438.5 31H1452.5M1513 19H1526M1564.5 35.5H1635.5M1668 2H3347M1700.5 15H1711M1741 28.5H1758M1813 15H1828M1847.5 36H1853.5M1943.5 28.5H1966M2044.5 15H2050.5M2088.5 32H2100M2180.5 15H2192.5M2278 36H2296M2368 32H2381M2480 23.5H2516M2532.5 23.5H2540M2664.5 15H2680M2781 41H2798.5M2843.5 15H2887M2949.5 35.5H2956.5M3031.5 19H3047M3106 31H3120M3180.5 19H3193.5M3232 35.5H3303"
                                stroke="#E2FDFF"
                                stroke-width="4" />
                        </svg>
                    </div>
                    <div id="cloud">
                        <svg
                            width="1275"
                            height="125"
                            viewBox="0 0 1275 125"
                            fill="none"
                            svg
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                opacity="0.5"
                                d="M27.8372 84H114V79.2857H110.023V75.2449H104.721V69.8571H98.7558V64.4694H82.8488V57.7347H76.2209V51H59.6512V56.3878H51.0349V61.102H44.407V66.4898H35.1279V73.898H16.5698V80.6327H12.593M6.62791 84H0"
                                stroke="#E2FDFF"
                                stroke-width="4" />
                            <path
                                opacity="0.5"
                                d="M259.837 51H346V46.2857H342.023V42.2449H336.721V36.8571H330.756V31.4694H314.849V24.7347H308.221V18H291.651V23.3878H283.035V28.102H276.407V33.4898H267.128V40.898H248.57V47.6327H244.593M238.628 51H232"
                                stroke="#E2FDFF"
                                stroke-width="4" />
                            <path
                                opacity="0.5"
                                d="M499.837 95H586V90.2857H582.023V86.2449H576.721V80.8571H570.756V75.4694H554.849V68.7347H548.221V62H531.651V67.3878H523.035V72.102H516.407V77.4898H507.128V84.898H488.57V91.6327H484.593M478.628 95H472"
                                stroke="#E2FDFF"
                                stroke-width="4" />
                            <path
                                opacity="0.5"
                                d="M673.837 51H760V46.2857H756.023V42.2449H750.721V36.8571H744.756V31.4694H728.849V24.7347H722.221V18H705.651V23.3878H697.035V28.102H690.407V33.4898H681.128V40.898H662.57V47.6327H658.593M652.628 51H646"
                                stroke="#E2FDFF"
                                stroke-width="4" />
                            <path
                                opacity="0.5"
                                d="M970.837 123H1057V118.286H1053.02V114.245H1047.72V108.857H1041.76V103.469H1025.85V96.7347H1019.22V90H1002.65V95.3878H994.035V100.102H987.407V105.49H978.128V112.898H959.57V119.633H955.593M949.628 123H943"
                                stroke="#E2FDFF"
                                stroke-width="4" />
                            <path
                                opacity="0.5"
                                d="M1186.84 35H1273V30.2857H1269.02V26.2449H1263.72V20.8571H1257.76V15.4694H1241.85V8.73469H1235.22V2H1218.65V7.38775H1210.03V12.102H1203.41V17.4898H1194.13V24.898H1175.57V31.6327H1171.59M1165.63 35H1159"
                                stroke="#E2FDFF"
                                stroke-width="4" />
                        </svg>
                    </div>
                    <div id="score" v-if="gameState == 'started'">
                        Score
                        <b>{{ playerScore }}</b>
                    </div>
                    <div id="gameOver">
                        <p>
                            <strong class="bg-white text-black uppercase text-lg">Game Over</strong>
                        </p>
                        <p>Your score was {{ playerScore }}</p>
                    </div>
                </div>
                <h1 class="mt-8 mb-4">{{ $t("404.title") }}</h1>
                <p>{{ $t("404.description") }}</p>
                <a :href="localePath('/')" class="btn mt-12 inline-block">{{ $t("404.home") }}</a>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
const localePath = useLocalePath();
const gameState = ref("not-started");
const playerScore = ref(0);

// Dinosaur jump

onNuxtReady(() => {
    let dino = document.querySelector("#dino");
    let block = document.querySelector("#block");

    let container = document.querySelector("#container");

    // Counter and CSS animations

    let interval = null;
    const scoreCounter = () => {
        playerScore.value++;
        container.style.setProperty("--block-speed", `${2 - playerScore.value * 0.002}s`);
    };

    window.addEventListener("keydown", (event) => {
        if (event.key == "ArrowUp" || event.key == "w" || event.code == "Space") {
            if (gameState.value == "not-started") {
                gameState.value = "started";
                block.classList.add("blockActive");
                interval = setInterval(scoreCounter, 100);
            } else if (gameState.value == "started") {
                if (dino.classList != "jumping") {
                    dino.classList.add("jumping");

                    // remove class after 0.5s
                    setTimeout(() => {
                        dino.classList.remove("jumping");
                    }, 500);
                }
            }
        }
    });

    // Game Over screen

    let result = setInterval(() => {
        let dinoRect = dino.getBoundingClientRect();
        let blockRect = block.getBoundingClientRect();

        if (
            dinoRect.bottom >= blockRect.top &&
            dinoRect.top <= blockRect.bottom &&
            dinoRect.right >= blockRect.left &&
            dinoRect.left <= blockRect.right
        ) {
            gameState.value = "over";
            clearInterval(interval);
            clearInterval(result);
        }
    }, 10);
});
</script>

<style lang="scss">
#container {
    height: 200px;
    position: relative;
    overflow: hidden;
    --block-speed: 2s;
}

#container #dino {
    width: 40px;
    height: 43px;
    position: absolute;
    bottom: 15px;
    left: 20px;
    overflow: hidden;

    svg {
        height: 43px;
        width: auto;
    }
}

@keyframes walking {
    0% {
        transform: translateX(-25%);
    }
    50% {
        transform: translateX(-50%);
    }
}

.game-started #dino svg {
    animation: walking 200ms steps(1) infinite;
}

.game-over #dino svg {
    transform: translateX(-75%);
}

.jumping {
    animation: jump 0.5s linear infinite;
}

@keyframes jump {
    0%,
    100% {
        bottom: 28px;
    }
    45%,
    55% {
        bottom: 160px;
    }
}

#container #block {
    height: 43px;
    position: absolute;
    bottom: 15px;
    right: -100px;
}

#container #block svg {
    width: auto;
    height: 43px;
}

.game-started #block {
    animation: animateBlock var(--block-speed) linear infinite;
}

@keyframes animateBlock {
    0% {
        right: -125px;
    }

    100% {
        right: 100%;
    }
}

#container #road {
    max-width: 77px;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    transition: max-width 0.5s ease-in-out;
}

.game-started #container #road {
    max-width: 100%;
}

#container #road svg {
    left: 0;
    height: 15px;
    width: auto;
    animation: none;
}

.game-started #road svg {
    animation: animateRoad 1s linear infinite;
}

.game-started #cloud svg {
    animation: animateCloud 20s linear infinite;
}

@keyframes animateRoad {
    0% {
        left: 0;
    }

    100% {
        left: -800px;
    }
}

#container #cloud {
    width: 1200px;
    height: 80px;
    border-radius: 40px;
    position: absolute;
    top: 30px;
}
#container #cloud svg {
    width: 2000px;
    height: 80px;
    position: absolute;
    left: -2000px;
    animation: none;
}

@keyframes animateCloud {
    0% {
        left: -1800px;
    }

    100% {
        left: 100%;
    }
}

#score {
    width: auto;
    height: auto;
    position: absolute;
    top: 20px;
    right: 0;
}

#controls {
    display: flex;
    flex-direction: column;
}

#controls p {
    display: flex;
    align-items: center;
    gap: 10px;
}

#gameOver {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;
}
#gameOver p {
    text-align: center;
    font-size: 20px;
}

.game-over #gameOver {
    display: block;
}
</style>
