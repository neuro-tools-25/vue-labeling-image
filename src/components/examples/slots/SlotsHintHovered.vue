<template>
  <card-item
    url="src/components/examples/slots/SlotsHintHovered.vue"
    :is-eng="props.isEng"
    class="theme-slots"
  >
    <template #desc>
      <template v-if="!props.isEng">
        <p>
          Ещё один пример со слотами. В этом примере я отменю возможность создания новых маркированных областей. Возможность растягивать и переносить маркированные области я тоже отменю. В этом примере я снова делаю подсказки для маркированных областей, но на этот раз они будут появляться при наведении на маркированные области. Для вывода подсказок я буду использовать слот "last", они будут перекрывать все остальные элементы. Для маркирования документа я под капотом использую svg-ку, поэтому вставлять в данные слоты нужно те элементы, которые допустимы в svg. Я использую "<ui-link 
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/text"
            title="Text SVG element">
            {{'<'}}text{{'>'}}
          </ui-link>". Естественно, что и стилизовать данный элемент нужно не так, как другие CSS элементы. Для задания цвета для элемента "<ui-link 
              href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/text"
              title="Text SVG element">
              {{'<'}}text{{'>'}}
            </ui-link>" нужно использовать "fill", а не "color".
        </p>
      </template>

      <template v-if="props.isEng">
        <p>
          Another example is with slots. In this example, I will disable the ability to create new labeled areas. I will also cancel the ability to stretch and move the marked areas. In this example, I'm making tooltips for the labeled areas again, but this time they will appear when hovering over the labeled areas. I will use the "last" slot to display the hints, they will overlap all other elements. I use svg tags under the hood to mark the document, so I need to insert the elements that are allowed in svg into these slots. I use "<ui-link 
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/text"
            title="Text SVG element">
            {{'<'}}text{{'>'}}
          </ui-link>". Naturally, this element should be styled differently from other CSS elements. To set the color for the element "<ui-link 
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
        v-model:hovered-id="hoveredId"
        is-readonly
        theme="red"
      >
        <template #last>
          <text
            v-for="{ x, y, id, name: title } in areas"
            :key="id"
            :x="`${x}%`"
            :y="`${y}%`"
            :class="[ hoveredId === id ? classTextActive : '' ]"
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

  const classTextActive = 'theme-slots_text-active';

  const hoveredId = ref(null);
</script>

<style lang="scss" scoped>
  .theme-slots {
    image {
      transform: translateX(-85px);
      cursor: default;
    }

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
