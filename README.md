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

## Usage Guidelines

If you plan to use my component on a mobile device or tablet, keep in mind the following. When the image is not selected, you can scroll down when you touch my component. When the image is selected, you will not be able to scroll down, most likely, when you touch my component, you will have marked areas. In order for the image to be able to be marked, I have to disable the normal behavior for **touch**, otherwise nothing can be marked, when marking, scrolling down/up will occur. The easiest option is to leave a small distance around the edges, it is needed so that you can scroll down/up by touching it. Alternatively, you can add a button that would enable/disable the ability to edit the component. To do this, just add **:is-readonly="true"** to my component, or just **is-readonly**. The most radical option is to define the height of the component, the height of the screen, and if the height of the component is much greater than the height of the screen, then in this case you can disable the ability to mark images, and display text, something like "marking on a mobile device is not available." But this is a very extreme measure.

It is desirable that the block (**div**) in which my component will be located does not have **position: relative**. When marking, when you leave the block, the marking process does not stop, you can release the button anywhere, then a marked area will be created. If you release the left mouse button on a block that has a larger **z-index** than the block containing my component, my component will not know anything about it, and the labeling process will not stop. Keep this in mind.

## Methods, more complete customization

You probably won't need this section, but it's worth mentioning. Below I'll provide an example; it's purely hypothetical and is needed to explain how to add methods to my component. To see how the methods work, open the [examples page](https://neuro-tools-25.github.io/vue-labeling-image/examples "Examples") and click on the "methods" heading. You can view the example code at [the following link](https://github.com/neuro-tools-25/vue-labeling-image/blob/main/src/components/examples/MethodsExample.vue "Example").

```vue
<template>
  <labeling-image
    :image-src="file"
    v-model="areas"
    v-model:active-id="activeId"
    @is-load-image="changeIsLoadImage"
    @get-sizes="changeSizes"
  />
</template>

<script setup>
  import LabelingImage from 'vue-labeling-image';
  import 'vue-labeling-image/styles.css';

  const file = ref(null);
  const areas = ref([]);
  const activeId = ref(null);
  const isLoadImg = ref(false);
  const widthImg = ref(null);
  const heightImg = ref(null);
  const realWidthImg = ref(null);
  const realHeightImg = ref(null);

  const changeIsLoadImage = (isLoad) => isLoadImg.value = isLoad;

  const changeSizes = ({
    widthImage,
    heightImage,
    realWidthImage,
    realHeightImage,
  }) => {
    widthImg.value = widthImage;
    heightImg.value = heightImage;
    realWidthImg.value = realWidthImage;
    realHeightImg.value = realHeightImage;
  }
</script>
```

**@is-load-image** - this method is needed to find out whether the image has loaded or not. It returns the boolean value **true** if the image has loaded, and **false** if an error occurred while loading the image. I would advise you to open [the settings page](https://neuro-tools-25.github.io/vue-labeling-image/settings "Settings page"), and insert the path to an image in the **"imageSrc"** field. If you don't have any ideas, paste this path here.:

```shell
https://lapkins.ru/upload/resize_cache/uf/c8f/293_293_2/c8f2a2f9868aec552e5819f100a9652c.jpg 
```

You should have a fox terrier loaded. When it loads, the "Select file" button will turn green, which indicates that the image has loaded. Try to delete any letter, the button will turn blue again. This is done by replacing the **isLoadImg** variable from true to false. If suddenly there is no picture at this address, then try to insert your own picture. The site is not mine, and I can't keep track of the picture.

As it is not difficult to guess, this method is needed to determine whether the image has loaded correctly or not. If **file** is not returned **null**, and the value returned by this method is **false**, then something went wrong. Usually, if you set **accept="image/\*" for the file selection field**, then only images will be visible on the computer, but on the mobile device, the user will be able to select not only images, but also documents. PDF for example. In this case, you can display a message that "an error occurred while loading the image." If the picture is loaded normally, then you can output some kind of block. In the examples, I output a block for the labeled areas.

**@get-sizes** - this method probably won't be useful to you. It returns the size of the image for labeling. Its actual dimensions and dimensions are returned when zooming (when it is inserted into the block). Respectively, **widthImage** and **heightImage** are the dimensions when it is inserted into the block (scaled). **RealWidthImage** and **realHeightImage** are the actual dimensions of the image. If the width of the image is 2000px, and it is inserted into a block at 600px, then its real width (realWidthImage) will be 2000px, and the scaled width (widthImage) will be equal to the width of the block, respectively 600px.

As I understand it, for most Americans these would be strangers (pronts). But it is possible that according to the technical specification, you will need to transfer the scaled dimensions of the image. This is the method for this.

I had such a case, I sent a picture with labeled areas to the server, but on the server the programmer could not determine its actual size. He didn't know java so well. I was asked to transmit the actual size of the image. In principle, this was the only time, and as I wrote above, the probability that you will use this method is very low.

**v-model:active-id** - returns the id of the hotspot, available for editing. By default, when I add labeled areas (in my example, I add them to the beginning of the **areas** array), I return the id of the added area and make it active. If you open [the examples page](https://neuro-tools-25.github.io/vue-labeling-image/examples "Examples"), and mark up some image, then you will have blocks with labeled areas. If you click on them, the active marked area will change, this can be seen by the fact that the marked areas will change color. My hotspot is red. As an example, you received a picture with labeled areas from the server. You've brought them out, and you need to find out where which area is in the picture. By clicking on the blocks, you can determine this. Or another example, you have received a picture with labeled areas, and by clicking on them, you will need to upload data depending on the selected id.