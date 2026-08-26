<template>
  <div class="changelog-page">
    <animation-lay is-page-nav>
      <div v-if="isRus">
        <h1>Журнал изменений</h1>

        <div class="full-page">
          <p>
            В данном журнале я буду фиксировать изменения начиная с версии "0.2.0" и выше.
          </p>

          <p>
            В версии "0.5.0" я сделал сброс активной области, при её удаление, до этого я делал сброс только при изменении картинки. Предыдущую маркированную область активной нужно делать руками. Это не сложно, а на разных проектах поведение активной области при её удалении может отличаться (сделать предыдущую маркированную облсть активной или ничего не делать).
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
        </div>
      </div>

      <div v-if="isEng">
        <h1>Changelog</h1>

        <div class="full-page">
          <p>
  I         In this log, I will record changes starting from version "0.2.0" and higher.
          </p>
          
          <p>
            In version 0.5.0, I reset the active area when it was deleted, before that I only reset when the image was changed. The previous labeled area should be made active by hand. This is not difficult, and on different projects, the behavior of the hotspot when it is deleted may differ (make the previous labeled area active or do nothing
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
        </div>
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