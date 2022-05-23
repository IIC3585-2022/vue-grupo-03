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
  background-color: #fe3;
  transition: background-color 100ms linear;
}

button:active {
  background-color: goldenrod;
}
</style>
