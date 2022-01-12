<template>
  <a class="item" :href="props.data.track.uri">
    <div class="item-info">
      <div
        class="image"
        :style="{
          backgroundImage: `url('${props.data.track.album.images[0].url}')`,
        }"
      ></div>
      <div class="content">
        <div class="title">{{ props.data.track.name }}</div>
        <div class="desc artist-name">
          {{ props.data.track.artists[0].name }}
        </div>
      </div>
    </div>
    <div class="time">{{ dateFilter(props.data.played_at) }}</div>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const dateFilter = (date) => {
  const dateObject = new Date(date);
  return dateObject.getHours() + ':' + dateObject.getMinutes()
};
</script>

<style scoped lang="scss">
.item-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex: 3 1;
}

.time {
  color: #aba5c3;
  margin-left: 10px;
}
</style>