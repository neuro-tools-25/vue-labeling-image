<template>
  <div
    class="nav-icon"
    :class="{ 'nav-icon_active': props.isActive }"
    @click="changeIsActive"
  >
    <div class="nav-icon__line"></div>
    <div class="nav-icon__line"></div>
    <div class="nav-icon__line"></div>
  </div>
</template>

<script setup>
  const emits = defineEmits(['open-nav']);
  const props = defineProps(['isActive']);
</script>

<style lang="scss" scoped>
  @use '@/assets/_services' as services;

  .nav-icon {
    --trans: .4s ease-in-out 0s;

    width: 12px;
    height: 12px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-top: 6px;

    &__line {
      width: 20px;
      height: 2px;
      position: absolute;
      background: #000;
      transition: transform var(--trans),
        width var(--trans);

      &:nth-of-type(1) {
        top: 0;
        transform-origin: 1px 0;
      }

      &:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);
      }

      &:nth-of-type(3) {
        bottom: 0;
        margin-left: -2px;
        transform-origin: 3px 0;
      }
    }

    &_active {
      .nav-icon__line {
        &:nth-of-type(1),
        &:nth-of-type(3) {
          width: 21px;
        }

        &:nth-of-type(1) {
          transform: rotate(45deg);
        }

        &:nth-of-type(2) {
          opacity: 0;
        }

        &:nth-of-type(3) {
          transform: rotate(-45deg);
        }
      }
    }

    @media screen and (min-width: services.$tabletSmall) {
      display: none;
    }
  }
</style>