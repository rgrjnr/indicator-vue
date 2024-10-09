<template>
    <div class="content">
        <div
            class="panel panel-main panel-stretch overflow-y-scroll scrollable flex flex-col justify-center items-center">
            <h1 class="!normal-case">Thanks you for your submission</h1>
            <p>We hope to get back to you soon.</p>
            <a :href="localePath('/')" class="btn mt-8">Go back to the homepage</a>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>
