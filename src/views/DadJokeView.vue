<script setup lang="ts">
import { ref, watch } from "vue";
import { getRandomDadJoke } from "@/services";
import { useJokeStore } from "@/stores";

import JokeCard from "@/components/JokeCard.vue";
import AddFavouriteButton from "@/components/AddFavouriteButton.vue";

const flag = ref(0);
const joke = ref("");
const jokeStore = useJokeStore();

function loadJoke() {
  joke.value = "Loading...";
  getRandomDadJoke().then((data) => {
    joke.value = data.joke;
  });
}

watch(flag, () => {
  jokeStore.$state.jokes.push(joke.value);
});
</script>

<template>
  <main>
    <h1>Random Dad Joke</h1>
    <div class="actions">
      <button @click="loadJoke">Load Joke</button>
      <AddFavouriteButton :handleClick="() => flag++" />
    </div>
    <JokeCard :joke="joke" />
  </main>
</template>
