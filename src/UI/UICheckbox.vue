<template>
  <input
    v-model="val"
    :id="id"
    type="checkbox"
    class="ui-checkbox"
  />

  <label
    :for="id"
    class="ui-checkbox-label"
  >
    <span class="ui-checkbox-icon mgc_checkbox_fill"></span>
    <span class="ui-checkbox-icon mgc_stop_line"></span>
    <slot></slot>
  </label>
</template>

<script setup>
  import useId from './hooks/useId';

  const { id } = useId();
  const val = defineModel();
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .ui-checkbox {
    margin-left: -30000px;
    position: absolute;

    &:checked + label {
      .mgc {
        &_checkbox_fill {
          left: 0;
        }

        &_stop_line {
          left: -30000px;
        }
      }
    }

    &-label {
      cursor: pointer;
      user-select: none;
      display: inline-block;
      position: relative;
      line-height: 120%;
      padding: 8px 10px 8px 30px;

      .mgc {
        &_checkbox_fill,
        &_stop_line {
          transform: translateY(-5px);
          color: services.$secondColor;
          font-size: 24px;
          position: absolute;

          @media screen and (min-width: services.$mobileWidthSmall) {
            transform: translateY(-2px);
          }
        }

        &_stop_line {
          left: 0;
        }

        &_checkbox_fill {
          left: -30000px;
        }
      }
    }
  }
</style>
