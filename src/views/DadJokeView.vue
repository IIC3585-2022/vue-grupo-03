<script setup lang="ts">
import { ref } from "vue";
import { getRandomDadJoke } from "@/services";
import JokeCard from "@/components/JokeCard.vue";

let joke = ref('');

function handleChange() {
  joke.value = "Cargando...";
  getRandomDadJoke().then((data) => {
    joke.value = data.joke;
  });
}
</script>

<template>
  <main>
    <h1>Random Dad Joke</h1>
    <button @click="handleChange"><strong>Load Joke</strong></button>
    <JokeCard :joke="joke" />
  </main>
</template>
