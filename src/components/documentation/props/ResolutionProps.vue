<template>
  <div class="props-resolution">
    <template v-if="!props.isEng">
      <h3>
        Настройка разрешения для блока маркирования картинок
      </h3>

      <p>
        <strong>Resolution</strong> - разрешение для блока маркирования документа. Если изображение, которое нужно маркировать отсутствует, то блок займет необходимое пространство согласно указанному разрешению. По умолчанию данный параметр равен <b>"HD"</b>. Возможны следующие значения:
      </p>

      <ul>
        <li>
          <strong>16:9</strong> - область для маркирования будет иметь соотношение 16 к 9, где 16 это ширина области, а 9 это высота области.
        </li>
        <li>
          <strong>HD</strong> - область для маркирования будет иметь такое же соотношение как и <strong>16:9</strong>.
        </li>
        <li>
          <strong>10:9</strong> - область для маркирования будет иметь соотношение 10 к 9, где 10 это ширина области, а 9 это высота области.
        </li>
        <li>
          <strong>CIF</strong> - область для маркирования будет иметь такое же соотношение как и <strong>10:9</strong>.
        </li>
        <li>
          <strong>8:5</strong> - область для маркирования будет иметь соотношение 8 к 5, где 8 это ширина области, а 5 это высота области.
        </li>
        <li>
          <strong>QHD</strong> - область для маркирования будет иметь такое же соотношение как и <strong>8:5</strong>.
        </li>
        <li>
          <strong>5:6</strong> - область для маркирования будет иметь соотношение 5 к 6, где 5 это ширина области, а 6 это высота области.
        </li>
        <li>
          <strong>MPEG2</strong> - область для маркирования будет иметь такое же соотношение как и <strong>5:6</strong>.
        </li>
        <li>
          <strong>5:4</strong> - область для маркирования будет иметь соотношение 5 к 4, где 5 это ширина области, а 4 это высота области.
        </li>
        <li>
          <strong>SXGA</strong> -  область для маркирования будет иметь такое же соотношение как и <strong>5:4</strong>.
        </li>
        <li>
          <strong>5:3</strong> - область для маркирования будет иметь соотношение 5 к 3, где 5 это ширина области, а 3 это высота области.
        </li>
        <li>
          <strong>WVGA</strong> - область для маркирования будет иметь такое же соотношение как и <strong>5:3</strong>.
        </li>
        <li>
          <strong>4:3</strong> - область для маркирования будет иметь соотношение 4 к 3, где 4 это ширина области, а 3 это высота области
        </li>
        <li>
          <strong>VGA</strong> - область для маркирования будет иметь такое же соотношение как и <strong>4:3</strong>.
        </li>
        <li>
          <strong>3:1</strong> - область для маркирования будет иметь соотношение 3 к 1, где 3 это ширина области, а 1 это высота области.
        </li>
        <li>
          <strong>WSXGA</strong> - область для маркирования будет иметь такое же соотношение как и <strong>3:1</strong>.
        </li>
        <li>
          <strong>2:1</strong> - область для маркирования будет иметь соотношение 2 к 1, где 2 это ширина области, а 1 это высота области.
        </li>
        <li>
          <strong>2K</strong> - область для маркирования будет иметь такое же соотношение как и <strong>2:1</strong>.
        </li>
        <li>
          <strong>1:1</strong> - область для маркирования будет иметь соотношение 1 к 1. Как правило это нужно для для маркирования аватарок, была у меня такая задача.
        </li>
      </ul>

      <p>
        Как правило большая часть картинок для маркировани будут иметь какое-то конкретное разрешение (соотношение сторон). В большинстве случаев это будет HD, его я и сделал по умолчанию. Если картинка для маркирования не выбрана, то будет отображаться заглушка согласно этому разрешению. А если картинка будет выбрана, то блок для маркирования документа примет размеры этой картинки. К примеру разрешение у нас 16:9, а мы выбрали вертикальную картинку с разрешением 9:16, тогда блок для маркирования примет размеры выбранной картинки.
      </p>

      <p>
        <strong>Vertical</strong> - возможность сделать блок для маркирования картинки вертикальным. По умолчани равно false. Давайте я объясню на конкретном примере. Представим, что у нас разрешение по умолчанию установлено в HD, что соответствует разрешению 16:9, если мы включим этот параметр, то разрешение поля для разметки будет соответствовать разрешению 9:16. Как я уже выше писал, большая часть картинок у нас будет иметь одинаковые разрешения, за редким исключением. Если большая часть картинок имеет разрешени 9:16, то этот параметр может пригодиться. Как и resolution, после загрузки реальной картинки, поле для разметки примет размеры загруженной картинки, и этот параметр не будет иметь значение, пока мы не сбросим картинку.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Setting the resolution for the image labeling block
      </h3>

      <p>
        <strong>Resolution</strong> is the resolution for the marking block of the document. If there is no image to label, then the block will occupy the required space according to the specified resolution. By default, this parameter is <b>"HD"</b>. The following values are possible:
      </p>

      <ul>
        <li>
          <strong>16:9</strong> - the marking area will have a ratio of 16 to 9, where 16 is the width of the area and 9 is the height of the area.
        </li>
        <li>
          <strong>HD</strong> - the marking area will have the same ratio as <strong>16:9</strong>.
        </li>
        <li>
          <strong>10:9</strong> - the marking area will have a ratio of 10 to 9, where 10 is the width of the area and 9 is the height of the area.
        </li>
        <li>
          <strong>CIF</strong> - the marking area will have the same ratio as <strong>10:9</strong>.
        </li>
        <li>
          <strong>8:5</strong> - the marking area will have a ratio of 8 to 5, where 8 is the width of the area and 5 is the height of the area.
        </li>
        <li>
          <strong>QHD</strong> - the marking area will have the same ratio as <strong>8:5</strong>.
        </li>
        <li>
          <strong>5:6</strong> - the marking area will have a ratio of 5 to 6, where 5 is the width of the area and 6 is the height of the area.
        </li>
        <li>
          <strong>MPEG2</strong> - the marking area will have the same ratio as <strong>5:6</strong>.
        </li>
        <li>
          <strong>5:4</strong> - the marking area will have a ratio of 5 to 4, where 5 is the width of the area and 4 is the height of the area.
        </li>
        <li>
          <strong>SXGA</strong> - the marking area will have the same ratio as <strong>5:4</strong>.
        </li>
        <li>
          <strong>5:3</strong> - the marking area will have a ratio of 5 to 3, where 5 is the width of the area and 3 is the height of the area.
        </li>
        <li>
          <strong>WVGA</strong> - the marking area will have the same ratio as <strong>5:3</strong>.
        </li>
        <li>
          <strong>4:3</strong> - the marking area will have a ratio of 4 to 3, where 4 is the width of the area and 3 is the height of the area
        </li>
        <li>
          <strong>VGA</strong> - the marking area will have the same ratio as <strong>4:3</strong>.
        </li>
        <li>
          <strong>3:1</strong> - the marking area will have a ratio of 3 to 1, where 3 is the width of the area and 1 is the height of the area.
        </li>
        <li>
          <strong>WSXGA</strong> - the marking area will have the same ratio as <strong>3:1</strong>.
        </li>
        <li>
          <strong>2:1</strong> - the marking area will have a ratio of 2 to 1, where 2 is the width of the area and 1 is the height of the area.
        </li>
        <li>
          <strong>2K</strong> - the marking area will have the same ratio as <strong>2:1</strong>.
        </li>
        <li>
          <strong>1:1</strong> - the marking area will have a ratio of 1 to 1. As a rule, this is necessary for labeling avatars, I had such a task.
        </li>
      </ul>

      <p>
        As a rule, most of the pictures for labeling will have some specific resolution (aspect ratio). In most cases, it will be HD, and I made it by default. If the labeling image is not selected, a blank will be displayed according to this resolution. And if an image is selected, then the block for labeling the document will take the size of this image. For example, our resolution is 16:9, and we selected a vertical image with a resolution of 9:16, then the labeling block will take the size of the selected image.
      </p>

      <p>
        <strong>Vertical</strong> - the ability to make the image labeling block vertical. By default, it is set to false. Let me explain with a concrete example. Let's imagine that our default resolution is set to HD, which corresponds to a resolution of 16:9. If we enable this option, the resolution of the markup field will correspond to a resolution of 9:16. As I wrote above, most of our images will have the same resolution, with rare exceptions. If most of the images have a resolution of 9:16, then this parameter may be useful. Like resolution, after uploading a real image, the markup field will take on the size of the uploaded image, and this parameter will not matter until we reset the image.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
