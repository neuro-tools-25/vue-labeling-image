<template>
  <ui-checkbox v-model="isVisEdit">
    {{ checkText }}
  </ui-checkbox>

  <code-markup
    :is-header="false"
    :code="props.codeText"
    v-bind="props.codeParam"
    :line-count="15"
    :class="visEditClass"
  >
    <code-line>
      <mu-tag code="<template>" />
    </code-line>
    <code-line level-2>
      <mu-tag code="<labeling-image" />
    </code-line>
    <code-line level-3>
      <mu-attr code=':image-src=' />
      <mu-text code='"imageSrc"' />
    </code-line>
    <code-line level-3>
      <mu-attr code='v-model=' />
      <mu-text code='"areas"' />
    </code-line>
    <code-line level-3>
      <mu-attr code='key-title=' />
      <mu-text code='"name"' />
    </code-line>
    <code-line level-3>
      <mu-attr code=':is-markup=' />
      <mu-text code='"' />
      <mu-key-words code='false' />
      <mu-text code='"' />
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
      <mu-key-words code="const " />
      <mu-variable code="imageSrc" />
      <mu-type code=" = " />
      <mu-key-words code="ref" />
      <mu-type code="(" />
      <mu-text code='"The path to your picture"' />
      <mu-type code=");" />
    </code-line>

    <code-line />

    <slot></slot>

    <code-line>
      <mu-tag code="</script>" />
    </code-line>

    <slot name="style"></slot>
  </code-markup>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps([
    "codeText",
    "codeParam",
    "isEng"
  ]);

  const isVisEdit = ref(false);
  const visEditClass = computed(() => ({ 'code-markup_is-visible-edit': isVisEdit.value }));

  const checkText = computed(() => {
    const engCommonText = "the parts of the code responsible for styling the labeled areas"

    if (props.isEng && isVisEdit.value) return `Hide ${engCommonText}`;
    if (props.isEng && !isVisEdit.value) return `Show ${engCommonText}`;

    const rusCommonText = 'части кода отвечающие за стилизацию маркированных областей';
    if (isVisEdit.value) return `Скрыть ${rusCommonText}`;

    return `Показать ${rusCommonText}`;
  });
</script>

<style lang="scss">
  .code-markup_is-visible-edit {
    .code-markup__line {
      &__content {
        opacity: .3;
      }

      &_new .code-markup__line__content {
        opacity: 1;
        font-weight: bold;
      }
    }
  }
</style>