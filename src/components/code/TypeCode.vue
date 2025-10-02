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
  />
</template>

${'<script setup>'}
  import { ref } from 'vue';
 
  import LabelingImage from 'vue-labeling-image';
  import 'vue-labeling-image/lib/styles.css';

  const file = ref(null);
  const areas = ref([]);
${'</'}script>`;
</script>