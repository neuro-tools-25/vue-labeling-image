<template>
  <div class="changelog-page">
    <animation-lay is-page-nav>
      <div v-if="isRus">
        <h1>Журнал изменений</h1>

        <ui-full-page>
          <p>
            В данном журнале я буду фиксировать изменения начиная с версии "0.2.0" и выше.
          </p>

          <p>
            В версии "0.6.0", я добавил возможность стилизовать отдельные маркированные области. Отдельные маркированные области можно стилизовать как через CSS-классы, так и через атрибут "style". Для стилизации через CSS-классы добавьте к маркированной области атрибут "muClass" с нужным вам CSS классом, или классами. Для стилизации через атрибут "style" добавьте атрибут "muStyle", в данный атрибут нужно добавить CSS-переменные. Посмотреть какие CSS-переменные за что отвечают можно <ui-link
              type="site"
              href="settings"
              title="Страница настроек"
              :query="props.query"
            >здесь</ui-link> (Прокрутите до блока "Стили для блока маркировки изображения").
          </p>

          <p>
            В версии "0.5.0", я добавил входные параметры (props) для стилизации моего компонента. Всё то, что раньше можно было стилизовать через CSS-переменные теперь возможно стилизовать через входные параметры. Также я сделал сброс активной области, при её удаление, до этого я делал сброс только при изменении картинки. Предыдущую маркированную область активной нужно делать руками. Это не сложно, а на разных проектах поведение активной области при её удалении может отличаться (сделать предыдущую маркированную облсть активной или ничего не делать).
          </p>

          <p>
            В версии "0.4.0" я добавил возможность делать прерывистые линии для маркированных областей, для активной области, и для области в момент маркирования документа.
          </p>

          <p>
            В версии "0.3.0" я добавил слот "html". Он предназначен для вставки в мой компонент html содержимого. Это нужно к примеру для вывода логотипа компании, каких-либо внешних ссылок.
          </p>

          <p>
            В версии "0.2.0" я добавил директиву "v-model:hovered-id". При наведении на маркированную область, через данную директиву я могу вывести её id.
          </p>
        </ui-full-page>
      </div>

      <div v-if="isEng">
        <h1>Changelog</h1>

        <ui-full-page>
          <p>
  I         In this log, I will record changes starting from version "0.2.0" and higher.
          </p>
          
          <p>
            In version "0.6.0", I added the ability to style individual labeled areas. Individual labeled areas can be styled either through CSS classes or through the "style" attribute. To style using CSS classes, add the "muClass" attribute with the CSS class or classes you need to the labeled area. To style using the "style" attribute, add the "muStyle" attribute. You need to add CSS variables to this attribute. You can see which CSS variables are responsible for what <ui-link
              type="site"
              href="settings"
              title="Settings page"
              :query="props.query"
            >here</ui-link> (Scroll to the "Styles for the image marking block" section).
          </p>

          <p>
            In version "0.5.0", I added input parameters (props) for styling my component. Everything that could previously be styled via CSS variables can now be styled through input parameters. I also implemented a reset of the active area when it is deleted, previously, I only reset it when the image was changed. The previous marked area needs to be made active manually. This is not difficult, but the behavior of the active area when it is deleted may differ across different projects (making the previous marked area active or doing nothing).
          </p>

          <p>
            In version "0.4.0", I added the ability to make broken lines for labeled areas, for the hotspot, and for the area at the time of labeling the document.
          </p>

          <p>
            In version "0.3.0" I added the "html" slot. It is designed to insert html content into my component. This is necessary, for example, to display the company's logo or any external links.
          </p>

          <p>
            In version "0.2.0" I added the "v-model:hovered-id" directive. When hovering over a marked area, I can use this directive to output its id.
          </p>
        </ui-full-page>
      </div>
    </animation-lay>
  </div>
</template>

<script setup>
  import useNav from '@/layouts/useNav';
  import AnimationLay from '@/layouts/AnimationLay.vue';

  const {
    isRus,
    isEng,
  } = useNav();
</script>

<style lang="scss" scoped>

</style>