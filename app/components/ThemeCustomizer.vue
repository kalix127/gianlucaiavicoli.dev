<script setup lang="ts">
import { type Color, themes } from "@/lib/themes";

const { themeClass, theme, radius, setTheme, setRadius } = useThemes();

// Create an array of color values
const allColors: Color[] = [
  "zinc",
  "rose",
  "blue",
  "green",
  "orange",
  "red",
  "slate",
  "stone",
  "gray",
  "neutral",
  "yellow",
  "violet",
];

const RADII = [0, 0.25, 0.5, 0.75, 1];

watch(theme, () => {
  setClassTheme();
});

watch(radius, () => {
  setStyleRadius();
});

function setClassTheme() {
  document.body.classList.remove(
    ...allColors.map(color => `theme-${color}`),
  );
  document.body.classList.add(themeClass.value);
}

function setStyleRadius() {
  document.body.style.setProperty("--radius", `${radius.value}rem`);
}

function backgroundColor(color: Color) {
  const bg = themes.find(theme => theme.name === color);
  return `hsl(${bg?.activeColor.light})`;
}

const colorMode = useColorMode();
</script>

<template>
  <div class="grid gap-6">
    <div class="grid space-y-1">
      <h1 class="text-lg font-semibold text-foreground">
        {{ $t("theme.customize") }}
      </h1>
      <p class="text-sm text-muted-foreground">
        {{ $t("theme.pick_a_style") }}
      </p>
    </div>
    <div class="space-y-1.5">
      <Label>{{ $t("theme.color") }}</Label>
      <div class="grid grid-cols-2 gap-2 md:grid-cols-3">
        <template v-for="color in allColors" :key="color">
          <Button
            class="justify-start gap-2"
            variant="outline"
            :class="{ 'border-2 border-primary': theme === color }"
            @click="setTheme(color)"
          >
            <span class="flex size-5 items-center justify-center rounded-full" :style="{ backgroundColor: backgroundColor(color) }">
              <Icon v-if="theme === color" name="lucide:check" size="16" class="text-white" />
            </span>
            <span class="text-xs capitalize">{{ $t(`theme.${color}`) }}</span>
          </Button>
        </template>
      </div>
    </div>
    <div class="space-y-1.5">
      <Label>{{ $t("theme.radius") }}</Label>
      <div class="grid grid-cols-5 gap-2">
        <template v-for="r in RADII" :key="r">
          <Button
            class="justify-center gap-2"
            variant="outline"
            :class="{ 'border-2 border-primary': radius === r }"
            @click="setRadius(r)"
          >
            <span class="text-xs capitalize">{{ r }}</span>
          </Button>
        </template>
      </div>
    </div>
    <div class="space-y-1.5">
      <Label>{{ $t("theme.theme") }}</Label>
      <div class="grid grid-cols-2 gap-2 md:grid-cols-2 [&>:last-child]:col-span-2">
        <Button
          class="justify-center gap-2"
          variant="outline"
          :class="{ 'border-2 border-primary': colorMode.preference === 'light' }"
          @click="colorMode.preference = 'light'"
        >
          <Icon name="lucide:sun" size="16" />
          <span class="text-xs capitalize">{{ $t("theme.light") }}</span>
        </Button>
        <Button
          class="justify-center gap-2"
          variant="outline"
          :class="{ 'border-2 border-primary': colorMode.preference === 'dark' }"
          @click="colorMode.preference = 'dark'"
        >
          <Icon name="lucide:moon" size="16" />
          <span class="text-xs capitalize">{{ $t("theme.dark") }}</span>
        </Button>
        <Button
          class="justify-center gap-2"
          variant="outline"
          :class="{ 'border-2 border-primary': colorMode.preference === 'system' }"
          @click="colorMode.preference = 'system'"
        >
          <Icon name="lucide:monitor" size="16" />
          <span class="text-xs capitalize">{{ $t("theme.system") }}</span>
        </Button>
      </div>
    </div>
  </div>
</template>
