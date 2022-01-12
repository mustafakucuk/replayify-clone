<template>
  <div class="left-section">
    <div class="app-logo">
      <router-link to="/" class="menu-item">
        <img src="@/assets/images/logo.png" alt="" />
      </router-link>
    </div>
    <nav class="menu-items">
      <MenuItem
        :name="item.name"
        :icon="item.icon"
        :path="item.path"
        v-for="item in menuItems"
        :key="item.path"
      />
    </nav>
  </div>
</template>

<script setup>
import MenuItem from "./menu-item";

const menuItems = [
  {
    name: "Top Artists",
    path: "/top-artists",
    icon: "star-outline",
  },
  {
    name: "Top Tracks",
    path: "/top-tracks",
    icon: "heart-outline",
  },
  {
    name: "Recent",
    path: "/recent",
    icon: "time-outline",
  },
  {
    name: "Playlists",
    path: "/playlists",
    icon: "list-outline",
  },
];
</script>