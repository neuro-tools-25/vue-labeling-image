<template>
  <div class="props-theme">
    <template v-if="!props.isEng">
      <h3>
        Настройка подсказок для маркированный областей
      </h3>

      <p>
        Тут нужно оговориться, что подсказки будут появляться только на стационарном компьютере, при наведении мыши на маркированные области. На мобильном устройстве, или планшете, вы их не увидите.
      </p>

      <p>
        <strong>IsTitle</strong> - возможность включения/отключения подсказки при наведении на маркированные области. По умолчанию равно true.
      </p>

      <p>
        <strong>KeyTitle</strong> - ключ, по которому будет отображаться подсказка. По умолчанию, данный параметр равен "title". Можно поменять, на что угодно. Как правило на моменте отладки можно ввести id, чтобы видеть id-ки маркированных областей.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Enable/disable shadow for marked areas
      </h3>

      <p>
        Here you need to make a reservation that the prompts will only appear on a desktop computer when you hover the mouse over the marked areas. You won't see them on your mobile device or tablet.
      </p>

      <p>
        <strong>IsTitle</strong> - the ability to enable/disable hints when hovering over marked areas. It is set to true by default.
      </p>

      <p>
        <strong>KeyTitle</strong> is the key for displaying the hint. By default, this parameter is set to "title". You can change it to anything. As a rule, at the moment of debugging, you can enter an id to see the IDs of the marked areas.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
