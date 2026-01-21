<template>
  <code-markup
    :is-header="false"
    :code="codeText"
    v-bind="codeParam"
    :line-count="15"
  >
    <code-line>
      <mu-tag code="<template>" />
    </code-line>
    <code-line level-2>
      <mu-tag code="<labeling-image" />
    </code-line>
    <code-line level-3>
      <mu-attr code=":image-src" />
      <mu-type code="=" />
      <mu-text code='"file"' />
    </code-line>
    <code-line level-3>
      <mu-attr code="v-model" />
      <mu-type code="=" />
      <mu-text code='"areas"' />
    </code-line>
    <code-line level-3>
      <mu-attr code="v-model:active-id" />
      <mu-type code="=" />
      <mu-text code='"activeId"' />
    </code-line>
    <code-line level-3>
      <mu-attr code="v-model:hovered-id" />
      <mu-type code="=" />
      <mu-text code='"hoveredId"' />
    </code-line>
    <code-line level-3>
      <mu-attr code="@is-load-image" />
      <mu-type code="=" />
      <mu-text code='"changeIsLoadImage"' />
    </code-line>
    <code-line level-3>
      <mu-attr code="@get-sizes" />
      <mu-type code="=" />
      <mu-text code='"changeSizes"' />
    </code-line>
    <code-line level-2>
      <mu-tag code="/>" />
    </code-line>

    <code-line>
      <mu-tag code="</template>" />
    </code-line>

    <code-line />

    <code-line>
      <mu-tag code="<script " />
      <mu-attr code="setup" />
      <mu-tag code=">" />
    </code-line>
    <code-line level-2>
      <mu-key-words code="import " />
      <mu-type code="{ ref } " />
      <mu-key-words code="from " />
      <mu-text code='"vue"' />
      <mu-type code=";" />
    </code-line>

    <code-line />

    <code-line level-2>
      <mu-key-words code="import " />
      <mu-type code="LabelingImage " />
      <mu-key-words code="from " />
      <mu-text code='"vue-labeling-image"' />
      <mu-type code=";" />
    </code-line>
    <code-line level-2>
      <mu-key-words code="import " />
      <mu-text code='"vue-labeling-image/lib/styles.css"' />
      <mu-type code=";" />
    </code-line>

    <code-line />

    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="file " />
      <mu-type code="= " />
      <mu-key-words code="ref" />
      <mu-type code="(" />
      <mu-key-words code="null" />
      <mu-type code=");" />
    </code-line>
    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="areas " />
      <mu-type code="= " />
      <mu-key-words code="ref" />
      <mu-type code="([]);" />
    </code-line>

    <code-line />

    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="activeId " />
      <mu-type code="= " />
      <mu-key-words code="ref" />
      <mu-type code="(" />
      <mu-key-words code="null" />
      <mu-type code=");" />
    </code-line>

    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="hoveredId " />
      <mu-type code="= " />
      <mu-key-words code="ref" />
      <mu-type code="(" />
      <mu-key-words code="null" />
      <mu-type code=");" />
    </code-line>

    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="isLoadImg " />
      <mu-type code="= " />
      <mu-key-words code="ref" />
      <mu-type code="(" />
      <mu-key-words code="false" />
      <mu-type code=");" />
    </code-line>

    <code-line />

    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="widthImg " />
      <mu-type code="= " />
      <mu-key-words code="ref" />
      <mu-type code="(" />
      <mu-key-words code="null" />
      <mu-type code=");" />
    </code-line>
    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="heightImg " />
      <mu-type code="= " />
      <mu-key-words code="ref" />
      <mu-type code="(" />
      <mu-key-words code="null" />
      <mu-type code=");" />
    </code-line>
    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="realWidthImg " />
      <mu-type code="= " />
      <mu-key-words code="ref" />
      <mu-type code="(" />
      <mu-key-words code="null" />
      <mu-type code=");" />
    </code-line>
    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="realHeightImg " />
      <mu-type code="= " />
      <mu-key-words code="ref" />
      <mu-type code="(" />
      <mu-key-words code="null" />
      <mu-type code=");" />
    </code-line>

    <code-line />

    <code-line
      level-2
      visible-copy
    >
      <mu-key-words code="const " />
      <mu-variable code="changeIsLoadImage " />
      <mu-type code="= (isLoad) => " />
      <mu-key code="isLoadImg." />
      <mu-type code="value " />
      <mu-type code="= isLoad;" />
    </code-line>

    <code-line />

    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="changeSizes " />
      <mu-type code="= ({" />
    </code-line>

    <code-line level-3>
      <mu-type code="widthImage," />
    </code-line>
    <code-line level-3>
      <mu-type code="heightImage," />
    </code-line>
    <code-line level-3>
      <mu-type code="realWidthImage," />
    </code-line>
    <code-line level-3>
      <mu-type code="realHeightImage," />
    </code-line>
    <code-line level-2>
      <mu-type code="}) => {" />
    </code-line>

    <code-line level-3>
      <mu-key code="widthImg." />
      <mu-type code=".value = widthImage;" />
    </code-line>
    <code-line level-3>
      <mu-key code="heightImg." />
      <mu-type code=".value = heightImage;" />
    </code-line>
    <code-line level-3>
      <mu-key code="realWidthImg." />
      <mu-type code=".value = realWidthImage;" />
    </code-line>
    <code-line level-3>
      <mu-key code="realHeightImg." />
      <mu-type code=".value = realHeightImage;" />
    </code-line>

    <code-line level-2>
      <mu-type code="}" />
    </code-line>
    <code-line>
      <mu-tag code="</script>" />
    </code-line>
  </code-markup>
</template>

<script setup>
  import useLang from '@/components/code/uselang.js';

  const props = defineProps({
    isEng: {
      type: Boolean,
      default: false
    }
  });

  const codeText = `<template>
  <labeling-image
    :image-src="file"
    v-model="areas"
    v-model:active-id="activeId"
    v-model:hovered-id="hoveredId"
    @is-load-image="changeIsLoadImage"
    @get-sizes="changeSizes"
  />
</template>

${'<script setup>'}
  import { ref } from 'vue';

  import LabelingImage from 'vue-labeling-image';
  import 'vue-labeling-image/lib/styles.css';

  const file = ref(null);
  const areas = ref([]);

  const activeId = ref(null);
  const hoveredId = ref(null);
  const isLoadImg = ref(false);

  const widthMarkupArea = ref(null);
  const heightMarkupArea = ref(null);
  const realWidthImg = ref(null);
  const realHeightImg = ref(null);

  const changeIsLoadImage = (isLoad) => isLoadImg.value = isLoad;

  const changeSizes = ({
    widthArea,
    heightArea,
    realWidthImage,
    realHeightImage,
  }) => {
    widthMarkupArea.value = widthArea;
    heightMarkupArea.value = heightArea;
    realWidthImg.value = realWidthImage;
    realHeightImg.value = realHeightImage;
  }
${'</'}script>`;

  const codeParam = useLang(props);
</script>