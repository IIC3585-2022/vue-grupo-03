<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <RouterView />
</template>

<style>
* {
  transition: color 250ms ease-out, background-color 250ms ease-out;
}

html,
body {
  margin: 0;
  min-height: 100vh;
  max-width: 100vw;
  background-color: gold;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin: 0 10ch;
  padding: 2rem;
  min-height: calc(100vh - 7rem);
  background-color: white;
}

p {
  max-width: 45ch;
}

button {
  cursor: pointer;
  font-weight: bold;
  border-radius: 9999px;
  padding: 0.75em 1.5em;
  border: 1px solid black;
  background-color: aquamarine;
  transition: background-color 100ms linear;
}

button:active {
  background-color: deepskyblue;
}

.actions {
  gap: 2rem;
  display: flex;
  width: fit-content;
}
</style>
