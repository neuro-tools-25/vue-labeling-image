<template>
  <code-markup
    :is-header="false"
    :code="codeText"
    v-bind="codeParam"
    :line-count="15"
  >
    <stilization-layout>
      <code-line level-2>
        <mu-key-words code="const " />
        <mu-function code="bStyle" />
        <mu-type code=" = (color) => ({" />
      </code-line>
      <stilization-attr-style-color name="--mu-marking-rect-fill" />
      <stilization-attr-style-color name="--mu-marking-rect-stroke" />
      <stilization-attr-style-color name="--mu-marking-rect-active-fill" />
      <stilization-attr-style-color name="--mu-marking-rect-active-stroke" />
      <stilization-attr-style-number name="--mu-marking-rect-stroke-width" val="2" />
      <stilization-attr-style-number name="--mu-marking-rect-active-fill-opacity" val=".5" />
      <code-line level-2>
        <mu-type code="});" />
      </code-line>

      <code-line />

      <code-line level-2>
        <mu-key-words code="const " />
        <mu-variable code="areas" />
        <mu-type code=" = " />
        <mu-key-words code="ref" />
        <mu-type code="([" />
      </code-line>

      <stilization-attr-style-obj
        id="1759337197573"
        name="Photo"
        width="27.97947487671597"
        height="59.53757225433526"
        x="4.227642276422764"
        y="24.277456647398843"
        mu-class="mu-class_error"
      />
      <stilization-attr-style-obj
        id="1759337204073"
        name="First name"
        width="26.945655263262942"
        height="8.38150289017341"
        x="50.40650406504065"
        y="28.901734104046245"
        mu-class="mu-class_error"
      />
      <stilization-attr-style-obj
        id="1759337232429"
        name="Surname"
        width="13.658536585365855"
        height="6.9364161849710975"
        x="55.44715447154471"
        y="239.017341040462426"
        mu-class="mu-class_success"
      />
      <stilization-attr-style-obj
        id="1759337240377"
        name="Gender"
        width="5.040650406504065"
        height="6.358381502890173"
        x="39.67479674796748"
        y="50"
        mu-class="mu-class_warn"
      />
      <stilization-attr-style-obj
        id="1759337248220"
        name="Birthplace"
        width="30.081300813008134"
        height="6.9364161849710975"
        x="49.43089430894309"
        y="58.67052023121387"
        mu-class="mu-class_success"
      />
      <stilization-attr-style-obj
        id="1759337254262"
        name="Date of birth"
        width="30.24390243902439"
        height="7.225433526011561"
        x="57.56097560975609"
        y="48.554913294797686"
        mu-class="mu-class_success"
      />
      <stilization-attr-style-obj
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
    </stilization-layout>
  </code-markup>
</template>

<script setup>
  import StilizationLayout from './StilizationLayout.vue';
  import StilizationAttrStyleObj from './services/StilizationAttrStyleObj.vue';
  import StilizationAttrStyleColor from './services/StilizationAttrStyleColor.vue';
  import StilizationAttrStyleNumber from './services/StilizationAttrStyleNumber.vue';
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
</${'script'}>`;

  const codeParam = useLang(props);
</script>