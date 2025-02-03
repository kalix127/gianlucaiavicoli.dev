<script setup lang="ts"></script>

<template>
  <header>
    <div class="flex flex-col">
      <div class="grid h-20 grid-cols-3 items-center gap-2 px-4 md:px-8">
        <div />
        <LayoutNavBar class="justify-self-center" />
        <div class="hidden items-center gap-2 justify-self-end md:flex">
          <LanguageSwitcher />
          <ThemePopover />
          <DarkModeToggle />
        </div>
      </div>
      <div class="flex items-center justify-center gap-2 md:hidden">
        <LanguageSwitcher />
        <ThemePopover />
        <DarkModeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
