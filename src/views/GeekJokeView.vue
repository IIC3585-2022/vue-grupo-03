<script lang="ts">
import { defineComponent } from "vue";
import geekJoke from "@/services/geekJoke";
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
    },
  },
});
</script>

<template>
  <main>
    <h1>Random Geek Joke</h1>
    <button @click="handleChange">Load Joke</button>
    <JokeCard :joke="joke" />
  </main>
</template>

<style>
/* Hay un comportamiento bien raro con esto */
/* Tal vez valga la pena para comentarlo en la presentación */
/*
main {
  margin: 0 40ch;
  padding: 2rem;
  min-height: calc(100vh - 7rem);
  background-color: white;
}
*/

p {
  max-width: 45ch;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
