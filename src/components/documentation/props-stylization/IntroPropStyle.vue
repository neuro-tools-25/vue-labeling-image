<template>
  <div class="style-intro">
    <template v-if="!props.isEng">
      <h2>
        Входные параметры (props) отвечающие за стилизацию моего компонента
      </h2>

      <p>
        Выше я уже описывал как нужно стилизовывать мой компонент, этот же раздел скорее всего нужен для каких-то экстренных случаев. Когда нужно, быстро поправить стили не трогая CSS, или выделить что-то в зависимости от каких-то условий. Для того, чтобы вам было попроще, я рекомендую вам открыть <ui-link
          type="site"
          href="stylization"
          title="Страница стилизации"
          :query="props.query"
        >"страницу стилизации"</ui-link>, на данной странице можно будет поменять входные параметры, и посмотреть какой входной параметр за что отвечает.
      </p>
    </template>

    <template v-if="props.isEng">
      <h2>
        The input parameters (props) responsible for the styling of my component
      </h2>

      <p>
        I have already described above how to style my component, the same section is most likely needed for some emergency cases. When necessary, quickly adjust styles without touching CSS, or highlight something depending on certain conditions. To make things easier for you, I recommend that you open the <ui-link
          type="site"
          href="stylization"
          title="Styling page"
          :query="props.query"
        >"styling page"</ui-link>, on this page you can change the input parameters and see which input parameter is responsible for what.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
