<template>
  <div
    class="code__row"
    :class="classComp"
  >
    <slot></slot>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps([
    'pl2',
    'pl3',
    'pl4',
    'pl5',
    'pl6',
  ]);

  const classComp = computed(() => ({
    'code__row_pl2': props.pl2 !== undefined,
    'code__row_pl3': props.pl3 !== undefined,
    'code__row_pl4': props.pl4 !== undefined,
    'code__row_pl5': props.pl5 !== undefined,
    'code__row_pl6': props.pl6 !== undefined,
  }));
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .code__row {
    counter-increment: count;
    white-space: nowrap;

    .code__row_big & {
      &::before {
        width: 30px;

        @media screen and (min-width: services.Small) {
          width: 42px;
        }
      }
      
    }

    &::before {
      width: 24px;
      color: #fff;
      text-align: left;
      padding-left: 10px;
      content: counter(count);
      display: inline-block;
      background: grey;
      margin: 0 10px 0 0;
      position: sticky;
      left: 0;

      @media screen and (min-width: services.$mobileWidthSmall) {
        width: 30px;
        margin-right: 15px;
      }
    }

    &_pl2 {
      &::before {
        margin-right: 25px;
      }
    }

    &_pl3 {
      &::before {
        margin-right: 35px;
      }
    }

    &_pl4 {
      &::before {
        margin-right: 45px;
      }
    }

    &_pl5 {
      &::before {
        margin-right: 65px;
      }
    }

    &_pl6 {
      &::before {
        margin-right: 85px;
      }
    }
  }
</style>
