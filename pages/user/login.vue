<template>
  <form @submit.prevent="handleLogin">
    <label for="email">Email</label>
    <input type="email" id="email" v-model="form.email" />
    <label for="password">Password</label>
    <input type="password" id="password" v-model="form.password" />
    <button>Login</button>
  </form>
</template>
<script setup>
import { useAuthStore } from "@/stores/useAuthStore";
const form = ref({
  email: "test@example.com",
  password: "password",
});

const auth = useAuthStore();

async function handleLogin() {
  const { error } = await auth.login(form.value);

  if (!error.value) {
    navigateTo("/dashboard");
  }
}
</script>

<script>
definePageMeta({
  middleware: ["guest"],
  layout: "custom",
});

useHead({
  title: "Wisesly - Login",
});
</script>
