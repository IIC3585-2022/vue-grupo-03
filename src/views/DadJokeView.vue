<script setup lang="ts">
import { ref } from "vue";
import { getRandomDadJoke } from "@/services";

import JokeCard from "@/components/JokeCard.vue";
import AddFavouriteButton from "@/components/AddFavouriteButton.vue";

const joke = ref('');

function handleChange() {
  joke.value = "Loading...";
  getRandomDadJoke().then((data) => {
    joke.value = data.joke;
  });
}
</script>

<template>
  <main>
    <h1>Random Dad Joke</h1>
    <div class="actions">
      <button @click="handleChange">Load Joke</button>
      <AddFavouriteButton />
    </div>
    <JokeCard :joke="joke" />
  </main>
</template>
