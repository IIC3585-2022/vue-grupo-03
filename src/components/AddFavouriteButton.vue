<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
</script>

<template>
  <button @click="store.increment()">Añadir a favoritos</button>
</template>

<style scoped>
button {
  color: gold;
  background-color: transparent;
  border: 2px solid gold;
  transition: background-color 100ms linear;
}

button:active {
  background-color: #fcfcfc;
}
</style>
