<script lang="ts">
import { defineComponent } from "vue";
import geekJoke from "../services/geekJoke";
import JokeCard from "@/components/JokeCard.vue";

export default defineComponent({
  data() {
    return {
      joke: "",
    };
  },
  components: {
    JokeCard,
  },
  methods: {
    handleChange() {
      geekJoke()
        .then((data) => {
          this.joke = data.joke;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
});
</script>

<template>
  <main>
    <h1>Random Geek Joke</h1>
    <button @click="handleChange"><strong>Load Joke</strong></button>
    <JokeCard :joke="joke" :type="'geek'" />
  </main>
</template>

<style>
main {
  margin: 0 11ch;
  padding: 2rem;
  min-height: calc(100vh - 7rem);
  background-color: white;
}

p {
  max-width: 45ch;
}

button {
  border: none;
  padding: 0.5em 1em;
  background-color: aquamarine;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
