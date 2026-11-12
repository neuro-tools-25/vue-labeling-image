<template>
  <div class="examples-page">
    <h1>{{ headExamples }}</h1>

    <ExampleGroup
      :header-text="typeExample"
      :isOpen="isTypeExample"
      @change-is-open="isTypeExample = !isTypeExample"
    >
      <main-example :is-eng="isEng" />
    </ExampleGroup>

    <ExampleGroup
      :header-text="staticAreasText"
      :isOpen="isStaticArea"
      @change-is-open="isStaticArea = !isStaticArea"
    >
      <static-areas :is-eng="isEng" />
    </ExampleGroup>

    <ExampleGroup
      :header-text="methodsText"
      :isOpen="isMethods"
      @change-is-open="isMethods = !isMethods"
    >
      <methods-example :is-eng="isEng" />
    </ExampleGroup>

    <ui-fieldset :name="slotsGroupText">
      <ExampleGroup
        :header-text="slotsHintText"
        :isOpen="isSlotsHint"
        @change-is-open="isSlotsHint = !isSlotsHint"
      >
        <slots-hints :is-eng="isEng" />
      </ExampleGroup>

      <ExampleGroup
        :header-text="slotsHintMarkedText"
        :isOpen="isSlotsMarked"
        @change-is-open="isSlotsMarked = !isSlotsMarked"
      >
        <slots-hint-marked :is-eng="isEng" />
      </ExampleGroup>

      <ExampleGroup
        :header-text="slotsHintHoveredText"
        :isOpen="isSlotsHintHovered"
        @change-is-open="isSlotsHintHovered = !isSlotsHintHovered"
      >
        <slots-hint-hovered :is-eng="isEng" />
      </ExampleGroup>

      <ExampleGroup
        :header-text="slotsHintExText"
        :isOpen="isSlotsHintEx"
        @change-is-open="isSlotsHintEx = !isSlotsHintEx"
      >
        <slots-hint-ex :is-eng="isEng" />
      </ExampleGroup>
    </ui-fieldset>

    <ui-fieldset :name="StilLabAreasGroupText"> 
      <ExampleGroup
        :header-text="stilizationClassText"
        :isOpen="isStilizationClass"
        @change-is-open="isStilizationClass = !isStilizationClass"
      >
        <stil-areas-class :is-eng="isEng" />
      </ExampleGroup>

      <ExampleGroup
        :header-text="stilizationClassEditedText"
        :isOpen="isStilizationClassEdited"
        @change-is-open="isStilizationClassEdited = !isStilizationClassEdited"
      >
        <stil-areas-class-edited :is-eng="isEng" />
      </ExampleGroup>

      <ExampleGroup
        :header-text="stilizationAttrStyleText"
        :isOpen="isStilizationAttrStyle"
        @change-is-open="isStilizationAttrStyle = !isStilizationAttrStyle"
      >
        <stil-areas-attr-style
          :is-eng="isEng"
          :query="query"
        />
      </ExampleGroup>

      <ExampleGroup
        :header-text="stilizationAttrStyleEditedText"
        :isOpen="isStilizationAttrStyleEdited"
        @change-is-open="isStilizationAttrStyleEdited = !isStilizationAttrStyleEdited"
      >
        <stil-areas-attr-style-edited
          :is-eng="isEng"
          :query="query"
        />
      </ExampleGroup>
    </ui-fieldset>
  </div>
</template>

<script setup>
  import { ref, inject } from 'vue';

  import useExamples from './useExamples';
  import ExampleGroup from '@/components/examples/ExampleGroup.vue';
  import UiFieldset from '@/UI/UIFieldset.vue';

  import StaticAreas from '@/components/examples/StaticAreas.vue';
  import MainExample from '@/components/examples/MainExample.vue';
  import MethodsExample from '@/components/examples/MethodsExample.vue';
  import SlotsHints from '@/components/examples/slots/SlotsHints.vue';
  import SlotsHintMarked from '@/components/examples/slots/SlotsHintMarked.vue';
  import SlotsHintEx from '@/components/examples/slots/SlotsHintEx.vue';
  import SlotsHintHovered from '@/components/examples/slots/SlotsHintHovered.vue';
  import StilAreasClass from '@/components/examples/stilization-class/AreasClass.vue';
  import StilAreasClassEdited from '@/components/examples/stilization-class/AreasClassEdited.vue';
  import StilAreasAttrStyle from '@/components/examples/stilization-style/AreasStyle.vue';
  import StilAreasAttrStyleEdited from '@/components/examples/stilization-style/AreasStyleEdited.vue';

  const isTypeExample = ref(true);
  const isStaticArea = ref(false);
  const isMethods = ref(false);
  const isSlotsHint = ref(false);
  const isSlotsMarked = ref(false);
  const isSlotsHintEx = ref(false);
  const isSlotsHintHovered = ref(false);
  const isStilizationClass = ref(false);
  const isStilizationClassEdited = ref(false);
  const isStilizationAttrStyle = ref(false);
  const isStilizationAttrStyleEdited = ref(false);

  const { isEng, query } = inject('lang');

  const {
    headExamples,
    typeExample,
    staticAreasText,
    methodsText,
    slotsHintText,
    slotsHintMarkedText,
    slotsHintExText,
    slotsHintHoveredText,
    stilizationClassText,
    stilizationClassEditedText,
    stilizationAttrStyleText,
    stilizationAttrStyleEditedText,
    slotsGroupText,
    StilLabAreasGroupText
  } = useExamples(isEng);
</script>

<style lang="scss"></style>
