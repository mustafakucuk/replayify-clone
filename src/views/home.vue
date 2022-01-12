<template>
  <Hero title="Home" :image="image" />

  <div class="right-section-content">
    <div>
      <h2 v-if="isLogin()">You're already login</h2>
      <Button text="Sign with Spotify" @click="loginSpotify" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import Button from "@/components/button";
import Hero from "@/components/hero.vue";
import queryString from "query-string";

const image = ref(require("@/assets/images/hero-1.jpg"));

const isLogin = () => {
  return localStorage.getItem("access_token");
};

onMounted(() => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  if (!params.code) {
    return;
  }

  axios
    .post(
      "https://accounts.spotify.com/api/token",
      queryString.stringify({
        code: params.code,
        redirect_uri: process.env.VUE_APP_REDIRECT_URI,
        grant_type: "authorization_code",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            new Buffer(
              process.env.VUE_APP_CLIENT_ID +
                ":" +
                process.env.VUE_APP_CLIENT_SECRET
            ).toString("base64"),
        },
      }
    )
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
    });
});

const loginSpotify = () => {
  const url = "https://accounts.spotify.com/authorize";

  let params = {
    response_type: "code",
    client_id: process.env.VUE_APP_CLIENT_ID,
    scope:
      "user-read-private user-read-email playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-modify-playback-state",
    redirect_uri: process.env.VUE_APP_REDIRECT_URI,
    show_dialog: true,
  };

  params = new URLSearchParams(params).toString();

  window.location.href = `${url}?${params}`;
};
</script>

<style scoped>
.right-section-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
