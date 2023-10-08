import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";

export const useVacationStore = defineStore("vacation", () => {
  const vacation = ref(null);
  const isLoggedIn = computed(() => !!user.value);

  async function getVacationList(user_id) {
    const { data, error } = await useApiFetch("/api/vacations/" + user_id);
    vacation.value = data.value;
  }

  return { vacation, getVacationList };
});
