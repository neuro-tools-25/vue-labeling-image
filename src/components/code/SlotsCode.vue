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
      <mu-tag code="<div " />
      <mu-attr code="class" />
      <mu-type code="=" />
      <mu-text code='"theme-slots"' />
      <mu-tag code=">" />
    </code-line>
    <code-line level-3>
      <mu-tag code="<labeling-image" />
    </code-line>
    <code-line level-4>
      <mu-attr code=":image-src" />
      <mu-type code="=" />
      <mu-text code='"file"' />
    </code-line>
    <code-line level-4>
      <mu-attr code="v-model" />
      <mu-type code="=" />
      <mu-text code='"areas"' />
    </code-line>
    <code-line level-3>
      <mu-tag code=">" />
    </code-line>

    <code-line level-4>
      <mu-tag code="<template " />
      <mu-attr code="#first" />
      <mu-tag code=">" />
    </code-line>
    <code-line level-5>
      <mu-tag code="<text" />
    </code-line>

    <code-line level-6>
      <mu-key-words code="v-for" />
      <mu-type code="=" />
      <mu-text code='"' />
      <mu-type code='{ x, y, id, title } ' />
      <mu-key-words code="in " />
      <mu-type code='hints' />
      <mu-text code='"' />
    </code-line>
    <code-line level-6>
      <mu-attr code=":key" />
      <mu-type code="=" />
      <mu-text code='"id"' />
    </code-line>
    <code-line level-6>
      <mu-attr code=":x" />
      <mu-type code="=" />
      <mu-text code='"`${x}%`"' />
    </code-line>
    <code-line level-6>
      <mu-attr code=":y" />
      <mu-type code="=" />
      <mu-text code='"`${y}%`"' />
    </code-line>

    <code-line level-5>
      <mu-tag code=">" />
    </code-line>
    <code-line level-6>
      <mu-type code="{{ title }}" />
    </code-line>
    <code-line level-5>
      <mu-tag code="</text>" />
    </code-line>
    <code-line level-4>
      <mu-tag code="</template>" />
    </code-line>

    <code-line />

    <code-line level-4>
      <mu-tag code="<template " />
      <mu-attr code="#last" />
      <mu-tag code=">" />
    </code-line>
    <code-line level-5>
      <mu-tag code="<image" />
    </code-line>
    <code-line
      level-6
      visible-copy
    >
      <mu-attr code=":href" />
      <mu-type code="=" />
      <mu-text code='"the path to the image or the picture in base64"' />
    </code-line>
    <code-line level-6>
      <mu-attr code="width" />
      <mu-type code="=" />
      <mu-text code='"' />
      <mu-number code='80' />
      <mu-text code='"' />
    </code-line>
    <code-line level-6>
      <mu-attr code="height" />
      <mu-type code="=" />
      <mu-text code='"' />
      <mu-number code='40' />
      <mu-text code='"' />
    </code-line>
    <code-line level-6>
      <mu-attr code="x" />
      <mu-type code="=" />
      <mu-text code='"' />
      <mu-number code='100%' />
      <mu-text code='"' />
    </code-line>
    <code-line level-6>
      <mu-attr code="y" />
      <mu-type code="=" />
      <mu-text code='"' />
      <mu-number code='10' />
      <mu-text code='"' />
    </code-line>
    <code-line level-5>
      <mu-tag code="/>" />
    </code-line>
    <code-line level-4>
      <mu-tag code="</template>" />
    </code-line>

    <code-line level-3>
      <mu-tag code="</labeling-image>" />
    </code-line>
    <code-line level-2>
      <mu-tag code="</div>" />
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
      <mu-key-words code="import " />
      <mu-type code="{ ref } " />
      <mu-key-words code="from " />
      <mu-text code='"vue"' />
      <mu-type code=";" />
    </code-line>

    <code-line />

    <code-line level-2>
      <mu-key-words code="import " />
      <mu-type code="LabelingImage " />
      <mu-key-words code="from " />
      <mu-text code='"vue-labeling-image"' />
      <mu-type code=";" />
    </code-line>
    <code-line level-2>
      <mu-key-words code="import " />
      <mu-text code='"vue-labeling-image/lib/styles.css"' />
      <mu-type code=";" />
    </code-line>

    <code-line />

    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="file " />
      <mu-type code="= " />
      <mu-key-words code="ref" />
      <mu-type code="(" />
      <mu-text code='"the path to the image or the picture in base64"' />
      <mu-type code=");" />
    </code-line>
    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="areas " />
      <mu-type code="= " />
      <mu-key-words code="ref" />
      <mu-type code="([" />
    </code-line>

    <area-obj
      id='1759337197573'
      name='"Photo"'
      width='15.934959349593496'
      height='40.46242774566473'
      x='5.853658536585367'
      y='23.410404624277454'
    />
    <area-obj
      id='1759337204073'
      name='"First name"'
      width='25.853658536585368'
      height='8.38150289017341'
      x='50.40650406504065'
      y='28.901734104046245'
    />
    <area-obj
      id='1759337222917'
      name='"Last name"'
      width='20.48780487804878'
      height='7.225433526011561'
      x='53.98373983739837'
      y='10.982658959537572'
    />
    <area-obj
      id='1759337232429'
      name='"Surname"'
      width='13.658536585365855'
      height='6.9364161849710975'
      x='55.447154471544714'
      y='39.017341040462426'
    />
    <area-obj
      id='1759337240377'
      name='"Gender"'
      width='5.040650406504065'
      height='6.358381502890173'
      x='39.67479674796748'
      y='50'
    />
    <area-obj
      id='1759337248220'
      name='"Birthplace"'
      width='30.081300813008134'
      height='6.9364161849710975'
      x='49.43089430894309'
      y='58.67052023121387'
    />
    <area-obj
      id='1759337254262'
      name='"Date of birth"'
      width='30.24390243902439'
      height='7.225433526011561'
      x='57.56097560975609'
      y='48.554913294797686'
    />
    <area-obj
      id='1759337260502'
      name='"Series"'
      width='3.577235772357723'
      height='59.53757225433526'
      x='92.84552845528455'
      y='21.965317919075144'
    />

    <code-line level-2>
      <mu-type code="]);" />
    </code-line>

    <code-line />

    <code-line level-2>
      <mu-key-words code="const " />
      <mu-variable code="hints " />
      <mu-type code="= [" />
    </code-line>

    <hint-obj
      x="23"
      y="38"
      title="'Photo'"
      id="1759337197573"
    />
    <hint-obj
      x="54"
      y="9"
      title="'Last name'"
      id="1759337222917"
    />
    <hint-obj
      x="51"
      y="26"
      title="'First name'"
      id="1759337204073"
    />
    <hint-obj
      x="42"
      y="44"
      title="'Surname'"
      id="1759337232429"
    />
    <hint-obj
      x="71"
      y="47"
      title="'Date of birth'"
      id="1759337254262"
    />
    <hint-obj
      x="50"
      y="71"
      title="'Birthplace'"
      id="1759337248220"
    />
    <hint-obj
      x="38.5"
      y="62"
      title="'Gender'"
      id="1759337240377"
    />
    <hint-obj
      x="89"
      y="88"
      title="'Series'"
      id="1759337260502"
    />

    <code-line level-2>
      <mu-type code="]" />
    </code-line>

    <code-line>
      <mu-tag code="</script>" />
    </code-line>

    <code-line />

    <code-line>
      <mu-tag code="<style " />
      <mu-attr code="lang" />
      <mu-type code="=" />
      <mu-text code='"scss" ' />
      <mu-attr code="scoped" />
      <mu-tag code=">" />
    </code-line>

    <code-line level-2>
      <mu-style-class code=".theme-slots " />
      <mu-type code="{" />
    </code-line>
    <code-line level-3>
      <mu-style-tag code="image " />
      <mu-type code="{" />
    </code-line>
    <code-line level-4>
      <mu-style-param code="cursor" />
      <mu-type code=": " />
      <mu-key-words code="default" />
      <mu-type code=";" />
    </code-line>
    <code-line level-4>
      <mu-style-param code="transform" />
      <mu-type code=": translateX(" />
      <mu-number code="-85" />
      <mu-type code="px);" />
    </code-line>
    <code-line level-3>
      <mu-type code="}" />
    </code-line>

    <code-line />

    <code-line level-3>
      <mu-style-tag code="text " />
      <mu-type code="{" />
    </code-line>
    <code-line level-4>
      <mu-style-param code="fill" />
      <mu-type code=": #006fff;" />
    </code-line>
    <code-line level-4>
      <mu-style-param code="font-weight" />
      <mu-key-words code=": " />
      <mu-key-words code="bold" />
      <mu-type code=";" />
    </code-line>
    <code-line level-3>
      <mu-type code="}" />
    </code-line>
    <code-line level-2>
      <mu-type code="}" />
    </code-line>
    <code-line>
      <mu-tag code="</style>" />
    </code-line>
  </code-markup>
