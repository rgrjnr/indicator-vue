<template>
	<div id="website" :class="[`page-${useRoute().name}`]">
		<NuxtLoadingIndicator />
		<nav class="flex items-center justify-between px-6 py-4 border-b-[1px] border-solid border-white text-sm relative">
			<router-link to="/">
				<Logo />
			</router-link>
			<MainNavigation />
			<img src="/images/ruler.svg" id="ruler" />
		</nav>
		<div id="screen">
			<slot />
		</div>
	</div>
</template>

<script setup>
	const on = ref(true);
</script>

<style lang="scss">
	@use 'sass:math';

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

		// flicker
		&::after {
			content: ' ';
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
			content: ' ';
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
