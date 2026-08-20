<template>
  <div class="settings-page">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @use '@/assets/_services' as services;

  .settings-page {
    .h1 {
      margin-bottom: 20px;

      @media screen and (min-width: services.$tabletSmall) {
        margin-bottom: 40px;
      }
    }

    &__areas {
      display: none;

      &_active {
        display: block;
      }

      @media screen and (min-width: services.$tabletSmall) {
        display: block;
      }
    }

    &__head {
      padding-right: 25px;
      position: relative;

      .ui-arrow {
        right: 0;
        position: absolute;
        transform-origin: 50% 50%;
        transform: rotate(180deg);
      }

      &_active {
        .ui-arrow {
          transform: rotate(0deg);
        }
      }

      @media screen and (min-width: services.$tabletSmall) {
        padding-right: 0;

        .ui-arrow {
          display: none;
        }
      }
    }
  }
</style>