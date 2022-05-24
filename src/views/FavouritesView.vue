<script setup lang="ts">
import { ref } from "vue";
import { useJokeStore } from "@/stores";
import { enumerate } from "@/utils/python";
import JokeCard from "@/components/JokeCard.vue";

type str_enumerator = Generator<[number, string]>;

const jokeStore = useJokeStore();
const jokesLength = jokeStore.length;
const sIfPlural = ref(jokesLength === 1 ? "joke" : "jokes");

const indexedJokes = enumerate(jokeStore.$state.jokes) as str_enumerator;
</script>

<template>
  <main>
    <h1>Favourites</h1>
    <h3>
      You have <strong>{{ jokesLength }}</strong> {{ sIfPlural }} stored
    </h3>
    <div class="joke-vault">
      <li v-for="[idx, joke] in indexedJokes" :key="idx">
        <JokeCard :joke="joke" />
        <!-- No funciona bien este boton (borra pero no actualiza el DOM)-->
        <button @click="jokeStore.delete(joke)">X</button>
      </li>
    </div>
  </main>
</template>

<style scoped>
strong {
  color: slateblue;
}

.joke-vault {
  /* border: 1px solid lightgray;
  border-radius: 8px; */
  display: flex;
  flex-direction: column-reverse;
  margin: auto;
  overflow-y: scroll;
  width: 60ch;
}

.joke-vault button {
  color: white;
  background-color: red;
}
</style>
