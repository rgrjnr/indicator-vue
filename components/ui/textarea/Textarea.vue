<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";

const props = defineProps<{
    class?: HTMLAttributes["class"];
    defaultValue?: string | number;
    modelValue?: string | number;
}>();

const emits = defineEmits<{
    (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
    passive: true,
    defaultValue: props.defaultValue,
});

const textarea = ref<HTMLTextAreaElement | null>(null);

const resizeTextarea = () => {
    if (textarea.value) {
        textarea.value.style.height = "auto"; // Reset the height
        textarea.value.style.height = `${textarea.value.scrollHeight}px`; // Set it to the scroll height
    }
};

onMounted(() => {
    resizeTextarea(); // Resize once when the component is mounted
});

watch(modelValue, () => {
    resizeTextarea(); // Resize when modelValue changes
});
</script>

<template>
    <textarea v-model="modelValue" class="input" ref="textarea" @input="resizeTextarea"></textarea>
</template>
