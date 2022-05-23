<script lang="ts">
import { defineComponent } from "vue";
import { getRandomFO } from "@/services";
import FOAASCard from "@/components/FOAASCard.vue";
import AddFavouriteButton from "@/components/AddFavouriteButton.vue";

export default defineComponent({
  data() {
    return {
      fields: [],
      fo: "",
    };
  },
  components: {
    FOAASCard,
  },
  methods: {
    handleOperationsReq() {
      this.fo = "Cargando..."
      getRandomFO().then(( responses ) => {
        if (responses) {
          this.fo = responses.foaas.data.message;
          this.fields = responses.operation.fields;
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
    <FOAASCard :fo="fo" />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
