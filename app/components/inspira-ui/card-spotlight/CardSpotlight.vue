<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  class?: HTMLAttributes["class"];
  slotClass?: HTMLAttributes["class"];
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
}

const props = withDefaults(defineProps<Props>(), {
  gradientSize: 200,
  gradientColor: "#f5f5f5",
  gradientOpacity: 0.8,
});

const isDark = computed(() => useColorMode().value === "dark");

const gradientColor = computed(() => {
  return isDark.value ? "#262626" : "#f5f5f5";
});

const mouseX = ref(-props.gradientSize * 10);
const mouseY = ref(-props.gradientSize * 10);

function handleMouseMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
}

function handleMouseLeave() {
  mouseX.value = -props.gradientSize * 10;
  mouseY.value = -props.gradientSize * 10;
}

onMounted(() => {
  mouseX.value = -props.gradientSize * 10;
  mouseY.value = -props.gradientSize * 10;
});

const backgroundStyle = computed(() => {
  return `radial-gradient(
    circle at ${mouseX.value}px ${mouseY.value}px,
    ${gradientColor.value} 0%,
    rgba(0, 0, 0, 0) 70%
  )`;
});
</script>

<template>
  <div
    :class="cn(
      'group relative flex size-full overflow-hidden rounded-xl border bg-card p-4 [backface-visibility:hidden]',
      $props.class,
    )"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div :class="cn('relative z-10', props.slotClass)">
      <slot />
    </div>

    <ClientOnly>
      <div
        class="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        :style="{
          background: backgroundStyle,
          opacity: gradientOpacity,
        }"
      />
    </ClientOnly>
  </div>
</template>
