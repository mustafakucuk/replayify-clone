<template>
  <div class="app-container">
    <Left />

    <div class="right-section">
      <router-view />

      <Playback v-if="playbackShow" />
    </div>
  </div>
</template>

<script setup>
import Left from "@/components/left";
import Playback from "@/components/playback";
import { ref } from "vue";
import { useRouter } from "vue-router";

const playbackShow = ref(false);
const router = useRouter();

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    playbackShow.value = false;
  } else {
    playbackShow.value = true;
  }

  next();
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("access_token")) {
      alert("Firstly login!");
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    next();
  }
});
</script>

<style lang="scss">
body {
}
</style>