<template>
  <div class="style-common">
    <template v-if="!props.isEng">
      <h3>
        Общие стили для маркированных областей
      </h3>

      <p>
        В данном блоке будут находиться общие стили для маркированных областей. Если маркированная область не активная, и вы её уже создали, то стили для неё можно посмотреть тоже здесь. Из всего того, что я делал, могу сказать, что маркированные области отличаются только цветом заливки, цветом линий (border), и прозрачностью линий и заливки. Такие вещи как закругления, толщина линий, везде были одинаковыми.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-fill</strong> - заливка маркированных областей, этот параметр переопределяется для активной области, и области в момент маркирования.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-stroke</strong> - цвет линий маркированной областей, этот параметр переопределяется для активной области, и области в момент маркирования.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-stroke-width</strong> - толщина линий маркированных областей, этот параметр применяется и для автивной области, и для области в момент маркирования. Будет как-то странно, если у активной области толщина линии будет больше, чем у обычных областей.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-stroke-opacity</strong> - прозрачность линий маркированных областей, этот параметр переопределяется для активной области, и области в момент маркирования.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-fill-opacity</strong> - прозрачность заливки маркированных областей, этот параметр переопределяется для активной области, и области в момент маркирования.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-rx</strong> - border-radius по оси X или закругление по оси X, этот парамерт применяется и для активной области, и для области в момент маркирования.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-ry</strong> - border-radius по оси Y или закругление по оси Y, этот парамерт применяется и для активной области, и для области в момент маркирования.
      </p>

      <p>
        В большинстве случаев <strong>--mu-marking-rect-rx</strong> и <strong>--mu-marking-rect-ry</strong> будут одинаковыми, если вам не нужны закругления, то установите значения в 0.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Common styles for labeled areas
      </h3>

      <p>
        This block will contain common styles for the labeled areas. If the marked area is not active and you have already created it, then you can view the styles for it here too. From everything I've done, I can tell that the labeled areas differ only in the fill color, the color of the lines (border), and the transparency of the lines and fill. Things like the curves, the thickness of the lines, were the same everywhere.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-fill</strong> - filling of the marked areas, this parameter is redefined for the hotspot and the area at the time of labeling.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-stroke</strong> - the color of the lines of the marked areas, this parameter is redefined for the hotspot and the area at the time of marking.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-stroke-width</strong> is the line thickness of the marked areas. This parameter applies to both the active area and the area at the time of marking. It will be kind of strange if the active area has a line thickness greater than that of normal areas.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-stroke-opacity</strong> - transparency of the lines of the marked areas, this parameter is redefined for the hotspot and the area at the time of marking.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-rx</strong> - X-axis border-radius or X-axis rounding, this parameter applies to both the hotspot and the area at the time of marking.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-ry</strong> - border-radius on the Y axis or rounding on the Y axis, this parameter applies to both the hotspot and the area at the time of marking.
      </p>

      <p>
        In most cases, <strong>--mu-marking-rect-rx</strong> and <strong>--mu-marking-rect-ry</strong> will be the same, if you don't need rounding, then set the values to 0.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
