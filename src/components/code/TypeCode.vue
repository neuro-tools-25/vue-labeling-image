<template>
  <code-markup
    :is-header="false"
    :code="paramToCopy"
    v-bind="codeParam"
  >
    <code-line>
      <mu-tag code="<template>" />
    </code-line>
    <code-line level-2>
      <mu-tag code="<labeling-image" />
    </code-line>
    <code-line level-3>
      <mu-attr code=":image-src=" />
      <mu-text code='"file"' />
    </code-line>
    <code-line level-3>
      <mu-attr code="v-model=" />
      <mu-text code='"areas"' />
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
      <mu-text code="'vue'" />
      <mu-type code=";" />
    </code-line>

    <code-line level-2 />

    <code-line level-2>
      <mu-key-words code="import " />
      <mu-type code="LabelingImage " />
      <mu-key-words code="from " />
      <mu-text code="'vue-labeling-image'" />
      <mu-type code=";" />
    </code-line>
    <code-line level-2>
      <mu-key-words code="import " />
      <mu-text code="'vue-labeling-image/lib/styles.css'" />
      <mu-type code=";" />
    </code-line>

    <code-line />

    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="file " />
      <mu-type code=" = " />
      <mu-key-words code="ref" />
      <mu-type code="(" />
      <mu-key-words code="null" />
      <mu-type code=")" />
      <mu-type code=";" />
    </code-line>
    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="areas " />
      <mu-type code=" = " />
      <mu-key-words code="ref" />
      <mu-type code="([])" />
      <mu-type code=";" />
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

  const paramToCopy = `<template>
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

  const codeParam = useLang(props);
</script>