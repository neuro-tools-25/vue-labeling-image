<template>
  <div class="examples-page">
    <h1>{{ headExamples }}</h1>

    <div class="examples-page__group">
      <open-header
        type-element="h2"
        :is-active="isTypeExample"
        :is-inline="true"
        @click="isTypeExample = !isTypeExample"
      >
        {{ typeExample }}
      </open-header>

      <main-example 
        v-if="isTypeExample"
        :is-eng="isEng"
      />
    </div>

    <div class="examples-page__group">
      <open-header
        type-element="h2"
        :is-active="isStaticArea"
        :is-inline="true"
        @click="isStaticArea = !isStaticArea"
      >
        {{ staticAreasText }}
      </open-header>

      <static-areas
        v-if="isStaticArea"
        :is-eng="isEng"
      />
    </div>

    <div class="examples-page__group">
      <open-header
        type-element="h2"
        :is-active="isMethods"
        :is-inline="true"
        @click="isMethods = !isMethods"
      >
        {{ methodsText }}
      </open-header>

      <methods-example
        v-if="isMethods"
        :is-eng="isEng"
      />
    </div>

    <div class="examples-page__group">
      <open-header
        type-element="h2"
        :is-active="isSlotsHint"
        :is-inline="true"
        @click="isSlotsHint = !isSlotsHint"
      >
        {{ slotsHintText }}
      </open-header>

      <slots-hints
        v-if="isSlotsHint"
        :is-eng="isEng"
      />
    </div>

    <div class="examples-page__group">
      <open-header
        type-element="h2"
        :is-active="isSlotsExample"
        :is-inline="true"
        @click="isSlotsExample = !isSlotsExample"
      >
        {{ slotsExampleText }}
      </open-header>

      <slots-example
        v-if="isSlotsExample"
        :is-eng="isEng"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, inject } from 'vue';

  import useExamples from './useExamples';
  import OpenHeader from '@/UI/OpenHeader.vue';

  import StaticAreas from '@/components/examples/StaticAreas.vue';
  import MainExample from '@/components/examples/MainExample.vue';
  import MethodsExample from '@/components/examples/MethodsExample.vue';
  import SlotsHints from '@/components/examples/slots/SlotsHints.vue';
  import SlotsExample from '@/components/examples/slots/SlotsExample.vue';

  const isTypeExample = ref(false);
  const isStaticArea = ref(false);
  const isMethods = ref(false);
  const isSlotsHint = ref(false);
  const isSlotsExample = ref(true);

  const { isEng } = inject('lang');

  const {
    headExamples,
    typeExample,
    staticAreasText,
    methodsText,
    slotsHintText,
    slotsExampleText
  } = useExamples(isEng);
</script>

<style lang="scss">
  .examples-page__group {
    & > h2,
    & > .h2 {
      margin: 4px 0;
    }
  }
</style>
