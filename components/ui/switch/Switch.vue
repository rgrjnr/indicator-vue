<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
    SwitchRoot,
    type SwitchRootEmits,
    type SwitchRootProps,
    SwitchThumb,
    useForwardPropsEmits,
} from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<SwitchRootProps & { class?: HTMLAttributes["class"] }>();

const emits = defineEmits<SwitchRootEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <SwitchRoot
        v-bind="forwarded"
        :class="
            cn(
                'switch-root peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center  border-2 border-transparent transition-colors  disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
                props.class
            )
        ">
        <SwitchThumb
            :class="
                cn(
                    'switch-thumb pointer-events-none block h-5 w-4 bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0'
                )
            " />
    </SwitchRoot>
</template>

<style>
.switch-root {
    border: 1px solid var(--color-white);
    padding-left: 1px;
    margin-inline: 0.5rem;
}
.switch-root:focus {
    outline: 1px solid var(--color-primary);
    outline-offset: 2px;
}
.switch-thumb {
    background-color: var(--color-white);
}

.switch-root[data-state="checked"] {
    border-color: var(--color-primary);
}
.switch-root[data-state="checked"] .switch-thumb {
    background-color: var(--color-black);
}

.yes {
    opacity: 0.3;
}
.switch-wrapper:has([data-state="checked"]) .no {
    opacity: 0.3;
}
.switch-wrapper:has([data-state="checked"]) .yes {
    opacity: 1;
}
</style>
