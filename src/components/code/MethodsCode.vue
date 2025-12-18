<template>
  <ui-code
    :code="installText"
    :is-eng="props.isEng"
  >
    <ui-code-row>
      <ui-code-block>
        {{ '<template>' }}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row pl2>
      {{'<'}}<ui-code-import>labeling-image</ui-code-import>
    </ui-code-row>
    <ui-code-row pl3>
      :image-src="<ui-code-text>file</ui-code-text>"
    </ui-code-row>
    <ui-code-row pl3>
      v-model="<ui-code-text>areas</ui-code-text>"
    </ui-code-row>
    <ui-code-row pl3>
      v-model:active-id="<ui-code-text>activeId</ui-code-text>"
    </ui-code-row>
    <ui-code-row pl3>
      v-model:hovered-id="<ui-code-text>hoveredId</ui-code-text>"
    </ui-code-row>
    <ui-code-row pl3>
      @is-load-image="<ui-code-text>changeIsLoadImage</ui-code-text>"
    </ui-code-row>
    <ui-code-row pl3>
      @get-sizes="<ui-code-text>changeSizes</ui-code-text>"
    </ui-code-row>
    <ui-code-row pl2>
    {{'/>'}}
    </ui-code-row>
    <ui-code-row>
      <ui-code-block>
        {{ '</template>' }}
      </ui-code-block>
    </ui-code-row>

    <ui-code-row />

    <ui-code-row>
      <ui-code-block>
        {{'<script setup>'}}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row pl2>
      <ui-code-import>import</ui-code-import> { ref } <ui-code-import>from</ui-code-import> '<ui-code-text>vue</ui-code-text>';
    </ui-code-row>

    <ui-code-row pl2 />

    <ui-code-row pl2>
      <ui-code-import>import</ui-code-import> LabelingImage <ui-code-import>from</ui-code-import> '<ui-code-text>vue-labeling-image</ui-code-text>';
    </ui-code-row>
    <ui-code-row pl2>
      <ui-code-import>import</ui-code-import> 
      '<ui-code-text>vue-labeling-image/lib/styles.css</ui-code-text>';
    </ui-code-row>

    <ui-code-row />

    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>file</ui-code-var> = <ui-code-block>ref</ui-code-block>(<ui-code-import>null</ui-code-import>);
    </ui-code-row>
    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>areas</ui-code-var> = <ui-code-block>ref</ui-code-block>(<ui-code-import>[]</ui-code-import>);
    </ui-code-row>

    <ui-code-row />

    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>activeId</ui-code-var> = <ui-code-block>ref</ui-code-block>(<ui-code-import>null</ui-code-import>);
    </ui-code-row>

    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>hoveredId</ui-code-var> = <ui-code-block>ref</ui-code-block>(<ui-code-import>null</ui-code-import>);
    </ui-code-row>

    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>isLoadImg</ui-code-var> = <ui-code-block>ref</ui-code-block>(<ui-code-import>false</ui-code-import>);
    </ui-code-row>

    <ui-code-row />

    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>widthImg</ui-code-var> = <ui-code-block>ref</ui-code-block>(<ui-code-import>null</ui-code-import>);
    </ui-code-row>
    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>heightImg</ui-code-var> = <ui-code-block>ref</ui-code-block>(<ui-code-import>null</ui-code-import>);
    </ui-code-row>
    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>realWidthImg</ui-code-var> = <ui-code-block>ref</ui-code-block>(<ui-code-import>null</ui-code-import>);
    </ui-code-row>
    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>realHeightImg</ui-code-var> = <ui-code-block>ref</ui-code-block>(<ui-code-import>null</ui-code-import>);
    </ui-code-row>

    <ui-code-row />

    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>changeIsLoadImage</ui-code-var> = (isLoad) <ui-code-block>=></ui-code-block> isLoadImg.<ui-code-var>value</ui-code-var> = isLoad;
    </ui-code-row>

    <ui-code-row />

    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>changeSizes</ui-code-var> = ({
    </ui-code-row>

    <ui-code-row pl3>
      widthImage,
    </ui-code-row>
    <ui-code-row pl3>
      heightImage,
    </ui-code-row>
    <ui-code-row pl3>
      realWidthImage,
    </ui-code-row>
    <ui-code-row pl3>
      realHeightImage,
    </ui-code-row>
    <ui-code-row pl2>
    }) <ui-code-block>=></ui-code-block> {
    </ui-code-row>

    <ui-code-row pl3>
      widthImg.<ui-code-var>value</ui-code-var> = widthImage;
    </ui-code-row>
    <ui-code-row pl3>
      heightImg.<ui-code-var>value</ui-code-var> = heightImage;
    </ui-code-row>
    <ui-code-row pl3>
      realWidthImg.<ui-code-var>value</ui-code-var> = realWidthImage;
    </ui-code-row>
    <ui-code-row pl3>
      realHeightImg.<ui-code-var>value</ui-code-var> = realHeightImage;
    </ui-code-row>

    <ui-code-row pl2>
    }
    </ui-code-row>
    <ui-code-row>
      <ui-code-block>
        {{ '</script>' }}
      </ui-code-block>
    </ui-code-row>
  </ui-code>
</template>

<script setup>
  const props = defineProps({
    isEng: {
      type: Boolean,
      default: false
    }
  });

  const installText = `<template>
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
</script>