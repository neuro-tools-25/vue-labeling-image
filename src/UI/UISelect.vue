<template>
  <select
    v-model="val"
    class="ui-select"
  >
    <template
      v-for="item in props.options"
      :key="item.id"
    >
      <optgroup
        v-if="item.type === 'group'"
        :label="item.label"
      >
        <option
          v-for="itm in item.elenents"
          :value="itm.id"
          :key="itm.is"
        >
          {{ itm.title }}
        </option>
      </optgroup>

      <option
        v-else
        :value="item.id"
      >
        {{ item.title }}
      </option>
    </template>
  </select>
</template>

<script setup>
  const val = defineModel();

  const props = defineProps(['options']);
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .ui-select {
    appearance: none;
    padding: 5px;
    border-radius: 5px;
    max-width: 100%;
    display: block;
    box-sizing: border-box;
    border: 2px solid services.$secondColor;
  }
</style>