</template>

<script setup>
  import useLang from '@/components/code/uselang.js';

  import AreaObj from './slots/AreaObj.vue';
  import HintObj from './slots/HintObj.vue';

  const props = defineProps({
    isEng: {
      type: Boolean,
      default: false
    }
  });

  const codeText = `<template>
  <div class="theme-slots">
    <labeling-image
      :image-src="file"
      v-model="areas"
    >
      <template #first >
        <text
          v-for="{ x, y, id, title } in hints"
          :key="id"
          :x="\`\${x}%\`"
          :y="\`\${y}%\`"
        >
          {{ title }}
        </text>
      </template>

      <template #last >
        <image
          :href="the path to the image or the picture in base64"
          width="80"
          height="40"
          x="100%"
          y="10"
        />
      </template>
    </labeling-image>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import LabelingImage from 'vue-labeling-image';
  import 'vue-labeling-image/lib/styles.css';

  const file = ref(the path to the image or the picture in base64);
    const areas = ref([
    {
      id: 1759337197573,
      name: "Photo",
      width: 15.934959349593496,
      height: 40.46242774566473,
      x: 5.853658536585367,
      y: 23.410404624277454,
    },
    {
      id: 1759337204073,
      name: "First name",
      width: 25.853658536585368,
      height: 8.38150289017341,
      x: 50.40650406504065,
      y: 28.901734104046245,
    },
    {
      id: 1759337222917,
      name: "Last name",
      width: 20.48780487804878,
      height: 7.225433526011561,
      x: 53.98373983739837,
      y: 10.982658959537572,
    },
    {
      id: 1759337232429,
      name: "Surname",
      width: 13.658536585365855,
      height: 6.9364161849710975,
      x: 55.447154471544714,
      y: 39.017341040462426,
    },
    {
      id: 1759337240377,
      name: "Gender",
      width: 5.040650406504065,
      height: 6.358381502890173,
      x: 39.67479674796748,
      y: 50,
    },
    {
      id: 1759337248220,
      name: "Birthplace",
      width: 30.081300813008134,
      height: 6.9364161849710975,
      x: 49.43089430894309,
      y: 58.67052023121387,
    },
    {
      id: 1759337254262,
      name: "Date of birth",
      width: 30.24390243902439,
      height: 7.225433526011561,
      x: 57.56097560975609,
      y: 48.554913294797686,
    },
    {
      id: 1759337260502,
      name: "Series",
      width: 3.577235772357723,
      height: 59.53757225433526,
      x: 92.84552845528455,
      y: 21.965317919075144,
    },
    ]);

    const hints = [
    {
      id: 1759337197573,
      x: 23,
      y: 38,
      title: 'Photo',
    },
    {
      id: 1759337222917,
      x: 54,
      y: 9,
      title: 'Last name',
    },
    {
      id: 1759337204073,
      x: 51,
      y: 26,
      title: 'First name',
    },
    {
      id: 1759337232429,
      x: 42,
      y: 44,
      title: 'Surname',
    },
    {
      id: 1759337254262,
      x: 71,
      y: 47,
      title: 'Date of birth',
    },
    {
      id: 1759337248220,
      x: 50,
      y: 71,
      title: 'Birthplace',
    },
    {
      id: 1759337240377,
      x: 38.5,
      y: 62,
      title: 'Gender',
    },
    {
      id: 1759337260502,
      x: 89,
      y: 88,
      title: 'Series',
    },
  ]
${'</'}script>

<style lang="scss" scoped>
  .theme-slots {
    image {
      cursor: default;
      transform: translateX(-85px);
    }

    text {
      fill: #006fff;
      font-weight: bold;
    }
  }
</style>`;

  const codeParam = useLang(props);
</script>