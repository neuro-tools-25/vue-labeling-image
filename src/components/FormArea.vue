<template>
  <fieldset
    class="form-area"
    :class="classComp"
  >
    <legend>
      {{ props.name || nameNotDefined }}
    </legend>

    <div class="form-area__row">
      <b>X</b> - {{ props.x }}%
    </div>
    <div class="form-area__row">
      <b>Y</b> - {{ props.y }}%
    </div>
    <div class="form-area__row">
      <b>Width</b> - {{ props.width }}%
    </div>
    <div class="form-area__row">
      <b>Height</b> - {{ props.height }}%
    </div>

    <div
      v-if="bBox"
      class="form-area__row"
    >
      <b
        class="form-area_is-bbox"
        @click="toggleIsBBox"
      >{{ isBBoxText }}</b>
    </div>
    <div
      v-if="bBox && isBBox"
      class="form-area__row"
    >
      <b>bBox:</b>
<pre>
{{ props.bBox }}
</pre>
    </div>

    <ui-delete
      v-if="isReadOnly"
      :is-eng="props.isEng"
      @click.stop="emits('deleteArea')"
    />

    <ui-checkbox
      v-if="isReadOnly" 
      v-model="isEdit"
    >
      {{ editText }}
    </ui-checkbox>
  </fieldset>
</template>

<script setup>
  import { computed, ref } from 'vue';

  const emits = defineEmits({ deleteArea: 'delete-area' });
  const isEdit = defineModel('is-edit');

  const props = defineProps([
    'id',
    'activeId',
    'x',
    'y',
    'width',
    'height',
    'name',
    'isEdit',
    'readOnly',
    'isEng',
    'bBox'
  ]);

  const isReadOnly = computed(() => props.readOnly === undefined);

  const classComp = computed(() => ({
    'form-area_active': props.id === props.activeId && isReadOnly.value,
    'form-area_read-only': !isReadOnly.value,
  }));

  // Интернационализация
  const editText = computed(() => {
    let text='Редактировать';
    if (props.isEng) text='Edit';

    return text;
  });

  const nameNotDefined = computed(() => {
    let text='Имя маркированной области не определено';
    if (props.isEng) text='The name of the labeled area is not defined';

    return text;
  });

  const isBBox = ref(false);
  const toggleIsBBox = () => isBBox.value = !isBBox.value;

  const isBBoxText = computed(() => {
    if (props.isEng && isBBox.value) return 'Hide bounding box';
    if (props.isEng && !isBBox.value) return 'Show bounding box';

    const text = 'bounding box (ограничивающая рамка)'
    if (isBBox.value) return `Скрыть ${text}`;

    return `Показать ${text}`;
  });
</script>

<style lang="scss">
  @use '@/assets/_services.scss' as e;

  .form-area {
    padding: 15px;
    border-radius: 5px;
    margin: 0 0 25px;
    cursor: pointer;
    background: e.$formBg;
    border: e.$formBorder var(--mu-marking-rect-stroke, #777);
    position: relative;
    transition: background var(--mu-transition-property),
      border var(--mu-transition-property);

    legend {
      padding: 0 5px;
      font-weight: bold;
    }

    &_active {
      background: e.$formActiveBg;
      border: e.$formActiveBorder var(--mu-marking-rect-active-stroke, #ab0808);
    }

    &_read-only {
      cursor: default;
    }

    &_is-bbox {
      cursor: pointer;
    }

    &__row {
      margin: 10px 0;
    }
  }
</style>
