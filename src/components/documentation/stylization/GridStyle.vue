<template>
  <div class="style-grid">
    <template v-if="!props.isEng">
      <h3>
        Стили сетки
      </h3>

      <p>
        Здесь можно задать цвет сетки. Чтобы увидеть данные стили, параметр "<strong>enableMarking</strong>" должен находиться в значении true.
      </p>

      <p class="small-mar">
        <strong>--mu-grid-color</strong> - цвет линии сетки.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Grid Styles
      </h3>

      <p>
        You can set the grid color here. To see these styles, the "<strong>enableMarking</strong>" parameter must be set to true.
      </p>

      <p class="small-mar">
        <strong>--mu-grid-color</strong> is the color of the grid line.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
