<template>
  <div class="intro-install">
    <template v-if="!props.isEng">
      <h1>Документация</h1>

      <p>
        Vue labeling image - это компонент для vue.js, позволяющий маркировать данные на картинках. Проще говоря, это UI для нейронок. Примером для создания данного компонента послужил данный <ui-link 
        href="https://github.com/HumanSignal/labelImg"
        title="LabelImg">проект</ui-link>, сейчас он уже не актуален. Eсли вам интересна данная тема, я рекомендую вам обратить внимание вот на этот <ui-link 
        href="https://github.com/HumanSignal/label-studio"
        title="label-studio">репозиторий</ui-link>. По большей части я разрабатывал компоненты для маркирования текста, поэтому основное предназначение моего компонента это <ocr-def lang="rus" />, но он подойдет и для других похожих задач. Как пример, я могу указать на yandex и google картинки. Там можно загрузить свою картирку, а&nbsp;после выделить какую-то определенную её область, мой компонент вполне с этой задачей справится.
      </p>

      <p>
        Для корректной работы данного компонента нужен vue.js версии 3.5 и выше (я использую useTemplateRef и defineModel). При разработке данного компонента я использовал vue.js версии 3.5.17.
      </p>

      <p>
        Чтобы не переписывать код в пустую, я бы вам посоветовал открыть <ui-link
          type="site"
          href="examples"
          title="Примеры"
          :query="props.query"
        >страницу примеров</ui-link> и самим посмотреть, что может мой компонент. Я укажу ссылки на примеры с кодом, так наверное будет проще.
      </p>

      <p>
        И так, откройте <ui-link
          type="site"
          href="examples"
          title="Примеры"
          :query="props.query"
        >страницу примеров</ui-link>, выберите какую-нибудь картинку, и разметьте произвольные области (нажмите левую кнопку мыши, и не отпуская её выделите произвольную область. Если вы смотрите страницу примеров с мобильного телефона, то проведите пальцем по картинке). Маркированные области можно переносить по картинке и менять их размеры, для этого потяните их за края.
      </p>

      <h2>Установка, минимальная настройка</h2>

      <p>Как и положено, наверное стоит сказать, что для установки данного компонента нужен Node.js и NPM, но вы наверное и сами это знаете. Установить данный компонент можно следующим способом:</p>

      <install-code />

      <p>Если у вас нет проблем с интернетом, то компонент вы установите. Дальше нужно будет его подключить, это можно будет сделать следующим способом:</p>

      <type-code />

      <p>
        Если вы планируете использовать мой компонент более чем на одной странице, то имеет смысл подключить CSS глобально, в main.js, или App.vue, тут выбирайте как вам будет удобнее.
      </p>

      <p>
        Как можно заметить, важными являются 2 строчки, <strong>image-src="file"</strong> и <strong>v-model="areas"</strong>.
      </p>

      <p>
        <strong>Image-src</strong> - входной параметр, в который нужно передать картинку которую нужно маркировать. В подавляющем большинстве случаев, это будет двоичный файл, но возможно передать и путь к картинке, и саму картинку в формате <base64-def />. Вполне естественно, что без этого параметра ничего маркировать не получится. Саму картинку вы скорее всего отправите на сервер через <strong>FormData</strong>. Я бы порекомендовал вам посмотреть <ui-link
          type="git"
          href="src/components/examples/MainExample.vue"
          title="Пример"
        >код примера</ui-link>. Если вы начинающий frontend-разработчик, то я рекомендую вам посмотреть код того, как работает <ui-link
          type="git"
          href="src/UI/UIFile.vue"
          title="Пример"
        >стилизованный input выбора файла</ui-link>.
      </p>

      <p>
        <strong>Areas</strong> - это массив объектов. Он содержит параметры маркированных областей и обязательно должен содержать следующие поля:
      </p>

      <required-fields />

      <p>
        Тут нужно оговориться, что единого <api-def /> для нейронок не существует. Когда я первый раз писал UI для нейронки, мне нужно было указать координаты начальной и конечной точки (<strong>X1, Y1, X2, Y2</strong>). После, для одного <nii-def /> нужно было создать UI, который бы принимал и отдавал начальую и конечную точку в следующем виде: <strong>[[X1, Y1], [X2, Y2]]</strong>. Это массив, в котором находятся координаты начальной и конечной точки, первый массив это начальная точка, второй массив это конечная точка. На аутсорсе я писал UI которое бы принимало и отдавало координаты в следующем виде:
      </p>

      <SomeUI />

      <p>
        Чтобы вы не ломали голову, это массив, в котором 4 объекта, это точки. Они идут от верхней левой, к нижней левой точке, затем к правой нижней точке, и последняя точка - правая верхняя. Как не трудно догадаться, получается прямоугольник, мне нужно было его построить. Возвращать маркированные области мне нужно было в этих форматах, в зависимости от <api-def />. Последнее из того, что я делал, нейронке была нужна начальная точка (координаты X, Y) и ширина с высотой маркированной области.
      </p>

      <p>
        Если подводить не большой итог, можно выделить, что для всех нейронок, координаты точек должны быть представлены в относительных величинах (процентах). Смотрите, картинки могут быть разными, возможно загрузить картинку в 2000px и в 300px. Если область в которую нужно вставить картинку 600px, то на картинке в 2000px при точных величинах (px), нейронка не сможет понять, где искать текст, она же сожмется до 600px. Нужно будет ещё отправить размеры области в которую картинка вставляется. Это лишние расчеты. Гораздо проще отправить данные в относительных величинах, а нейронка эти данные разметит как нужно.
      </p>

      <p>
        В моём случае <strong>id</strong> - это id маркированной области, по умолчанию, во время маркирования, это текущая дата в милисекундах, но если back вернет что-то другое, то ничего страшного. Главное, чтобы id-ки у маркированных областей были уникальными. <strong>X</strong> и <strong>y</strong> - это координаты начальной точки, <strong>width</strong> и <strong>height</strong> это ширина и высота маркированной области.
      </p>

      <p>
        Как можно догадаться, за основу я взял последнее из того, что я делал. На мой взгляд такое <api-def /> более понятно человеку. В будующем я планирую сделать так, чтобы мой компонент подстраивался под любое <api-def />, но пока что, мой компонент будет строить маркированные области так.
      </p>

      <h2>
        Рекомендации по использованию
      </h2>

      <p>
        Eсли вы планируете использовать мой компонент на мобильном устройстве или планшете, то имейте в виду следующее. Когда картинка не выбрана, вы можете прокручивать вниз когда касаетесь моего компонента. Когда же картинка выбрана, то вниз прокрутить вы уже не сможете, скорее всего при касании моего компонента у вас будут появляться маркированные области. Для того, чтобы картинку можно было маркировать, мне приходится отключать обычное поведение для <strong>touch</strong>, иначе маркировать ничего не получится, при маркировании будет происходить прокрутка вниз/вверх. Самый простой вариант, это оставить по краям не большое расстояние, оно нужно для того, чтобы касаясь его можно было прокручивать вниз/вверх. Как вариант, можно добавить кнопку, которая бы включала/отключала возможность редактирования компонента. Для этого просто добавьте к моему компоненту <strong>:is-readonly="true"</strong>, или просто <strong>is-readonly</strong>. Самый радикальный вариант, это определить высоту компонента, высоту экрана, и если высота компонента сильно больше высоты экрана, то в таком случае можно отключить возможность маркирования картинок, и вывести текст, что-то вроде "маркирование на мобильном устройтве не доступно". Но это совсем крайняя мера.
      </p>

      <p>
        Желательно, чтобы блок (<strong>div, main, article, section</strong>) в котором будет находиться мой компонент не имел <strong>position: relative</strong>. При маркировании, когда вы выходите за пределы блока, процесс маркирования не останавливается, вы можете отпустить кнопку в любом месте, тогда будет создана маркированная область. Если вы отпустите левую кнопку мыши на блоке, который имеет больший <strong>z-index</strong>, чем блок в котором лежит мой компонент, то мой компонент про это ничего не узнает, и процесс маркирования не прекратится. Имейте это ввиду.
      </p>
    </template>

    <template v-if="props.isEng">
      <h1>Documentation</h1>

      <p>
        Vue labeling image is a component for vue.js that allows you to label data on images. Simply put, it is a UI for neurons. This <ui-link
        href="https://github.com/HumanSignal/labelImg"
        title="LabelImg">project</ui-link> served as an example for creating this component, now it is no longer relevant. If you are interested in this topic, I recommend you to pay attention to this <ui-link
        href="https://github.com/HumanSignal/label-studio"
        title="label-studio">repository</ui-link>. For the most part, I developed components for text labeling, so the main purpose of my component is <ocr-def lang="eng" />, but it is also suitable for other similar tasks. As an example, I can point to Yandex and Google images. There you can upload your own picture, and then select a specific area of it, my component will cope with this task quite well.
      </p>

      <p>
        This component requires vue.js version 3.5 or higher to work correctly (I use useTemplateRef and defineModel). I used vue.js version 3.5.17 when developing this component.
      </p>

      <p>
        In order not to rewrite the code into nothing, I would advise you to open the <ui-link
        type="site"
        href="examples"
        title="Examples"
        :query="props.query"
        >examples page</ui-link> and see for yourself what my component can do. I will provide links to examples with code, it will probably be easier that way.
      </p>

      <p>
        So, open the <ui-link
        type="site"
        href="examples"
        title="Examples"
        :query="props.query"
        >examples page</ui-link>, select any picture, and mark arbitrary areas (press the left mouse button and without releasing it, select an arbitrary area. If you are viewing the examples page on a mobile phone, swipe the image.) The marked areas can be moved around the image and resized by dragging their edges.
      </p>

      <h2>Installation, minimal setup</h2>

      <p>As expected, it is probably worth saying that to install this component you need Node.js and NPM, but you probably already know that. You can install this component in the following way:</p>

      <install-code is-eng />

      <p>
        If you have no problems with the Internet, then you will install the component. Then you will need to connect it, this can be done in the following way:
      </p>

      <type-code is-eng />

      <p>
        If you plan to use my component on more than one page, it makes sense to include CSS globally, in main.js, or App.vue, here choose as you find more convenient.
      </p>

      <p>
        As you can see, 2 lines are important, <strong>image-src="file"</strong> and <strong>v-model="areas"</strong>.
      </p>

      <p>
        <strong>Image-src</strong> - input parameter to which you need to pass the image to be marked. In the vast majority of cases, this will be a binary file, but it is possible to pass both the path to the image and the image itself in the <base64-def lang="eng" /> format. It is quite natural that without this parameter you will not be able to mark anything. You will most likely send the image itself to the server via <strong>FormData</strong>. I would recommend you to look at <ui-link
          type="git"
          href="src/components/examples/MainExample.vue"
          title="Example"
          >example code</ui-link>. If you are a beginner frontend developer, I would recommend you to look at the code of how <ui-link
          type="git"
          href="src/UI/UIFile.vue"
          title="Example"
          >styled file input</ui-link> works.
      </p>

      <p>
        <strong>Areas</strong> is an array of objects. It contains the parameters of the marked areas and must contain the following fields:
      </p>

      <required-fields is-eng />

      <p>
        Here it is necessary to stipulate that there is no single <api-def lang="eng" /> for neurons. When I first wrote a UI for a neuron, I needed to specify the coordinates of the start and end points (<strong>X1, Y1, X2, Y2</strong>). After, for one <nii-def lang="eng" /> it was necessary to create a UI that would accept and return the start and end points in the following form: <strong>[[X1, Y1], [X2, Y2]]</strong>. This is an array that contains the coordinates of the starting and ending points, the first array is the starting point, the second array is the ending point. On outsourcing, I wrote a UI that would accept and return coordinates in the following form:
      </p>

      <SomeUI is-eng />

      <p>
        So that you don't have to rack your brains, this is an array with 4 objects, these are points. They go from the top left, to the bottom left point, then to the bottom right point, and the last point is the top right. As you can guess, it turns out to be a rectangle, I needed to build it. I needed to return the marked areas in these formats, depending on <api-def lang="eng" />. The last thing I did was for the neural network to need a starting point (X, Y coordinates) and the width and height of the marked area.
      </p>

      <p>
        To sum it up briefly, we can highlight that for all neurons, the coordinates of the points must be presented in relative values (percentages). Look, the pictures can be different, it is possible to upload a picture in 2000px and in 300px. If the area where you need to insert a picture is 600px, then on a picture of 2000px with exact values (px), the neural network will not be able to understand where to look for the text, it will shrink to 600px. You will also need to send the dimensions of the area where the picture is inserted. These are unnecessary calculations. It is much easier to send data in relative values, and the neural network will mark this data as needed.
      </p>

      <p>
        In my case <strong>id</strong> is the id of the marked area, by default, during marking, it is the current date in milliseconds, but if back returns something else, then it's okay. The main thing is that the ids of the marked areas are unique. <strong>X</strong> and <strong>y</strong> are the coordinates of the starting point, <strong>width</strong> and <strong>height</strong> are the width and height of the marked area.
      </p>

      <p>
        As you might guess, I took the last thing I did as a basis. In my opinion, this <api-def lang="eng" /> is more understandable to a person. In the future, I plan to make my component adapt to any <api-def lang="eng" />, but for now, my component will build marked areas like this.
      </p>

      <h2>
        Usage Guidelines
      </h2>

      <p>
        If you plan to use my component on a mobile device or tablet, keep in mind the following. When the image is not selected, you can scroll down when you touch my component. When the image is selected, you will not be able to scroll down, most likely, when you touch my component, you will have marked areas. In order for the image to be able to be marked, I have to disable the normal behavior for <strong>touch</strong>, otherwise nothing can be marked, when marking, scrolling down/up will occur. The easiest option is to leave a small distance around the edges, it is needed so that you can scroll down/up by touching it. Alternatively, you can add a button that would enable/disable the ability to edit the component. To do this, just add <strong>:is-readonly="true"</strong> to my component, or just <strong>is-readonly</strong>. The most radical option is to define the height of the component, the height of the screen, and if the height of the component is much greater than the height of the screen, then in this case you can disable the ability to mark images, and display text, something like "marking on a mobile device is not available." But this is a very extreme measure.
      </p>

      <p>
        It is desirable that the block (<strong>div</strong>) in which my component will be located does not have <strong>position: relative</strong>. When marking, when you leave the block, the marking process does not stop, you can release the button anywhere, then a marked area will be created. If you release the left mouse button on a block that has a larger <strong>z-index</strong> than the block containing my component, my component will not know anything about it, and the labeling process will not stop. Keep this in mind.
      </p>
    </template>
  </div>
</template>

<script setup>
  import InstallCode from '@/components/code/InstallCode.vue';
  import TypeCode from '@/components/code/TypeCode.vue';
  import RequiredFields from '@/components/code/RequiredFields.vue';
  import SomeUI from '@/components/code/SomeUI.vue';

  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
