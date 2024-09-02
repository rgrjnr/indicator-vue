<script setup lang="ts">
import { NumberFieldInput } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
    class?: HTMLAttributes["class"];
}>();
</script>

<template>
    <NumberFieldInput data-slot="input" class="input flex text-center" />
</template>
