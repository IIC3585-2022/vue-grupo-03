<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/dad-jks">Dad Jokes</RouterLink>
    <RouterLink to="/foaas">F-Off</RouterLink>
    <RouterLink to="/geek-jks">Geek</RouterLink>
    <RouterLink to="/favourites">Favourites</RouterLink>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  height: 2rem;
  display: flex;
  background-color: black;
}

.navbar {
  padding: 0;
  height: 1.5em;
  width: 100%;
  color: white;
  max-width: 100%;
  max-height: 6rem;
  min-height: 3rem;
  background-color: black;
}

a {
  height: 100%;
  flex-grow: 1;
  display: flex;
  color: white;
  max-width: 15ch;
  font-weight: bold;
  padding: 0 0.125rem;
  align-items: center;
  text-decoration: none;
  justify-content: center;
}

a:hover {
  text-decoration: none;
  background-color: var(--accent);
}
</style>
