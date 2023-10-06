<template>
  <h1>Hola desde el dashboard</h1>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
