<script setup lang="ts">
import { computed, inject, ref } from "vue";

const props = defineProps<{
  icon: string;
  label: string;
  to: string;
}>();

const iconRef = ref<HTMLDivElement | null>(null);

const mouseX = inject("mouseX", ref(Infinity));
const magnification = inject("magnification", 60);
const distance = inject("distance", 140);
const isHovered = inject("isHovered", ref(false));
const margin = ref(0);

function calculateDistance(val: number) {
  const bounds = iconRef.value?.getBoundingClientRect() || { x: 0, width: 0 };
  return val - bounds.x - bounds.width / 2;
}

const iconWidth = computed(() => {
  if (!isHovered.value)
    return 30;

  const distanceCalc = calculateDistance(mouseX.value);

  if (Math.abs(distanceCalc) < distance) {
    return (1 - Math.abs(distanceCalc) / distance) * magnification + 30;
  }

  return 30;
});

async function navigateToPage() {
  await navigateTo(props.to);
}
</script>

<template>
  <TooltipProvider :delay-duration="50">
    <Tooltip>
      <TooltipTrigger as-child>
        <button
          ref="iconRef"
          class="flex aspect-square cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-out"
          :style="{
            width: `${iconWidth}px`,
            height: `${iconWidth}px`,
          }"
          :hovered="{
            marginLeft: margin,
            marginRight: margin,
          }"
          @click="navigateToPage"
        >
          <Icon :name="$props.icon" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>{{ $t($props.label) }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
