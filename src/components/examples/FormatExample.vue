<template>
  <card-item
    url="src/components/examples/MainExample.vue"
    :is-eng="isEng"
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
        :image-src="file"
        v-model="areas"
        v-model:active-id="activeId"
        @is-load-image="changeIsLoadImage"
        :format="formatId"
      />

      <ui-row
        type="items"
        space-between
        class="card-mark-up-btn"
      >
        <ui-file
          v-model="file"
          :is-active="isLoadImg"
          :is-eng="isEng"
        />

        <ui-button
          type-btn="warning"
          :disabled="file === null"
          @click="resetFile"
        >
          {{ resetText }}
        </ui-button>
      </ui-row>

      <view-code
        v-if="areas.length > 0"
        :code="areas"
        :is-eng="isEng"
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

      <h2 v-if="file === null">
        {{ notImagesForAreas }}
      </h2>

      <h2 v-if="areas.length === 0 && file !== null">
        {{ notAreas }}
      </h2>

      <template v-if="areas.length > 0">
        <h2 >
          {{ notListAreas }}
        </h2>

        <template
          v-for="item in areas"
          :key="item.id"
        >
          <form-group
            v-if="item.isEdit"
            v-model:x="item.x"
            v-model:y="item.y"
            v-model:width="item.width"
            v-model:height="item.height"
            v-model:name="item.name"
            v-model:is-edit="item.isEdit"
            :id="item.id"
            :active-id="activeId"
            :is-eng="isEng"
            @click="changeActiveId(item.id)"
            @delete-area="deleteArea(item.id)"
          />

          <form-area
            v-else
            v-model:is-edit="item.isEdit"
            :id="item.id"
            :active-id="activeId"
            :x="item.x"
            :y="item.y"
            :width="item.width"
            :height="item.height"
            :name="item.name"
            :is-eng="isEng"
            @click="changeActiveId(item.id)"
            @delete-area="deleteArea(item.id)"
          />
        </template>
      </template>
    </template>
  </card-item>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import useMainExample from './useMainExample.js';

  import CardItem from '@/components/CardItem.vue';
  //import LabelingImage from 'lib/index.es.js';
  import LabelingImage from '@/components/labeling-image/index.js';
  import FormGroup from '@/components/FormGroup.vue';
  import FormArea from '@/components/FormArea.vue';
  import ViewCode from '@/components/ViewCode.vue';

  const isLoadImg = ref(false);
  const changeIsLoadImage = (e) => isLoadImg.value = e;

  const props = defineProps(['isEng']);

  const isEng = computed(() => props.isEng);

  const formatId = ref('COCO');
  const formatOptions = ref([
    {
      id: 'pascalvoc',
      title: 'Pascal Voc'
    },
    {
      id: 'yolo',
      title: 'Yolo'
    },
    {
      id: 'COCO',
      title: 'COCO'
    }
  ]);

  const headerText = computed(() => {
    if (props.isEng) return "Select the neural network format."

    return "Выберите формат нейронной сети";
  });

  const {
    file,
    resetFile,
    areas,
    activeId,
    changeActiveId,
    deleteArea,
    // Интернациогализация
    resetText,
    notImagesForAreas,
    notAreas,
    notListAreas
  } = useMainExample(isEng);
</script>

<style lang="scss" scoped>
  .format-example-top {
    margin: 0 0 15px;
  }
</style>
