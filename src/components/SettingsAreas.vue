<template>
  <ui-row class="settings-areas">
    <open-header
      :is-active="isMain"
      type-element="h2"
      @click="isMain = !isMain"
    >
      {{ headerText }}
    </open-header>

    <template v-if="isMain">
      <ui-row>
        <ui-label>
          <template v-if="props.isRus">
            <b>imageSrc</b> - картинка для маркирования, может быть двоичным файлом, а может быть в формате base64, или просто путь к картинке.
          </template>

          <template v-if="props.isEng">
            <b>imageSrc</b> - the labeling image may be a binary file, or it may be in base64 format, or just the path to the image.
          </template>
        </ui-label>

        <ui-input v-model="file" />
      </ui-row>

      <ui-row>
        <ui-label no-margin>
          <template v-if="props.isRus">
            <b>isMarkup</b> - возможность маркировать картинку. Для маркирования, сперва нужно выбрать файл. По умолчанию равно <b>true</b>. Может пригодиться, если нужно маркировать картинку по условию. К примеру, мы создали маркированную область, и нельзя создать новую, пока мы не введём имя области. Маркированные области можно будет растягивать и переносить. Если это не нужно, то смотрите блок "Настройки растягивания/перемещения размеченных областей".
          </template>

          <template v-if="props.isEng">
            <b>isMarkup</b> - the ability to label an image. To mark, you first need to select a file. The default value is <b>true</b>. It can be useful if you need to label an image according to a condition. For example, we have created a bulleted area, and we cannot create a new one until we enter the name of the area. The marked areas can be stretched and moved. If this is not necessary, then see the section "Settings for stretching/moving marked areas".
          </template>
        </ui-label>

        <ui-checkbox v-model="isMarkup">
          {{ isMarkup }}
        </ui-checkbox>
      </ui-row>

      <open-header
        :is-active="isTheme"
        @click="isTheme = !isTheme"
      >
        {{ themeText }}
      </open-header>

      <template v-if="isTheme">
        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>theme</b> - тема для маркированных областей. Если мы посмотрим на другие UI для <ocr-def lang="rus" />, то можно обратить внимание, что маркированные области как правило имеют синий цвет, а активная маркированная область имеет как правило зелёный цвет. Это не для всех документов подходит. Как правило, в мире большая часть документов имеет зеленый, или красный цвет. Меньше докуметов имеют синий цвет, но они есть, к примеру <blue-card-def lang="rus" />. Вполне естественно, что для разных документов и тема должна быть разная. К примеру, у нас в России <snils-def lang="rus" /> зеленый, если активная область на нем будет зеленой, то она просто будет не очень заметна на данном документе. На основании своего опыта, я выделил 5 разных тем. "Default", тема для зеленых документов, к примеру СНИЛС. Она стоит по умолчанию, и будет применяться, если данный параметр отсутствует. "Red", для красных документов, у нас в России это паспорт, водительские права. "Blue", для синих документов, как я выше писал, это синяя карта для автомобилистов. "White", это любой документ на листе формата А4, трудовой договор, договор при покупке сим карты, договор оказания медицинских услуг, и тд. "Black", такие документы реже встречаются, это черный фон и белый цвет на нём, видимо делается инверсия для отсканированных документов. Так же данная тема подойдёт для документов которые сделаны через принтер. Если принтер плохой, документы будут выглядеть темнее обычных. В данном параметре возможно указать и свою кастомную тему. К примеру, если мы запишем в theme="castomTheme", то нужно будет прописать стили для класса "mark-up_theme_castomTheme". Стили для кастомной темы можно подобрать в блоке ниже (Стили для блока разметки документов). В общем выберите какой-нибудь документ, разметьте его, и поиграйтесь с данным параметром.
            </template>

            <template v-if="props.isEng">
              <b>theme</b> is a theme for labeled areas. If we look at other UIs for <ocr-def lang="eng" />, we can see that the labeled areas are usually blue, and the active labeled area is usually green. This is not suitable for all documents. As a rule, most of the documents in the world are green or red. Fewer documents are blue, but they are available, for example <blue-card-def lang="eng" />. It is quite natural that the topic should be different for different documents. For example, in Russia <snils-def lang="eng" /> is green, if the hotspot on it is green, then it simply will not be very noticeable on this document. Based on my experience, I have identified 5 different themes. "Default", a theme for green documents, for example, SNILS. It is set by default, and will be applied if this parameter is missing. "Red", for red documents, in Russia it is a passport, a driver's license. "Blue", for blue documents, as I wrote above, is a blue card for motorists. "White" is any document on an A4 sheet, an employment contract, a contract for the purchase of a SIM card, a medical services contract, etc. "Black", such documents are less common, this is a black background and white color on it, apparently an inversion is being done for scanned documents. This theme is also suitable for documents that are made through a printer. If the printer is bad, the documents will look darker than usual. You can also specify your custom theme in this parameter. For example, if we write in theme="castomTheme", then we will need to register styles for the "mark-up_theme_castomTheme" class. Styles for a custom theme can be selected in the block below (Styles for the document markup block). In general, select a document, mark it up, and play with this parameter.
            </template>
          </ui-label>

          <ui-select
            v-model="theme"
            :options="themeOptions"
          />
        </ui-row>
      </template>

      <open-header
        :is-active="isMarking"
        @click="isMarking = !isMarking"
      >
        {{ settingsGrid }}
      </open-header>

      <template v-if="isMarking">
        <ui-row>
          <ui-label no-margin>
            <template v-if="props.isRus">
              <b>enableGrid</b> - возможность включения сетки. По умолчанию сетка отключена, значение равно <b>false</b>.
            </template>

            <template v-if="props.isEng">
              <b>enableGrid</b> - the ability to enable the grid. By default, the grid is disabled, the value is <b>false</b>.
            </template>
          </ui-label>

          <ui-checkbox v-model="enableGrid">
            {{ enableGrid }}
          </ui-checkbox>
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>gridSize</b> - размер сетки. Возможны значения от 5 до 50. Больше 50, делать размер сетки я не вижу смысла. По умолчанию равно 10. Это значение может пригодиться, если нужно более точно разметить область. Чтобы посмотреть данный параметр, нужно включить <b>enableGrid</b>.
            </template>

            <template v-if="props.isEng">
              <b>gridSize</b> - grid size. Possible values are from 5 to 50. I don't see any point in making a grid size greater than 50. The default is 10. This value can be useful if you need to mark an area more precisely. To view this parameter, you need to enable <b>enableGrid</b>.
            </template>
          </ui-label>

          <ui-select
            v-model="gridSize"
            :options="gridSizeOptions"
          />
        </ui-row>
      </template>

      <open-header
        :is-active="isSizesAreas"
        @click="isSizesAreas = !isSizesAreas"
      >
        {{ settingsMinimalSizes }}
      </open-header>

      <template v-if="isSizesAreas">
        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>minWidth</b> - минимальная ширина маркированной области. По умолчанию равно 10. Измеряется в <b>px</b>. Мой компонент нужен для разметки текста или выделения лиц на документах. Как-то сомнительно, что-бы область которая меньше 10px можно как-то распознать. Если в этом есть какая-то необходимость, то нужно задать 0.
            </template>

            <template v-if="props.isEng">
              <b>MinWidth</b> is the minimum width of the labeled area. The default value is 10. Measured in <b>px</b>. My component is needed for marking up text or highlighting faces on documents. It is somehow doubtful that an area that is less than 10px can be somehow recognized. If there is any need for this, then you need to set 0.
            </template>
          </ui-label>

          <ui-input v-model="minWidth" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>minHeight</b> - минимальная высота маркированной области. По умолчанию равно 10. Измеряется в <b>px</b>. Мой компонент нужен для разметки текста или лиц на документах. Как-то сомнительно, что-бы область которая меньше 10px можно как-то распознать. Если в этом есть какая-то необходимость, то нужно задать 0.
            </template>

            <template v-if="props.isEng">
              <b>minHeight</b> is the minimum height of the marked area. The default value is 10. Measured in <b>px</b>. My component is needed for marking up text or faces on documents. It is somehow doubtful that an area that is less than 10px can be somehow recognized. If there is any need for this, then you need to set 0.
            </template>
          </ui-label>

          <ui-input v-model="minHeight" />
        </ui-row>
      </template>

      <open-header
        :is-active="isWorkAreas"
        @click="isWorkAreas = !isWorkAreas"
      >
        {{ settingsResizes }}
      </open-header>

      <template v-if="isWorkAreas">
        <ui-row>
          <ui-label no-margin>
            <template v-if="props.isRus">
              <b>isResizeArea</b> - возможность растягивания маркированных областей. По умолчани равно <b>true</b>.
            </template>

            <template v-if="props.isEng">
              <b>isResizeArea</b> - the ability to stretch the labeled areas. By default, it is <b>true</b>.
            </template>
          </ui-label>

          <ui-checkbox v-model="isResizeArea">
            {{ isResizeArea }}
          </ui-checkbox>
        </ui-row>

        <ui-row>
          <ui-label no-margin>
            <template v-if="props.isRus">
              <b>isDraggingArea</b> - возможность переносить маркированные области. По умолчани равно <b>true</b>.
            </template>

            <template v-if="props.isEng">
              <b>isDraggingArea</b> - the ability to transfer labeled areas. By default, it is <b>true</b>.
            </template>
          </ui-label>

          <ui-checkbox v-model="isDraggingArea">
            {{ isDraggingArea }}
          </ui-checkbox>
        </ui-row>

        <ui-row>
          <ui-label no-margin>
            <template v-if="props.isRus">
              <b>isReadonly</b> - возможность отмены перетаскивания и растягивания маркированных областей. Смотрите, если <b>isResizeArea</b> и <b>isDraggingArea</b> равны <b>false</b>, то вы не сможете растягивать и переносить маркированные области, но по клику, будет возможно делать маркированную область активной. При <b>isReadonly</b> равном <b>true</b>, клик по маркированной области не сделает её активной. По умолчанию равно <b>false</b>.
            </template>

            <template v-if="props.isEng">
              <b>IsReadOnly</b> - the ability to cancel dragging and stretching of labeled areas. See, if <b>isResizeArea</b> and <b>isDraggingArea</b> are <b>false</b>, then you will not be able to stretch and move the marked areas, but by clicking, it will be possible to make the marked area active. If <b>IsReadOnly</b> is <b>true</b>, clicking on the marked area will not make it active. The default value is <b>false</b>.
            </template>
          </ui-label>

          <ui-checkbox v-model="isReadonly">
            {{ isReadonly }}
          </ui-checkbox>
        </ui-row>
      </template>

      <open-header
        :is-active="isShadowBlock"
        @click="isShadowBlock = !isShadowBlock"
      >
        {{ settingsShadow }}
      </open-header>

      <template v-if="isShadowBlock">
        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>isShadow</b> - включение/отключение тени для маркированных областей.
            </template>

            <template v-if="props.isEng">
              <b>isShadow</b> - enables/disables shadows for marked areas.
            </template>
          </ui-label>

          <ui-checkbox v-model="isShadow">
            {{ isShadow }}
          </ui-checkbox>
        </ui-row>
      </template>

      <open-header
        :is-active="isResolution"
        @click="isResolution = !isResolution"
      >
        {{ settingsResolutions }}
      </open-header>

      <template v-if="isResolution">
        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>resolution</b> - разрешение для блока маркирования картинки. Возможны те значения, которые указаны в <b>select-е</b> ниже. Если изображение, которое нужно разметить отсутствуют, то блок займет необходимое пространство согласно разрешению. Как правило большая часть картинок для маркирования будут иметь какое-то конкретное разрешение. В моём случае это разрешение было <b>HD</b>, его я и сделал по умолчанию. <b>HD</b> соответствует разрешению <b>16:9</b>. Если картинка для маркирования не выбрана, то будет отображаться заглушка согласно этому разрешению. А если картинка будет выбрана, то поле для маркирования докмента примет размеры этой картинки. К примеру разрешение у нас <b>16:9</b>, тогда блок для маркирования примет размеры выбранной картинки.
            </template>

            <template v-if="props.isEng">
              <b>resolution</b> is the resolution for the image labeling block. The possible values are those specified in the <b>select</b> below. If there is no image to mark up, then the block will take up the required space according to the resolution. As a rule, most of the pictures for labeling will have some specific resolution. In my case, this resolution was <b>HD</b>, and I made it the default. <b>HD</b> corresponds to the resolution <b>16:9</b>. If the labeling image is not selected, a blank will be displayed according to this resolution. And if an image is selected, then the field for labeling the fragment will take on the size of this image. For example, our resolution is <b>16:9</b>, then the labeling block will take the size of the selected image.
            </template>
          </ui-label>

          <ui-select
            v-model="resolution"
            :options="resolutionOptions"
          />
        </ui-row>

        <ui-row>
          <ui-label no-margin>
            <template v-if="props.isRus">
              <b>vertical</b> - возможность сделать блок для маркирования документа вертикальным. По умолчанию равно <b>false</b>. Давайте я объясню на конкретном примере. Представим, что у нас разрешение по умолчанию установлено в <b>HD</b>, что соответствует разрешению <b>16:9</b>, если мы включим этот параметр, то разрешение блока для маркирования картинки будет соответствовать разрешению <b>9:16</b>. Как я уже выше писал, большая часть картинок у нас будет иметь одинаковые разрешения, за редким исключением. Если большая часть картинок имеет разрешени <b>9:16</b>, то этот параметр может пригодиться. Как и <b>resolution</b>, после загрузки реальной картинки, блок для маркирования картионк примет размеры загруженной картинки, пока мы не сбросим картинку.
            </template>

            <template v-if="props.isEng">
              <b>vertical</b> - the ability to make a block for marking a document vertical. The default value is <b>false</b>. Let me explain with a concrete example. Let's imagine that our default resolution is set to <b>HD</b>, which corresponds to the resolution <b>16:9</b>. If we enable this option, the resolution of the image labeling unit will correspond to the resolution <b>9:16</b>. As I wrote above, most of our images will have the same resolution, with rare exceptions. If most of the images have a resolution of <b>9:16</b>, then this parameter may be useful. Like <b>resolution</b>, after uploading the real image, the block for labeling the picture will take on the size of the uploaded image until we reset the image.
            </template>
          </ui-label>

          <ui-checkbox v-model="vertical">
            {{ vertical }}
          </ui-checkbox>
        </ui-row>
      </template>

      <open-header
        :is-active="isTitleBlock"
        @click="isTitleBlock = !isTitleBlock"
      >
        {{ titleText }}
      </open-header>

      <template v-if="isTitleBlock">
        <ui-row>
          <ui-label no-margin>
            <template v-if="props.isRus">
              <b>isTitle</b> - возможность включения/отключения подсказки для маркированных областей. По умолчанию равно <b>true</b>.
            </template>

            <template v-if="props.isEng">
              <b>isTitle</b> - the ability to enable/disable hints for marked areas. The default value is <b>true</b>.
            </template>
          </ui-label>

          <ui-checkbox v-model="isTitle">
            {{ isTitle }}
          </ui-checkbox>
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>keyTitle</b> - ключ, по которому будет отображаться подсказка. По умолчанию, оно равно <b>title</b>. Можно поменять, на что угодно. Для данного примера напишите <b>name</b>, для поля у которого оно есть, если нет, то заполните его, и наведите на данную область. Как правило на моменте отладки можно ввести <b>id</b>, чтобы посмотреть <b>id</b>-ки. Если вы пользуетесь мобильником, или планшетом, то вы подсказки увидеть не сможете.
            </template>

            <template v-if="props.isEng">
              <b>keyTitle</b> - is the key for displaying the hint. By default, it is <b>title</b>. You can change it to anything. For this example, write <b>name</b> for the field that has it, if not, then fill it in and hover over this area. As a rule, at the moment of debugging, you can enter <b>id</b> to see <b>ids</b>. If you use a mobile phone or tablet, you won't be able to see the prompts.
            </template>
          </ui-label>

          <ui-input v-model="keyTitle" />
        </ui-row>
      </template>
    </template>
  </ui-row>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import useSettingsInt from './useSettingsInt.js';
  import useSettingsPage from '@/views/useSettingsPage.js';

  import OpenHeader from '@/UI/OpenHeader.vue';

  const props = defineProps(['isRus', 'isEng']);

  const isMain = ref(true);

  const isMarking = ref(false);
  const isSizesAreas = ref(false);
  const isWorkAreas = ref(false);
  const isResolution = ref(false);
  const isShadowBlock = ref(false);
  const isTheme = ref(false);
  const isTitleBlock = ref(false);

  const file = defineModel('file');
  const isMarkup = defineModel('is-markup');
  const enableGrid = defineModel('enable-grid');
  const gridSize = defineModel('grid-size');
  const minWidth = defineModel('min-width');
  const minHeight = defineModel('min-height');
  const isResizeArea = defineModel('is-resize-area');
  const isDraggingArea = defineModel('is-dragging-area');
  const isReadonly = defineModel('is-readonly');
  const isShadow = defineModel('is-shadow');
  const resolution = defineModel('resolution');
  const theme = defineModel('theme');
  const vertical = defineModel('vertical');
  const isTitle = defineModel('is-title');
  const keyTitle = defineModel('key-title');

  const {
    gridSizeOptions,
    resolutionOptions,
    themeOptions
  } = useSettingsPage();

  const isEng = computed(() => props.isEng);

  const {
    headerText,
    settingsGrid,
    settingsMinimalSizes,
    settingsResizes,
    settingsShadow,
    settingsResolutions,
    themeText,
    titleText
  } = useSettingsInt(isEng);
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .settings-areas {
    &.row {
      margin-top: 0;
      margin-bottom: 20px;

      @media screen and (min-width: services.$mobileWidth) {
        margin-bottom: 30px;
      }
    }

    .row {
      padding-bottom: 10px;
      border-bottom: 1px solid #000;
    }
  }
</style>
