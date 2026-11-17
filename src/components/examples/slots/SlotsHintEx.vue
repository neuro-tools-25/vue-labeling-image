<template>
  <card-item
    url="src/components/examples/slots/SlotsHintEx.vue"
    :is-eng="props.isEng"
    class="theme-slots"
  >
    <template #desc>
      <template v-if="!props.isEng">
        <p>
          Ещё один пример со слотами. Маркированные области можно создавать, но нельзя переносить по картинке и растягивать. В этом примере я снова делаю подсказки для маркированных областей, но на этот раз они будут появляться по клику по маркированной области, так вы их не увидите. В моём компоненте есть 3 слота, "first", "last" и "html". В данном примере я буду использовать слоты "first" и "last". На этот раз я вывожу подсказки в слоте "last", они будут перекрывать все остальные элементы, а картинку я вывожу в слоте "first", она будет находиться под всеми элементами. Пример условный, поэтому в качестве логотипа я взял логотип Бэтмена. Если вы сейчас попробуете маркировать картинку, но маркированная область должна будет перекрыть картинку. Для маркирования документа я под капотом использую svg-ку, поэтому вставлять в данные слоты нужно те элементы, которые допустимы в svg. Я использкю "<ui-link 
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
            </ui-link>" нужно использовать "fill", а не "color".
        </p>
      </template>

      <template v-if="props.isEng">
        <p>
          Another example is with slots. You can create labeled areas, but you can't move them around the image or stretch them. In this example, I'm making suggestions for the marked areas again, but this time they will appear when you click on the marked area, so you won't see them. My component has 3 slots, "first", "last" and "html". In this example, I will use the "first" and "last" slots. This time I display the hints in the "last" slot, they will overlap all other elements, and I display the picture in the "first" slot, it will be located under all the elements. The example is conditional, so I took the Batman logo as the logo. If you try to label the image now, but the labeled area should cover the image. I use svg tags under the hood to mark the document, so I need to insert the elements that are allowed in svg into these slots. I use "<ui-link 
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
            </ui-link>" you need to use "fill", not "color".
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
          <batman-logo />
        </template>

        <template #last>
          <text
            v-for="{ x, y, id, name: title } in areas"
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
        :bBox="item.bBox"
        read-only
      />
    </template>
  </card-item>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import CardItem from '@/components/CardItem.vue';
  import BatmanLogo from '@/components/examples/slots/logos/BatmanLogo.vue';
  import LabelingImage from 'lib/index.es.js';
  import ViewCode from '@/components/ViewCode.vue';
  import FormArea from '@/components/FormArea.vue';

  import { imageStud } from '@/assets/image-stud.js';

  const imageSrc = ref(imageStud);

  const areas = ref([
    {
      id: 1759337197573,
      name: "Photo",
      width: 15.934959349593496,
      height: 40.46242774566473,
      x: 5.853658536585367,
      y: 23.410404624277454,
      bBox: [
        0.05853658536585367,
        0.23410404624277454,
        0.15934959349593496,
        0.4046242774566473
      ]
    },
    {
      id: 1759337204073,
      name: "First name",
      width: 25.853658536585368,
      height: 8.38150289017341,
      x: 50.40650406504065,
      y: 28.901734104046245,
      bBox: [
        0.5040650406504065,
        0.28901734104046245,
        0.25853658536585368,
        0.0838150289017341
      ]
    },
    {
      id: 1759337222917,
      name: "Last name",
      width: 20.48780487804878,
      height: 7.225433526011561,
      x: 53.98373983739837,
      y: 10.982658959537572,
      bBox: [
        0.5398373983739837,
        0.10982658959537572,
        0.2048780487804878,
        0.07225433526011561
      ]
    },
    {
      id: 1759337232429,
      name: "Surname",
      width: 13.658536585365855,
      height: 6.9364161849710975,
      x: 55.447154471544714,
      y: 39.017341040462426,
      bBox: [
        0.55447154471544717,
        0.39017341040462426,
        0.13658536585365855,
        0.069364161849710975
      ]
    },
    {
      id: 1759337240377,
      name: "Gender",
      width: 5.040650406504065,
      height: 6.358381502890173,
      x: 39.67479674796748,
      y: 50,
      bBox: [
        0.3967479674796748,
        0.50,
        0.05040650406504065,
        0.06358381502890173
      ]
    },
    {
      id: 1759337248220,
      name: "Birthplace",
      width: 30.081300813008134,
      height: 6.9364161849710975,
      x: 49.43089430894309,
      y: 58.67052023121387,
      bBox: [
        0.4943089430894309,
        0.5867052023121387,
        0.30081300813008134,
        0.069364161849710975
      ]
    },
    {
      id: 1759337254262,
      name: "Date of birth",
      width: 30.24390243902439,
      height: 7.225433526011561,
      x: 57.56097560975609,
      y: 48.554913294797686,
      bBox: [
        0.5756097560975609,
        0.48554913294797686,
        0.3024390243902439,
        0.07225433526011561
      ]
    },
    {
      id: 1759337260502,
      name: "Series",
      width: 3.577235772357723,
      height: 59.53757225433526,
      x: 92.84552845528455,
      y: 21.965317919075144,
      bBox: [
        0.9284552845528455,
        0.21965317919075144,
        0.03577235772357723,
        0.595375722543352
      ]
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
</script>

<style lang="scss" scoped>
  .theme-slots {
    text {
      cursor: pointer;
      fill: #000;
      font-weight: bold;
      user-select: none;
      opacity: 0;
      transform: translateY(-40085px);
      cursor: default;

      &::selection {
        opacity: 0;
      }
    }

    & &_text-active {
      opacity: 1;
      transform: translateY(-7px);
    }
  }
</style>
