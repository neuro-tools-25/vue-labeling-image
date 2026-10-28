<template>
  <code-line>
    <mu-tag code="<template>" />
  </code-line>
  <code-line level-2>
    <mu-tag code="<labeling-image" />
  </code-line>
  <code-line level-3>
    <mu-attr code=':image-src=' />
    <mu-text code='"imageSrc"' />
  </code-line>
  <code-line level-3>
    <mu-attr code='v-model=' />
    <mu-text code='"areas"' />
  </code-line>
  <code-line level-3>
    <mu-attr code='key-title=' />
    <mu-text code='"name"' />
  </code-line>
  <code-line level-3>
    <mu-attr code=':is-markup=' />
    <mu-text code='"' />
    <mu-key-words code='false' />
    <mu-text code='"' />
  </code-line>
  <code-line level-2>
    <mu-tag code="/>" />
  </code-line>
  <code-line>
    <mu-tag code="</template>" />
  </code-line>

  <code-line />

  <code-line>
    <mu-tag code="<script " />
    <mu-attr code="setup" />
    <mu-tag code=">" />
  </code-line>

  <code-line level-2>
    <mu-key-words code="const " />
    <mu-variable code="imageSrc" />
    <mu-type code=" = " />
    <mu-key-words code="ref" />
    <mu-type code="(" />
    <mu-text code='"The path to your picture"' />
    <mu-type code=");" />
  </code-line>

  <code-line />

  <slot></slot>

  <code-line>
    <mu-tag code="</script>" />
  </code-line>

  <slot name="style"></slot>
</template>

<script setup></script>