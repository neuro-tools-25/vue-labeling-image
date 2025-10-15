<template>
  <div class="props-grid">
    <template v-if="!props.isEng">
      <h2>
        Слоты
      </h2>

      <p>
        Слоты могут пригодиться для того, чтобы вставить в мой компонент логотип компании, подсказки к маркированным областям во время отладки, какие-то картинки, элементы управления маркированием в виде иконок, или что-то подобное. Для начала откройте <ui-link
          type="site"
          href="examples"
          title="Примеры"
          :query="props.query"
        >страницу примеров</ui-link>, и посмотрите примеры со слотами. Тут всё должно быть достаточно просто.
      </p>

      <p>
        Мой компонент под капотом использует SVG. Если вы посмотрите yandex, или google картинки, то там компоненты для выделения области на картинке сделаны обычными div-ми. При такой разметке можно выделять прямоугольные области, а вот произвольные области выделить не получится. У меня в планах такое реализовать, а иначе как через SVG это сделать не получится.
      </p>

      <p>
        Я реализовал 2 слота, "first" и "last". Слот "first" будет самым первым слоем, всё, что вы туда добавите будет находиться под всеми остальными элементами. Он будет находиться под маркированными областями, под активной маркированной областью, и под областью в момент маркирования картинки. Слот "last" будет находиться над всеми остальными элементами, он будет их перекрывать. Скорее всего вы будете пользоваться слотом "last", туда можно будет добавить логотип компании, элементы управления маркированием, если это потребуется.
      </p>
    </template>

    <template v-if="props.isEng">
      <h2>
        Slots
      </h2>

      <p>
        The slots can be useful for inserting the company's logo into my component, hints to the marked areas during debugging, some pictures, labeling controls in the form of icons, or something similar.
        To get started, open <ui-link
          type="site"
          href="examples"
          title="Examples"
          :query="props.query"
        >the examples page</ui-link>, and see the examples with slots. Everything should be quite simple here.
      </p>

      <p>
        My component under the hood uses SVG. If you look at yandex or google images, then the components for highlighting the area in the picture are made with ordinary divs. With this layout, you can select rectangular areas, but you will not be able to select arbitrary areas. I have plans to implement this, otherwise it won't be possible to do it through SVG.
      </p>

      <p>
        I have implemented 2 slots, "first" and "last". The "first" slot will be the very first layer, everything you add there will be under all the other elements. It will be located under the labeled areas, under the active labeled area, and under the area at the time of labeling the image. The "last" slot will be above all other elements, it will overlap them. Most likely, you will use the "last" slot, where you can add the company's logo and labeling controls, if necessary.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
