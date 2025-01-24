<template>
    <div class="content">
        <div class="panel panel-stretch overflow-y-scroll scrollable panel-main flex flex-col">
            <h1 class="mt-14 mb-4">{{ $t("community.h1") }}</h1>
            <div class="flex gap-4 self-stretch flex-1 overflow-hidden community-panels">
                <div class="flex-1 community-panel flex flex-col">
                    <h2>{{ $t("community.events") }}</h2>
                    <iframe
                        src="https://lu.ma/embed/calendar/cal-0WOLyE8HPMnHQTe/events"
                        width="100%"
                        height="100%"
                        frameborder="0"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"></iframe>
                </div>

                <div class="flex-1 community-panel flex flex-col">
                    <h2>
                        Discord
                        <a
                            href="https://discord.com/channels/1049615217883086868/1075508973433798796"
                            target="_blank"
                            class="discord-link">
                            {{ $t("community.discord") }}
                        </a>
                    </h2>

                    <div class="discord scrollable" ref="discordRef">
                        <div class="discord-message" v-for="message in discord">
                            <div class="discord-side">
                                <div
                                    class="discord-avatar"
                                    :style="`background-image: url(${message._embedded.author?.[0]?.avatar_urls?.[96]});`"></div>
                            </div>
                            <div class="discord-content">
                                <div class="discord-header">
                                    <div class="discord-username">
                                        {{ message._embedded.author?.[0]?.name }}
                                    </div>
                                    <div class="discord-timestamp">{{ message.date }}</div>
                                </div>
                                <div class="discord-body" v-html="message.content.rendered"></div>

                                <div class="discord-reactions">
                                    <div
                                        class="discord-reaction"
                                        v-for="reaction in reactions
                                            .sort(() => Math.random() - 0.5)
                                            .slice(0, 5 + Math.floor(Math.random() * 3))">
                                        <span class="discord-reaction-emoji">{{ reaction }}</span>
                                        <span class="discord-reaction-count">
                                            {{ Math.floor(Math.random() * 10) + 1 }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const localePath = useLocalePath();
const { data: discord } = await $useFetch("/discord");

setSeo("community");

const reactions = ["👍", "🚀", "👏", "🔥", "⚠️", "🚨", "🦄", "🚶", "💪"];
const discordRef = ref();

onMounted(() => {
    if (discordRef.value) {
        discordRef.value.scrollTop = discordRef.value.scrollHeight;
    }
});
</script>

<style lang="scss">
.discord-link {
    color: var(--color-white);
    background-color: var(--color-black);
    font-size: 1rem;
}

.community-panel {
    border: var(--color-white) 1px solid;
}

.community-panel > iframe {
    mix-blend-mode: screen;
    filter: contrast(1.35);
}

.community-panel h2 {
    font-size: 1.5rem;
    font-weight: 600;
    background-color: var(--color-white);
    color: var(--color-black);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.discord {
    overflow-y: scroll;
    flex: 1;
}

.discord-message {
    display: flex;
    gap: 0.5rem;
    align-items: stretch;
    padding: 2rem;
}

.discord-side {
    display: flex;
    align-items: self-start;
    justify-content: center;
    position: relative;
}

.discord-body p {
    margin-bottom: 1rem;
}

.discord-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--color-white);
    background-image: url("/images/discord-avatar.png");
    background-size: cover;
    background-position: center;

    &::after {
        content: "";
        display: block;
        width: 1px;
        flex: 1;
        background-color: var(--color-white);
        opacity: 0.5;
        position: absolute;
        top: 3.5rem;
        left: 50%;
        bottom: 0;
    }
}

.discord-username {
    color: var(--color-primary);
    display: inline;
}

.discord-timestamp {
    opacity: 0.5;
    display: inline;
    font-size: 0.8rem;
    margin-left: 0.5rem;
}

.discord-reactions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
}
.discord-reaction {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--color-white);
}

@media (max-width: 52rem) {
    .page-community .panel {
        overflow-y: scroll;
        padding-right: 2rem;
    }
    .community-panels {
        flex-direction: column;
        overflow: unset;
    }

    .community-panel {
        min-height: 50vh;
    }
}
</style>
