<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
</script>

<template>
  <button @click="store.increment()">Añadir a favoritos</button>
</template>

<style scoped>
button {
  background-color: #fe3;
  transition: background-color 100ms linear;
}

button:active {
  background-color: goldenrod;
}
</style>
