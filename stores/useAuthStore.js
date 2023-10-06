import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  const isLoggedIn = computed(() => !!user.value);

  async function fetchUser() {
    const { data, error } = await useApiFetch("/api/user");
    user.value = data.value;
  }

  function logout() {
    useApiFetch("/logout", { method: "POST" });
    user.value = null;

    navigateTo("/");
  }

  async function login(credentials) {
    await useApiFetch("/sanctum/csrf-cookie");

    const login = await useApiFetch("/login", {
      method: "POST",
      body: credentials,
    });

    await fetchUser();

    return login;
  }

  async function register(info) {
    await useApiFetch("/sanctum/csrf-cookie");

    const register = await useApiFetch("/register", {
      method: "POST",
      body: info,
    });

    await fetchUser();

    return register;
  }

  return { user, login, isLoggedIn, fetchUser, logout, register };
});
