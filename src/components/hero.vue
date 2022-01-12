<template>
  <div class="hero-image" :style="{ backgroundImage: `url('${props.image}')` }">
    <div class="hero-title">{{ props.title }}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  image: {
    type: String,
    default: require("@/assets/images/hero-3.jpg"),
  },
});
</script>
