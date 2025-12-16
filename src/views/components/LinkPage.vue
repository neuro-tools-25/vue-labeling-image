<template>
  <div class="link-page">
    <span
      v-for="({ link, text }, count) in props.navItem"
      :key="count"
    >
      <router-link :to="link">
        {{ text }}
      </router-link>
    </span>
  </div>
</template>

<script setup>
  const props = defineProps(['navItem']);
</script>

<style lang="scss" scoped>
  .link-page {
    display: flex;
    flex-wrap: wrap;
    gap: 5px 10px;
  }
</style>