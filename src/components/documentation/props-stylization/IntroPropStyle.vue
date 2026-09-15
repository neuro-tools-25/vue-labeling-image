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

      <p>
        Если посмотреть ниже, то можно заметить, что сперва я описал "входные параметры отвечающие за стилизацию блока маркирования картинок". Это сам блок, в котором будет лежать картинка для маркирования, и маркированные области. Когда мы начинаем маркировать картинку, к создаваемой маркированной области будут применены "входные параметры отвечающие за стилизацию области в момент маркирования данных на картинке". Как правило данные стили, чуть-чуть темнее чем активная маркированная область. После того, когда вы закончили маркирование (отпустили левую кнопку мыши), область станет активной, для её стилизации пригодятся "входные параметры отвечающие за стилизацию активной маркированной области". Область можно сделать активной просто кликнув на неё. Это поведение по умолчанию, его можно переопределить, смотрите описание параметров. Если вы сделаете 4-5 маркированные области, то одна область будет активной, а к остальным областям будут применяться "входные параметры отвечающие за общие стили маркированных областей". Я писал документацию исходя их этого.
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

      <p>
        If you look below, you'll notice that I first described "the input parameters responsible for the styling of the image labeling block". This is the block itself, which will contain the image for labeling, and the labeled areas. When we start labeling the image, the "input parameters responsible for the stylization of the area at the time of labeling the data in the image" will be applied to the created labeled area. As a rule, these styles are slightly darker than the active labeled area. After you have finished labeling (by releasing the left mouse button), the area will become active, and the "input parameters responsible for the styling of the active labeled area" will be useful for its styling. The area can be made active by simply clicking on it. This is the default behavior, it can be overridden, see the description of the parameters. If you make 4-5 labeled areas, then one area will be active, and "input parameters responsible for the general styles of the labeled areas" will be applied to the rest of the areas. I wrote the documentation based on this.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
