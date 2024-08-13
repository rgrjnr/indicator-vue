<template>
    <div id="website" :class="[`page-${useRoute().name}`]">
        <NuxtLoadingIndicator />
        <nav
            class="flex items-center justify-between px-6 py-4 border-b-[1px] border-solid border-white text-sm relative">
            <router-link to="/">
                <Logo />
            </router-link>
            <MainNavigation />
            <img src="/images/ruler.svg" id="ruler" />
        </nav>
        <div id="screen">
            <slot />
        </div>

        <a href="https://rogerjunior.com/?utm_source=indicator" id="copyright">
            <svg
                width="35"
                height="37"
                viewBox="0 0 35 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.1644 25.5696C12.8822 29.2894 14.4955 34.5268 10.8648 34.3811C6.42195 34.2036 9.88127 26.4628 12.3226 23.8143C13.9341 22.1958 16.6093 23.2143 15.1644 25.5696Z"
                    stroke-miterlimit="10"></path>
                <path
                    d="M22.1397 18.6041C21.9767 16.5132 21.5714 14.2084 22.4867 11.9027C22.827 11.0453 23.3719 11.1466 23.9043 10.9605C24.4141 8.5889 24.2856 7.23322 24.3256 7.07051C24.3565 6.94492 24.3142 6.34396 24.8283 6.35148C25.3233 6.35866 25.3523 7.05599 25.3312 7.22493C25.3221 7.29923 25.5075 8.29817 24.9973 10.9291C24.9886 10.9749 25.3573 11.0444 25.5441 11.2614C25.7308 11.4784 25.8084 11.7855 25.8624 12.0814C25.9449 12.5389 25.9863 13.003 25.986 13.468C25.9741 14.0606 25.9281 14.6519 25.8482 15.2391C25.6402 17.0167 26.541 19.8171 25.0494 20.3621"></path>
                <path
                    d="M22.1397 18.6041C21.9767 16.5132 21.5714 14.2084 22.4867 11.9027C22.827 11.0453 23.3719 11.1466 23.9043 10.9605C24.4141 8.5889 24.2856 7.23322 24.3256 7.07051C24.3565 6.94492 24.3142 6.34396 24.8283 6.35148C25.3233 6.35866 25.3523 7.05599 25.3312 7.22493C25.3221 7.29923 25.5075 8.29817 24.9973 10.9291C24.9886 10.9749 25.3573 11.0444 25.5441 11.2614C25.7308 11.4784 25.8084 11.7855 25.8624 12.0814C25.9449 12.5389 25.9863 13.003 25.986 13.468C25.9741 14.0606 25.9281 14.6519 25.8482 15.2391C25.6402 17.0167 26.541 19.8171 25.0494 20.3621"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
                <path
                    d="M23.1394 21.5856C22.0789 23.7327 22.1405 26.4065 23.2984 28.5012C23.65 29.137 24.1081 29.7321 24.7203 30.1163C25.3324 30.5005 26.1176 30.65 26.7897 30.3865C26.9666 30.3252 27.1239 30.2169 27.2451 30.073C27.4262 29.8384 27.4458 29.5198 27.4546 29.2225C27.4897 28.0397 27.4672 26.8251 27.0481 25.7201C26.7302 24.8829 26.1997 24.1485 25.6753 23.4251L24.13 21.2938C23.6881 20.6848 23.39 21.0788 23.1394 21.5856Z"
                    stroke-miterlimit="10"></path>
                <path
                    d="M26.5559 25.431C26.9202 26.4276 27.4199 27.3672 27.9179 28.3032C28.2205 28.8713 28.5416 29.4613 29.0671 29.8282C29.3377 30.0128 29.6474 30.131 29.9712 30.1733C30.2951 30.2155 30.6243 30.1808 30.9325 30.0718C31.2389 29.9577 31.5157 29.775 31.7422 29.5375C31.9687 29.3 32.139 29.0138 32.2403 28.7003C32.5505 27.7241 32.1536 26.67 31.6874 25.7597C30.8538 24.1332 29.7826 22.6426 28.5098 21.3379C27.9548 20.7691 27.3404 20.2238 26.5918 19.9657C25.5762 19.6153 23.9058 20.0083 24.0232 21.379C24.0959 22.229 25.2937 22.5863 25.711 23.2948C26.1009 23.9562 26.2936 24.7138 26.5559 25.431Z"
                    stroke-miterlimit="10"></path>
                <path
                    d="M19.1069 23.6351C19.8384 23.48 20.8667 23.2017 21.5805 22.9854C22.3053 22.7655 23.03 22.5091 23.646 22.0905C24.262 21.6718 24.7637 21.0686 24.8896 20.3764C25.0155 19.6843 24.7003 18.9126 24.0346 18.5855C23.3461 18.2468 22.4934 18.434 21.7468 18.6706C20.0941 19.1945 18.0983 20.0783 16.657 20.9971"></path>
                <path
                    d="M19.1069 23.6351C19.8384 23.48 20.8667 23.2017 21.5805 22.9854C22.3053 22.7655 23.03 22.5091 23.646 22.0905C24.262 21.6718 24.7637 21.0686 24.8896 20.3764C25.0155 19.6843 24.7003 18.9126 24.0346 18.5855C23.3461 18.2468 22.4934 18.434 21.7468 18.6706C20.0941 19.1945 18.0983 20.0783 16.657 20.9971"
                    stroke-miterlimit="10"></path>
                <path
                    d="M15.4835 24.6671C16.7049 29.4935 13.1834 34.6243 17.1751 35.7177C22.0594 37.0558 20.9189 27.4577 19.163 23.7402C17.96 21.4274 14.7104 21.6118 15.4835 24.6671Z"
                    stroke-miterlimit="10"></path>
                <path
                    d="M11.8847 20.9936C12.3065 21.6616 12.7555 22.3346 13.3906 22.8071C14.0258 23.2796 14.8897 23.522 15.6302 23.2344C16.513 22.8919 16.99 21.875 16.9448 20.9353C16.8997 19.9956 16.4321 19.1291 15.894 18.357C15.3628 17.5946 14.7518 16.8871 14.2665 16.0954C13.3745 14.6377 12.9235 12.9154 11.8318 11.5993C11.4757 11.1701 11.0407 10.7824 10.5099 10.6039C9.97921 10.4255 9.34041 10.4909 8.93118 10.8734C8.39451 11.3763 8.40558 12.2167 8.50634 12.9414C8.93206 15.9969 10.2487 18.4022 11.8847 20.9936Z"
                    stroke-miterlimit="10"></path>
                <path
                    d="M6.45684 4.09445C6.35572 4.48764 6.36614 4.90115 6.39996 5.30589C6.47748 6.23509 6.67225 7.14994 6.86739 8.06213C7.06099 8.96716 7.34073 9.99001 8.16234 10.4012C8.58536 10.6131 9.0869 10.6159 9.54769 10.5104C10.2449 10.3505 10.9152 9.91061 11.1819 9.24079C11.6365 8.09937 10.8097 6.87262 10.6862 5.64861C10.6197 4.98996 10.7574 4.29736 10.5217 3.6801C10.2472 2.96054 9.10601 2.07578 8.3017 2.14063C7.50397 2.2049 6.63932 3.38456 6.45684 4.09445Z"
                    stroke-miterlimit="10"></path>
                <path
                    d="M11.9663 1.82957C11.4113 2.40161 11.1227 3.18564 10.9511 3.96719C10.7795 4.74874 10.7082 5.55199 10.5092 6.32697C10.3144 7.08478 9.99686 7.81884 9.94135 8.59973C9.89611 9.23715 10.029 9.87594 10.227 10.4824C10.4939 11.3005 10.9841 12.1658 11.8157 12.3584C12.5626 12.5316 13.3236 12.086 13.8486 11.5216C14.9211 10.3685 15.3337 8.75464 15.6352 7.20246C15.8397 6.14876 16.0118 5.06944 15.8723 4.00515C15.6172 2.06138 13.8187 -0.0798921 11.9663 1.82957Z"
                    stroke-miterlimit="10"></path>
                <path
                    d="M3.58835 11.7055C4.13887 12.3313 4.97016 12.6083 5.76068 12.8595C6.82737 13.1979 7.92349 13.5406 9.03941 13.471C9.71393 13.4289 10.4022 13.2201 10.8929 12.7511C11.3835 12.2821 11.6295 11.5183 11.3717 10.8879C11.1167 10.2642 10.4663 9.91407 9.84869 9.65722C8.263 8.99745 6.29362 8.41721 4.55438 8.50644C2.92423 8.58986 2.59571 10.5772 3.58835 11.7055Z"
                    stroke-miterlimit="10"></path>
                <path
                    d="M3.66347 9.44851C3.34533 9.32557 3.01181 9.20043 2.67353 9.23958C2.5534 9.25366 2.4219 9.29956 2.36985 9.40953C2.34204 9.48583 2.33692 9.56866 2.3551 9.64786C2.38142 9.82937 2.42479 10.0178 2.54538 10.1549C2.65414 10.2646 2.78872 10.3447 2.9365 10.3876C3.20918 10.4839 3.49453 10.5388 3.7832 10.5505"></path>
                <path
                    d="M3.66347 9.44851C3.34533 9.32557 3.01181 9.20043 2.67353 9.23958C2.5534 9.25366 2.4219 9.29956 2.36985 9.40953C2.34204 9.48583 2.33692 9.56866 2.3551 9.64786C2.38142 9.82937 2.42479 10.0178 2.54538 10.1549C2.65414 10.2646 2.78872 10.3447 2.9365 10.3876C3.20918 10.4839 3.49453 10.5388 3.7832 10.5505"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </svg>
        </a>
    </div>
