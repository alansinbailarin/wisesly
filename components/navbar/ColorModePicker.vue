<template>
  <UDropdown
    v-model="selected"
    :items="items"
    :popper="{ placement: 'bottom-start' }"
  >
    <UButton
      color="white"
      trailing-icon="i-heroicons-adjustments-horizontal-solid"
    />
  </UDropdown>
</template>
<script setup>
let colorMode = useColorMode();

const items = [
  [
    {
      label: "Light",
      icon: "i-heroicons-sun-20-solid",
      shortcuts: ["⌘", "L"],
      click: () => {
        colorMode.preference = "light";
      },
    },
    {
      label: "Dark",
      icon: "i-heroicons-moon-20-solid",
      shortcuts: ["⌘", "D"],
      click: () => {
        colorMode.preference = "dark";
      },
    },
    {
      label: "System",
      icon: "i-heroicons-computer-desktop-20-solid",
      shortcuts: ["⌘", "S"],
      click: () => {
        colorMode.preference = "system";
      },
    },
  ],
];
</script>
