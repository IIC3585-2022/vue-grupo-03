import { defineStore } from "pinia";

// Declaramos los tipos de elementos que guarda el estado
interface stateInterface {
  jokes: string[];
}

export const useJokeStore = defineStore({
  id: "favourite-jokes",
  state: () => ({ jokes: [] } as stateInterface),
  getters: {
    length(): number {
      return this.jokes.length;
    },
  },
  actions: {
    save(jokeText: string) {
      this.jokes.push(jokeText);
    },
    delete(joke: string) {
      this.jokes = [...this.jokes.filter((j) => j !== joke)];
    },
  },
});
