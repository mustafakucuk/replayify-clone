<template>
  <button>{{ props.text }}</button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
button {
  margin: 20px auto;
  display: block;
  width: 200px;
  height: 50px;
  background-color: #1db954;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>