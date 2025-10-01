<template>
  <div class="props-sizes">
    <template v-if="!props.isEng">
      <h3>
        Настройки минимальных размеров для маркированных областей
      </h3>

      <p>
        Данные параметры нужны для задания минимальной ширины и высоты маркированной области. Вы можете случайно щелкнуть мышью на моём компоненте, без этих параметров будет создана маркированная область, которая вам не нужна. Нейронка ничего не сможет распознать в блоке 1 на 1 px.
      </p>

      <p>
        <strong>MinWidth</strong> - минимальная ширина маркированной области. По умолчанию равно 10. Измеряется в px. Мой компонент нужен для разметки текста или выделения лиц на документах. Как-то сомнительно, что-бы область которая меньше 10px можно как-то распознать. Если в этом есть какая-то необходимость, то нужно задать 0.
      </p>

      <p>
        <strong>MinHeight</strong> - минимальная высота маркированной области. По умолчанию равно 10. Измеряется в px. Мой компонент нужен для разметки текста или лиц на документах. Как-то сомнительно, что-бы область которая меньше 10px можно как-то распознать. Если в этом есть какая-то необходимость, то нужно задать 0.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Minimum size settings for labeled areas
      </h3>

      <p>
        These parameters are needed to set the minimum width and height of the labeled area. You can accidentally click on my component, without these parameters, a bulleted area will be created that you don't need. The neural network will not be able to recognize anything in the 1 by 1 px block.
      </p>

      <p>
        <strong>MinWidth</strong> is the minimum width of the labeled area. The default value is 10. Measured in px. My component is needed for marking up text or highlighting faces on documents. It is somehow doubtful that an area that is less than 10px can be somehow recognized. If there is any need for this, then you need to set 0.
      </p>

      <p>
        <strong>MinHeight</strong> is the minimum height of the marked area. The default value is 10. Measured in px. My component is needed for marking up text or faces on documents. It is somehow doubtful that an area that is less than 10px can be somehow recognized. If there is any need for this, then you need to set 0.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
