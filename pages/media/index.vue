<template>
    <div class="noise">
        <span>no signal</span>

        <video muted loop autoplay ref="video">
            <source src="/video/noise.mp4" type="video/mp4" />
        </video>
    </div>
</template>

<script setup>
const video = ref();

onMounted(() => {
    video.value.play();
});
</script>
