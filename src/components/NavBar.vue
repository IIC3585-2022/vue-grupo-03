<template>
  <div class="navbar">
    <a href="/">Home</a>
    <a href="/ihazdadjokes">Dad Jokes</a>
    <a href="/foaas">F-Off</a>
    <a href="/geek-jks">Geek</a>
    <a href="/favourites">Favourites</a>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  height: 2rem;
  display: flex;
  background-color: black;
}

.navbar {
  padding: 0;
  height: 1.5em;
  width: 100%;
  color: white;
  max-width: 100%;
  max-height: 6rem;
  min-height: 3rem;
  background-color: black;
}

a {
  width: 11ch;
  height: 100%;
  display: flex;
  color: white;
  padding: 0 0.125rem;
  align-items: center;
  text-decoration: none;
  justify-content: center;
}

a:hover {
  color: black;
  background-color: aquamarine;
}
</style>
