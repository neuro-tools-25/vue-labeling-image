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

## Input parameters

Before I describe the input parameters, I would advise you to open [the settings page](https://neuro-tools-25.github.io/vue-labeling-image/settings "Settings page"). Choose a picture. Try to mark up several areas in the picture, and then play with the parameters. I tried to make my component as customizable as possible. Try changing the subject. Change the minimum dimensions for the labeled areas. Change the resolution for the image labeling block. Change the parameters for stretching and moving the marked areas. See what changes in this case. I am more of a practitioner, and I believe that this way the information will be better absorbed, it will be more visual.

### Labeling an image, working with labeled areas

**isMarkup** - the ability to create labeled areas in an image. It is set to true by default. To mark, you first need to select a file. It can be useful if you need to create labeled areas depending on some condition. For example, we have created an area, and we cannot create a new one until we enter the name of the area, or some other parameter. The marked areas can be stretched and moved within the picture. If this behavior is not required, see the parameters below.

**isResizeArea** - the ability to stretch the labeled areas. It is set to true by default. The marked areas can be stretched by pulling on the edges of the area. If you look at yandex or google images, you can stretch them by pulling on the corners of the marked area. As I wrote above, the main purpose of my component is OCR. The marking area in the picture may be very small, and special precision is needed here. Imagine that you have inserted an image with a width of 10000px into an area with a width of 400px. The image will shrink by 25 times. If you pull on the left or right edge, only the width of the marked area will change, it will not move anywhere. This gives you some accuracy when labeling an image.

**isDraggingArea** - the ability to move labeled areas. It is set to true by default. You can only move areas within the image. It makes sense to cancel dragging (**:is-dragging-area="false"**) if you need to better highlight an area in the image. By pulling on the edges of the area, the height or width will change, but it will not move itself, so you can mark the image more accurately.

**IsReadOnly** - the ability to cancel the creation of new areas. Canceling dragging and stretching of existing labeled areas. The default value is false. In most cases, this parameter is needed when we need to display the labeled areas without the possibility of editing them. For example, we received a picture from the server, with labeled areas (text that the neural network was able to recognize), and we need to display it without the possibility of editing. Just add this parameter to my component, or set it to **true**.

If **isMarkup**, **isResizeArea**, and **isDraggingArea** are set to false, then you will not be able to create, stretch, and move labeled areas. In fact, it will be almost the same as adding the **IsReadOnly parameter** or **:is-readonly="true"**. The difference is that when **IsReadOnly** is set to true, clicking on the marked area will not make it active. And if you disable **isMarkup**, **isResizeArea** and **isDraggingArea**, then when you click on the marked area, it will become active. This can be useful if you have received a picture from the server, marked areas, and you need to understand where which marked area is in the picture. Or when clicking on the marked areas, you will need to upload some data from the server.

Also keep in mind that on a mobile device or tablet, you will not be able to scroll down/up if you touch my component. To label an image, I'm canceling the standard **touch** behavior. Scrolling will be possible if you disable **isMarkup**, **isResizeArea** and **isDraggingArea**, or add **IsReadOnly** to my component.

### Setting the resolution for the image labeling block

**Resolution** is the resolution for the marking block of the document. If there is no image to label, then the block will occupy the required space according to the specified resolution. By default, this parameter is **"HD"**. The following values are possible:

*   **16:9** - the marking area will have a ratio of 16 to 9, where 16 is the width of the area and 9 is the height of the area.
*   **HD** - the marking area will have the same ratio as **16:9**.
*   **10:9** - the marking area will have a ratio of 10 to 9, where 10 is the width of the area and 9 is the height of the area.
*   **CIF** - the marking area will have the same ratio as **10:9**.
*   **8:5** - the marking area will have a ratio of 8 to 5, where 8 is the width of the area and 5 is the height of the area.
*   **QHD** - the marking area will have the same ratio as **8:5**.
*   **5:6** - the marking area will have a ratio of 5 to 6, where 5 is the width of the area and 6 is the height of the area.
*   **MPEG2** - the marking area will have the same ratio as **5:6**.
*   **5:4** - the marking area will have a ratio of 5 to 4, where 5 is the width of the area and 4 is the height of the area.
*   **SXGA** - the marking area will have the same ratio as **5:4**.
*   **5:3** - the marking area will have a ratio of 5 to 3, where 5 is the width of the area and 3 is the height of the area.
*   **WVGA** - the marking area will have the same ratio as **5:3**.
*   **4:3** - the marking area will have a ratio of 4 to 3, where 4 is the width of the area and 3 is the height of the area
*   **VGA** - the marking area will have the same ratio as **4:3**.
*   **3:1** - the marking area will have a ratio of 3 to 1, where 3 is the width of the area and 1 is the height of the area.
*   **WSXGA** - the marking area will have the same ratio as **3:1**.
*   **2:1** - the marking area will have a ratio of 2 to 1, where 2 is the width of the area and 1 is the height of the area.
*   **2K** - the marking area will have the same ratio as **2:1**.
*   **1:1** - the marking area will have a ratio of 1 to 1. As a rule, this is necessary for labeling avatars, I had such a task.

As a rule, most of the pictures for labeling will have some specific resolution (aspect ratio). In most cases, it will be HD, and I made it by default. If the labeling image is not selected, a blank will be displayed according to this resolution. And if an image is selected, then the block for labeling the document will take the size of this image. For example, our resolution is 16:9, and we selected a vertical image with a resolution of 9:16, then the labeling block will take the size of the selected image.

**Vertical** - the ability to make the image labeling block vertical. By default, it is set to false. Let me explain with a concrete example. Let's imagine that our default resolution is set to HD, which corresponds to a resolution of 16:9. If we enable this option, the resolution of the markup field will correspond to a resolution of 9:16. As I wrote above, most of our images will have the same resolution, with rare exceptions. If most of the images have a resolution of 9:16, then this parameter may be useful. Like resolution, after uploading a real image, the markup field will take on the size of the uploaded image, and this parameter will not matter until we reset the image.

### Choosing a theme

**Theme** is a theme for labeled areas. If we look at other UIs for OCR, then you can note that the labeled areas are usually blue, and the active labeled area is usually green. This is not suitable for all documents. As a rule, most of the documents in the world are green or red. Fewer documents are blue, but they are, for example blue card. It is quite natural that the topic should be different for different documents. For example, in Russia SNILS is green, if the hotspot on it is green, it simply will not be very noticeable on this document. It is logical that on a red document, the labeled areas cannot be red, otherwise they will merge. Based on my experience, I have identified 5 different topics:

*   **Default** is a theme for green documents, for example, SNILS. It is set by default, and will be applied if this parameter is missing.
*   **Red** is a theme for red documents, in Russia it is a passport, a driver's license.
*   **Blue** is a theme for blue documents, as I wrote above, this is a blue card for motorists.
*   **White** is a theme for any document on an A4 sheet, such as an employment contract, a contract for the purchase of a SIM card, a contract for the provision of medical services, and so on.
*   **Black** - such documents are less common, it is a black background and white color on it, apparently an inversion is being done for scanned documents. This theme is also suitable for documents that are made through a printer. If the printer is bad, the documents will look darker than usual.

All the topics that I have listed above were made for Russian documents. When I outsourced work with guys from Estonia, it turned out that some topics were not suitable for their documents. Therefore, I have provided for the possibility of creating my own custom theme, for this you need to specify the name of your custom theme in this parameter. For example, if we write in theme="castomTheme", then we will need to register styles for the "mark-up\_theme\_castomTheme" class. Styles for a custom theme can be selected on [on the settings page](https://neuro-tools-25.github.io/vue-labeling-image/settings "Settings page") , in the "Styles for the image labeling block" section.

### Enable/disable shadow for marked areas

I wrote above that there cannot be one topic for all types of documents. However, there are cases when, according to our design, the labeled areas have certain colors and cannot be changed. The design has been agreed upon, and there is a technical specification. It may happen that the user has uploaded a passport, which is red in Russia. When labeling a document, its active area turns red, as a result, it will not merge much with the document, which is not very good. In this case, alternatively, you can include a shadow for the marked areas. In this case, the labeled areas will not merge. For most themes, the shadow will be black, except for the dark theme, where the shadow will be white. The main principle is the contrast of the shadow and the marked area.

**IsShadow** - enables/disables shadows for marked areas. By default, this parameter is set to false.

### Minimum size settings for labeled areas

These parameters are needed to set the minimum width and height of the labeled area. You can accidentally click on my component, without these parameters, a bulleted area will be created that you don't need. The neural network will not be able to recognize anything in the 1 by 1 px block.

**MinWidth** is the minimum width of the labeled area. The default value is 10. Measured in px. My component is needed for marking up text or highlighting faces on documents. It is somehow doubtful that an area that is less than 10px can be somehow recognized. If there is any need for this, then you need to set 0.

**MinHeight** is the minimum height of the marked area. The default value is 10. Measured in px. My component is needed for marking up text or faces on documents. It is somehow doubtful that an area that is less than 10px can be somehow recognized. If there is any need for this, then you need to set 0.

### Setting up suggestions for bulleted areas

Here you need to make a reservation that the prompts will only appear on a desktop computer when you hover the mouse over the marked areas. You won't see them on your mobile device or tablet.

**IsTitle** - the ability to enable/disable hints when hovering over marked areas. It is set to true by default.

**KeyTitle** is the key for displaying the hint. By default, this parameter is set to "title". You can change it to anything. As a rule, at the moment of debugging, you can enter an id to see the IDs of the marked areas.

### Grid for the image labeling block

This section probably won't be useful to you. It is needed to turn on and adjust the grid. I was asked to do this thing for only one project. It was needed for debugging. After labeling the image, the user needed to determine whether my component correctly determines the size of the labeled areas. It was a very old employee of one Research Institute. I admit that this may be useful for better labeling of the document.

**EnableGrid** - the ability to enable/disable the grid. By default, the grid is disabled, the value is set to false.

**GridSize** is the size of the grid. Values from 5 to 50 are possible. The values must be multiples of 5, i.e. you can enter 5, 10, 15, 20, 25 and so on up to 50, but not 11, 12, 13, 14. I don't see any point in making the grid size larger than 50. The default value is 10. if you enter an invalid value, for example 12, then the grid will be 5. The grid sizes can be represented as a row or as a number. This parameter can be useful if you need to label the image more accurately. To view this parameter, you need to enable **enableGrid**.

You can also turn on the grid when there is no picture. If there is an image, the grid layer will be above the image, but below the labeled areas.