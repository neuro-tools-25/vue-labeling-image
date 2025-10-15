<template>
  <div class="main-page">
    <animation-lay>
      <template v-if="isRus">
        <IntroInstall
          :is-eng="false"
          :query="query"
        />
        <methods-doc
          :is-eng="false"
          :query="query"
        />

        <!-- Входные параметры -->
        <intro-props
          :is-eng="false"
          :query="query"
        />
        <marking-props
          :is-eng="false"
          :query="query"
        />
        <ResolutionProps
          :is-eng="false"
          :query="query"
        />
        <theme-props
          :is-eng="false"
          :query="query"
        />
        <shadow-props
          :is-eng="false"
          :query="query"
        />
        <min-sizes-props 
          :is-eng="false"
          :query="query"
        />
        <hint-props
          :is-eng="false"
          :query="query"
        />
        <grid-props
          :is-eng="false"
          :query="query"
        />

        <!-- Стилизация компонента -->
        <intro-style
          :is-eng="false"
          :query="query"
        />
        <markup-style
          :is-eng="false"
          :query="query"
        />
        <labeling-style
          :is-eng="false"
          :query="query"
        />
        <active-style
          :is-eng="false"
          :query="query"
        />
        <common-style 
          :is-eng="false"
          :query="query"
        />
        <shadow-style
          :is-eng="false"
          :query="query"
        />
        <grid-style
          :is-eng="false"
          :query="query"
        />

        <!-- Слоты -->
      </template>

      <template v-if="isEng">
        <intro-install
          :is-eng="true" 
          :query="query"
        />
        <methods-doc
          :is-eng="true"
          :query="query"
        />

        <!-- Входные параметры -->
        <intro-props
          :is-eng="true"
          :query="query"
        />
        <marking-props
          :is-eng="true"
          :query="query"
        />
        <ResolutionProps
          :is-eng="true"
          :query="query"
        />
        <theme-props
          :is-eng="true"
          :query="query"
        />
        <shadow-props
          :is-eng="true"
          :query="query"
        />
        <min-sizes-props 
          :is-eng="true"
          :query="query"
        />
        <hint-props
          :is-eng="true"
          :query="query"
        />
        <grid-props
          :is-eng="true"
          :query="query"
        />

        <!-- Стилизация компонента -->
        <intro-style
          :is-eng="true"
          :query="query"
        />
        <markup-style
          :is-eng="true"
          :query="query"
        />
        <labeling-style
          :is-eng="true"
          :query="query"
        />
        <active-style
          :is-eng="true"
          :query="query"
        />
        <common-style 
          :is-eng="true"
          :query="query"
        />
        <shadow-style
          :is-eng="true"
          :query="query"
        />
        <grid-style
          :is-eng="true"
          :query="query"
        />

        <!-- Слоты -->
      </template>
    </animation-lay>
  </div>
</template>

<script setup>
  import { inject } from 'vue';

  import AnimationLay from '@/layouts/AnimationLay.vue';

  import IntroInstall from '@/components/documentation/IntroInstall.vue';
  import MethodsDoc from '@/components/documentation/MethodsDoc.vue';

  // Для параметров компонента
  import IntroProps from '@/components/documentation/props/IntroProps.vue';
  import MarkingProps from '@/components/documentation/props/MarkingProps.vue';
  import ResolutionProps from '@/components/documentation/props/ResolutionProps.vue';
  import ThemeProps from '@/components/documentation/props/ThemeProps.vue';
  import MinSizesProps from '@/components/documentation/props/MinSizesProps.vue';
  import ShadowProps from '@/components/documentation/props/ShadowProps.vue';
  import HintProps from '@/components/documentation/props/HintProps.vue';
  import GridProps from '@/components/documentation/props/GridProps.vue';

  // Стилизация компонента
  import IntroStyle from '@/components/documentation/stylization/IntroStyle.vue';
  import MarkupStyle from '@/components/documentation/stylization/MarkupStyle.vue';
  import LabelingStyle from '@/components/documentation/stylization/LabelingStyle.vue';
  import ActiveStyle from '@/components/documentation/stylization/ActiveStyle.vue';
  import CommonStyle from '@/components/documentation/stylization/CommonStyle.vue';
  import ShadowStyle from '@/components/documentation/stylization/ShadowStyle.vue';
  import GridStyle from '@/components/documentation/stylization/GridStyle.vue';

  const {
    isRus,
    isEng,
    query
  } = inject('lang');
</script>

<style lang="scss">
  .main-page {
    line-height: 150%;

    a {
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }

    h3 {
      font-weight: bold;
      margin-top: 1.5em;
    }

    .small-mar {
      margin: .1em 0;
    }

    @media screen and (min-width: 1030px) {
      font-size: 18px;
    }
  }
</style>
