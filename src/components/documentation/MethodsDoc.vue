<template>
  <div class="intro-install">
    <template v-if="!props.isEng">
      <h2>Методы, более полная настройка</h2>

      <p>
        Скорее всего, данный раздел вам не пригодится, но написать про него стоит. Ниже я приведу пример, он условный, и нужен для того, чтобы объяснить как добавлять методы к моему компоненту. Для того, чтобы посмотреть как работают методы, откройте <ui-link
          type="site"
          href="examples"
          title="Примеры"
          :query="props.query"
        >страницу примеров</ui-link> и кликнете по заголовку "методы". Посмотреть код примера можно по <ui-link
          type="git"
          href="src/components/examples/MethodsExample.vue"
          title="Пример"
        >следующей ссылке</ui-link>.
      </p>

      <methods-code />

      <p>
        <strong>@is-load-image</strong> - данный метод нужен для того, чтобы узнать загрузилась картинка, или нет. Он возвращает булево значение <strong>true</strong>, если картинка загрузилась, и <strong>false</strong>, если возникла ошибка при загрузке картинки. Я бы посоветовал вам открыть <ui-link
          type="site"
          href="settings"
          title="Страница настроек"
          :query="props.query"
        >страницу настроек</ui-link>, и вставить в поле <strong>"imageSrc"</strong> путь к какой-нибудь картинке. Если у вас нет никаких идей вставьте вот этот путь:
      </p>

      <image-url />

      <p>
        У вас должен подгрузиться фокстерьер. Когда он подгрузится, кнопка "Выберите файл" станет зеленой, что говорит о том, что картинка подгрузилась. Попробуйте удалить какую-нибуль букву, кнопка снова станет синей. Это делается заменой переменной <strong>isLoadImg</strong> с true на false. Если вдруг по этому адресу картинки не будет, то попробуйте вставить свою картинку. Сайт не мой, а за картинкой я следить не могу.
      </p>

      <p>
        Как не трудно догадаться, этот метод нужен для определения правильно ли подгрузилась картинка, или нет. Если <strong>file</strong> не равен <strong>null</strong>, а значение возвращаемое этим методом равно <strong>false</strong>, значит что-то пошло не так. Обычно если для поля выбора файла задать <strong>accept="image/*"</strong>, то на компьютере будут видны только картинки, а вот на мобильном устройстве, пользователь сможет выбрать не только картинки, но и документы. PDF к примеру. В таком случае можно выводить сообщение, что "произошла ошибка во время загрузки картинки". Если же картинка подгрузилась нормально, то можно вывести какой-нибудь блок. В примерах я вывожу блок для маркированных областей.
      </p>

      <p>
        <strong>@get-sizes</strong> - данный метод скорее всего вам не пригодится. Он возвращает размеры картинки для маркирования. Возвращаются её реальные размеры и размеры при масштабировании (когда она вставлена в блок). Соответственно <strong>widthImage</strong> и <strong>heightImage</strong> это размеры когда она вставлены в блок (масштабирована). <strong>RealWidthImage</strong> и <strong>realHeightImage</strong> - это реальные размеры картинки. Если ширина картинки 2000px, а она вставляется в блок в 600px, то ее реальная ширина (realWidthImage) будет равна 2000px, а масштабированная ширина (widthImage) будет равна ширине блока, соответственно 600px.
      </p>

      <p>
        Как я выше писал, для большинства нейронок будут нужны относительные величины (проценты). Но не исключено, что по техническому заданию вам нужно будет передать масштабированные размеры картинки. Данный метод для этого.
      </p>

      <p>
        У меня был такой случай, я отправлял на сервер картинку с маркированными областями, а на сервере программист не мог определить её реальные размеры. Так хорошо язык java он не знал. Меня попросили передавать реальные размеры картинки. В принципе это был единственный раз, и как я выше писал вероятность того, что вы будете этот метод использовать очень мала.
      </p>

      <p>
        <strong>v-model:active-id</strong> - возвращает id активной области, доступен для редактирования. По умолчанию, когда я добавляю маркированные области (в моем примере я их добавляю в начало массива <strong>areas</strong>), я возвращаю id-ик добавленной области, и делаю её активной. Если вы откроете <ui-link
          type="site"
          href="examples"
          title="Примеры"
          :query="props.query"
        >страницу примеров</ui-link>, и разметите какую-нибудь картинку, то у вас появятся блоки с маркированными областями. Если вы будете по ним кликать, то активная маркированная область будет меняться, это можно заметить по тому, что маркированные области будут менять цвет. Активная область у меня имеет красный цвет. Как пример, вам пришла с сервера какая-нибудь картинка с маркированными областями. Вы их вывели, и вам нужно узнать где какая область находится на картинке. Кликая по блокам можно будет это определить. Или другой пример, вам пришла картинка с маркированными областями, и кликая по ним, вам нужно будет подгружать данные в зависимости от выбранного id-ка.
      </p>

      <p>
        <strong>v-model:hovered-id</strong> - возвращает id маркированной области при наведении на неё. Когда же мы уберём мышь с маркированной области, то вернётся значение "null". Эта директива может пригодиться, если вам нужно посмотреть id-ки маркированных областей. Возможно отображать какие-либо блоки в зависимости от наведения на разные маркированные области. Я бы рекомендовал вам посмотреть <ui-link
          type="site"
          href="examples"
          title="Примеры"
          :query="props.query"
        >следующий пример</ui-link> (откройте блок "cлоты (пример с подсказками при наведении)"), если вам интересно как это сделано, то посмотрите
        <ui-link
          type="git"
          href="src/components/examples/slots/SlotsHintHovered.vue"
          title="Примеры"
          :query="props.query"
        >код примера</ui-link>.
      </p>
    </template>

    <template v-if="props.isEng">
      <h2>Methods, more complete customization</h2>

      <p>
        You probably won't need this section, but it's worth mentioning. Below I'll provide an example; it's purely hypothetical and is needed to explain how to add methods to my component. To see how the methods work, open the <ui-link
          type="site"
          href="examples"
          title="Examples"
          :query="props.query"
          >examples page</ui-link> and click on the "methods" heading. You can view the example code at <ui-link
          type="git"
          href="src/components/examples/MethodsExample.vue"
          title="Example"
          >the following link</ui-link>.
      </p>

      <methods-code is-eng />

      <p>
        <strong>@is-load-image</strong> - this method is needed to find out whether the image has loaded or not. It returns the boolean value <strong>true</strong> if the image has loaded, and <strong>false</strong> if an error occurred while loading the image. I would advise you to open <ui-link
        type="site"
        href="settings"
        title="Settings page"
        :query="props.query"
        >the settings page</ui-link>, and insert the path to an image in the <strong>"imageSrc"</strong> field. If you don't have any ideas, paste this path here.:
      </p>

      <image-url is-eng />

      <p>
        You should have a fox terrier loaded. When it loads, the "Select file" button will turn green, which indicates that the image has loaded. Try to delete any letter, the button will turn blue again. This is done by replacing the <strong>isLoadImg</strong> variable from true to false. If suddenly there is no picture at this address, then try to insert your own picture. The site is not mine, and I can't keep track of the picture.
      </p>

      <p>
        As it is not difficult to guess, this method is needed to determine whether the image has loaded correctly or not. If <strong>file</strong> is not returned <strong>null</strong>, and the value returned by this method is <strong>false</strong>, then something went wrong. Usually, if you set <strong>accept="image/*" for the file selection field</strong>, then only images will be visible on the computer, but on the mobile device, the user will be able to select not only images, but also documents. PDF for example. In this case, you can display a message that "an error occurred while loading the image." If the picture is loaded normally, then you can output some kind of block. In the examples, I output a block for the labeled areas.
      </p>

      <p>
        <strong>@get-sizes</strong> - this method probably won't be useful to you. It returns the size of the image for labeling. Its actual dimensions and dimensions are returned when zooming (when it is inserted into the block). Respectively, <strong>widthImage</strong> and <strong>heightImage</strong> are the dimensions when it is inserted into the block (scaled). <strong>RealWidthImage</strong> and <strong>realHeightImage</strong> are the actual dimensions of the image. If the width of the image is 2000px, and it is inserted into a block at 600px, then its real width (realWidthImage) will be 2000px, and the scaled width (widthImage) will be equal to the width of the block, respectively 600px.
      </p>

      <p>
        As I understand it, for most Americans these would be strangers (pronts). But it is possible that according to the technical specification, you will need to transfer the scaled dimensions of the image. This is the method for this.
      </p>

      <p>
        I had such a case, I sent a picture with labeled areas to the server, but on the server the programmer could not determine its actual size. He didn't know java so well. I was asked to transmit the actual size of the image. In principle, this was the only time, and as I wrote above, the probability that you will use this method is very low.
      </p>

      <p>
        <strong>v-model:active-id</strong> - returns the id of the hotspot, available for editing. By default, when I add labeled areas (in my example, I add them to the beginning of the <strong>areas</strong> array), I return the id of the added area and make it active. If you open <ui-link
          type="site"
          href="examples"
          title="Examples"
          :query="props.query"
        >the examples page</ui-link>, and mark up some image, then you will have blocks with labeled areas. If you click on them, the active marked area will change, this can be seen by the fact that the marked areas will change color. My hotspot is red. As an example, you received a picture with labeled areas from the server. You've brought them out, and you need to find out where which area is in the picture. By clicking on the blocks, you can determine this. Or another example, you have received a picture with labeled areas, and by clicking on them, you will need to upload data depending on the selected id.
      </p>

      <p>
        <strong>v-model:hovered-id</strong> - returns the id of the marked area when hovering over it. When we remove the mouse from the marked area, the value "null" will return. This directive may be useful if you need to look at the IDs of the labeled areas. It is possible to display any blocks depending on hovering over different marked areas. I would recommend you to look at <ui-link
          type="site"
          href="examples"
          title="Examples"
          :query="props.query"
        >the following example</ui-link> (open the "slots (example with hover hints)" block), if you are interested in how this is done, then take a look
        <ui-link
          type="git"
          href="src/components/examples/slots/SlotsHintHovered.vue"
          title="Examples"
          :query="props.query"
        >example code</ui-link>.
      </p>
    </template>
  </div>
</template>

<script setup>
  import MethodsCode from '@/components/code/MethodsCode.vue';
  import ImageUrl from '@/components/code/ImageUrl.vue';

  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
