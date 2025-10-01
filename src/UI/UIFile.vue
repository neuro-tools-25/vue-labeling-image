<template>
  <ui-button
    class="file"
    :class="{ success: props.isActive }"
    :width="props.width"
  >
    <span class="mgc_download_3_fill"></span>

    {{ text }}

    <input
      type="file"
      ref="file"
      :key="id"
      :accept="extensions"
      @change="changeFile"
    />
  </ui-button>
</template>

<script setup>
  import {
    computed,
    useTemplateRef,
    watch,
    ref,
  } from 'vue';

  const props = defineProps({
    placeholder: {
      type: String,
    },
    extensions: {
      type: Array,
      default: [
        'image/*',
      ]
    },
    width: {
      type: Number,
      default: 148
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isEng: {
      type: Boolean,
      default: false
    }
  });

  const placeholder = computed(() => {
    let text='Выберите файл...';
    if (props.isEng) text='Select file...';

    return text;
  });

  const id = ref('');
  const val = defineModel();
  const file = useTemplateRef('file');

  const sliceText = (val, sliceVal = 14) => {
    if (val.length > sliceVal) return `${val.slice(0, sliceVal)}...`;

    return val;
  }

  const text = computed(() => {
    if (val.value && typeof val.value === 'object') return sliceText(val.value[0]?.name.slice(0, 16));

    return props.placeholder || placeholder.value;
  });

  const changeFile = () => {
    if (file.value.files.length) val.value = file.value.files;
  }

  const extensions = computed(() => props.extensions.join(', '));

  watch(val, () => {
    id.value = Date.now();
  });
</script>

<style lang="scss">
  .file {
    cursor: pointer;
    overflow: hidden;
    position: relative;

    [type="file"] {
      top: 0;
      left: 0;
      cursor: pointer;
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
    }

    .mgc_download_3_fill {
      top: 2px;
      font-size: 16px;
      margin-left: 0;
      margin-right: 5px;
      position: relative;
    }
  }
</style>
