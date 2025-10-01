<template>
  <a
    :href="url"
    class="ui-link"
    :class="linkClass"
    :title="props.title"
    target="_blank"
  >
    <template v-if="isGithub">
      <span class="mgc_github_fill" />

      <span class="ui-link__text">
        <slot></slot>
      </span>
    </template>

    <template v-else>
      <slot></slot>
    </template>
  </a>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    href: {
      type: String
    },
    title: {
      type: String,
    },
    type: {
      type: String,
      default: 'default'
    },
    typeLink: {
      type: String,
      default: 'default'
    },
    query: {
      type: Object
    }
  });

  const myRepository = import.meta.env.VITE_SITE_REPOSITORY;
  const gitPrefix = `${myRepository}/blob/main`;
  const basePath = import.meta.env.VITE_SITE_BASE;
  let site = import.meta.env.VITE_SITE_NAME;

  if (basePath !== '/') site = `${site}/basePath`;

  const url = computed(() => {
    if (props.type === 'repository') return myRepository;
    if (props.type === 'git') return `${gitPrefix}/${props.href}`;

    if (props.type === 'site') {
      let langParam = '';

      if (props.query?.query?.lang) langParam = `?lang=${props.query.query.lang}`;

      return `${site}/${props.href}${langParam}`;
    }

    return props.href;
  });

  const isGithub = computed(() => props.typeLink === 'git');

  const linkClass = computed(() => ({
    'ui-link_github': isGithub.value
  }));
</script>

<style lang="scss">
  .ui-link {
    &_github {
      text-decoration: none;

      .mgc_github_fill {
        top: 1px;
        position: relative;
      }

      &:hover {
        text-decoration: none;
      }
    }

    &__text {
      margin-left: 5px;
      text-decoration: underline;
    }

    &:hover &__text {
      text-decoration: none;
    }
  }
</style>
