<script setup lang="ts">
import { ref } from 'vue';
import JokeCard from '../components/JokeCard.vue';

const joke = ref(
  'My dog used to chase people on a bike a lot. I had to take his bike away.'
);
</script>

<template>
  <main>
    <h1>Lorem Ipsum</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
      aspernatur velit adipisci facere blanditiis, nam facilis possimus! Velit
      corrupti illo eaque nam. Ducimus, perferendis? Laborum fugit possimus
      repudiandae illo vero.
    </p>
    <JokeCard :joke="joke" :type="'dad'" />
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
</style>
