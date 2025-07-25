<script setup>
import { onMounted } from "vue";

const addScript = ({ src, id, innerHTML }) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.id = id;
    script.innerHTML = innerHTML;
    document.head.appendChild(script);
};

onMounted(() => {
    addScript({
        src: "https://www.googletagmanager.com/gtag/js?id=G-1Z13MSKSSL",
        id: "ga",
    });

    addScript({
        id: "google-config",
        innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-1Z13MSKSSL', { page_path: window.location.pathname });
    `,
    });
});
</script>
<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
