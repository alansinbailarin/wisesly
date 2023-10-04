<template>
  <header
    class="sticky top-0 z-20 w-full bg-opacity-80 backdrop-filter backdrop-blur bg-gradient-to-t from-transparent via-transparent to-transparent"
  >
    <nav class="md:flex md:items-center md:justify-between px-8 md:px-20 py-4">
      <!-- <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <UButton
        color="white"
        label="Options"
        trailing-icon="i-heroicons-chevron-down-20-solid"
      />
    </UDropdown> -->
      <div class="flex items-center justify-between">
        <div>Logo</div>
        <div class="md:hidden">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-bars-3-solid"
            @click="isOpen = true"
          />
          <USlideover v-model="isOpen" prevent-close>
            <UCard
              class="flex flex-col flex-1"
              :ui="{
                body: { base: 'flex-1' },
                ring: '',
                divide: 'divide-y divide-gray-100 dark:divide-gray-800',
              }"
            >
              <template #header>
                <div class="flex items-center justify-between mx-3">
                  <h3
                    class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                  >
                    Logo
                  </h3>
                  <UButton
                    color="gray"
                    variant="ghost"
                    icon="i-heroicons-x-mark-20-solid"
                    class="-my-1"
                    @click="isOpen = false"
                  />
                </div>
              </template>
              <template #footer><h3>Hola</h3></template>
              <Placeholder class="h-full" />
            </UCard>
          </USlideover>
        </div>
      </div>
      <div class="hidden md:block">asd</div>
      <div class="hidden md:block">das</div>
    </nav>
  </header>
</template>
<script setup>
const isTransparent = ref(false);
const isOpen = ref(false);
const items = [
  [
    {
      label: "Light",
      value: "light",
      icon: "i-heroicons-sun-20-solid",
      shortcuts: ["⌘", "L"],
    },
    {
      label: "Dark",
      value: "dark",
      icon: "i-heroicons-moon-20-solid",
      shortcuts: ["⌘", "D"],
    },
    {
      label: "System",
      value: "system",
      icon: "i-heroicons-computer-desktop-20-solid",
      shortcuts: ["⌘", "S"],
    },
  ],
];

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  const threshold = 5; // Ajusta este valor según tus necesidades

  isTransparent.value = scrollPosition > threshold;
};
</script>
