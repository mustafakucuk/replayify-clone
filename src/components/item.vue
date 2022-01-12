<template>
  <a class="item" :href="props.data.uri">
    <span>{{ props.data.index + 1 }}</span>

    <div
      class="image"
      v-if="image()"
      :style="{ backgroundImage: `url('${image()}')` }"
    ></div>
    <div class="content">
      <div class="title">{{ props.data.name }}</div>
      <div class="desc">
        {{ props.data.description }}
      </div>
    </div>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

const image = () => {
  const type = props.data.type;

  if (type === "track") {
    return props.data.album.images[0].url;
  }

  return props.data.images.length ? props.data.images[0].url : false;
};

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>