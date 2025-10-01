<template>
  <div id="UI">
    <template v-if="isRus">
      <ui-input
        v-model="text"
        placeholder="Текст для примера"
      />

      <ui-row type="items">
        <ui-button>
          Пример кнопки
        </ui-button>
        <ui-button type-btn="secondary">
          Пример кнопки
        </ui-button>
        <ui-button type-btn="success">
          Пример кнопки
        </ui-button>
        <ui-button type-btn="info">
          Пример кнопки
        </ui-button>
        <ui-button type-btn="warning">
          Пример кнопки
        </ui-button>
        <ui-button type-btn="danger">
          Пример кнопки
        </ui-button>
      </ui-row>

      <ui-row>
        <ui-checkbox v-model="chackboxVal">
          {{ chackboxVal }}
        </ui-checkbox>
      </ui-row>

      <ui-row>
        <ui-delete />
      </ui-row>
    </template>

    <template v-if="isEng">
      <ui-input
        v-model="text"
        placeholder="Example text"
      />

      <ui-row type="items">
        <ui-button>
          Button example
        </ui-button>
        <ui-button type-btn="secondary">
          Button example
        </ui-button>
        <ui-button type-btn="success">
          Button example
        </ui-button>
        <ui-button type-btn="info">
          Button example
        </ui-button>
        <ui-button type-btn="warning">
          Button example
        </ui-button>
        <ui-button type-btn="danger">
          Button example
        </ui-button>
      </ui-row>

      <ui-row>
        <ui-checkbox v-model="chackboxVal">
          {{ chackboxVal }}
        </ui-checkbox>
      </ui-row>

      <ui-row>
        <ui-delete is-eng />
      </ui-row>
    </template>
  </div>
</template>

<script setup>
  import { ref, inject } from 'vue';

  const text = ref('');
  const file = ref(null);
  const chackboxVal = ref(true);

  const {
    isRus,
    isEng
  } = inject('lang');
</script>

<style lang="scss">

</style>
