import axios from "axios";

export const randomGeekJoke = () => {
  return function () {
    axios({
      method: "GET",
      url: `${process.env.VUE_APP_GEEKJK_API}/api?format=json`,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
};