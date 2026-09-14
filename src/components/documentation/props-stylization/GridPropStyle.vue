<template>
  <div class="style-grid">
    <template v-if="!props.isEng">
      <h3>
        Входные параметры отвечающие за стилизацию сетки
      </h3>

      <p>
        Здесь представлен входной параметр отвечающий за цвет сетки. Чтобы увидеть за что отвечает данный входной параметр, входной параметр <strong>"enableMarking"</strong> должен находиться в значении true.
      </p>

      <p class="small-mar">
        <strong>gridColor</strong> - входной параметр отвечающий за цвет линии сетки.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Input parameters responsible for grid styling
      </h3>

      <p>
        Here is the input parameter responsible for the color of the grid. To see what this input parameter is responsible for, the <strong>"enableMarking"</strong> input parameter must be set to true.
      </p>

      <p class="small-mar">
        <strong>gridColor</strong> - the input parameter responsible for the color of the grid line.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
