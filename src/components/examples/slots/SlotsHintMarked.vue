<template>
  <card-item
    url="src/components/examples/slots/SlotsExample.vue"
    :is-eng="props.isEng"
    class="theme-slots"
  >
    <template #desc>
      <template v-if="!props.isEng">
        <p>
          Другой пример со слотами. В данном примере я делаю подсказки для маркированных областей, и вставляю логотип компании. Пример весьма условный, поэтому в качестве логотипа я взял логотип Бэтмена. Маркированные области в отличие от прошлого примера можно создавать, но их нельзя растягивать и переносить по картинке. Пример условный, и всё это при желании можно включить. В моём компоненте есть 2 слота, "first" и "last". В слоте "first" я вывожу подсказки. В слот "last" я вставил логотип Бэтмена. Смотрите как это всё устроено, слот "first", он самый первый, за ним идут маркированные области (области которые мы будем создавать, или те области которые нам нужно отобразить), за ним идёт активная область и область в момент маркирования картинки, а дальше будет находиться слот "last". Он будет последним и будет перекрывать все другие слои. Для маркирования документа я под капотом использую svg-ку, поэтому вставлять в данные слоты нужно те элементы, которые допустимы в svg. Я использкю "<ui-link 
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/text"
            title="Text SVG element">
            {{'<'}}text{{'>'}}
          </ui-link>" и "<ui-link 
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/image"
            title="Image SVG element">
            {{'<'}}image{{'>'}}</ui-link>". Естественно, что и стилизуются эти элементы с небольшими отличиями, для задания цвета для элемента "<ui-link 
              href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/text"
              title="Text SVG element">
              {{'<'}}text{{'>'}}
            </ui-link>" нужно использовать "fill", а не "color". Попробуйте по кликать по подсказкам. Посмотрите как маркированные области будут становиться активными, так будет понятнее какая подсказка к какой маркированной области относится. Попробуйте маркировать область в районе логотипа, логотип будет её перекрывать.
        </p>
      </template>

      <template v-if="props.isEng">
        <p>
          Another example is with slots. In this example, I make hints for the labeled areas, and insert the company logo. The example is very conditional, so I took the Batman logo as the logo. The labeled areas, unlike the previous example, can be created, but they cannot be stretched or moved around the image. The example is conditional, and all this can be included if desired. There are 2 slots in my component, "first" and "last". I display hints in the "first" slot. I inserted the Batman logo into the "last" slot. See how it all works, the "first" slot is the very first, followed by the labeled areas (the areas that we will create, or those areas that we need to display), followed by the active area and the area at the time of labeling the image, and then there will be the "last" slot. It will be the last one and will overlap all other layers. I use svg tags under the hood to mark the document, so I need to insert the elements that are allowed in svg into these slots. I use "<ui-link 
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/text"
            title="Text SVG element">
            {{'<'}}text{{'>'}}
          </ui-link>" and "<ui-link 
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/image"
            title="Image SVG element">
            {{'<'}}image{{'>'}}</ui-link>". Naturally, these elements are styled with minor differences to set the color for the element "<ui-link 
              href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/text"
              title="Text SVG element">
              {{'<'}}text{{'>'}}
            </ui-link>" you need to use "fill", not "color". Try clicking on the prompts. See how the labeled areas will become active, so it will be clearer which hint belongs to which labeled area. Try marking the area in the area of the logo, the logo will overlap it.
        </p>
      </template>
    </template>

    <template #markup>
      <labeling-image
        :image-src="imageSrc"
        v-model="areas"
        v-model:active-id="activeId"
        :is-resize-area="false"
        :is-dragging-area="false"
        theme="red"
      >
        <template #first>
          <text
            v-for="{ x, y, id, title } in hints"
            :key="id"
            :x="`${x}%`"
            :y="`${y}%`"
            :class="[ activeId === id ? classTextActive : '' ]"
            @mousedown="changeActiveId(id)"
            @touchstart="changeActiveId(id)"
          >
            {{ title }}
          </text>
        </template>

        <template #last>
          <image
            :href="logoStud"
            width="80"
            height="40"
            x="100%"
            y="10"
          />
        </template>
      </labeling-image>

      <view-code
        :code="areas"
        :is-eng="isEng"
      />
    </template>

    <template #form>
      <h2>{{ header }}</h2>

      <form-area
        v-for="item in areas"
        v-once
        :key="item.id"
        :x="item.x"
        :y="item.y"
        :width="item.width"
        :height="item.height"
        :name="item.name"
        :is-eng="props.isEng"
        :id="item.id"
        read-only
      />
    </template>
  </card-item>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import CardItem from '@/components/CardItem.vue';
  import LabelingImage from 'lib/index.es.js';
  import ViewCode from '@/components/ViewCode.vue';
  import FormArea from '@/components/FormArea.vue';

  import { imageStud } from '@/assets/image-stud.js';
  import { logoStud } from '@/assets/logo-example/logo-stud.js';

  const imageSrc = ref(imageStud);

  const areas = ref([
    {
      id: 1759337197573,
      name: "Photo",
      width: 15.934959349593496,
      height: 40.46242774566473,
      x: 5.853658536585367,
      y: 23.410404624277454,
    },
    {
      id: 1759337204073,
      name: "First name",
      width: 25.853658536585368,
      height: 8.38150289017341,
      x: 50.40650406504065,
      y: 28.901734104046245,
    },
    {
      id: 1759337222917,
      name: "Last name",
      width: 20.48780487804878,
      height: 7.225433526011561,
      x: 53.98373983739837,
      y: 10.982658959537572,
    },
    {
      id: 1759337232429,
      name: "Surname",
      width: 13.658536585365855,
      height: 6.9364161849710975,
      x: 55.447154471544714,
      y: 39.017341040462426,
    },
    {
      id: 1759337240377,
      name: "Gender",
      width: 5.040650406504065,
      height: 6.358381502890173,
      x: 39.67479674796748,
      y: 50,
    },
    {
      id: 1759337248220,
      name: "Birthplace",
      width: 30.081300813008134,
      height: 6.9364161849710975,
      x: 49.43089430894309,
      y: 58.67052023121387,
    },
    {
      id: 1759337254262,
      name: "Date of birth",
      width: 30.24390243902439,
      height: 7.225433526011561,
      x: 57.56097560975609,
      y: 48.554913294797686,
    },
    {
      id: 1759337260502,
      name: "Series",
      width: 3.577235772357723,
      height: 59.53757225433526,
      x: 92.84552845528455,
      y: 21.965317919075144,
    },
  ]);

  // Интернационализация
  const props = defineProps(['isEng']);

  const header = computed(() => {
    let text='Список маркированных областей:';
    if (props.isEng) text='List of labeling areas:';

    return text;
  });

  const activeId = ref(1759337197573);
  const changeActiveId = (id) => activeId.value = id;

  const classTextActive = 'theme-slots_text-active';

  const hints = [
    {
      x: 23,
      y: 38,
      title: 'Photo',
      id: 1759337197573,
    },
    {
      x: 54,
      y: 9,
      title: 'Last name',
      id: 1759337222917,
    },
    {
      x: 51,
      y: 26,
      title: 'First name',
      id: 1759337204073,
    },
    {
      x: 42,
      y: 44,
      title: 'Surname',
      id: 1759337232429,
    },
    {
      x: 71,
      y: 47,
      title: 'Date of birth',
      id: 1759337254262,
    },
    {
      x: 50,
      y: 71,
      title: 'Birthplace',
      id: 1759337248220,
    },
    {
      x: 38.5,
      y: 62,
      title: 'Gender',
      id: 1759337240377,
    },
    {
      x: 89,
      y: 88,
      title: 'Series',
      id: 1759337260502,
    }
  ]
</script>

<style lang="scss" scoped>
  .theme-slots {
    image {
      cursor: default;
      transform: translateX(-85px); 
    }

    text {
      cursor: pointer;
      fill: #006fff;
      font-weight: bold;
      user-select: none;
    }

    & &_text-active {
      fill: var(--mu-marking-rect-active-fill);
    }
  }
</style>
