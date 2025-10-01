<template>
  <div class="style-markup">
    <template v-if="!props.isEng">
      <h3>
        Стили для тени маркированных областей
      </h3>

      <p>
        В данном блоке я задаю только цвет линии для тени, её толщину и прозрачность. При стилизации учитывайте, что цвет для тени должен быть конрастным с цветом линии маркированной области. В большинстве случаев тень стоит включать только тогда, когда вы не знаете какие точно документы будет загружать пользователь. К примеру, если загрузить документ с преобладанием красного, у нас в России это к примеру паспорт, то активная маркированная область будет не очень заметна. Тень нужна для того, чтобы выделить маркированную область на документе, сделать так, чтобы она не сливалась с ним.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-shadow-stroke</strong> - цвет линии для тени, в большинстве случаев будет черный, но вы можете задать любое удобное для вас значение.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-shadow-stroke-width</strong> - толщина линии для тени. Можете писать здесь любое значение, но оно должно быть больше, чем "--mu-marking-rect-stroke-width", иначе тени вы не увидите.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-shadow-stroke-opacity</strong> - прозрачность линии для тени.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Styles for the shadow of the marked areas
      </h3>

      <p>
        In this block, I only set the line color for the shadow, its thickness and transparency. When styling, keep in mind that the color for the shadow should match the color of the line of the marked area. In most cases, the shadow should be turned on only when you don't know exactly which documents the user will upload. For example, if you upload a document with a predominance of red, for example, a passport in Russia, then the active marked area will not be very noticeable. The shadow is needed in order to highlight the marked area on the document, so that it does not merge with it.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-shadow-stroke</strong> - the color of the line for the shadow, in most cases it will be black, but you can set any value that suits you.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-shadow-stroke-width</strong> is the line thickness for the shadow. You can write any value here, but it must be greater than "--mu-marking-rect-stroke-width", otherwise you won't see shadows.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-shadow-stroke-opacity</strong> - transparency of the line for the shadow.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
