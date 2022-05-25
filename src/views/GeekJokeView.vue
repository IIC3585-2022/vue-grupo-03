<script lang="ts">
import { defineComponent } from "vue";
import geekJoke from "@/services/geekJoke";
import JokeCard from "@/components/JokeCard.vue";
import AddFavouriteButton from "@/components/AddFavouriteButton.vue";
import { useJokeStore } from "@/stores";

const jokeStore = useJokeStore();

export default defineComponent({
  data() {
    return {
      joke: "",
      hasJoke: false,
      error: "",
      aviso: "",
    };
  },
  components: {
    JokeCard,
    AddFavouriteButton,
  },
  methods: {
    handleChange() {
      this.joke = "Loading...";
      this.error = "";
      this.aviso = "";
      geekJoke()
        .then((data) => {
          this.joke = data.joke;
          this.hasJoke = true;
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    addToFavourites() {
      if (this.hasJoke) {
        jokeStore.$state.jokes.push(this.joke);
        this.aviso = "Joke added to favourites";
      } else {
        this.error = "*No joke to add to favourites";
      }
    },
  },
});
</script>

<template>
  <main>
    <h1>Random Geek Joke</h1>
    <div class="actions">
      <button @click="handleChange">Load Joke</button>
      <AddFavouriteButton :handleClick="addToFavourites" />
    </div>
    <JokeCard :joke="joke" />
    <p class="error">{{ error }}</p>
    <p class="aviso">{{ aviso }}</p>
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

.error {
  color: red;
  font-size: 1.2rem;
  margin: 0;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
