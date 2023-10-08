<template>
  <form @submit.prevent="handleRegister">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="form.name" />
    <label for="email">Email</label>
    <input type="email" id="email" v-model="form.email" />
    <label for="password">Password</label>
    <input type="password" id="password" v-model="form.password" />
    <label for="password_confirmation">Repeat password</label>
    <input
      type="password"
      id="password_confirmation"
      v-model="form.password_confirmation"
    />
    <button>Register</button>
  </form>
</template>
<script setup>
import { useAuthStore } from "@/stores/useAuthStore";

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const auth = useAuthStore();

async function handleRegister() {
  const { error } = await auth.register(form.value);

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
  title: "Wisesly - Register",
});
</script>
