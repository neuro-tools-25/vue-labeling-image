<template>
  <input
    v-model="value"
    :placeholder="props.placeholder"
    type="text"
    class="inp"
  />
</template>

<script setup>
  const value = defineModel();

  const props = defineProps(['placeholder']);
</script>

<style lang="scss">
  .inp {
    width: 100%;
    display: block;
    outline: none;
    color: #000;
    padding: 5px 10px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #020f9d;
    border-radius: 5px;
    height: 30px;
    font: 12px/30px var(--font-family);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::placeholder {
      color: #000;
      opacity: 1;
    }

    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }
  }
</style>
