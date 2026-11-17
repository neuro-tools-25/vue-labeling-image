<template>
  <card-item
    url="src/components/examples/StaticAreas.vue"
    :is-eng="props.isEng"
  >
    <template #desc>
      <p v-if="!props.isEng">
        Данный пример нужен для того, чтобы только показать маркированные области. В данном примере нельзя создавать новые маркированные области, нельзя растягивать маркированные области, и перемещать их по картинке. Когда это может быть необходимо? Вы маркировали картинку, отправили данные на сервер. Через какое-то время, зашли на страницу, и получили эти данные через AJAX запрос. Вам нужно просто узнать что вы маркировали в прошлый раз. Достигается это просто параметром "is-readonly".
      </p>

      <p v-if="props.isEng">
        This example is needed only to show the labeled areas. In this example, you cannot create new labeled areas, you cannot stretch the labeled areas, and you cannot move them around the image. When might this be necessary? You marked the image and sent the data to the server. After some time, we went to the page and received this data through an AJAX request. You just need to find out what you labeled last time. This is achieved simply by using the "is-readonly" parameter.
      </p>
    </template>

    <template #markup>
      <labeling-image
        :image-src="imageSrc"
        v-model="areas"
        key-title="name"
        is-readonly
      />

      <view-code
        :code="areas"
        :is-eng="isEng"
      />
    </template>

    <template #form>
      <h2>{{ header }}</h2>

      <form-area
        v-for="item in areas"
        :key="item.id"
        :x="item.x"
        :y="item.y"
        :width="item.width"
        :height="item.height"
        :name="item.name"
        :is-eng="props.isEng"
        :bBox="item.bBox"
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
        0.943089430894309,
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
</script>

<style lang="scss">
  
</style>
