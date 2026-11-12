<template>
  <div class="ui-fieldset">
    <div class="ui-fieldset__name">
      <span>
        {{ props.name }}
      </span>
    </div>

    <slot></slot>
  </div>
</template>

<script setup>
  const props = defineProps({
    name: {
      type: String,
      default: 'Text'
    }
  });
</script>

<style lang="scss">
  .ui-fieldset {
    margin: 1.4em -10px .5em;
    padding: 1px 8px;
    border-radius: 5px;
    border: 2px solid var(--color-text);

    &__name {
      margin-top: -15px;
      font-weight: bold;
      font-size: 20px;

      span {
        padding: 0 3px;
        margin-left: -3px;
        background: #fff;
      }
    }
  }
</style>
