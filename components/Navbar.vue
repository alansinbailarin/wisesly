<template>
  <header
    class="sticky top-0 z-20 w-full bg-opacity-80 backdrop-filter"
    :class="{
      'backdrop-blur bg-gradient-to-t from-transparent via-transparent to-white dark:to-black':
        isMobile,
    }"
  >
    <nav
      class="md:flex md:items-center md:justify-between px-6 md:px-[6.7rem] py-4"
    >
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink to="/">Wisesly </NuxtLink>
        </div>

        <div class="md:hidden flex">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-bars-3-20-solid"
            @click="isOpen = true"
          />
          <USlideover v-model="isOpen" prevent-close>
            <UCard
              class="flex flex-col flex-1"
              :ui="{
                body: { base: 'flex-1' },
                ring: '',
                divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                background: 'bg-white dark:bg-black',
                rounded: 'rounded-none',
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
              <NavbarSlideOverBody :auth="auth" />
              <template #footer>
                <NavbarSlideOverFooter :auth="auth" />
              </template>
              <Placeholder class="h-full" />
            </UCard>
          </USlideover>
        </div>
      </div>
      <div class="hidden md:block">asd</div>
      <div class="hidden md:flex items-center gap-4">
        <div class="">
          <NavbarColorModePicker />
        </div>
        <NavbarDropdownUser v-if="auth.user" :auth="auth" />
        <div v-else class="gap-2 flex items-center text-sm font-medium">
          <NuxtLink
            to="/user/login"
            class="border border-gray-150 text-gray-600 dark:border-gray-600 dark:text-white px-6 rounded-full py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-sm"
            >Log In</NuxtLink
          >
          <NuxtLink
            to="/user/register"
            class="bg-gray-900 text-white dark:bg-white dark:text-gray-700 px-6 rounded-full py-2 hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-300 ease-in-out shadow-sm"
            >Sign up</NuxtLink
          >
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
const isOpen = ref(false);
import { useAuthStore } from "@/stores/useAuthStore";

const auth = useAuthStore();
const { isMobile } = useDevice();
</script>
