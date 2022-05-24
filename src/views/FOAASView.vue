<script lang="ts">
import { defineComponent, markRaw } from "vue";
import { getRandomFO } from "@/services";
import FOAASCard from "@/components/FOAASCard.vue";
import AddFavouriteButton from "@/components/AddFavouriteButton.vue";

export default defineComponent({
  data() {
    return {
      fo: "",
      fields: [],
      foTextArray: [""],
    };
  },
  components: {
    FOAASCard,
  },
  methods: {
    handleOperationsReq() {
      this.fo = "Loading...";
      getRandomFO().then(( responses ) => {
        if (responses) {
          this.fo = responses.foaas.data.message;
          this.fields = responses.operation.fields;
          if (this.fields.length > 1){
            let regexRep = "";
            [...this.fields.keys()].forEach(key => {
              if (this.fields[key].field !== "from"){
                regexRep = regexRep + '\\' + this.fields[key].text + "|"
              }
            })
            regexRep = regexRep.slice(0, -1);
            regexRep = regexRep + "+"
            let myRegex = new RegExp(regexRep)
            // console.log(regexRep)
            // console.log(myRegex)
            this.foTextArray = this.fo.split(myRegex)
            // console.log(this.foTextArray);
          }
        }
      }).catch((err) => {
          console.log(err);
      });
    }
  },
});
</script>

<template>
  <main>
    <h1>F-Off Generator</h1>
    <div class="actions">
      <button @click="handleOperationsReq">Load F-Off</button>
      <AddFavouriteButton />
    </div>
    <div v-for="field in fields">
      <div class="field-line">{{field.name}}: <input class="field-text-box" v-model="field.text"></div>
    </div>
    <FOAASCard :foTextArray="foTextArray" :fields="fields"/>
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
