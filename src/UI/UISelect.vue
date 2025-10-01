<template>
  <select
    v-model="val"
    class="ui-select"
  >
    <option
      v-for="item in props.options"
      :key="item.id"
      :value="item.id"
    >
      {{ item.title }}
    </option>
  </select>
</template>

<script setup>
  const val = defineModel();

  const props = defineProps(['options']);
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .ui-select {
    padding: 5px;
    border-radius: 5px;
    border: 2px solid services.$secondColor;
  }
</style>
