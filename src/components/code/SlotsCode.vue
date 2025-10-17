<template>
  <ui-code
    :code="installText"
    :is-eng="props.isEng"
    class="code__row_big"
  >
    <ui-code-row>
      <ui-code-block>
        {{ '<template>' }}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row pl2>
      <ui-code-block>
        {{ '<div class="theme-slots">' }}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row pl3>
      {{'<'}}<ui-code-import>labeling-image</ui-code-import>
    </ui-code-row>
    <ui-code-row pl4>
      :image-src="<ui-code-text>file</ui-code-text>"
    </ui-code-row>
    <ui-code-row pl4>
      v-model="<ui-code-text>areas</ui-code-text>"
    </ui-code-row>
    <ui-code-row pl3>
    {{'>'}}
    </ui-code-row>

    <ui-code-row pl4>
      <ui-code-block>
        {{ '<template' }}
      </ui-code-block>
      #first
      <ui-code-block>
        {{ '>' }}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row pl5>
      <ui-code-block>
        {{ '<text' }}
      </ui-code-block>
    </ui-code-row>

    <ui-code-row pl6>
      <ui-code-import>
        v-for</ui-code-import>="{ x, y, id, title }
      <ui-code-import>
        in
      </ui-code-import>
      hints"
    </ui-code-row>
    <ui-code-row pl6>
      <ui-code-import>
        :key</ui-code-import>="id"
    </ui-code-row>
    <ui-code-row pl6>
      <ui-code-import>
        :x</ui-code-import>="`${x}%`"
    </ui-code-row>
    <ui-code-row pl6>
      <ui-code-import>
        :y</ui-code-import>="`${y}%`"
    </ui-code-row>

    <ui-code-row pl5>
      <ui-code-block>
        {{ '>' }}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row pl6>
      {{ '{' }}{{ '{' }}
        title
      {{ '}' }}{{ '}' }}
    </ui-code-row>
    <ui-code-row pl5>
      <ui-code-block>
        {{ '</text>' }}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-block>
        {{ '</template>' }}
      </ui-code-block>
    </ui-code-row>

    <ui-code-row />

    <ui-code-row pl4>
      <ui-code-block>
        {{ '<template' }}
      </ui-code-block>
      #last
      <ui-code-block>
        {{ '>' }}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row pl5>
      <ui-code-block>
        {{ '<image' }}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row pl6>
      <ui-code-import>
        :href</ui-code-import>="the path to the image or the picture in base64"
    </ui-code-row>
    <ui-code-row pl6>
      <ui-code-import>
        width</ui-code-import>="80"
    </ui-code-row>
    <ui-code-row pl6>
      <ui-code-import>
        height</ui-code-import>="40"
    </ui-code-row>
    <ui-code-row pl6>
      <ui-code-import>
        x</ui-code-import>="100%"
    </ui-code-row>
    <ui-code-row pl6>
      <ui-code-import>
        y</ui-code-import>="10"
    </ui-code-row>
    <ui-code-row pl5>
      <ui-code-block>
        {{ '/>' }}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-block>
        {{ '</template>' }}
      </ui-code-block>
    </ui-code-row>

    <ui-code-row pl3>
      {{'</'}}<ui-code-import>labeling-image</ui-code-import>{{'>'}}
    </ui-code-row>
    <ui-code-row pl2>
      <ui-code-block>
        {{ '</div>' }}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row>
      <ui-code-block>
        {{ '</template>' }}
      </ui-code-block>
    </ui-code-row>

    <ui-code-row />

    <ui-code-row>
      <ui-code-block>
        {{'<script setup>'}}
      </ui-code-block>
    </ui-code-row>
    <ui-code-row pl2>
      <ui-code-import>import</ui-code-import> { ref } <ui-code-import>from</ui-code-import> '<ui-code-text>vue</ui-code-text>';
    </ui-code-row>

    <ui-code-row pl2 />

    <ui-code-row pl2>
      <ui-code-import>import</ui-code-import> LabelingImage <ui-code-import>from</ui-code-import> '<ui-code-text>vue-labeling-image</ui-code-text>';
    </ui-code-row>
    <ui-code-row pl2>
      <ui-code-import>import</ui-code-import> 
      '<ui-code-text>vue-labeling-image/lib/styles.css</ui-code-text>';
    </ui-code-row>

    <ui-code-row />

    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>file</ui-code-var> = <ui-code-block>ref</ui-code-block>(<ui-code-import>the path to the image or the picture in base64</ui-code-import>);
    </ui-code-row>
    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>areas</ui-code-var> = <ui-code-block>ref</ui-code-block>(<ui-code-import>[</ui-code-import>
    </ui-code-row>

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

    <ui-code-row pl2>
      <ui-code-import>]</ui-code-import>);
    </ui-code-row>

    <ui-code-row />

    <ui-code-row pl2>
      <ui-code-import>const</ui-code-import> <ui-code-var>hints</ui-code-var> = <ui-code-import>[</ui-code-import>
    </ui-code-row>
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
    <ui-code-row pl2>
      <ui-code-import>]</ui-code-import>
    </ui-code-row>

    <ui-code-row>
      <ui-code-block>
        {{ '</script>' }}
      </ui-code-block>
    </ui-code-row>

    <ui-code-row />

    <ui-code-row>
      <ui-code-block>
        {{ '<style' }}
      </ui-code-block>
      <ui-code-block>
        {{ ' lang="' }}
      </ui-code-block>
      <ui-code-text>
      scss
      </ui-code-text>
      <ui-code-block>
        {{ '" ' }}
      </ui-code-block>
      <ui-code-block>
        {{ 'scoped' }}
      </ui-code-block>
      <ui-code-block>
        {{ '>' }}
      </ui-code-block>
    </ui-code-row>

    <ui-code-row pl2>
      <ui-code-block>
        .theme-slots
      </ui-code-block>
      {
    </ui-code-row>
    <ui-code-row pl3>
      <ui-code-block>
        image
      </ui-code-block>
      {
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>
        cursor</ui-code-var>: default;
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>
        transform</ui-code-var>: translateX(-85px);
    </ui-code-row>
    <ui-code-row pl3>
      }
    </ui-code-row>

    <ui-code-row />

    <ui-code-row pl3>
      <ui-code-block>
        text
      </ui-code-block>
      {
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>
        fill</ui-code-var>: #006fff;
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>
        font-weight</ui-code-var>: bold;
    </ui-code-row>
    <ui-code-row pl3>
      }
    </ui-code-row>
    <ui-code-row pl2>
      }
    </ui-code-row>
    <ui-code-row>
      <ui-code-block>
        {{ '</style' }}
      </ui-code-block>
    </ui-code-row>
  </ui-code>
</template>

<script setup>
  import AreaObj from './slots/AreaObj.vue';
  import HintObj from './slots/HintObj.vue';

  const props = defineProps({
    isEng: {
      type: Boolean,
      default: false
    }
  });

  const installText = `<template>
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
</script>