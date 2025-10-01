<template>
  <div class="props-theme">
    <template v-if="!props.isEng">
      <h3>
        Включение/отключение тени для маркированных областей
      </h3>

      <p>
        Выше я писал, что не может быть одной темы для всех типов документов. Однако бывают такие случаи, когда у нас по дизайну маркированные области имеют определённые цвета и менять их нельзя. Дизайн согласован, есть техническое задание. Может так получиться, что пользователь загрузил паспорт, у нас в России он красный. При маркировании документа, у него активная область получается красная, как следствие она не много будет сливаться с документом, что не очень хорошо. В таком случае, как вариант, можно включить тень для маркированных областей. В таком случае маркированные области не будут сливаться. Для большинства тем, тень будет черной, исключение только темная тема, при ней тень будет белой. Главный принцип это контрастность тени и маркированной области.
      </p>

      <p>
        <strong>IsShadow</strong> - включение/отключение тени для маркированных областей. По умолчанию данный параметр равен false.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Enable/disable shadow for marked areas
      </h3>

      <p>
        I wrote above that there cannot be one topic for all types of documents. However, there are cases when, according to our design, the labeled areas have certain colors and cannot be changed. The design has been agreed upon, and there is a technical specification. It may happen that the user has uploaded a passport, which is red in Russia. When labeling a document, its active area turns red, as a result, it will not merge much with the document, which is not very good. In this case, alternatively, you can include a shadow for the marked areas. In this case, the labeled areas will not merge. For most themes, the shadow will be black, except for the dark theme, where the shadow will be white. The main principle is the contrast of the shadow and the marked area.
      </p>

      <p>
        <strong>IsShadow</strong> - enables/disables shadows for marked areas. By default, this parameter is set to false.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
