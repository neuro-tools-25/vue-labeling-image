# Vue markup document

English | [Русский](./README.rus.md)

Vue labeling image is a component for vue.js that allows you to label data on images. Simply put, it is a UI for neurons. This [project](https://github.com/HumanSignal/labelImg "LabelImg") served as an example for creating this component, now it is no longer relevant. If you are interested in this topic, I recommend you to pay attention to this [repository](https://github.com/HumanSignal/label-studio "label-studio"). For the most part, I developed components for text labeling, so the main purpose of my component is OCR, but it is also suitable for other similar tasks. As an example, I can point to Yandex and Google images. There you can upload your own picture, and then select a specific area of it, my component will cope with this task quite well.

This component requires vue.js version 3.5 or higher to work correctly (I use useTemplateRef and defineModel). I used vue.js version 3.5.17 when developing this component.

In order not to rewrite the code into nothing, I would advise you to open the [examples page](https://neuro-tools-25.github.io/vue-labeling-image/examples "Examples") and see for yourself what my component can do. I will provide links to examples with code, it will probably be easier that way.

So, open the [examples page](https://neuro-tools-25.github.io/vue-labeling-image/examples "Examples"), select any picture, and mark arbitrary areas (press the left mouse button and without releasing it, select an arbitrary area. If you are viewing the examples page on a mobile phone, swipe the image.) The marked areas can be moved around the image and resized by dragging their edges.

## Installation, minimal setup

As expected, it is probably worth saying that to install this component you need Node.js and NPM, but you probably already know that. You can install this component in the following way:

```shell
npm install vue-labeling-image;
```

If you have no problems with the Internet, then you will install the component. Then you will need to connect it, this can be done in the following way:

```vue
<template>
  <labeling-image
    :image-src="file"
    v-model="areas"
  />
</template>

<script setup>
  import LabelingImage from 'vue-labeling-image';
  import 'vue-labeling-image/styles.css';

  const file = ref(null);
  const areas = ref([]);
</script>
```

If you plan to use my component on more than one page, it makes sense to include CSS globally, in main.js, or App.vue, here choose as you find more convenient. 

As you can see, 2 lines are important, **image-src="file"** and **v-model="areas"**.

**Image-src** - input parameter to which you need to pass the image to be marked. In the vast majority of cases, this will be a binary file, but it is possible to pass both the path to the image and the image itself in the base64 format. It is quite natural that without this parameter you will not be able to mark anything. You will most likely send the image itself to the server via **FormData**. I would recommend you to look at [example code](https://github.com/neuro-tools-25/vue-labeling-image/blob/main/src/components/examples/MainExample.vue "Example"). If you are a beginner frontend developer, I would recommend you to look at the code of how [styled file input](https://github.com/neuro-tools-25/vue-labeling-image/blob/main/src/UI/UIFile.vue "Example") works.

**Areas** is an array of objects. It contains the parameters of the marked areas and must contain the following fields:

```javascript
const areas = [
  {
    id: 1759337013345,
    x: 15,
    y: 15,
    width: 30,
    height: 30,
  }
];
```