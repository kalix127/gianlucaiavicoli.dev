<script setup lang="ts">
import {
  PATTERN_BACKGROUND_VARIANT,
} from "@/components/inspira-ui/bg-pattern";
</script>

<template>
  <BgPatternBackground
    :animate="false"
    :variant="PATTERN_BACKGROUND_VARIANT.Dot" class="absolute inset-0 -z-10"
  >
    <slot />
  </BgPatternBackground>
</template>
