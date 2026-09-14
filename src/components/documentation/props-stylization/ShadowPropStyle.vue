<template>
  <div class="style-shadow">
    <template v-if="!props.isEng">
      <h3>
        Входные параметры отвечающие за стилизацию тени маркированных областей
      </h3>

      <p>
        В данном блоке представлены входные параметры отвечающие за цвет линии для тени, её толщину и прозрачность. При стилизации учитывайте, что цвет для тени должен быть конрастным с цветом линии маркированной области. В большинстве случаев тень стоит включать только тогда, когда вы не знаете какие точно документы будет загружать пользователь. К примеру, если загрузить документ с преобладанием красного, у нас в России это к примеру паспорт, то активная маркированная область будет не очень заметна. Тень нужна для того, чтобы выделить маркированную область на документе, сделать так, чтобы она не сливалась с ним.
      </p>

      <p class="small-mar">
        <strong>shadowRectStroke</strong> - входной параметр отвечающий за цвет линий для тени.
      </p>

      <p class="small-mar">
        <strong>shadowRectStrokeWidth</strong> - входной параметр отвечающий за толщину линии для тени.
      </p>

      <p class="small-mar">
        <strong>shadowRectStrokeOpacity</strong> - входной параметр отвечающий за прозрачность линии тени.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Input parameters responsible for styling the shadows of the marked areas
      </h3>

      <p>
        This block contains the input parameters responsible for the color of the line for the shadow, its thickness and transparency. When styling, keep in mind that the color for the shadow should match the color of the line of the marked area. In most cases, the shadow should be turned on only when you don't know exactly which documents the user will upload. For example, if you upload a document with a predominance of red, for example, a passport in Russia, then the active marked area will not be very noticeable. The shadow is needed in order to highlight the marked area on the document, so that it does not merge with it.
      </p>

      <p class="small-mar">
        <strong>shadowRectStroke</strong> - the input parameter responsible for the color of the lines for the shadow.
      </p>

      <p class="small-mar">
        <strong>shadowRectStrokeWidth</strong> - the input parameter responsible for the line thickness for the shadow.
      </p>

      <p class="small-mar">
        <strong>shadowRectStrokeOpacity</strong> - the input parameter responsible for the transparency of the shadow line.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
