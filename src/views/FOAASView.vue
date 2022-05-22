<script setup lang="ts">
import { ref } from "vue";
import { getRandomFO } from "@/services";
import JokeCard from "@/components/JokeCard.vue";
import AddFavouriteButton from "@/components/AddFavouriteButton.vue";

let foaas = ref('');

function handleOperationsReq() {
  foaas.value = "Cargando...";
  getRandomFO().then((data) => {
    foaas.operation = data[Math.floor(Math.random() * data.length)];
    console.log(foaas.operation);
  });
}
handleOperationsReq()
</script>

<template>
  <main>
    <h1>F-Off Generator</h1>
    <div class="actions">
      <button @click="handleChange">Load F-Off</button>
      <AddFavouriteButton />
    </div>
    <JokeCard :joke="foaas" />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
