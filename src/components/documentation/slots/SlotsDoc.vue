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
        Я реализовал 2 слота, "first" и "last". Слот "first" будет самым первым слоем, всё, что вы туда добавите будет находиться под всеми остальными элементами. Он будет находиться под маркированными областями, под активной маркированной областью, и под областью в момент маркирования картинки. Слот "last" будет находиться над всеми остальными элементами, он будет их перекрывать. Скорее всего вы будете пользоваться слотом "last", туда можно будет добавить логотип компании, элементы управления маркированием картинки, если это потребуется.
      </p>

      <p>
        Пример ниже весьма условный, если вы хотите более детально разобраться в том, как работать со слотами откройте <ui-link
          type="site"
          href="examples"
          title="Примеры"
          :query="props.query"
        >страницу примеров</ui-link>, и посмотрите все примеры со слотами, там есть ссылка на код примеров. Делается это следующим образом:
      </p>

      <slots-code />

      <p>
        Выше получился достаточно длинный пример. Я вставил кусок кода из одного примера со слотами. Кода много, но в данном примере важны секции "template". В слоте "first", я вывожу текст с подсказками, для этого я ниже добавил массив "hints", он занимает много места. В слоте "last" я вовожу картинку, в реальных примерах это логотип Бэтмена, здесь я не знаю какую картинку указать. Всё остальное не принципиально. В реальных примерах я взял паспорт с Бендером, вставил туда маркированные области (areas), в примере выше они тоже занимают много места. Я думаю, что всё должно быть наглядно и понятно.
      </p>
      
      <p>
        Элементы SVG стилизуются не много не так, как HTML элементы. К примеру, для того, чтобы изменить цвет текста, используется свойство "fill", а не "color". Различия не сильные, посмотрите другие примеры со <ui-link
          type="site"
          href="examples"
          title="Примеры"
          :query="props.query"
        >слотами</ui-link>, я думаю всё станет понятнее.
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
        I have implemented 2 slots, "first" and "last". The "first" slot will be the very first layer, everything you add there will be under all the other elements. It will be located under the labeled areas, under the active labeled area, and under the area at the time of labeling the image. The "last" slot will be above all other elements, it will overlap them. Most likely, you will use the "last" slot, where you can add the company's logo and image labeling controls, if necessary.
      </p>

      <p>
        The example below is very conditional, if you want to understand in more detail how to work with slots, open <ui-link>.
          type="site"
          href="examples"
          title="Examples"
          :query="props.query"
        >the examples page</ui-link>, and check out all the examples with slots, there is a link to the sample code. This is done as follows:
      </p>

      <slots-code is-eng />

      <p>
        The above example is quite long. I have inserted a piece of code from one example with slots. There is a lot of code, but the "template" sections are important in this example. In the "first" slot, I output text with hints, for this I added an array of "hints" below, it takes up a lot of space. In the "last" slot, I include a picture, in real examples this is the Batman logo, here I do not know which picture to specify. Everything else is not important. In the real examples, I took a passport with a Bender, inserted the labeled areas there, in the example above they also take up a lot of space. I think everything should be clear and understandable.
      </p>
      
      <p>
        SVG elements are styled not much differently than HTML elements. For example, in order to change the color of the text, the "fill" property is used, not "color". The differences are not strong, check out other examples with <ui-link
          type="site"
          href="examples"
          title="Examples"
          :query="props.query"
        >slots</ui-link>, I think everything will become clearer.
      </p>
    </template>
  </div>
</template>

<script setup>
  import SlotsCode from '@/components/code/SlotsCode.vue';

  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
