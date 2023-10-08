<template>
  <UDropdown
    :items="items"
    :ui="{ item: { disabled: 'cursor-text select-text' } }"
    :popper="{ placement: 'bottom-start' }"
  >
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
    <template #account="{ item }">
      <div class="text-left">
        <p>Signed in as</p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>
    <template #item="{ item }">
      <NuxtLink :to="item.route" class="truncate">{{ item.label }}</NuxtLink>
      <UIcon
        :name="item.icon"
        class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
      />
    </template>
  </UDropdown>
</template>
<script setup>
const props = defineProps({
  auth: {
    type: Object,
    required: true,
  },
});

const items = [
  [
    {
      label: props.auth?.user?.email,
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "My chats",
      icon: "i-heroicons-chat-bubble-left-right",
      route: "/chats",
    },
  ],
  [
    {
      label: "Billing",
      icon: "i-heroicons-credit-card",
    },
    {
      label: "Settings",
      icon: "i-heroicons-cog-8-tooth",
    },
  ],
  [
    {
      label: "Sign out",
      icon: "i-heroicons-arrow-left-on-rectangle",
      click: () => handleLogout(),
    },
  ],
];

async function handleLogout() {
  await props.auth.logout();
}
</script>
