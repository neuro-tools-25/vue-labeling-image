<template>
  <div class="intro-install">
    <template v-if="!props.isEng">
      <h2>
        Стилизация маркированных областей
      </h2>

      <p>

      </p>
    </template>

    <template v-if="props.isEng">
      <h2>
        Stylization of labeled areas
      </h2>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
