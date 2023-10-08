<template>
  <UContainer class="py-7">
    <div class="grid grid-cols-4 gap-4 mt-4">
      <UCard v-for="vacation in vacations.vacation"> asd </UCard>
    </div>
  </UContainer>
</template>

<script setup>
import { useAuthStore } from "@/stores/useAuthStore";
import { useVacationStore } from "@/stores/useVacationStore";

const auth = useAuthStore();
const vacations = useVacationStore();

onMounted(async () => {
  await vacations.getVacationList(auth.user.id);
});
</script>

<script>
definePageMeta({
  middleware: ["auth"],
  layout: "custom",
});

useHead({
  title: "Wisesly - My Chats",
});
</script>
