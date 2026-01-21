<template>
  <ui-row
    class="view-code"
    :class="{ 'view-code_active': isCode }"
    @click="watchCode"
  >
    <div class="view-code__h">
      <ui-arrow />

      <slot>
        {{ showMarkedAreas }}
      </slot>
    </div>

    <div
      v-if="isCode"
      class="view-code_b"
      @click.stop
    >
      <copy-text-icon
        :is-eng="props.isEng"
        @click="copyTextToClipboard"
      />

<pre>{{ props.code }}</pre>
    </div>
  </ui-row>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import CopyTextIcon from '@/UI/CopyTextIcon.vue';
  import { copyCode } from 'work-with-net';

  const props = defineProps(['code', 'isEng']);
  const isCode = ref(false);

  const watchCode = () => isCode.value = !isCode.value;

  const copyTextToClipboard = () => copyCode(props.code);

  // Интернационализация
  const showMarkedAreas = computed(() => {
    let text='Показать маркированные области';
    if (props.isEng) text='Show labeling areas';

    return text;
  });
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .view-code {
    cursor: pointer;
    color: #fff;
    border-radius: 5px;
    padding: 0;
    background: services.$scrollColor;

    &_b {
      position: relative;

      .copy-text-icon {
        top: 0;
        right: 10px;
        opacity: .8;
        position: absolute;
        transition: opacity .5s var(--easeInOutQuint) 0s;
        &:hover {
          opacity: 1;
        }
      }
    }

    &__h,
    pre {
      padding: 15px;
    }

    &__h {
      position: relative;
      padding-right: 30px;

      .ui-arrow {
        right: 10px;
        position: absolute;
      }
    }

    pre {
      margin: 0;
      cursor: default;
      overflow: auto;
      font-weight: bold;
      padding-top: 0;

      &::selection {
        background: #d97117;
      }
    }

    .ui-arrow {
      transform-origin: 50% 50%;
      transform: rotate(180deg);
    }

    &_active {
      padding-bottom: 0;

      .ui-arrow {
        transform-origin: 50% 50%;
        transform: rotate(0deg);
      }
    }

    &__h {
      font-size: 120%;
      font-weight: bold;
      user-select: none;
    }
  }
</style>
