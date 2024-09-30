<template>
    <div class="noise">
        <span>no signal</span>

        <video muted loop autoplay ref="video" v-if="showVideo">
            <source src="/video/noise.mp4" type="video/mp4" />
        </video>
    </div>
</template>

<script setup>
const video = ref();
const showVideo = ref(false);

onMounted(() => {
    if (process.client && window.innerWidth > 80 * 16) {
        showVideo.value = true;
        try {
            video.value.play();
        } catch (e) {}
    }
});
</script>
