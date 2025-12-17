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
        :is-active="isSlotsMarked"
        :is-inline="true"
        @click="isSlotsMarked = !isSlotsMarked"
      >
        {{ slotsHintMarkedText }}
      </open-header>

      <slots-hint-marked
        v-if="isSlotsMarked"
        :is-eng="isEng"
      />
    </div>

    <div class="examples-page__group">
      <open-header
        type-element="h2"
        :is-active="isSlotsHintHovered"
        :is-inline="true"
        @click="isSlotsHintHovered = !isSlotsHintHovered"
      >
        {{ slotsHintHoveredText }}
      </open-header>

      <slots-hint-hovered
        v-if="isSlotsHintHovered"
        :is-eng="isEng"
      />
    </div>

    <div class="examples-page__group">
      <open-header
        type-element="h2"
        :is-active="isSlotsHintEx"
        :is-inline="true"
        @click="isSlotsHintEx = !isSlotsHintEx"
      >
        {{ slotsHintExText }}
      </open-header>

      <slots-hint-ex
        v-if="isSlotsHintEx"
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
  import SlotsHintMarked from '@/components/examples/slots/SlotsHintMarked.vue';
  import SlotsHintEx from '@/components/examples/slots/SlotsHintEx.vue';
  import SlotsHintHovered from '@/components/examples/slots/SlotsHintHovered.vue';

  const isTypeExample = ref(true);
  const isStaticArea = ref(false);
  const isMethods = ref(false);
  const isSlotsHint = ref(false);
  const isSlotsMarked = ref(false);
  const isSlotsHintEx = ref(false);
  const isSlotsHintHovered = ref(false);

  const { isEng } = inject('lang');

  const {
    headExamples,
    typeExample,
    staticAreasText,
    methodsText,
    slotsHintText,
    slotsHintMarkedText,
    slotsHintExText,
    slotsHintHoveredText
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
