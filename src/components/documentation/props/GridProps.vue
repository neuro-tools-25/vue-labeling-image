<template>
  <div class="props-theme">
    <template v-if="!props.isEng">
      <h3>
        Сетка для блока маркирования картинок
      </h3>

      <p>
        Данный раздел скорее всего вам не пригодится. Он нужен для включения и настройки сетки. Данную вещь меня просили сделать только для одного проекта. Он нужен был для отладки. Пользователю после маркирования картинки нужно было определить, правильно ли мой компонент определяет размеры маркированных областей. Это был один очень старый сотрудник одного <nii-def />. Я допускаю, что это может пригодиться для лучшего маркирования документа.
      </p>

      <p>
        <strong>EnableGrid</strong> - возможность включения/отключения сетки. По умолчанию сетка отключена, значение равно false.
      </p>

      <p>
        <strong>GridSize</strong> - размер сетки. Возможны значения от 5 до 50. Значения должны быть кратны 5, т.е. можно ввести 5, 10, 15, 20, 25 и так до 50, но не 11, 12, 13, 14. Больше 50, делать размер сетки я не вижу смысла. По умолчанию равно 10. если вы введете не допустимое значение, к примеру 12, то сетка будет равна 5. Размеры сетки могут быть представлены как строкой, так и числом. Этот параметр может пригодиться, если нужно более точно маркировать картинку. Чтобы посмотреть данный параметр, нужно включить <b>enableGrid</b>.
      </p>

      <p>
        Сетку можно включить и при отсутствии картинки. При наличии картинки, слой сетки будет находиться над картинкой, но под маркированными областями.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Grid for the image labeling block
      </h3>

      <p>
        This section probably won't be useful to you. It is needed to turn on and adjust the grid. I was asked to do this thing for only one project. It was needed for debugging. After labeling the image, the user needed to determine whether my component correctly determines the size of the labeled areas. It was a very old employee of one <nii-def lang="eng" />. I admit that this may be useful for better labeling of the document.
      </p>

      <p>
        <strong>EnableGrid</strong> - the ability to enable/disable the grid. By default, the grid is disabled, the value is set to false.
      </p>

      <p>
        <strong>GridSize</strong> is the size of the grid. Values from 5 to 50 are possible. The values must be multiples of 5, i.e. you can enter 5, 10, 15, 20, 25 and so on up to 50, but not 11, 12, 13, 14. I don't see any point in making the grid size larger than 50. The default value is 10. if you enter an invalid value, for example 12, then the grid will be 5. The grid sizes can be represented as a row or as a number. This parameter can be useful if you need to label the image more accurately. To view this parameter, you need to enable <b>enableGrid</b>.
      </p>

      <p>
        You can also turn on the grid when there is no picture. If there is an image, the grid layer will be above the image, but below the labeled areas.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
