<template>
  <Hero title="Recents" :image="image" />
  <div class="right-section-content">
    <div class="list-items">
      <RecentItem :data="track" v-for="track in tracks" :key="track.id" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getMyRecentlyPlayedTracks } from "@/services/spotify";
import Hero from "@/components/hero.vue";
import RecentItem from "@/components/recent-item.vue";
const image = ref(require("@/assets/images/hero-2.jpg"));
const tracks = ref([]);

onMounted(() => {
  getMyRecentlyPlayedTracks().then((res) => {
    tracks.value = res.items;
  });
});
</script>