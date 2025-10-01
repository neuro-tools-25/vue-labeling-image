<template>
  <div class="props-marking">
    <template v-if="!props.isEng">
      <h3>Маркирование картинки, работа с маркированными областями</h3>

      <p>
        <strong>isMarkup</strong> - возможность создавать маркированные области на картинке. По умолчанию равно true. Для маркирования, сперва нужно выбрать файл. Может пригодиться, если нужно создавать маркированные области в зависимости от какого-нибудь условия. К примеру, мы создали область, и нельзя создать новую, пока мы не введём имя области, или какой-то другой параметр. Маркированные области можно будет растягивать и переносить в рамках картинки. Если данное поведение не требуется, смотрите параметры ниже.
      </p>

      <p>
        <strong>isResizeArea</strong> - возможность растягивания маркированных областей. По умолчанию равно true. Маркированные области можно растянуть потянув за края области. Если вы посмотрите на yandex, или google картинки, то там растягивание можно осуществить потянув за углы маркированной области. Как я уже выше писал, основное предназначение моего компонента это <ocr-def lang="rus" />. Область для маркирования на картинке может быть очень маленькая, тут нужна особая точность. Представьте, что вы вставили картинку ширина которой составляет 10000px в область, ширина которой составляет 400px. Картинка сожмётся в 25 раз. Если вы потяните за левый, или за правый край, то изменится только ширина маркированной области, она никуда не сдвинется. Это даёт некоторую точность при маркировании картинки.
      </p>

      <p>
        <strong>isDraggingArea</strong> - возможность переносить маркированные области. По умолчани равно true. Переносить области можно только в пределах картинки. Имеет смысл отменить перетаскивание (<b>:is-dragging-area="false"</b>), если нужно лучше выделить какую-нибудь область на картинке. Потянув за края области, изменится высота, или ширина, но сама она не сдвинется, так можно точнее маркировать картинку.
      </p>

      <p>
        <strong>isReadonly</strong> - возможность отмены создания новых областей. Отмена перетаскивания и растягивания существующих маркированных областей. По умолчанию равно false. В большинстве случаев, этот параметр нужен тогда, когда нам нужно отобразить маркированные области без возможности их редактирования. К примеру мы получили с сервера картинку, и маркированными областями (текст который нейронка смогла распознать), и нам нужно это отобразить без возможности редактирования. Просто добавьте этот параметр к моему компоненту, или задайте для него значение <b>true</b>.
      </p>

      <p>
        Eсли <strong>isMarkup</strong>, <strong>isResizeArea</strong> и <strong>isDraggingArea</strong> будут равны false, то вы не сможете создавать, растягивать и переносить маркированные области, по сути это будет почти тоже самое, что добавлен параметр <strong>isReadonly</strong> или <strong>:is-readonly="true"</strong>. Отличие заключается в том, что при <strong>isReadonly</strong> равном true, клик по маркированной области не сделает её активной. А если вы отключите <strong>isMarkup</strong>, <strong>isResizeArea</strong> и <strong>isDraggingArea</strong>, то при клике по маркированной области она будет становиться активной. Это может пригодиться, если вам пришли с сервера картинка, маркированные области, и вам нужно понять, где какая маркированная область находится на картинке. Или при клике по маркированным областям нужно будет подгружать какие-то данные с сервера.
      </p>

      <p>
        Так-же имейте ввиду, что на мобильном устройстве, или планшете, вы не сможете прокручивать вниз/вверх, если будете касаться моего компонента. Для маркирования картинки, я отменяю стандартное поведение <b>touch</b>. Прокрутка будет возможна, если вы отключите <strong>isMarkup</strong>, <strong>isResizeArea</strong> и <strong>isDraggingArea</strong>, или добавите <strong>isReadonly</strong> к моему компоненту.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>Labeling an image, working with labeled areas</h3>

      <p>
        <strong>isMarkup</strong> - the ability to create labeled areas in an image. It is set to true by default. To mark, you first need to select a file. It can be useful if you need to create labeled areas depending on some condition. For example, we have created an area, and we cannot create a new one until we enter the name of the area, or some other parameter. The marked areas can be stretched and moved within the picture. If this behavior is not required, see the parameters below.
      </p>

      <p>
        <strong>isResizeArea</strong> - the ability to stretch the labeled areas. It is set to true by default. The marked areas can be stretched by pulling on the edges of the area. If you look at yandex or google images, you can stretch them by pulling on the corners of the marked area. As I wrote above, the main purpose of my component is <ocr-def lang="eng" />. The marking area in the picture may be very small, and special precision is needed here. Imagine that you have inserted an image with a width of 10000px into an area with a width of 400px. The image will shrink by 25 times. If you pull on the left or right edge, only the width of the marked area will change, it will not move anywhere. This gives you some accuracy when labeling an image.
      </p>

      <p>
        <strong>isDraggingArea</strong> - the ability to move labeled areas. It is set to true by default. You can only move areas within the image. It makes sense to cancel dragging (<b>:is-dragging-area="false"</b>) if you need to better highlight an area in the image. By pulling on the edges of the area, the height or width will change, but it will not move itself, so you can mark the image more accurately.
      </p>

      <p>
        <strong>IsReadOnly</strong> - the ability to cancel the creation of new areas. Canceling dragging and stretching of existing labeled areas. The default value is false. In most cases, this parameter is needed when we need to display the labeled areas without the possibility of editing them. For example, we received a picture from the server, with labeled areas (text that the neural network was able to recognize), and we need to display it without the possibility of editing. Just add this parameter to my component, or set it to <b>true</b>.
      </p>

      <p>
        If <strong>isMarkup</strong>, <strong>isResizeArea</strong>, and <strong>isDraggingArea</strong> are set to false, then you will not be able to create, stretch, and move labeled areas. In fact, it will be almost the same as adding the <strong>IsReadOnly parameter</strong> or <strong>:is-readonly="true"</strong>. The difference is that when <strong>IsReadOnly</strong> is set to true, clicking on the marked area will not make it active. And if you disable <strong>isMarkup</strong>, <strong>isResizeArea</strong> and <strong>isDraggingArea</strong>, then when you click on the marked area, it will become active. This can be useful if you have received a picture from the server, marked areas, and you need to understand where which marked area is in the picture. Or when clicking on the marked areas, you will need to upload some data from the server.
      </p>

      <p>
        Also keep in mind that on a mobile device or tablet, you will not be able to scroll down/up if you touch my component. To label an image, I'm canceling the standard <b>touch</b> behavior. Scrolling will be possible if you disable <strong>isMarkup</strong>, <strong>isResizeArea</strong> and <strong>isDraggingArea</strong>, or add <strong>IsReadOnly</strong> to my component.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
