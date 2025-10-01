<template>
  <div class="props-intro">
    <template v-if="!props.isEng">
      <h2>
        Входные параметры
      </h2>

      <p>
        Прежде чем я буду описывать входные параметры, я бы посоветовал вам открыть <ui-link
          type="site"
          href="settings"
          title="Страница настроек"
          :query="props.query"
        >страницу настроек</ui-link>. Выберите какую-нибудь картинку. Попробуйте разметить несколько облаcтей на картинке, а дальше поиграйте с параметрами. Я старался делать мой компонент максимально настраиваемым. Попробуйте поменять тему. Поменяйте минимальные размеры для маркированных областей. Поменяейте разрешение для блока маркировки картинок. Поменяйте параметры растягивания и перемещения маркированных областей. Посмотрите, что при этом изменится. Я больше практик, и считаю, что так информация лучше усвоится, так будет более наглядно.
      </p>
    </template>

    <template v-if="props.isEng">
      <h2>
        Input parameters
      </h2>

      <p>
        Before I describe the input parameters, I would advise you to open <ui-link
          type="site"
          href="settings"
          title="Settings page"
          :query="props.query"
        >the settings page</ui-link>. Choose a picture. Try to mark up several areas in the picture, and then play with the parameters. I tried to make my component as customizable as possible. Try changing the subject. Change the minimum dimensions for the labeled areas. Change the resolution for the image labeling block. Change the parameters for stretching and moving the marked areas. See what changes in this case. I am more of a practitioner, and I believe that this way the information will be better absorbed, it will be more visual.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
