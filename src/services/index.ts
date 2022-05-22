import axios from 'axios';

export async function getRandomDadJoke() {
  try {
    const { data } = await axios.get('https://icanhazdadjoke.com/', {
      headers: { accept: 'application/json' },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getRandomFO() {
  try {
    const { data } = await axios.get(
      `https://www.foaas.com/operations`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
