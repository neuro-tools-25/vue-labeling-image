<template>
  <card-item
    url="src/components/examples/MainExample.vue"
    :is-eng="props.isEng"
  >
    <template #desc>
      <template v-if="!props.isEng">
        <p>Пока текста нет</p>
      </template>

      <template v-if="props.isEng">
        <p>
          No text
        </p>
      </template>
    </template>

    <template #markup>
      <labeling-image
        :image-src="imageSrc"
        v-model="areas"
        v-model:active-id="activeId"
        :is-markup="false"
        :format="formatIdComp"
      />

      <view-code
        :code="areas"
        :is-eng="props.isEng"
      />
    </template>

    <template #form>
      <div class="format-example-top">
        <h2>{{ headerText }}</h2>

        <ui-select
          v-model="formatId"
          :options="formatOptions"
        />
      </div>

      <h2>
        {{ header }}
      </h2>

      <form-area
        v-for="item in areas"
        :id="item.id"
        :key="item.id"
        :x="item.x"
        :y="item.y"
        :width="item.width"
        :height="item.height"
        :bBox="item.bBox"
        :name="item.name"
        :is-eng="props.isEng"
        read-only
      />
    </template>
  </card-item>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import useFormat from './useFormat.js';

  //import LabelingImage from 'lib/index.es.js';
  import LabelingImage from '@/components/labeling-image/index.js';

  import CardItem from '@/components/CardItem.vue';
  import FormArea from '@/components/FormArea.vue';
  import ViewCode from '@/components/ViewCode.vue';

  import { imageStud } from '@/assets/image-stud.js';

  const imageSrc = ref(imageStud);

  const props = defineProps(['isEng']);

  const isEng = computed(() => props.isEng);

  const {
    formatId,
    formatOptions,
    formatIdComp
  } = useFormat(isEng);

  const headerText = computed(() => {
    if (props.isEng) return "Select the neural network format."

    return "Выберите формат нейронной сети";
  });

  const activeId = ref(1794915080222);
  const areas = ref([
    {
      id: 1794915080222,
      name: 'Photo',
      x: 3.7704918032786887,
      y: 25.364431486880466,
      width: 28.36065573770492,
      height: 58.309037900874635,
      bBox: [
        0.03770491803278689,
        0.2536443148688047,
        0.2836065573770492,
        0.5830903790087464
      ]
    },
    {
      id: 1794915126318,
      name: 'Last name',
      x: 54.26229508196722,
      y: 11.661807580174926,
      width: 20,
      height: 6.1224489795918355,
      bBox: [
        0.5426229508196722,
        0.11661807580174927,
        0.2,
        0.06122448979591835
      ]
    },
    {
      id: 1794915179094,
      name: 'Series',
      x: 92.62295081967213,
      y: 22.740524781341108,
      width: 4.2622950819672125,
      height: 58.89212827988338,
      bBox: [
        0.9262295081967212,
        0.2274052478134111,
        0.04262295081967213,
        0.5889212827988338
      ]
    },
  ]);

  const header = computed(() => {
    if (props.isEng) return 'List of labeling areas:';

    return 'Список маркированных областей';
  });
</script>

<style lang="scss" scoped>
  .format-example-top {
    margin: 0 0 15px;
  }
</style>
