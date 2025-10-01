<template>
  <button
    class="btn"
    :class="classBtn"
    :style="styleBtn"
  >
    <slot>Отправить</slot>
  </button>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    typeBtn: {
      type: String,
      default: 'primary'
    },
    width: {
      type: Number,
      default: null
    }
  });

  const classBtn = computed(() => ({
    primary: props.typeBtn === 'primary',
    secondary: props.typeBtn === 'secondary',
    success: props.typeBtn === 'success',
    info: props.typeBtn === 'info',
    warning: props.typeBtn === 'warning',
    danger: props.typeBtn === 'danger',
  }));

  const styleBtn = computed(() => ({
    width: props.width ? `${props.width}px` : null
  }));
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .btn {
    --transition-property: .4s var(--easeOutBack) 0s;

    color: #fff;
    display: inline-block;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 10px;
    box-shadow: none;
    outline: none;
    background: services.$scrollColor;
    box-shadow: none;
    border: none;
    opacity: 1;
    font: 12px/120% var(--font-family);
    transition: background-color var(--transition-property), opacity var(--transition-property), transform var(--transition-property);

    &:hover {
      background: #025171;
    }

    &:active {
      transform: translateY(1px);
    }

    &[disabled] {
      opacity: .6;
      cursor: default;
      background: services.$scrollColor;

      &:active {
        transform: translateY(0);
      }
    }

    &.secondary {
      &:hover {
        background: #393838;
      }

      &,
      &[disabled] {
        background: #646363;
      }
    }

    &.success {
      &:hover {
        background: #0a800c;
      }

      &,
      &[disabled] {
        background: #229b25;
      }
    }

    &.info {
      &:hover {
        background: #3493b9;
      }

      &,
      &[disabled] {
        background: #63acc8;
      }
    }

    &.warning {
      &:hover {
        background: #a95003;
      }

      &,
      &[disabled] {
        background: #d97117;
      }
    }

    &.danger {
      &:hover {
        background: #c4150b;
      }

      &,
      &[disabled] {
        background: #d9372e;
      }
    }
  }
</style>