</template>

<script setup>
const on = ref(true);
</script>

<style lang="scss">
@use "sass:math";

$ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
$ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06);
$screen-background: #121010;

#ruler {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: 0.55rem;
    width: auto;
    max-width: unset;
}

@keyframes flicker {
    $steps: 20;

    @for $i from 0 through $steps {
        #{percentage($i * math.div(1, $steps))} {
            opacity: random();
        }
    }
}

body {
    position: relative;
    overflow: hidden;
    background-image: url("/images/bg.svg");

    // flicker
    &::after {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: transparentize($screen-background, 0.9);
        opacity: 0;
        z-index: 2;
        pointer-events: none;
    }

    &::before {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(
                transparentize($screen-background, 1) 50%,
                transparentize(darken($screen-background, 10), 0.75) 50%
            ),
            linear-gradient(
                90deg,
                transparentize(#ff0000, 0.94),
                transparentize(#00ff00, 0.98),
                transparentize(#0000ff, 0.94)
            );
        z-index: 2;
        background-size: 100% 2px, 3px 100%;
        pointer-events: none;
    }
}

body::after {
    animation: flicker 0.15s infinite;
}

#website {
    overflow: hidden;
}

@keyframes turn-on {
    0% {
        transform: scale(1, 0.8) translate3d(0, 0, 0);
        -webkit-filter: brightness(30);
        filter: brightness(30);
        opacity: 1;
    }
    3.5% {
        transform: scale(1, 0.8) translate3d(0, 100%, 0);
    }

    3.6% {
        transform: scale(1, 0.8) translate3d(0, -100%, 0);
        opacity: 1;
    }

    9% {
        transform: scale(1, 0.6) translate3d(0, 100%, 0);
        -webkit-filter: brightness(30);
        filter: brightness(30);
        opacity: 0;
    }

    11% {
        transform: scale(1, 1) translate3d(0, 0, 0);
        -webkit-filter: contrast(0) brightness(0);
        filter: contrast(0) brightness(0);
        opacity: 0;
    }

    100% {
        transform: scale(1, 1) translate3d(0, 0, 0);
        -webkit-filter: contrast(1) brightness(1.2) saturate(1.3);
        filter: contrast(1) brightness(1.2) saturate(1.3);
        opacity: 1;
    }
}
@keyframes turn-off {
    0% {
        transform: scale(1, 1.3) translate3d(0, 0, 0);
        -webkit-filter: brightness(1);
        filter: brightness(1);
        opacity: 1;
    }
    60% {
        transform: scale(1, 0.001) translate3d(0, 0, 0);
        -webkit-filter: brightness(10);
        filter: brightness(10);
    }
    100% {
        animation-timing-function: $ease-in-quint;
        transform: scale(0, 0.0001) translate3d(0, 0, 0);
        -webkit-filter: brightness(50);
        filter: brightness(50);
    }
}

.page-leave-active {
    animation: turn-off 0.3s $ease-out-quint;
    animation-fill-mode: forwards;
    transform-origin: center;
}

.page-enter-active {
    animation: turn-on 1s linear;
    animation-fill-mode: forwards;
    transform-origin: center;
}

@keyframes overlay-anim {
    0% {
        visibility: hidden;
    }
    20% {
        visibility: hidden;
    }
    21% {
        visibility: visible;
    }
    100% {
        visibility: hidden;
    }
}
</style>
