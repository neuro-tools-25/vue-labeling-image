<template>
  <div
    class="form-group"
    :class="{ 'form-group_active': props.id === props.activeId }"
  >
    <ui-label>
      {{ nameArea }}
    </ui-label>
    <ui-input v-model="name" />

    <ui-row
      type="items"
      space-between
    >
      <div class="form-group__col">
        <ui-label>
          X
        </ui-label>
        <ui-input v-model="x" />
      </div>
      <div class="form-group__col">
        <ui-label>
          Y
        </ui-label>
        <ui-input v-model="y" />
      </div>
    </ui-row>

    <ui-row
      type="items"
      space-between
    >
      <div class="form-group__col">
        <ui-label>
          {{ widthArea }}
        </ui-label>
        <ui-input v-model="width" />
      </div>
      <div class="form-group__col">
        <ui-label>
          {{ heightArea }}
        </ui-label>
        <ui-input v-model="height" />
      </div>
    </ui-row>

    <ui-delete
      :is-eng="props.isEng"
      @click.stop="emits('deleteArea')"
    />

    <ui-checkbox v-model="isEdit">
      {{ editText }}
    </ui-checkbox>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const emits = defineEmits({ deleteArea: 'delete-area' });
  const isEdit = defineModel('is-edit');

  const props = defineProps(['id', 'activeId', 'isEng']);

  const x = defineModel('x');
  const y = defineModel('y');
  const width = defineModel('width');
  const height = defineModel('height');
  const name = defineModel('name', { default: null });

  // Интернационализация
  const editText = computed(() => {
    let text='Редактировать';
    if (props.isEng) text='Edit';

    return text;
  });

  const nameArea = computed(() => {
    let text='Название области';
    if (props.isEng) text='Area name';

    return text;
  });

  const widthArea = computed(() => {
    let text='Шарина области';
    if (props.isEng) text='Width area';

    return text;
  });

  const heightArea = computed(() => {
    let text='Высота области';
    if (props.isEng) text='Height area';

    return text;
  });
</script>

<style lang="scss">
  @use '@/assets/_services.scss' as services;

  .form-group {
    padding: 15px;
    margin: 0 0 25px;
    border-radius: 5px;
    background: services.$formBg;
    border: services.$formBorder var(--mu-marking-rect-stroke, #777);
    position: relative;
    transition: background var(--mu-transition-property),
      border var(--mu-transition-property);

    &_active {
      background: services.$formActiveBg;
      border: services.$formActiveBorder var(--mu-marking-rect-active-stroke, #ab0808);
    }

    &__col {
      width: 100%;
      box-sizing: border-box;

      @media screen and (min-width: services.$tabletSmall) {
        width: calc(50% - 10px);
      }
    }
  }
</style>
