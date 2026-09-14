<template>
  <div class="style-markup-block">
    <template v-if="!props.isEng">
      <h3>
        Входные параметры отвечающие за стилизацию блока маркирования картинок
      </h3>

      <p>
        В данном разделе идёт речь о входных параметрах отвечающих за стилизацию блока в котором будет находиться картинка для маркирования. Как стилизовать области для маркирования будет описано ниже.
      </p>

      <p class="small-mar">
        <strong>bg</strong> - входной параметр отвечающий за background блока маркирования картинок
      </p>

      <p class="small-mar">
        <strong>border</strong> - входной параметр отвечающий за border для блока маркирования картинок.
      </p>

      <p class="small-mar">
        <strong>boxShadow</strong> - входной параметр отвечающий за box-shadow для блока маркирования картинок.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Input parameters responsible for the styling of the image labeling block
      </h3>

      <p>
        In this section, we are talking about the input parameters responsible for the styling of the block in which the image for labeling will be located. How to style the labeling areas will be described below.
      </p>

      <p class="small-mar">
        <strong>bg</strong> - the input parameter responsible for the background of the image labeling block.
      </p>

      <p class="small-mar">
        <strong>border</strong> - the input parameter responsible for the border for the image labeling block.
      </p>

      <p class="small-mar">
        <strong>border</strong> - the input parameter responsible for the box-shadow for the image labeling block.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
