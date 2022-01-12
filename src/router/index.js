import { createWebHistory, createRouter } from "vue-router";
import TopArtists from "@/views/top-artists.vue";
import TopTracks from "@/views/top-tracks.vue";
import Recent from "@/views/recent.vue";
import Home from "@/views/home.vue";
import Playlists from "@/views/playlists.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/top-artists",
    component: TopArtists,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/top-tracks",
    component: TopTracks,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/recent",
    component: Recent,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/playlists",
    component: Playlists,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
