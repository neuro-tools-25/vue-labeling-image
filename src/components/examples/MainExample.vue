<template>
  <card-item
    url="src/components/examples/MainExample.vue"
    :is-eng="isEng"
  >
    <template #desc>
      <template v-if="!props.isEng">
        <p>
          Данный пример нужен для того, чтобы показать как мой компонент ведет себя с минимальными настройками. Вы ничего не увидите пока не выберите какую-нибудь картинку, поэтому для начала выберите её. После того, как картинка выбрана, разметьте её (нажмите правую кнопку мыши, и проведите по картинке, если вы открыли данную страницу с мобильного телефона, или планшета, то просто проведите пальцем по картинке). Я бы вам порекомендовал создать хотя бы 3 маркированные области. Самая последняя область которую вы создадите будет активной, она будет отличаться от других областей цветом. Если вы хотите сделать другую область активной, просто кликните по ней. Маркированные области можно, растягивать (для этого просто потяните их за края), и переносить по картинке.
        </p>

        <p>
          Как только вы создадите хотя бы одну маркированную область, справа появится блок с параметрами этой области. Каждая область которую вы создадите будет отображена справа. Если вы открыли данную страницу с мобильного телефона, то блок с маркированными областями будет находиться не справа, а под моим компонентом. Как правило, обычному пользователю, хотелось бы видеть, параметры маркированных областей, я их отображаю так. Кликнув на блок с параметрами маркированной области, область маркирования на картинке станет активной. Так будет проще понять, какая маркированная область где находится на картинке.
        </p>
      </template>

      <template v-if="props.isEng">
        <p>
          This example is needed to show how my component behaves with minimal settings. You won't see anything until you select an image, so first select it. After the image is selected, mark it up (right-click and swipe on the image, if you opened this page from a mobile phone or tablet, then just swipe on the image). I would recommend that you create at least 3 labeled areas. The most recent area that you create will be active, it will differ from other areas in color. If you want to make another area active, just click on it. The marked areas can be stretched (just pull them by the edges to do this), and moved around the picture.
        </p>

        <p>
          As soon as you create at least one labeled area, a block with the parameters of this area will appear on the right. Each area that you create will be displayed on the right. If you opened this page from your mobile phone, then the block with the labeled areas will be located not on the right, but under my component. As a rule, an ordinary user would like to see the parameters of the labeled areas, I display them like this. By clicking on the block with the parameters of the marked area, the marking area in the image will become active. This will make it easier to understand which labeled area is where in the picture.
        </p>
      </template>
    </template>

    <template #markup>
      <labeling-image
        :image-src="file"
        v-model="areas"
        v-model:active-id="activeId"
        @is-load-image="changeIsLoadImage"
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
  import LabelingImage from 'lib/index.es.js';
  import FormGroup from '@/components/FormGroup.vue';
  import FormArea from '@/components/FormArea.vue';
  import ViewCode from '@/components/ViewCode.vue';

  const isLoadImg = ref(false);
  const changeIsLoadImage = (e) => isLoadImg.value = e;

  const props = defineProps(['isEng']);

  const isEng = computed(() => props.isEng);

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

<style lang="scss">
  
</style>
