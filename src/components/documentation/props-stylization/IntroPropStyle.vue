<template>
  <div class="style-intro">
    <template v-if="!props.isEng">
      <h2>
        Стилизация моего компонента через входные параметры
      </h2>

      <p>
        Выше я уже описывал как нужно стилизовывать мой компонент.
      </p>

      <!-- Потом удалить -->
      <p>
        Чтобы вам было удобнее, я советую открыть <ui-link
          type="site"
          href="settings"
          title="Страница настроек"
          :query="props.query"
        >страницу настроек</ui-link>, выбрать какую-нибудь картинку, и попробовать поменять параметры для блока "Стили для блока маркировки изображения". Наиболее часто изменяемые свойства я вынес в CSS переменные. Под моим компонентом есть кнопка "Показать стили для маркированной области". Нажав на неё можно будет посмотреть CSS переменные для стилизации моего компонента, и скопировать их, если вас всё устраивает.
      </p>

      <p>
        Если посмотреть ниже, то можно заметить, что сперва идут стили для "блока маркирования картинок". Это сам блок, в котором будет лежать картинка для маркирования, и маркированные области. Когда мы начинаем маркировать картинку, к создаваемой маркированной области будут применяться стили, для "области в момент маркирования данных". Как правило данные стили, чуть-чуть темнее чем активная маркированная область. Тут можно задать любые стили, я сделал так. После того, когда вы закончили маркирование (отпустили левую кнопку мыши), область станет активной, применятся стили для активной области. Область можно сделать активной просто кликнув на неё. Это поведение по умолчанию, его можно переопределить, смотрите описание параметров. Если вы сделаете 4-5 маркированные области, то одна область будет активной, а к остальным областям будут применяться "общие стили для маркированных областей". Я писал документацию исходя их этого.
      </p>
    </template>

    <template v-if="props.isEng">
      <h2>
        Stylization
      </h2>

      <p>
        As I wrote above, I was able to identify 5 topics for documents in total. All these topics were made for Russian documents, and they may not be suitable for you. Perhaps you will have a very specific design, and you will need to style my component for it. That's exactly what this section is about.
      </p>

      <p>
        I recommend that you come up with a theme name and add it to the "<b>theme</b>" parameter. For example, if you name your theme "castomTheme", you will need to redefine the styles for the "mark-up_theme_castomTheme" class. It is possible to wrap my component in some kind of block, set some kind of class for this block, and redefine styles for this class. For example, we have different styles on different pages, and in order not to specify the "<b>theme</b>" parameter for each component instance, it makes sense to do this for the entire block. You can do that too. Choose whichever is more convenient for you, but I would recommend the first option, with the "<b>theme</b>" option.
      </p>

      <p>
        To make it more convenient for you, I advise you to open <ui-link
          type="site"
          href="settings"
          title="Settings page"
          :query="props.query"
        >the settings page</ui-link>, select an image, and try to change the settings for the "Styles for the image labeling block" block. I've moved the most frequently changed properties to CSS variables. There is a "Show styles for a bulleted area" button under my component. By clicking on it, you can view the CSS variables for styling my component, and copy them if everything suits you.
      </p>

      <p>
        If you look below, you can see that the styles for the "image labeling block" come first. This is the block itself, which will contain the image for labeling, and the labeled areas. When we start labeling the image, styles will be applied to the created labeled area, for the "area at the time of labeling the data". As a rule, these styles are slightly darker than the active labeled area. You can set any styles here, I did it this way. After you have finished labeling (by releasing the left mouse button), the area will become active, and styles for the hotspot will be applied. The area can be made active by simply clicking on it. This is the default behavior, it can be overridden, see the description of the parameters. If you make 4-5 bulleted areas, then one area will be active, and "common styles for bulleted areas" will be applied to the rest of the areas. I wrote the documentation based on this.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
