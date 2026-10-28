<template>
  <code-markup
    :is-header="false"
    :code="codeText"
    v-bind="codeParam"
    :line-count="15"
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

    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="areas" />
      <mu-type code=" = " />
      <mu-key-words code="ref" />
      <mu-type code="([" />
    </code-line>

    <stilization-class-obj
      id="1759337197573"
      name="Photo"
      width="27.97947487671597"
      height="59.53757225433526"
      x="4.227642276422764"
      y="24.277456647398843"
      mu-class="mu-class_error"
    />
    <stilization-class-obj
      id="1759337204073"
      name="First name"
      width="26.945655263262942"
      height="8.38150289017341"
      x="50.40650406504065"
      y="28.901734104046245"
      mu-class="mu-class_error"
    />
    <stilization-class-obj
      id="1759337232429"
      name="Surname"
      width="13.658536585365855"
      height="6.9364161849710975"
      x="55.44715447154471"
      y="239.017341040462426"
      mu-class="mu-class_success"
    />
    <stilization-class-obj
      id="1759337240377"
      name="Gender"
      width="5.040650406504065"
      height="6.358381502890173"
      x="39.67479674796748"
      y="50"
      mu-class="mu-class_warn"
    />
    <stilization-class-obj
      id="1759337248220"
      name="Birthplace"
      width="30.081300813008134"
      height="6.9364161849710975"
      x="49.43089430894309"
      y="58.67052023121387"
      mu-class="mu-class_success"
    />
    <stilization-class-obj
      id="1759337254262"
      name="Date of birth"
      width="30.24390243902439"
      height="7.225433526011561"
      x="57.56097560975609"
      y="48.554913294797686"
      mu-class="mu-class_success"
    />
    <stilization-class-obj
      id="1759337260502"
      name="Series"
      width="3.577235772357723"
      height="59.53757225433526"
      x="92.845528455284559"
      y="21.965317919075144"
      mu-class="mu-class_warn"
    />

    <code-line level-2>
      <mu-type code="])" />
    </code-line>
    <code-line>
      <mu-tag code="</script>" />
    </code-line>

    <code-line />

    <code-line>
      <mu-tag code="<style " />
      <mu-attr code="lang=" />
      <mu-text code='"scss"' />
      <mu-tag code=">" />
    </code-line>

    <code-line level-2 new>
      <mu-style-class code=".mu-class " />
      <mu-type code="{" />
    </code-line>
    <code-line level-3 new>
      <mu-key-words code="@mixin " />
      <mu-function code="addVariable("/>
      <mu-style-param code="$color" />
      <mu-function code=")"/>
      <mu-type code=" {" />
    </code-line>
    <code-line level-4 new>
      <mu-style-param code="--mu-marking-rect-fill" />
      <mu-type code=": #{" />
      <mu-style-param code="$color" />
      <mu-type code="};" />
    </code-line>
    <code-line level-4 new>
      <mu-style-param code="--mu-marking-rect-stroke" />
      <mu-type code=": #{" />
      <mu-style-param code="$color" />
      <mu-type code="};" />
    </code-line>
    <code-line level-4 new>
      <mu-style-param code="--mu-marking-rect-active-fill" />
      <mu-type code=": #{" />
      <mu-style-param code="$color" />
      <mu-type code="};" />
    </code-line>
    <code-line level-4 new>
      <mu-style-param code="--mu-marking-rect-active-stroke" />
      <mu-type code=": #{" />
      <mu-style-param code="$color" />
      <mu-type code="};" />
    </code-line>
    <code-line level-3 new>
      <mu-type code="}" />
    </code-line>

    <code-line />

    <code-line level-3 new>
      <mu-style-ampersand code="&" />
      <mu-style-key code="_error" />
      <mu-type code="," />
    </code-line>
    <code-line level-3 new>
      <mu-style-ampersand code="&" />
      <mu-style-key code="_warn" />
      <mu-type code="," />
    </code-line>
    <code-line level-3 new>
      <mu-style-ampersand code="&" />
      <mu-style-key code="_success" />
      <mu-type code="{" />
    </code-line>
    <code-line level-4 new>
      <mu-style-param code="--mu-marking-rect-stroke-width" />
      <mu-type code=": " />
      <mu-number code="2" />
      <mu-type code=";" />
    </code-line>

    <code-line />

    <code-line level-4 new>
      <mu-style-ampersand code="&" />
      <mu-style-class code=".mark-up__g_active " />
      <mu-type code="{" />
    </code-line>

    <code-line level-5 new>
      <mu-style-param code="--mu-marking-rect-stroke-width" />
      <mu-type code=": " />
      <mu-number code="4" />
      <mu-type code=";" />
    </code-line>
    <code-line level-5 new>
      <mu-style-param code="--mu-marking-rect-active-fill-opacity" />
      <mu-type code=": " />
      <mu-number code=".5" />
      <mu-type code=";" />
    </code-line>
    <code-line level-4 new>
      <mu-type code="}" />
    </code-line>
    <code-line level-3 new>
      <mu-type code="}" />
    </code-line>

    <code-line />

    <code-line level-3 new>
      <mu-style-ampersand code="&" />
      <mu-style-key code="_error " />
      <mu-type code="{" />
    </code-line>
    <code-line level-4 new>
      <mu-key-words code="$color" />
      <mu-type code=": " />
      <mu-style-param code="--mu-marking-rect-active-fill" />
      <mu-type code=";" />
    </code-line>

    <code-line />
    <code-line level-4 new>
      <mu-style-param code="--mu-marking-rect-fill" />
      <mu-type code=": " />
      <mu-key-words code="var" />
      <mu-type code="(#{" />
      <mu-style-param code="$color" />
      <mu-type code="});" />
    </code-line>
    <code-line level-4 new>
      <mu-style-param code="--mu-marking-rect-stroke" />
      <mu-type code=": " />
      <mu-key-words code="var" />
      <mu-type code="(#{" />
      <mu-style-param code="$color" />
      <mu-type code="});" />
    </code-line>
    <code-line level-3 new>
      <mu-type code="}" />
    </code-line>

    <code-line />

    <code-line level-3 new>
      <mu-style-ampersand code="&" />
      <mu-style-key code="_warn " />
      <mu-type code="{" />
    </code-line>

    <code-line level-4 new>
      <mu-key-words code="@include " />
      <mu-function code="addVariable" />
      <mu-type code="(" />
      <mu-number code="#fae60a" />
      <mu-type code=");" />
    </code-line>

    <code-line level-3 new>
      <mu-type code="}" />
    </code-line>

    <code-line />

    <code-line level-3 new>
      <mu-style-ampersand code="&" />
      <mu-style-key code="_success " />
      <mu-type code="{" />
    </code-line>

    <code-line level-4 new>
      <mu-key-words code="@include " />
      <mu-function code="addVariable" />
      <mu-type code="(" />
      <mu-number code="#00CC00" />
      <mu-type code=");" />
    </code-line>

    <code-line level-3 new>
      <mu-type code="}" />
    </code-line>
    <code-line level-2 new>
      <mu-type code="}" />
    </code-line>
    <code-line>
      <mu-tag code="</style>" />
    </code-line>
  </code-markup>
