<template>
  <div class="props-theme">
    <template v-if="!props.isEng">
      <h3>
        Выбор темы
      </h3>

      <p>
        <strong>Theme</strong> - тема для маркированных областей. Если мы посмотрим на другие UI для <ocr-def lang="rus" />, то можно обратить внимание, что маркированные области как правило имеют синий цвет, а активная маркированная область имеет как правило зелёный цвет. Это не для всех документов подходит. Как правило, в мире большая часть документов имеет зеленый, или красный цвет. Меньше докуметов имеют синий цвет, но они есть, к примеру <blue-card-def lang="rus" />. Вполне естественно, что для разных документов и тема должна быть разная. К примеру, у нас в России <snils-def lang="rus" /> зеленый, если активная область на нем будет зеленой, то она просто будет не очень заметна на данном документе. Логично, что на красном документе, маркированные области красными быть не могут, иначе они будут сливаться. На основании своего опыта, я выделил 5 разных тем:
      </p>

      <ul>
        <li>
          <strong>Default</strong> - тема для зеленых документов, к примеру СНИЛС. Она стоит по умолчанию, и будет применяться, если данный параметр отсутствует.
        </li>
        <li>
          <strong>Red</strong> - тема для красных документов, у нас в России это паспорт, водительские права.
        </li>
        <li>
          <strong>Blue</strong> - тема для синих документов, как я выше писал, это синяя карта для автомобилистов.
        </li>
        <li>
          <strong>White</strong> - это тема для любого документа на листе формата А4, как-то трудовой договор, договор при покупке сим карты, договор оказания медицинских услуг, и тд.
        </li>
        <li>
          <strong>Black</strong> - такие документы реже встречаются, это черный фон и белый цвет на нём, видимо делается инверсия для отсканированных документов. Так же данная тема подойдёт для документов которые сделаны через принтер. Если принтер плохой, документы будут выглядеть темнее обычных.
        </li>
      </ul>

      <p>
        Все темы которые я выше перечислил делались для Российских документов. Когда я на аутсорсе работал с ребятами из Эстонии, выяснилось, что некоторые темы для их документов не подходят. Поэтому я предусмотрел возможность создания своей кастомной темы, для этого в данном параметре нужно указать название своей кастомной темы. К примеру, если мы запишем в theme="castomTheme", то нужно будет прописать стили для класса "mark-up_theme_castomTheme". Стили для кастомной темы можно подобрать на <ui-link
          type="site"
          href="settings"
          title="Страница настроек"
          :query="props.query"
        >странице настроек</ui-link>, в блоке "Стили для блока маркировки изображения".
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Choosing a theme
      </h3>

      <p>
        <strong>Theme</strong> - тема для маркированных областей. Если мы посмотрим на другие UI для <ocr-def lang="eng" />, то можно обратить внимание, что маркированные области как правило имеют синий цвет, а активная маркированная область имеет как правило зелёный цвет. Это не для всех документов подходит. Как правило, в мире большая часть документов имеет зеленый, или красный цвет. Меньше докуметов имеют синий цвет, но они есть, к примеру <blue-card-def lang="eng" />. Вполне естественно, что для разных документов и тема должна быть разная. К примеру, у нас в России <snils-def lang="eng" /> зеленый, если активная область на нем будет зеленой, то она просто будет не очень заметна на данном документе. Логично, что на красном документе, маркированные области красными быть не могут, иначе они будут сливаться. На основании своего опыта, я выделил 5 разных тем:
      </p>

      <ul>
        <li>
          <strong>Default</strong> is a theme for green documents, for example, SNILS. It is set by default, and will be applied if this parameter is missing.
        </li>
        <li>
          <strong>Red</strong> is a theme for red documents, in Russia it is a passport, a driver's license.
        </li>
        <li>
          <strong>Blue</strong> is a theme for blue documents, as I wrote above, this is a blue card for motorists.
        </li>
        <li>
          <strong>White</strong> is a theme for any document on an A4 sheet, such as an employment contract, a contract for the purchase of a SIM card, a contract for the provision of medical services, and so on.
        </li>
        <li>
          <strong>Black</strong> - such documents are less common, it is a black background and white color on it, apparently an inversion is being done for scanned documents. This theme is also suitable for documents that are made through a printer. If the printer is bad, the documents will look darker than usual.
        </li>
      </ul>

      <p>
        All the topics that I have listed above were made for Russian documents. When I outsourced work with guys from Estonia, it turned out that some topics were not suitable for their documents. Therefore, I have provided for the possibility of creating my own custom theme, for this you need to specify the name of your custom theme in this parameter. For example, if we write in theme="castomTheme", then we will need to register styles for the "mark-up_theme_castomTheme" class. Styles for a custom theme can be selected on <ui-link
          type="site"
          href="settings"
          title="Settings page"
          :query="props.query">
            on the settings page
        </ui-link>, in the "Styles for the image labeling block" section.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
