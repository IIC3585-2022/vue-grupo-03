<script setup lang="ts">
import { concatIntoStr } from "@/functions/concatenate";

defineProps({
  fields: Array,
  foTextArray: Array,
});
</script>

<template>
  <div class="joke-card">
    <p>
      <strong>{{
        concatIntoStr(foTextArray, fields) || "Request a F-Off!"
      }}</strong>
    </p>
    <div class="from" v-if="fields.length > 0">
      <p>- {{ fields[fields.length - 1].text }}</p>
    </div>
  </div>
</template>

<style scoped>
.joke-card {
  width: 40ch;
  margin: 1rem 0;
  color: #333;
  display: flex;
  padding: 1rem;
  border-radius: 4px;
  flex-direction: column;
  background-color: white;
  border: solid 1px lightgray;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
}
.from {
  display: flex;
  justify-content: flex-end;
  padding: 0 10ch 0 0;
}
</style>
