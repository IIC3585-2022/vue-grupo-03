<script lang="ts">
import { defineComponent } from "vue";
import { getRandomFO } from "@/services";
import FOAASCard from "@/components/FOAASCard.vue";
import AddFavouriteButton from "@/components/AddFavouriteButton.vue";
import { concatIntoStr } from "@/functions/concatenate";
import { useJokeStore } from "@/stores";
import { enumerate } from "@/utils/python";

const jokeStore = useJokeStore();
interface Field {
  text: string;
  field: string;
}

const fields: Field[] = [];

export default defineComponent({
  data() {
    return {
      fo: "",
      fields,
      foTextArray: [""],
      hasFo: false,
      aviso: "",
      error: "",
      enumerate,
    };
  },
  components: {
    FOAASCard,
    AddFavouriteButton,
  },
  methods: {
    handleOperationsReq() {
      this.fo = "Loading...";
      getRandomFO()
        .then((responses) => {
          if (responses) {
            this.fo = responses.foaas.data.message;
            this.fields = responses.operation.fields;
            if (this.fields.length > 1) {
              let regexRep = "";
              [...this.fields.keys()].forEach((key) => {
                if (this.fields[key].field !== "from") {
                  regexRep = regexRep + "\\" + this.fields[key].text + "|";
                }
              });
              regexRep = regexRep.slice(0, -1);
              regexRep = regexRep + "+";
              let myRegex = new RegExp(regexRep);
              // console.log(regexRep)
              // console.log(myRegex)
              this.foTextArray = this.fo.split(myRegex);
              // console.log(this.foTextArray);
              this.error = "";
              this.hasFo = true;
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToFavourites() {
      if (this.hasFo) {
        jokeStore.$state.jokes.push(
          concatIntoStr(this.foTextArray, this.fields)
        );
        this.aviso = "Joke added to favourites";
      } else {
        this.aviso = "No joke to add to favourites";
      }
    },
  },
});
</script>

<template>
  <main>
    <h1>F-Off Generator</h1>
    <div class="actions">
      <button @click="handleOperationsReq">Load F-Off</button>
      <AddFavouriteButton @click="addToFavourites" />
    </div>
    <div
      v-for="[idx, field] in [...enumerate(fields) as Generator<[number, {name: string, text: string}]>]"
      v-bind:key="idx"
    >
      <div class="field-line">
        {{ field.name }}: <input class="field-text-box" v-model="field.text" />
      </div>
    </div>
    <FOAASCard :foTextArray="foTextArray" :fields="fields" />
    <p class="aviso">{{ aviso }}</p>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .field-line {
    margin: 20px 0 20px 0;
  }
  .field-text {
    font-size: 30px;
    color: red;
  }
  .field-text-box {
    height: 30px;
    border-radius: 10px;
  }
}
</style>
