<template>
  <card-item
    url="src/components/examples/StilizationAreasClass.vue"
    :is-eng="props.isEng"
  >
    <template #desc>
      <p v-if="!props.isEng">
        Данный пример показывает как можно стилизовать маркированные области через CSS классы.
      </p>

      <p v-if="props.isEng">
        This example shows how you can style marked areas using CSS classes.
      </p>
    </template>

    <template #markup>
      <labeling-image
        :image-src="imageSrc"
        v-model="areas"
        key-title="name"
        is-readonly
      />

      <view-code
        :code="areas"
        :is-eng="isEng"
      />
    </template>

    <template #form>
      <h2>{{ header }}</h2>

      <form-area
        v-for="item in areas"
        :key="item.id"
        :x="item.x"
        :y="item.y"
        :width="item.width"
        :height="item.height"
        :name="item.name"
        :is-eng="props.isEng"
        read-only
        :class="item.muClass"
      />
    </template>
  </card-item>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import CardItem from '@/components/CardItem.vue';
  import LabelingImage from 'lib/index.es.js';
  import ViewCode from '@/components/ViewCode.vue';
  import FormArea from '@/components/FormArea.vue';

  import { imageStud } from '@/assets/image-stud.js';

  const imageSrc = ref(imageStud);

  const areas = ref([
    {
      id: 1759337197573,
      name: "Photo",
      width: 27.97947487671597,
      height: 59.53757225433526,
      x: 4.227642276422764,
      y: 24.277456647398843,
      muClass: 'mu_error'
    },
    {
      id: 1759337204073,
      name: "First name",
      width: 25.853658536585368,
      height: 8.38150289017341,
      x: 50.40650406504065,
      y: 28.901734104046245,
      muClass: 'mu_error'
    },
    {
      id: 1759337222917,
      name: "Last name",
      width: 20.48780487804878,
      height: 7.225433526011561,
      x: 53.98373983739837,
      y: 10.982658959537572,
      muClass: 'mu_error'
    },
    {
      id: 1759337232429,
      name: "Surname",
      width: 13.658536585365855,
      height: 6.9364161849710975,
      x: 55.447154471544714,
      y: 39.017341040462426,
      muClass: 'mu_success'
    },
    {
      id: 1759337240377,
      name: "Gender",
      width: 5.040650406504065,
      height: 6.358381502890173,
      x: 39.67479674796748,
      y: 50,
      muClass: 'mu_warn'
    },
    {
      id: 1759337248220,
      name: "Birthplace",
      width: 30.081300813008134,
      height: 6.9364161849710975,
      x: 49.43089430894309,
      y: 58.67052023121387,
      muClass: 'mu_success'
    },
    {
      id: 1759337254262,
      name: "Date of birth",
      width: 30.24390243902439,
      height: 7.225433526011561,
      x: 57.56097560975609,
      y: 48.554913294797686,
      muClass: 'mu_success'
    },
    {
      id: 1759337260502,
      name: "Series",
      width: 3.577235772357723,
      height: 59.53757225433526,
      x: 92.84552845528455,
      y: 21.965317919075144,
      muClass: 'mu_warn'
    },
  ]);

  // Интернационализация
  const props = defineProps(['isEng']);

  const header = computed(() => {
    let text='Список маркированных областей:';
    if (props.isEng) text='List of labeling areas:';

    return text;
  });
</script>

<style lang="scss">
  .mu {
    &_error,
    &_warn,
    &_success {
      --mu-marking-rect-stroke-width: 3;
    }

    &_error {
      $color: --mu-marking-rect-active-fill;

      --mu-marking-rect-fill: var(#{$color});
      --mu-marking-rect-stroke: var(#{$color});
    }

    &_warn {
      $color: #fae60a;

      --mu-marking-rect-fill: #{$color};
      --mu-marking-rect-stroke: #{$color};
    }

    &_success {
      $color: #00CC00;

      --mu-marking-rect-fill: #{$color};
      --mu-marking-rect-stroke: #{$color};
    }
  }
</style>
