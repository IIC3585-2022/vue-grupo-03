<script setup lang="ts">
defineProps({
  joke: String,
});
</script>

<template>
  <div class="joke-card">
    <p>
      <strong>{{ joke || 'Aquí va el chiste' }}</strong>
    </p>
  </div>
</template>

<style scoped>
.joke-card {
  width: 40ch;
  color: #333;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background-color: white;
  border-radius: 4px;
  border: solid 1px lightgray;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
}
</style>
