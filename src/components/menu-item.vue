<template>
  <router-link :to="props.path" class="menu-item">
    <ion-icon :name="props.icon"></ion-icon>
    <span>{{ props.name }}</span>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>