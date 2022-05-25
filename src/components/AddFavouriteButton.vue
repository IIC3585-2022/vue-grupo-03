<script setup lang="ts">
defineProps({
  handleClick: Function,
});
</script>

<template>
  <button @click="handleClick ? handleClick() : null">
    Añadir a favoritos
  </button>
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
