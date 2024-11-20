<template>
    <div class="content">
        <div class="panel panel-stretch overflow-y-scroll scrollable panel-main flex flex-col">
            <h1 class="mt-14 mb-4">{{ $t("community.h1") }}</h1>
            <div class="flex gap-4 self-stretch flex-1">
                <div class="flex-1">
                    <iframe
                        src="https://lu.ma/embed/calendar/cal-0WOLyE8HPMnHQTe/events"
                        width="100%"
                        height="100%"
                        frameborder="0"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"></iframe>
                </div>

                <div class="flex-1">
                    <iframe
                        src="https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark"
                        width="100%"
                        height="100%"
                        allowtransparency="true"
                        frameborder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
setSeo("community");
</script>

<style lang="scss">
iframe {
    border: var(--color-white) 1px solid;
}
</style>
