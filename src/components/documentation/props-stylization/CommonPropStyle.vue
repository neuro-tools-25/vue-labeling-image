<template>
  <div class="style-common">
    <template v-if="!props.isEng">
      <h3>
        Входные параметры отвечающие за общие стили маркированных областей
      </h3>

      <p>
        В данном блоке будут находиться входные параметры отвечающие за общие стили для маркированных областей. Для того, чтобы посмотреть за что отвечают эти входные параметры, достаточно создать 2, 3 маркированные области. Последняя область будет активной (к ней применяются другие входные параметры). Вы можете увидеть, на что влияют данные входные параметры по той области, или по тем областям, которые были созданы ранее активной. Из всего того, что я делал, могу сказать, что маркированные области отличаются только цветом заливки, цветом линий (border), и прозрачностью линий и заливки. Такие вещи как закругления, толщина линий, везде были одинаковыми.
      </p>

      <p class="small-mar">
        <strong>rectFill</strong> - входной параметр отвечающий за заливку маркированных областей.
      </p>

      <p class="small-mar">
        <strong>rectFill</strong> - входной параметр отвечающий за цвет линий маркированных областей.
      </p>

      <p class="small-mar">
        <strong>rectStrokeWidth</strong> - входной параметр отвечающий за толщину линий маркированных областей.
      </p>

      <p class="small-mar">
        <strong>rectStrokeOpacity</strong> - входной параметр отвечающий за прозрачность линий маркированных областей.
      </p>

      <p class="small-mar">
        <strong>rectFillOpacity</strong> - входной параметр отвечающий за прозрачность заливки маркированных областей.
      </p>

      <p class="small-mar">
        <strong>rectRx</strong> - входной параметр отвечающий за border-radius по оси X.
      </p>

      <p class="small-mar">
        <strong>rectRy</strong> - входной параметр отвечающий за border-radius по оси Y.
      </p>

      <p>
        В большинстве случаев <strong>rectRy</strong> и <strong>rectRy</strong> будут одинаковыми, если вам не нужны закругления, то установите значения в 0.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        input parameters responsible for the general styles of the labeled areas
      </h3>

      <p>
        This block will contain the input parameters responsible for the general styles for the labeled areas. In order to see what these input parameters are responsible for, it is enough to create 2, 3 labeled areas. The last area will be active (other input parameters are applied to it). You can see what these input parameters affect for that area, or for those areas that were created earlier by the active one. From everything I've done, I can tell that the labeled areas differ only in the fill color, the color of the lines (border), and the transparency of the lines and fill. Things like the curves, the thickness of the lines, were the same everywhere.
      </p>

      <p class="small-mar">
        <strong>rectFill</strong> - the input parameter responsible for filling the marked areas.
      </p>

      <p class="small-mar">
        <strong>rectStroke</strong> - the input parameter responsible for the color of the lines of the marked areas.
      </p>

      <p class="small-mar">
        <strong>rectStrokeWidth</strong> - the input parameter responsible for the line thickness of the marked areas.
      </p>

      <p class="small-mar">
        <strong>rectStrokeOpacity</strong> - the input parameter responsible for the transparency of the lines of the marked areas.
      </p>

      <p class="small-mar">
        <strong>rectFillOpacity</strong> - the input parameter responsible for the transparency of the fill of the marked areas.
      </p>

      <p class="small-mar">
        <strong>rectRx</strong> - the input parameter responsible for the border is the X-axis radius.
      </p>

      <p class="small-mar">
        <strong>rectRy</strong> - the input parameter responsible for the border is the Y-axis radius.
      </p>

      <p>
        In most cases, <strong>rectRx</strong> and <strong>rectRy</strong> will be the same, if you don't need rounding, then set the values to 0.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
