<template>
  <ui-abbr
    :title="title"
    nowrap
  >
    {{ label }}
  </ui-abbr>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps(['lang']);

  const title = computed(() => {
    let text="стандарт кодирования двоичных данных при помощи только 64 символов ASCII. Алфавит кодирования содержит латинские символы A-Z, a-z, цифры 0-9 (всего 62 знака) и 2 дополнительных символа, зависящих от системы реализации. Каждые 3 исходных байта кодируются четырьмя символами";

    if (props.lang === 'eng') text="standard encoding of binary data using only 64 ASCII characters. The alphabetic encoding contains the Latin characters A-Z, a-z, the digits 0-9 (62 characters in total) and 2 additional characters defined in the implementation system. Every 3 source bytes are encoded with their own characters";

    return text;
  });

  const label = 'base64';
</script>

<style lang="scss">

</style>
