import axios from "axios";

export default async function getRandomGeekJoke() {
  try {
    const { data } = await axios.get(
      `https://geek-jokes.sameerkumar.website/api?format=json`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
