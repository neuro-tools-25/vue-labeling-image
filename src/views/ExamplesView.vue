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
  </div>
</template>

<script setup>
  import { ref, inject } from 'vue';

  import useExamples from './useExamples';
  import OpenHeader from '@/UI/OpenHeader.vue';

  import StaticAreas from '@/components/examples/StaticAreas.vue';
  import MainExample from '@/components/examples/MainExample.vue';
  import MethodsExample from '@/components/examples/MethodsExample.vue';

  const isTypeExample = ref(true);
  const isStaticArea = ref(false);
  const isMethods = ref(false);

  const { isEng } = inject('lang');

  const {
    headExamples,
    typeExample,
    staticAreasText,
    methodsText
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
