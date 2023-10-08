<template>
  <div v-if="props.auth.user">
    <div class="flex items-center gap-3 mb-4">
      <div>
        <UAvatar :alt="props.auth.user.name" size="lg"></UAvatar>
      </div>
      <div>
        <p class="font-medium text-gray-900 dark:text-white">
          {{ props.auth.user.name }}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ props.auth.user.email }}
        </p>
      </div>
    </div>
    <div
      class="dark:bg-gray-900 bg-gray-100 border-gray-200 border dark:border-gray-800 rounded-md px-3 py-2"
    >
      <div v-for="item in items">
        <NuxtLink :to="item.to">
          <div class="flex items-center gap-3 py-1">
            <UIcon
              :name="item.icon"
              class="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500"
            />
            <span class="text-gray-900 dark:text-white">{{ item.label }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  auth: {
    type: Object,
    required: true,
  },
});

const items = [
  {
    label: "My chats",
    icon: "i-heroicons-chat-bubble-left-right",
    to: "/chats",
  },
  {
    label: "Billing",
    icon: "i-heroicons-credit-card",
    to: "/billing",
  },
  {
    label: "Settings",
    icon: "i-heroicons-cog-8-tooth",
    to: "/settings",
  },
];
</script>
