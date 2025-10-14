<template>
  <ui-row 
    type="items"
    class="card"
  >
    <div
      v-if="slots.desc"
      class="card__desc"
    >
      <slot name="desc"></slot>
    </div>

    <div
      v-if="props.url"
      class="card__link"
    >
      <ui-link
        :href="props.url"
        type="git"
        type-link="git"
      >
        {{ linkToCode }}
      </ui-link>
    </div>

    <div class="card__markup">
      <slot name="markup"></slot>
    </div>

    <form class="card__form">
      <slot name="form"></slot>
    </form>
  </ui-row>
</template>

<script setup>
  import { computed, useSlots } from 'vue';

  const slots = useSlots();

  const props = defineProps(['url', 'isEng']);

  const linkToCode = computed(() => {
    let text='Ссылка на код примера';

    if (props.isEng) text='Link to example code';

    return text;
  })
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .card {
    &__desc {
      p {
        line-height: 1.5;

        &:first-of-type {
          margin-top: 0;
        }
      }
    }

    &__markup,
    &__form {
      width: 100%;
      box-sizing: border-box;

      @media screen and (min-width: services.$mobileWidth) {
        width: calc(50% - 10px);
      }
    }

    &__form {
      h2,
      .h2 {
        margin-top: 0;
      }
    }

    &__link {
      width: 100%;
      margin: 0 0 15px;
    }
  }
</style>
