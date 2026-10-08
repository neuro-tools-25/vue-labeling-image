<template>
  <card-item
    url="src/components/examples/stilization-class/AreasClassEdited.vue"
    :is-eng="props.isEng"
  >
    <template #desc>
      <template v-if="!props.isEng">
        <p>
          Данный пример показывает как можно стилизовать маркированные области через CSS классы. Где это может пригодиться? Смотрите, давайте предположим, что мы маркировали какую-то картинку, отправили данные на сервер. И нейронка по каким-либо причинам не смогла определить текст, в таком случае имеет смысл сделать нераспознанные маркированны области красными, показав тем самым ошибку. Предположим, что некоторые маркированные области распознаны, но явно не точно (какие-то буквы на картинке не чёткие), нейронка не совсем уверена в результате, такие области имеет смысл сделать жёлтыми. Нормально распознанный текст правильнее всего сделать зелёным, показав тем самым, что всё прошло хорошо.
        </p>

        <p>
          Мы получаем массив объектов, одно из свойств каждого объекта говорит нам о результате распознавания текста. Дальше нам будет нужно преобразовать данное свойство в свойство "muClass" с каким-либо CSS классом. В примере ниже я использую CSS класс "mu-class_error" для отображения нераспознанной маркированной области. CSS класс "mu-class_warn" для не точно распознанных маркированных областей, в которых нейронка сомневается. И CSS класс "mu-class_success" для маркированных областей на которых распознавание текста прошло успешно. Вы можете использовать любые классы которые сочтёте нужными, и которые больше подходят для вашей методологии.
        </p>

        <p>
          В качестве картинки я буду использовать "паспорт Бендера". В отличие от предыдущего примера я разрешу растягивать и переносить маркированные области. К примеру, нейронка не смогла распознать текст, так как мы не точно маркировали картинку, вполне естественно, что нам будет нужно растянуть или не много перенести маркированную область. Исключительно для примера я не много поменяю стили. Я сделаю не много толще "border" для активной маркированной области, сделаю меньшую прозрачность для активной маркированной области, и сделаю так, чтобы активная маркированная область помеченная как "ошибка", "предупреждение", "успешно распознанная" не меняла свой цвет. Это учебный пример, цель показать, что так можно. В том, что я реализовывал, просто приходили маркированные области, и если там была ошибка, то приходилось маркировать всё заново, это было не удобно, но таковы были требования.
        </p>
      </template>

      <template v-if="props.isEng">
        <p>
          This example shows how you can style labeled areas using CSS classes. Where might this be useful? Let's assume we've labeled some image and sent the data to the server. And for some reason, the neural network couldn't identify the text. In this case, it makes sense to make the unrecognized labeled areas red, thereby indicating an error. Let's assume that some labeled areas have been recognized, but clearly not accurately (some letters in the image are unclear), and the neural network isn't entirely confident in the result, it makes sense to make such areas yellow. It's best to make normally recognized text green, thereby indicating that everything went well.
        </p>

        <p>
          We receive an array of objects, and one of the properties of each object tells us the result of the text recognition. Next, we will need to convert this property into the “muClass” property with some CSS class. In the example below, I use the CSS class “mu-class_error” to display an unrecognized labeled area. The CSS class “mu-class_warn” is used for incompletely recognized labeled areas where the neural network has doubts. And the CSS class “mu-class_success” is used for labeled areas where the text recognition was successful. You can use any classes that you deem necessary and that are more suitable for your methodology.
        </p>

        <p>
          As an image, I will use "Bender's passport". Unlike the previous example, I will allow stretching and moving of the labeled areas. For example, the neural network couldn't recognize the text because we didn't label the image accurately, it's quite natural that we will need to stretch or slightly move the labeled area. Just for the example, I will change the styles a little. I'll make the "border" a bit thicker for the active labeled area, reduce the transparency for the active labeled area, and ensure that the active labeled area marked as "error", "warning", or "successfully recognized" doesn't change its color. This is a training example, the goal is to show that it's possible. In what I implemented, labeled areas simply arrived, and if there was an error, you had to mark everything again — it was inconvenient, but those were the requirements.
        </p>
      </template>
    </template>

    <template #markup>
      <labeling-image
        :image-src="imageSrc"
        v-model="areas"
        key-title="name"
        :is-markup="false"
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
      muClass: 'mu-class_error'
    },
    {
      id: 1759337204073,
      name: "First name",
      width: 25.853658536585368,
      height: 8.38150289017341,
      x: 50.40650406504065,
      y: 28.901734104046245,
      muClass: 'mu-class_error'
    },
    {
      id: 1759337222917,
      name: "Last name",
      width: 20.48780487804878,
      height: 7.225433526011561,
      x: 53.98373983739837,
      y: 10.982658959537572,
      muClass: 'mu-class_error'
    },
    {
      id: 1759337232429,
      name: "Surname",
      width: 13.658536585365855,
      height: 6.9364161849710975,
      x: 55.447154471544714,
      y: 39.017341040462426,
      muClass: 'mu-class_success'
    },
    {
      id: 1759337240377,
      name: "Gender",
      width: 5.040650406504065,
      height: 6.358381502890173,
      x: 39.67479674796748,
      y: 50,
      muClass: 'mu-class_warn'
    },
    {
      id: 1759337248220,
      name: "Birthplace",
      width: 30.081300813008134,
      height: 6.9364161849710975,
      x: 49.43089430894309,
      y: 58.67052023121387,
      muClass: 'mu-class_success'
    },
    {
      id: 1759337254262,
      name: "Date of birth",
      width: 30.24390243902439,
      height: 7.225433526011561,
      x: 57.56097560975609,
      y: 48.554913294797686,
      muClass: 'mu-class_success'
    },
    {
      id: 1759337260502,
      name: "Series",
      width: 3.577235772357723,
      height: 59.53757225433526,
      x: 92.84552845528455,
      y: 21.965317919075144,
      muClass: 'mu-class_warn'
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
  .mu-class {
    &_error,
    &_warn,
    &_success {
      --mu-marking-rect-stroke-width: 2;

      &.mark-up__g_active {
        --mu-marking-rect-stroke-width: 4;
        --mu-marking-rect-active-fill-opacity: .4;
      }
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
      --mu-marking-rect-active-fill: #{$color};
      --mu-marking-rect-active-stroke: #{$color};
    }

    &_success {
      $color: #00CC00;

      --mu-marking-rect-fill: #{$color};
      --mu-marking-rect-stroke: #{$color};
      --mu-marking-rect-active-fill: #{$color};
      --mu-marking-rect-active-stroke: #{$color};
    }
  }
</style>
