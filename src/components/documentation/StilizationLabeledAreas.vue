<template>
  <div class="stilization-areas">
    <template v-if="!props.isEng">
      <h2>
        Стилизация маркированных областей
      </h2>

      <p>
        В процессе работы возникают такие ситуации, при которых нам нужно отобразить маркированные области (пришёл какой-то результат с сервера), и при этом некоторые маркированные области должны отличаться. В качестве примера давайте представим себе такую ситуацию. Мы маркировали картинку, отправили данные на сервер, а дальше одни маркированные области нейронка распознать не смогла, другие маркированные области нейронка распознала, но распознала с ошибкой, к примеру документ отсканирован не чётко, и некоторые буквы не получилось распознать. Другая часть маркированных областей распозналась нормально, без ошибок. Нам пришёл ответ в виде массива объектов. Одно из свойств каждого объекта говорит нам о результате распознавания, и нам нужно как-то отобразить результат пользователю, чтобы он смог понять какие маркированные области разпознать не удалось, какие маркированные области рапознались с ошибкой, а какие маркированные области  распознались без ошибок. Подобные задачи можно решить как через CSS-классы, так и через аттрибут "style".
      </p>

      <p>
        Самое правильное будет сказать о том, что мы можем стилизовать. Выше я уже приводил CSS-переменные которые отвечают за стилизацию. Чтобы было удобнее, и не приходилось скакать по странице, ниже я ещё раз приведу список CSS-переменных отвечающих за стилизацию маркированных областей. Условно их можно разделить на переменные отвечающие за стилизацию обычных маркированных областей, переменные отвечающие за стилизацию активной маркированной области, и общие переменные, которые имеют отношение как к обычным, так и к активной маркированной области. Если вы больше практик, то я бы посоветовал вам открыть <ui-link
          type="site"
          href="examples"
          title="Страница примеров"
          :query="query"
        >страницу примеров</ui-link>, и посмотреть примеры стилизации маркированных областей, вам так будет проще. Если же вы хотите более детально во всём разобраться, то читайте дальше.
      </p>

      <h3>
        Общие CSS-переменные
      </h3>

      <p>
        Это переменные, изменения которых приведут к изменению как активной, так и обычных маркированных областей. Обычно разница между активной и обычной маркированной областью заключается в цвете линии, цвете заливки и прозрачности заливки. Закругления и толщина линий как правило не отличаются, по крайней мере в том, что я делал было так.
      </p>

      <p class="small-mar">
        <b>--mu-marking-rect-rx</b> — border-radius по оси X, или закругление по оси X. Этот параметр применяется для активной и обычной маркированной области. Очень маловероятно, что возникнет такая ситуация, при которой закругление для активной области будет отличаться от обычной.
      </p>

      <p class="small-mar">
        <b>--mu-marking-rect-ry</b> — border-radius по оси Y, или закругление по оси Y. Этот параметр применяется для обычной и активной маркированной области. Могу сказать, что так-же как и для параметра выше, очень маловероятно, что возникнет такая ситуация, при которой закругление для активной области будет отличаться от обычной. 
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-stroke-width</b> — толщина линий маркированных областей. Этот параметр  так-же применяется для обычной и активной маркированной области. У меня не возникало таких задач, чтобы маркированные области отличались по толщине линий, но в последнее время я об этом задумываюсь, вполне возможно, что в следующих версиях я этот момент поправлю. 
      </p>

      <h3>
        CSS-переменные отвечающие за стилизацию обычных маркированных областей
      </h3>

      <p>
        Это переменные, которые будут применяться к обычным маркированным областям. На этом моменте стоит ещё раз рассказать про активную и обычные маркированные области. Когда мы начинаем маркировать изображение, то первая созданная область будет активной. После, активной будет каждая последняя созданная маркированная область, остальные области будут обычными. Мы можем запретить маркировать изображение и просто отобразить маркированные области (:is-readonly="true" для моего компонента), тогда активной маркированной области не будет. Область станет активной, когда мы кликнем по ней, попытаемся её переместить, или растянуть (конечно, если эти действия разрешены). Обычно активная маркированная область отличается от обычной цветом заливки, цветом линии, возможно прозрачностью.
      </p>

      <p>
        Для обычных маркированных областей мы можем задавать цвет линии и цвет её заливки. Так-же мы можем менять прозрачность заливки и прозрачность линии.
      </p>

      <p class="small-mar">
        <b>--mu-marking-rect-fill</b> — цвет заливки для маркированных областей. Здесь можно задать любое допустимое значение цвета в CSS (orange, blue, rgba(77, 77, 77, .7), rgb(77, 77, 77), hsl(120, 100%, 50%) и тд).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-fill-opacity</b> — прозрачность заливки для маркированных областей. Если вам не нужна заливка, по задумке дизайнера её нет, то задайте 0. Допустимые значения от 0 до 1 (0, 1, 0.3, 0.4, 0.8 и тд).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-stroke</b> — цвет линии для маркированных областей, по другому можно сказать border, под капотом я использую SVG, поэтому данная переменная в названии содержит "stroke". Здесь можно задать любое допустимое значение цвета в CSS (orange, blue, rgba(77, 77, 77, .7), rgb(77, 77, 77), hsl(120, 100%, 50%) и тд).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-stroke-opacity</b> — прозрачность линий для маркированных областей. Если по дизайну у маркированных областей нет видимых линий, а есть только заливка, то задайте значение 0. Как правило обычно задают 1. Допустимые значения от 0 до 1 (0, 1, 0.3, 0.4, 0.8 и тд).
      </p>

      <h3>
        CSS-переменные отвечающие за стилизацию активной маркированной области
      </h3>

      <p>
        Скажу честно, у меня не возникало таких задач, чтобы было нужно стилизовать активную маркированную область. Обычно, в большинстве проектов которые я делал, если мне приходил ответ от сервера, то с результатом можно было только ознакомиться, редактирование маркированных областей я отключал (:is-readonly="true" для моего компонента). Скорее всего эти переменные вам тоже не понадобятся, но если делать универсально, то я предусмотрел возможность менять стили для активной маркированной области. Смотрите, если вы разрешите изменять маркированные области (разрешите переносить и растягивать их), то при клике на обычную маркированную область она станет активной, к ней применятся те стили, которые применются для активной маркированной области по умолчанию. Если вы стилизовали данную область, то при клике по ней всё равно применятся стили для активной маркированной области по умолчанию. Если вам такое поведение не нужно, то вам нужно будет переопределить нужные вам переменные. Так-же как и для обычных маркированных областей, мы можем задавать цвет заливки, цвет линии, а так-же прозрачность заливки и прозрачность линии активной маркированной области.
      </p>

      <p class="small-mar">
        <b>--mu-marking-rect-active-fill</b> — цвет заливки для активной маркированной области. Здесь можно задать любое допустимое значение цвета в CSS (orange, blue, rgba(77, 77, 77, .7), rgb(77, 77, 77), hsl(120, 100%, 50%) и тд).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-active-fill-opacity</b> — прозрачность заливки для активной маркированной области. Если вам не нужна заливка, по задумке дизайнера её нет, то задайте 0. Допустимые значения от 0 до 1 (0, 1, 0.3, 0.4, 0.8 и тд).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-active-stroke</b> — цвет линии для активной маркированной области, по другому можно сказать border, под капотом я использую SVG, поэтому данная переменная в названии содержит "stroke". Здесь можно задать любое допустимое значение цвета в CSS (orange, blue, rgba(77, 77, 77, .7), rgb(77, 77, 77), hsl(120, 100%, 50%) и тд).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-active-stroke-opacity</b> — прозрачность линии для активной маркированной области. Если по дизайну у активной маркированной области нет видимых линий, а есть только заливка, то задайте значение 0. Как правило обычно задают 1. Допустимые значения от 0 до 1 (0, 1, 0.3, 0.4, 0.8 и тд).
      </p>

      <h3>
        Стилизация маркированных областей через CSS классы
      </h3>

      <p>
        Наверное это самый гибкий способ для стилизации маркированных областей. Смотрите, мы получаем от сервера массив маркированных областей, одно из свойств каждой маркированной области говорит нам о результате распознавания маркированной области. Всё, что нам нужно, это заменить данное свойство на "muClass" с нужным нам CSS классом, или классами, а дальше прописать стили для каждого CSS класса. Ниже я приведу условный пример кода по стилизации маркированных областей через CSS классы. Наиболее важные места, где я задаю CSS классы, и стилизую маркированные области я выделю (рядом с номером строки будет зелёная линия). Я бы вам посоветовал открыть <ui-link
          type="site"
          href="examples"
          title="Страница примеров"
          :query="query"
        >страницу примеров</ui-link> и посмотреть реальные примеры.
      </p>

      <stilization-class />

      <p>
        Пример выше весьма условный, в нём я не разрешаю маркировать картинку (:is-markup="false"), нам пришёл ответ от сервера и нам нужно где-то растянуть маркированную область, где-то её переместить, а вот новые маркированные области нам создавать не нужно. Я задал для не распознанных маркированных областей CSS-класс "mu-class_error". Для тех маркированных областей, которые распознались с ошибкой, я задал класс "mu-class_warn". Для нормально распознанных областей я задал класс "mu-class_success". В примере выше я не меняю цвета для активной маркированной области, но, для того, чтобы как-то её выделить, я делаю толще линию обводки и меняю прозрачность заливки, так будет понятно, что область стала активной.
      </p>

      <h3>
        Стилизация маркированных областей через атрибут "style"
      </h3>

      <p>
        По сравнению со стилизацией маркированных областей через CSS классы, этот способ менее гибкий. В принципе, если делать стилизацию через CSS классы, то нужно сделать стилизацию и через атрибут "style", это само собой напрашивается. Возможно кому-то этот способ больше понравится, в таком случае мы можем задать стили прямо в JS коде, что может быть удобно, всё таки это быстрее.
      </p>

      <p>
        Мы так-же получаем от сервера массив маркированных областей, одно из свойств каждой маркированной области говорит нам о результате распознавания маркированной области. Всё, что нам нужно, это заменить данное свойство на "muStyle, а дальше прописать в нём нужные CSS переменные. Ниже я приведу условный пример по стилизации маркированных областей, через атрибут "style". Наиболее важные места, где я задаю стили для стилизации маркированных областей я выделю (рядом с номером строки будет зелёная линия). Я бы вам посоветовал открыть <ui-link
          type="site"
          href="examples"
          title="Страница примеров"
          :query="query"
        >страницу примеров</ui-link> и посмотреть реальные примеры.
      </p>

      <stilization-attr-style />

      <p>
        Пример выше весьма условный, в нём я не разрешаю маркировать картинку (:is-markup="false"), нам пришёл ответ от сервера и нам нужно где-то растянуть маркированную область, где-то её переместить, а вот новые маркированные области нам создавать не нужно. Дальше я создал функцию-конструктор ("bStyle"), которая возвращает объект из CSS переменных отвечающих за стилизацию нужных нам маркированных областей. После, я создаю JS переменные, которые содержат объекты отвечающие за стилизацию не распознанной маркированной области ("errorStyle"), за стилизацию маркированной области которая распозналась с ошибкой ("warnStyle"), и за стилизаю маркированной области которая распозналась без ошибок ("saccessStyle"). Эти переменные будут отличаться цветом заливки, и цветом линии. После я задаю эти переменные нужным маркированным областям. Когда маркированная область становится активной, я не меняю цвет её заливки, и цвет её линии. Для того, чтобы показать, какая маркированная область является активной, я меняю прозрачность её заливки, делаю её менее прозрачной, я думаю, что для того, чтобы её выделить этого вполне хватит.
      </p>
    </template>

    <template v-if="props.isEng">
      <h2>
        Stylization of labeled areas
      </h2>

      <p>
        In the course of work, situations arise in which we need to display the labeled areas (some result has arrived from the server), and at the same time, some of the labeled areas must be distinguished. As an example, let’s imagine the following situation. We labeled the image, sent the data to the server, and then the neural network failed to recognize some of the labeled areas, while it recognized others but with an error — for example, the document was scanned poorly, and some letters could not be recognized. The other part of the labeled areas was recognized normally, without errors. We received a response in the form of an array of objects. One of the properties of each object tells us about the recognition result, and we need to somehow display the result to the user so that they can understand which labeled areas could not be recognized, which labeled areas were recognized with an error, and which labeled areas were recognized without errors. Such tasks can be solved either through CSS classes or through the "style" attribute.
      </p>

      <p>
        The most accurate thing to say is that we can style it. I've already mentioned the CSS variables that are responsible for styling. To make it more convenient and avoid having to jump around the page, I’ll list the CSS variables responsible for styling labeled areas again below. Сonditional, they can be divided into variables responsible for styling regular labeled areas, variables responsible for styling the active labeled area, and general variables that apply to both regular and active labeled areas. If you’re more of a hands-on person, I’d advise you to open the <ui-link
          type="site"
          href="examples"
          title="Examples page"
          :query="query"
        >examples page</ui-link> and look at the examples of styling labeled areas — it will be easier that way. If you want to understand everything in more detail, read on.
      </p>

      <h3>General CSS variables</h3>

      <p>
        These are variables whose changes will lead to changes in both the active and regular labeled areas. Usually, the difference between the active and regular labeled area lies in the line color, fill color, and fill transparency. Corners and line thickness usually do not differ, at least in what I've done, that's how it was.
      </p>

      <p class="small-mar">
        <b>--mu-marking-rect-rx</b> — border-radius along the X-axis, or rounding along the X-axis. This parameter is applied to the active and regular labeled area. It is very unlikely that a situation will arise in which the rounding for the active area will differ from the regular one.
      </p>

      <p class="small-mar">
        <b>--mu-marking-rect-ry</b> — border-radius along the Y-axis, or rounding along the Y-axis. This parameter is applied to the regular and active labeled area. I can say that, just like for the parameter above, it is very unlikely that a situation will arise in which the rounding for the active area will differ from the regular one.
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-stroke-width</b> — the thickness of the lines of the labeled areas. This parameter is also applied to the regular and active labeled area. I haven’t encountered any tasks where the labeled areas differ in line thickness, but lately I’ve been thinking about it, it's quite possible that I'll fix this in future versions.
      </p>

      <h3>
        CSS variables responsible for styling regular labeled areas
      </h3>

      <p>
        These are the variables that will be applied to the regular labeled areas. At this point, it’s worth mentioning active and regular labeled areas again. When we start labeling the image, the first area created will be active. After that, each last created labeled area will be active; the remaining areas will be regular. We can prohibit labeling the image and simply display the labeled areas (:is-readonly="true" for my component), in which case there will be no active labeled area. The area will become active when we click on it, try to move it, or stretch it (of course, if these actions are allowed). Usually, an active labeled area differs from a regular one in terms of fill color, line color, and possibly transparency.
      </p>

      <p>
        For regular labeled areas, we can set the line color and the color of its fill. We can also change the fill transparency and the line transparency.
      </p>

      <p class="small-mar">
        <b>--mu-marking-rect-fill</b> — the fill color for labeled areas. Here you can specify any valid CSS color value (orange, blue, rgba(77, 77, 77, .7), rgb(77, 77, 77), hsl(120, 100%, 50%), etc).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-fill-opacity</b> — fill transparency for labeled areas. If you don't need a fill, as the designer intended, then set 0. Acceptable values are from 0 to 1 (0, 1, 0.3, 0.4, 0.8 and so on).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-stroke</b> — the line color for labeled areas, in other words, you can say “border”; under the hood, I use SVG, so this variable contains “stroke” in its name. Here you can specify any valid CSS color value (orange, blue, rgba(77, 77, 77, .7), rgb(77, 77, 77), hsl(120, 100%, 50%), etc).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-stroke-opacity</b> — the opacity of the lines for labeled areas. If, according to the design, the labeled areas have no visible lines, but only a fill, set the value to 0. As a rule, it is usually set to 1. Acceptable values range from 0 to 1 (0, 1, 0.3, 0.4, 0.8, etc).
      </p>

      <h3>
        CSS variables responsible for styling the active labeled area
      </h3>

      <p>
        To be honest, I haven't encountered any tasks where I needed to style an active labeled area. Usually, in most of the projects I've worked on, if I received a response from the server, I could only review the result; I disabled editing of labeled areas (:is-readonly="true" for my component). Most likely, you won’t need these variables either, but if you’re making a universal solution, I’ve provided the option to change the styles for the active labeled area. Look, if you allow modifying the labeled areas (allow moving and stretching them), then when you click on a regular labeled area, it will become active, and the styles that are applied to the active labeled area by default will be applied to it. If you have styled this area, then when you click on it, the styles for the active labeled area by default will still be applied. If you don't need this behavior, you will need to redefine the variables you need. Just as with regular labeled areas, we can set the fill color, line color, as well as the fill transparency and line transparency of the active labeled area.
      </p>

      <p class="small-mar">
        <b>--mu-marking-rect-active-fill</b> — the fill color for the active labeled area. Here you can specify any valid color value in CSS (orange, blue, rgba(77, 77, 77, .7), rgb(77, 77, 77), hsl(120, 100%, 50%), etc).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-active-fill-opacity</b> — transparency of the fill for the active labeled area. If you don't need a fill, as the designer intended, then set 0. Acceptable values are from 0 to 1 (0, 1, 0.3, 0.4, 0.8 and so on).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-active-stroke</b> — the color of the line for the active labeled area, in other words, you can say it’s the border. Under the hood, I use SVG, which is why this variable contains “stroke” in its name. Here you can specify any valid CSS color value (orange, blue, rgba(77, 77, 77, .7), rgb(77, 77, 77), hsl(120, 100%, 50%), etc).
      </p>
      <p class="small-mar">
        <b>--mu-marking-rect-active-stroke-opacity</b> — the opacity of the line for the active labeled area. If, according to the design, the active labeled area has no visible lines, only a fill, then set the value to 0. As a rule, 1 is usually set. Valid values range from 0 to 1 (0, 1, 0.3, 0.4, 0.8, etc.).
      </p>

      <h3>
        Styling of marked areas using CSS classes
      </h3>

      <p>
        This is probably the most flexible way to style labeled areas. Look, we receive an array of labeled areas from the server, and one of the properties of each labeled area tells us the result of the labeled area recognition. All we need to do is replace this property with "muClass" using the CSS class or classes we need, and then specify the styles for each CSS class. Below, I'll provide a conditional example of code for styling labeled areas through CSS classes. The most important places where I define CSS classes and style the marked areas will be highlighted (there will be a green line next to the line number). I would advise you to open the <ui-link
          type="site"
          href="examples"
          title="Examples page"
          :query="query"
        >examples page</ui-link> and look at the real examples.
      </p>

      <stilization-class is-eng />

      <p>
        The example above is quite conditional, in it, I don't allow labeling the image (:is-markup="false"). We received a response from the server, and we need to stretch the labeling area somewhere, move it somewhere — but we don’t need to create new labeling areas. I assigned the CSS class "mu-class_error" to the unrecognized labeling areas. For those labeling areas that were recognized with an error, I assigned the class "mu-class_warn". For normally recognized areas, I assigned the class "mu-class_success". In the example above, I don’t change the colors for the active labeling area, but to make it stand out somehow, I make the stroke line thicker and change the fill transparency — this way, it will be clear that the area has become active.
      </p>

      <h3>
        Styling of marked areas using the "style" attribute
      </h3>

      <p>
        Compared to styling labeled areas via CSS classes, this method is less flexible. In principle, if you do styling via CSS classes, you also need to do styling via the "style" attribute — this is only logical. Perhaps someone will like this method more; in that case, we can define the styles directly in the JS code, which can be convenient — after all, it’s faster.
      </p>

      <p>
        We also receive an array of labeled areas from the server, one of the properties of each labeled area tells us the result of the labeled area recognition. All we need to do is replace this property with "muStyle", and then specify the necessary CSS variables in it. Below, I'll provide a conditional example of styling labeled areas using the "style" attribute. I'll highlight the most important places where I set the styles for styling the labeled areas (there will be a green line next to the line number). I would advise you to open <ui-link
          type="site"
          href="examples"
          title="Examples page"
          :query="query"
        >examples page</ui-link> and view real examples.
      </p>

      <stilization-attr-style is-eng />

      <p>
        The example above is quite conditional, in it, I don’t allow marking the image (:is-markup="false"). We received a response from the server, and we need to stretch the labeled area somewhere, move it somewhere, but we don’t need to create new labeled areas. Next, I created a constructor function ("bStyle") that returns an object of CSS variables responsible for styling the labeled areas we need. After that, I create JS variables that contain objects responsible for styling the unrecognized labeled area ("errorStyle"), for styling the labeled area that was recognized with an error ("warnStyle"), and for styling the labeled area that was recognized without errors ("saccessStyle"). These variables will differ in fill color and line color. Then I assign these variables to the necessary labeled areas. When the labeled area becomes active, I do not change its fill color or its line color. To indicate which labeled area is active, I change the transparency of its fill, making it less transparent. I think this is quite enough to highlight it.
      </p>
    </template>
  </div>
</template>

<script setup>
  import StilizationClass from '@/components/code/stilization/StilizationClass.vue';
  import StilizationAttrStyle from '@/components/code/stilization/StilizationAttrStyle.vue';

  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">

</style>
