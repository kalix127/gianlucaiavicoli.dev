<script setup lang="ts">
import { cn } from "@/lib/utils";
import { computed, provide, ref } from "vue";

const props = withDefaults(defineProps<{
  class?: string;
  magnification?: number;
  distance?: number;
  direction?: string;
}>(), {
  class: "",
  magnification: 60,
  distance: 140,
  direction: "middle",
});

const dockRef = ref<HTMLElement | null>(null);
const mouseX = ref(Infinity);
const isHovered = ref(false);

const dockClass = computed(() => ({
  "items-start": props.direction === "top",
  "items-center": props.direction === "middle",
  "items-end": props.direction === "bottom",
}));

function onMouseMove(e: MouseEvent) {
  isHovered.value = true;
  requestAnimationFrame(() => {
    mouseX.value = e.pageX;
  });
}

function onMouseLeave() {
  isHovered.value = false;
  requestAnimationFrame(() => {
    mouseX.value = Infinity;
  });
}

provide("mouseX", mouseX);
provide("magnification", props.magnification);
provide("distance", props.distance);
provide("isHovered", isHovered);
</script>

<template>
  <div
    ref="dockRef"
    :class="
      cn(
        'supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 flex items-center w-max h-12 rounded-xl p-2 backdrop-blur-md transition-all gap-3',
        $props.class,
        dockClass,
      )
    "
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <slot />
  </div>
</template>
