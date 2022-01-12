<template>
  <div class="playback" ref="playback" :class="containerClass">
    <div class="item" v-if="playbackData">
      <div class="item-image">
        <img :src="playbackData.item.album.images[0].url" />
      </div>
      <div class="content">
        <div class="title">{{ playbackData.item.name }}</div>
        <div class="desc">
          {{ playbackData.item.artists[0].name }}
        </div>
      </div>
    </div>
    <div class="action-buttons" v-if="playbackData">
      <ion-icon name="play-back-outline" @click="prev"></ion-icon>
      <ion-icon
        :name="playbackData.is_playing ? 'pause-outline' : 'play-outline'"
        @click="toggleStatus"
      ></ion-icon>
      <ion-icon name="play-forward-outline" @click="next"></ion-icon>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
  getMyCurrentPlayingTrack,
  pause,
  play,
  skipToPrevious,
  skipToNext,
} from "@/services/spotify";
const containerClass = ref("");
const playback = ref(null);
const playbackData = ref();

const getCurrentPlaying = () => {
  getMyCurrentPlayingTrack().then((res) => {
    playbackData.value = res;
  });
};

const toggleStatus = () => {
  if (playbackData.value.is_playing) {
    pause().then(() => {
      getCurrentPlaying();
    });
  } else {
    play().then(() => {
      getCurrentPlaying();
    });
  }
};

const prev = () => {
  skipToPrevious().then(() => {
    getCurrentPlaying();
  });
};

const next = () => {
  skipToNext().then(() => {
    getCurrentPlaying();
  });
};

onMounted(() => {
  getCurrentPlaying();

  // if user scrolls to the bottom of the page,
  document.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY + playback.value.offsetHeight >=
      document.body.offsetHeight * 0.9
    ) {
      // then load more data
      containerClass.value = "fixd";
    } else {
      containerClass.value = "fixed";
      setTimeout(() => {}, 500);
    }
  });
});
</script>