<script lang="ts" setup>
const { t } = useI18n();

const links = computed(() => [
  { icon: "lucide:house", label: t("home.label"), to: "/" },
  { icon: "lucide:user", label: t("about.label"), to: "/about" },
  { icon: "lucide:lightbulb", label: t("skills.label"), to: "/skills" },
  { icon: "lucide:graduation-cap", label: t("education.label"), to: "/education" },
  { icon: "lucide:folder-git-2", label: t("projects.label"), to: "/projects" },
  { icon: "lucide:mail", label: t("contact.label"), to: "/contact" },
]);

const isNavbarOpen = ref(false);
</script>

<template>
  <header>
    <div
      class="flex w-full items-center justify-between gap-8 p-3 md:grid md:grid-cols-[1fr_auto_1fr]"
    >
      <div class="hidden md:block" />

      <div class="hidden gap-4 md:flex">
        <NavigationMenu>
          <NavigationMenuList class="flex gap-2">
            <NavigationMenuItem v-for="link in links" :key="link.label">
              <NuxtLink
                :to="link.to"
              >
                <Button :variant="link.to === $route.path ? 'default' : 'ghost'" class="px-2 lg:px-4">
                  {{ link.label }}
                </Button>
              </NuxtLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div class="md:hidden">
        <!-- eslint-disable-next-line vue/no-v-model-argument -->
        <Sheet v-model:open="isNavbarOpen">
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon">
              <Icon
                name="hugeicons:menu-02"
                size="24"
              />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" class="p-4">
            <div class="mt-2 flex h-full flex-col">
              <SheetHeader class="mb-4">
                <SheetTitle class="sr-only">
                  Navigation Menu
                </SheetTitle>
                <SheetDescription class="sr-only">
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>
              <nav class="flex flex-col gap-2">
                <NuxtLink
                  v-for="link in links"
                  :key="link.label"
                  :to="link.to"
                  @click="isNavbarOpen = false"
                >
                  <Button :variant="link.to === $route.path ? 'default' : 'ghost'" class="w-full justify-start">
                    <Icon
                      :name="link.icon"
                      size="20"
                    />

                    <span>{{ link.label }}</span>
                  </Button>
                </NuxtLink>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div class="ml-auto flex items-center justify-center gap-2">
        <LanguageSwitcher />
        <ThemePopover />
        <DarkModeToggle />
      </div>
    </div>
  </header>
</template>
