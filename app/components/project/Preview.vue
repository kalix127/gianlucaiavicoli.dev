<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  class?: HTMLAttributes["class"];
  animationStyle?: string;
  src: string;
  alt: string;
}

const props = withDefaults(defineProps<Props>(), {
  animationStyle: "from-center",
});

defineEmits<{
  (e: "close"): void;
}>();

const isGif = computed(() => {
  return props.src.endsWith(".gif");
});
</script>

<template>
  <teleport to="body">
    <transition name="fade" appear>
      <div
        :class="cn('fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md', $props.class)"
        @click="$emit('close')"
      >
        <transition name="from-center" appear>
          <div
            class="relative mx-4 aspect-video w-full max-w-2xl md:mx-0"
            @click.stop
          >
            <!-- Close Button -->
            <Button
              variant="outline"
              size="icon"
              class="absolute -top-12 right-0"
              @click="$emit('close')"
            >
              <Icon name="heroicons:x-mark" class="size-5" />
            </Button>

            <!-- Dialog Content -->
            <div
              class="relative isolate z-[1] size-full overflow-hidden rounded-xl border-2 border-white/60"
            >
              <img
                class="size-full rounded-lg object-fill"
                loading="lazy"
                :src="src"
                :alt="alt"
                :modifiers="{
                  animated: isGif,
                }"
              >
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.from-center-enter-active,
.from-center-leave-active {
  transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  transform-origin: center;
}
.from-center-enter-from,
.from-center-leave-to {
  transform: scale(0.5);
  opacity: 0;
}
.from-center-enter-to,
.from-center-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>
