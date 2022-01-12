<template>
  <Hero title="Top Artists" :image="image" />

  <div class="right-section-content">
    <Times @change="onChangeTab" />

    <div class="list-items">
      <Item
        :data="{ ...artist, index, type: 'artist' }"
        v-for="(artist, index) in artists"
        :key="artist.id"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getMyTopArtists } from "@/services/spotify";
import Times from "@/components/times.vue";
import Item from "@/components/item.vue";
import Hero from "@/components/hero.vue";

const image = require("@/assets/images/hero-3.jpg");
const artists = ref([]);

onMounted(() => {
  getMyTopArtists('long_term').then((res) => {
    artists.value = res.items;
  });
});

const onChangeTab = (activeTab) => {
  getMyTopArtists(activeTab).then((res) => {
    artists.value = res.items;
  });
};
</script>
