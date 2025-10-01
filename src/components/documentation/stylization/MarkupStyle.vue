<template>
  <div class="style-markup">
    <template v-if="!props.isEng">
      <h3>
        Стилизация блока маркирования картинок
      </h3>

      <p>
        В данном разделе идёт речь о стилизации блока в котором будет находиться картинка для маркирования. Как стилизовать области для маркирования будет описано ниже.
      </p>

      <p class="small-mar">
        <strong>--mu-bg</strong> - background для блока маркирования картинок.
      </p>

      <p class="small-mar">
        <strong>--mu-border</strong> - border для блока маркирования картинок.
      </p>

      <p class="small-mar">
        <strong>--mu-box-shadow</strong> - box-shadow для блока маркирования картинок.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Stylization of the image labeling block
      </h3>

      <p>
        In this section we are talking about the styling of the block in which the image will be located for labeling. How to style the labeling areas will be described below.
      </p>

      <p class="small-mar">
        <strong>--mu-bg</strong> - is the background for the image labeling block.
      </p>

      <p class="small-mar">
        <strong>--mu-border</strong> - border for the image labeling block.
      </p>

      <p class="small-mar">
        <strong>--mu-box-shadow</strong> - box-shadow for the image labeling block.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
