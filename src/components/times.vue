<template>
  <div class="inner-links">
    <div
      class="inner-link"
      :class="{ active: activeTab == 'long_term' }"
      @click="changeTab('long_term')"
    >
      All Time
    </div>
    <div
      class="inner-link"
      :class="{ active: activeTab == 'medium_term' }"
      @click="changeTab('medium_term')"
    >
      Last 6 Months
    </div>
    <div
      class="inner-link"
      :class="{ active: activeTab == 'short_term' }"
      @click="changeTab('short_term')"
    >
      Last Month
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "@vue/reactivity";
const emit = defineEmits(["change"]);

const activeTab = ref("long_term");

const changeTab = (tab) => {
  if (activeTab.value !== tab) {
    activeTab.value = tab;
    emit("change", tab);
  }
};
</script>
