<template>
  <div v-if="props.auth.user">
    <div class="w-full flex mb-3">
      <NuxtLink
        to="/chats"
        class="bg-gray-900 text-center w-full text-white dark:bg-white dark:text-gray-700 px-6 rounded-full py-2 hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-300 ease-in-out shadow-sm"
        >My Chats</NuxtLink
      >
    </div>
    <div class="w-full flex">
      <NuxtLink
        role="button"
        @click="handleLogout"
        class="border w-full text-center border-gray-150 text-gray-600 dark:border-gray-600 dark:text-white px-6 rounded-full py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-sm"
        >Log Out</NuxtLink
      >
    </div>
  </div>
  <div v-else class="flex items-center w-full gap-3 justify-between">
    <NuxtLink
      to="/user/login"
      class="border w-full text-center border-gray-150 text-gray-600 dark:border-gray-600 dark:text-white px-6 rounded-full py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-sm"
      >Log In</NuxtLink
    >
    <NuxtLink
      to="/user/register"
      class="bg-gray-900 text-center w-full text-white dark:bg-white dark:text-gray-700 px-6 rounded-full py-2 hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-300 ease-in-out shadow-sm"
      >Sign up</NuxtLink
    >
  </div>
</template>
<script setup>
const props = defineProps({
  auth: {
    type: Object,
    required: true,
  },
});

async function handleLogout() {
  await props.auth.logout();
}
</script>
