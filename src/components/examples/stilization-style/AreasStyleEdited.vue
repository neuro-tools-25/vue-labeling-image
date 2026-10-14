<template>
  <card-item
    url="src/components/examples/stilization-style/AreasStyleEdited.vue"
    :is-eng="props.isEng"
  >
    <template #desc>
      <ui-full-page>
        <template v-if="!props.isEng">
          <p>
            Данный пример показывает как можно стилизовать маркированные области через атрибут "style". Где это может пригодиться? Смотрите, давайте предположим, что мы маркировали какую-то картинку, отправили данные на сервер. И нейронка по каким-либо причинам не смогла определить текст, в таком случае имеет смысл сделать нераспознанные маркированны области красными, показав тем самым ошибку. Предположим, что некоторые маркированные области распознаны, но явно не точно (какие-то буквы на картинке не чёткие), нейронка не совсем уверена в результате, такие области имеет смысл сделать жёлтыми. Нормально распознанный текст правильнее всего сделать зелёным, показав тем самым, что всё прошло хорошо.
          </p>

          <p>
            Мы получаем массив объектов, одно из свойств каждого объекта говорит нам о результате распознавания текста. Дальше вам будет нужно преобразовать данное свойство в свойство "muStyle" и задать для него нужный вам объект состоящий из CSS-переменных. Посмотреть какие CSS-переменные за что отвечают можно <ui-link
              type="site"
              href="settings"
              title="Страница настроек"
              :query="props.query"
            >здесь</ui-link> (Прокрутите до блока "Стили для блока маркировки изображения"). В примере ниже я использую следующий объект стилей для отображения не распознанной маркированной области - { "--mu-marking-rect-stroke-width": 3, "--mu-marking-rect-fill": "var(--mu-marking-rect-active-fill)", "--mu-marking-rect-stroke": "var(--mu-marking-rect-active-fill)" }. Для не точно распознанных маркированных областей, в которых нейронка сомневается, я использую следующий объект стилей - { "--mu-marking-rect-stroke-width": 3, "--mu-marking-rect-fill": "#fae60a", "--mu-marking-rect-stroke": "#fae60a" }. Для маркированных областей на которых распознавание текста прошло успешно я использую следующие стили - { "--mu-marking-rect-stroke-width": 3, "--mu-marking-rect-fill": "#00CC00", "--mu-marking-rect-stroke": "#00CC00" }. Под моим компонентом есть кнопка "Показать маркированные области", кликнув по ней, можно более детально посмотреть код.
          </p>

          <p>
            В качестве картинки я буду использовать "паспорт Бендера". Если предположить, что результаты распознавания текста приходят с сервера, то я не буду разрешать маркировать картинку, переносить, или изменять маркированные области. В принципе этот пример очень похож на "пример стилизации маркированных областей через CSS классы", но здесь стили можно задавать прямо в JS-коде, некоторым программистам это может показаться более удобным.
          </p>
        </template>

        <template v-if="props.isEng">
          <p>
            This example shows how you can style labeled areas using the "style" attribute. Where might this be useful? Let’s assume we've labeled some image and sent the data to the server. And for some reason, the neural network couldn't identify the text, in this case, it makes sense to make the unrecognized labeled areas red, thereby indicating an error. Let’s assume that some labeled areas have been recognized, but not accurately (some letters in the image are unclear), and the neural network isn't entirely confident in the result, it makes sense to make such areas yellow. It’s best to make normally recognized text green, thereby indicating that everything went well.
          </p>

          <p>
            We receive an array of objects, and one of the properties of each object tells us the result of the text recognition. Next, you will need to convert this property into the "muStyle" property and assign to it the object you need, which consists of CSS variables. You can see which CSS variables are responsible for what using <ui-link
              type="site"
              href="settings"
              title="Settings page"
              :query="props.query"
            >here</ui-link> (Scroll to the "Styles for the image labeling block" section). In the example below, I use the following style object to display an unrecognized labeled area - { "--mu-marking-rect-stroke-width": 3, "--mu-marking-rect-fill": "var(--mu-marking-rect-active-fill)", "--mu-marking-rect-stroke": "var(--mu-marking-rect-active-fill)" }. For non-accurately recognized labeled areas in which the neural network is in doubt, I use the following style object - { "--mu-marking-rect-stroke-width": 3, "--mu-marking-rect-fill": "#fae60a", "--mu-marking-rect-stroke": "#fae60a" }. For the labeled areas where text recognition was successful, I use the following styles: { "--mu-marking-rect-stroke-width": 1, "--mu-marking-rect-fill": "#00CC00", "--mu-marking-rect-stroke": "#00CC00" }. Below my component, there is a button labeled "Show labeling areas", by clicking it, you can view the code in more detail.
          </p>

          <p>
            As an image, I will use "Bender's passport". If we assume that the text recognition results come from the server, then I will not allow labeling the image, moving it, or modifying the labeled areas. In principle, this example is very similar to the "example of styling labeled areas through CSS classes", but here the styles can be set directly in the JS code, some programmers may find this more convenient.
          </p>
        </template>
      </ui-full-page>
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
        :style="item.muStyle"
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

  const colorError = '#ff0050';
  const colorWarn = '#fae60a';
  const colorSacces = '#00CC00';

  const bStyle = (color) => ({
    "--mu-marking-rect-stroke-width": 2,
    "--mu-marking-rect-fill": color,
    "--mu-marking-rect-stroke": color,
    "--mu-marking-rect-active-fill": color,
    "--mu-marking-rect-active-stroke": color,
  });

  const errorStyle = bStyle(colorError);
  const warnStyle = bStyle(colorWarn);
  const saccessStyle = bStyle(colorSacces);

  const areas = ref([
    {
      id: 1759337197573,
      name: "Photo",
      width: 27.97947487671597,
      height: 59.53757225433526,
      x: 4.227642276422764,
      y: 24.277456647398843,
      muStyle: errorStyle
    },
    {
      id: 1759337204073,
      name: "First name",
      width: 25.853658536585368,
      height: 8.38150289017341,
      x: 50.40650406504065,
      y: 28.901734104046245,
      muStyle: errorStyle
    },
    {
      id: 1759337222917,
      name: "Last name",
      width: 20.48780487804878,
      height: 7.225433526011561,
      x: 53.98373983739837,
      y: 10.982658959537572,
      muStyle: errorStyle
    },
    {
      id: 1759337232429,
      name: "Surname",
      width: 13.658536585365855,
      height: 6.9364161849710975,
      x: 55.447154471544714,
      y: 39.017341040462426,
      muStyle: saccessStyle
    },
    {
      id: 1759337240377,
      name: "Gender",
      width: 5.040650406504065,
      height: 6.358381502890173,
      x: 39.67479674796748,
      y: 50,
      muStyle: warnStyle
    },
    {
      id: 1759337248220,
      name: "Birthplace",
      width: 30.081300813008134,
      height: 6.9364161849710975,
      x: 49.43089430894309,
      y: 58.67052023121387,
      muStyle: saccessStyle
    },
    {
      id: 1759337254262,
      name: "Date of birth",
      width: 30.24390243902439,
      height: 7.225433526011561,
      x: 57.56097560975609,
      y: 48.554913294797686,
      muStyle: saccessStyle
    },
    {
      id: 1759337260502,
      name: "Series",
      width: 3.577235772357723,
      height: 59.53757225433526,
      x: 92.84552845528455,
      y: 21.965317919075144,
      muStyle: warnStyle
    },
  ]);

  // Интернационализация
  const props = defineProps(['isEng', 'query']);

  const header = computed(() => {
    let text='Список маркированных областей:';
    if (props.isEng) text='List of labeling areas:';

    return text;
  });
</script>

<style lang="scss">
</style>
