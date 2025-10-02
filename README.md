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

Here it is necessary to stipulate that there is no single API for neurons. When I first wrote a UI for a neuron, I needed to specify the coordinates of the start and end points (**X1, Y1, X2, Y2**). After, for one Research Institute it was necessary to create a UI that would accept and return the start and end points in the following form: **\[\[X1, Y1\], \[X2, Y2\]\]**. This is an array that contains the coordinates of the starting and ending points, the first array is the starting point, the second array is the ending point. On outsourcing, I wrote a UI that would accept and return coordinates in the following form:

```javascript
{
  name_area: [
    {
      x: "10",
      y: "10"
    },
    {
      x: "10",
      y: "40"
    },
    {
      x: "40",
      y: "40"
    },
    {
      x: "40",
      y: "10"
    }
  ]
}
```

So that you don't have to rack your brains, this is an array with 4 objects, these are points. They go from the top left, to the bottom left point, then to the bottom right point, and the last point is the top right. As you can guess, it turns out to be a rectangle, I needed to build it. I needed to return the marked areas in these formats, depending on API. The last thing I did was for the neural network to need a starting point (X, Y coordinates) and the width and height of the marked area.

To sum it up briefly, we can highlight that for all neurons, the coordinates of the points must be presented in relative values (percentages). Look, the pictures can be different, it is possible to upload a picture in 2000px and in 300px. If the area where you need to insert a picture is 600px, then on a picture of 2000px with exact values (px), the neural network will not be able to understand where to look for the text, it will shrink to 600px. You will also need to send the dimensions of the area where the picture is inserted. These are unnecessary calculations. It is much easier to send data in relative values, and the neural network will mark this data as needed.

In my case **id** is the id of the marked area, by default, during marking, it is the current date in milliseconds, but if back returns something else, then it's okay. The main thing is that the ids of the marked areas are unique. **X** and **y** are the coordinates of the starting point, **width** and **height** are the width and height of the marked area.

As you might guess, I took the last thing I did as a basis. In my opinion, this API is more understandable to a person. In the future, I plan to make my component adapt to any API, but for now, my component will build marked areas like this.

##Usage Guidelines

If you plan to use my component on a mobile device or tablet, keep in mind the following. When the image is not selected, you can scroll down when you touch my component. When the image is selected, you will not be able to scroll down, most likely, when you touch my component, you will have marked areas. In order for the image to be able to be marked, I have to disable the normal behavior for **touch**, otherwise nothing can be marked, when marking, scrolling down/up will occur. The easiest option is to leave a small distance around the edges, it is needed so that you can scroll down/up by touching it. Alternatively, you can add a button that would enable/disable the ability to edit the component. To do this, just add **:is-readonly="true"** to my component, or just **is-readonly**. The most radical option is to define the height of the component, the height of the screen, and if the height of the component is much greater than the height of the screen, then in this case you can disable the ability to mark images, and display text, something like "marking on a mobile device is not available." But this is a very extreme measure.

It is desirable that the block (**div**) in which my component will be located does not have **position: relative**. When marking, when you leave the block, the marking process does not stop, you can release the button anywhere, then a marked area will be created. If you release the left mouse button on a block that has a larger **z-index** than the block containing my component, my component will not know anything about it, and the labeling process will not stop. Keep this in mind.