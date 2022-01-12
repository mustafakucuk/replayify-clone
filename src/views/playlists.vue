<template>
  <Hero title="Playlists" :image="image" />
  <div class="right-section-content">
    <Button text="Create a Playlist" @click="openModal" />
    <div class="list-items">
      <Item
        :data="{ ...playlist, index }"
        v-for="(playlist, index) in playlists"
        :key="playlist.id"
      />
    </div>
  </div>

  <Modal v-model="isShowModal">
    <div class="modal">
      <p>Playlist Name</p>
      <input type="text" placeholder="Playlist Name" v-model="playlistName" />
      <div class="buttons">
        <Button text="Cancel" @click="closeModal" />
        <Button text="Create" @click="createNewPlaylist" />
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getUserPlaylists, createPlaylist } from "@/services/spotify";
import Button from "@/components/button";
import Hero from "@/components/hero.vue";
import Item from "@/components/item.vue";
const image = ref(require("@/assets/images/hero-2.jpg"));
const isShowModal = ref(false);
const playlists = ref([]);
const playlistName = ref("");

onMounted(() => {
  getUserPlaylists().then((res) => {
    playlists.value = res.items;
  });
});

const openModal = () => {
  isShowModal.value = true;
};

const closeModal = () => {
  isShowModal.value = false;
};

const createNewPlaylist = () => {
  createPlaylist({
    name: playlistName.value,
  }).then(() => {
    getUserPlaylists().then((res) => {
      playlists.value = res.items;
    });

    closeModal();
  });
};
</script>
<style scoped lang="scss">
.modal {
  width: 300px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 20px;
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-top: 10px;

  &:focus {
    outline: none;
  }
}

.buttons {
  display: flex;
  justify-content: space-between;

  button:not(:last-child) {
    margin-right: 20px;
  }

  button {
    margin-bottom: 0;
  }
}
</style>