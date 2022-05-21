<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
</script>

<template>
  <main>
    {{ store.$state.counter }}
  </main>
</template>
