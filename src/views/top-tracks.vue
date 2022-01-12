<template>
  <Hero title="Top Tracks" :image="image" />

  <div class="right-section-content">
    <Times @change="onChangeTab" />

    <div class="list-items">
      <Item
        :data="{ ...track, index, type: 'track' }"
        v-for="(track, index) in tracks"
        :key="track.id"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getMyTopTracks } from "@/services/spotify";
import Times from "@/components/times.vue";
import Item from "@/components/item.vue";
import Hero from "@/components/hero.vue";

const image = require("@/assets/images/hero-4.png");
const tracks = ref([]);

onMounted(() => {
  getMyTopTracks('long_term').then((res) => {
    tracks.value = res.items;
  });
});

const onChangeTab = (activeTab) => {
  getMyTopTracks(activeTab).then((res) => {
    tracks.value = res.items;
  });
};
</script>