</template>

<script setup>
  import StilizationClassObj from './services/StilizationClassObj.vue';
  import useLang from '@/components/code/uselang.js';

  const props = defineProps({
    isEng: {
      type: Boolean,
      default: false
    }
  });

  const codeText = `<template>
  <labeling-image
    :image-src="imageSrc"
    v-model="areas"
    key-title="name"
    :is-markup="false"
  />
</template>

<${'script'} setup>
  const imageSrc = ref("The path to your picture.");

  const areas = ref([
    {
      id: 1759337197573,
      name: "Photo",
      x: 4.227642276422764,
      y: 24.277456647398843,
      width: 27.97947487671597,
      height: 59.53757225433526,
      muClass: "mu-class_error",
    },
    {
      id: 1759337204073,
      name: "First name",
      x: 50.40650406504065,
      y: 28.901734104046245,
      width: 26.945655263262942,
      height: 8.38150289017341,
      muClass: "mu-class_error",
    },
    {
      id: 1759337232429,
      name: "Surname",
      x: 55.44715447154471,
      y: 239.017341040462426,
      width: 13.658536585365855,
      height: 6.9364161849710975,
      muClass: "mu-class_success",
    },
    {
      id: 1759337240377,
      name: "Gender",
      x: 39.67479674796748,
      y: 50,
      width: 5.040650406504065,
      height: 6.358381502890173,
      muClass: "mu-class_warn",
    },
    {
      id: 1759337248220,
      name: "Birthplace",
      x: 49.43089430894309,
      y: 58.67052023121387,
      width: 30.081300813008134,
      height: 6.9364161849710975,
      muClass: "mu-class_success",
    },
    {
      id: 1759337254262,
      name: "Date of birth",
      x: 57.56097560975609,
      y: 48.554913294797686,
      width: 30.24390243902439,
      height: 7.225433526011561,
      muClass: "mu-class_success",
    },
    {
      id: 1759337260502,
      name: "Series",
      x: 92.845528455284559,
      y: 21.965317919075144,
      width: 3.577235772357723,
      height: 59.53757225433526,
      muClass: "mu-class_warn",
  },
  ])
</${'script'}>

<style lang="scss">
  .mu-class {
    @mixin addVariable($color) {
      --mu-marking-rect-fill: #{$color};
      --mu-marking-rect-stroke: #{$color};
      --mu-marking-rect-active-fill: #{$color};
      --mu-marking-rect-active-stroke: #{$color};
    }

    &_error,
    &_warn,
    &_success{
      --mu-marking-rect-stroke-width: 2;

      &.mark-up__g_active {
      --mu-marking-rect-stroke-width: 4;
      --mu-marking-rect-active-fill-opacity: .5;
      }
    }

    &_error {
      $color: --mu-marking-rect-active-fill;

      --mu-marking-rect-fill: var(#{$color});
      --mu-marking-rect-stroke: var(#{$color});
    }

    &_warn {
      @include addVariable(#fae60a);
    }

    &_success {
      @include addVariable(#00CC00);
    }
  }
</style>`;

  const codeParam = useLang(props);
</script>