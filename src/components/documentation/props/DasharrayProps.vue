<template>
  <div class="props-hint">
    <template v-if="!props.isEng">
      <h3>
        Настройки прерывистости линий для маркированных областей
      </h3>

      <p>
        Основным предназначением данных входных параметров является как-то выделить/отделить маркированные области от активной маркированной области, или области в момент маркирования документа. Иначе говоря привлечь внимание к нужной области. В SVG есть такой параметр как "stroke-dasharray", он отвечает за вид пунктирной обводки документов. В него можно передать числа разделённые пробелами, или запятыми. Если задать одно число, то это будет длина штриха и длина пробела между ними. Два числа будут означать, первое число длина штриха, а второе длина пробела между штрихами. Возможно задавать произвольное число цифр, к примеру 4 1 2 3, в этом случае длина штриха будет 4px, затем будет пробел в 1px, затем будет идти штрих в 2px и пробел после него в 3px, и так эти значения будут повторяться. К примеру, не на каждой теме можно понять какая маркированная область активная, а какая нет. В таком случае, обычные маркированные области можно сделать пунктиром, а для активной маркированной области пунктир можно не задавать, это должно привлечь внимание к активной маркированной области.
      </p>

      <p>
        <strong>draggingStrokeDasharray</strong> - вид пунктирной обводки маркированной области в момент маркирования документа. Задавать нужно числа разделённые пробелами, или запятыми. Вы можете увидеть, на что влияет данный входной параметр только в момент маркирования документа.
      </p>

      <p>
        <strong>activeStrokeDasharray</strong> - вид пунктирной обводки активной маркированной области. Она появится после того как вы создадите хотя бы одну маркированную область. Задавать нужно числа разделённые пробелами, или запятыми.
      </p>

      <p>
        <strong>strokeDasharray</strong> - вид пунктирной обводки для общих маркированных областей. Чтобы увидеть, на что влияет данный входной параметр, необходимо создать хотя бы 2 маркированные области. Первая область будет активной, а ко второй и последующим будет применяться данный входной параметр. Задавать нужно числа разделённые пробелами, или запятыми.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Line discontinuity settings for labeled areas
      </h3>

      <p>
        The main purpose of these input parameters is to somehow highlight/separate the labeled areas from the active labeled area, or the area at the time of labeling the document. In other words, to draw attention to the desired area. In SVG, there is such a parameter as "stroke-dasharray", it is responsible for the appearance of the dotted outline of documents. You can send numbers separated by spaces or commas to it. If you set a single number, it will be the length of the stroke and the length of the space between them. Two numbers will mean the first number is the stroke length, and the second number is the length of the space between the strokes. It is possible to set an arbitrary number of digits, for example 4 1 2 3, in this case the stroke length will be 4px, then there will be a 1px space, then there will be a 2px stroke and a 3px space after it, and so these values will be repeated. For example, it is not possible to understand on every topic which labeled area is active and which is not. In this case, the usual labeled areas can be dotted, but for the active labeled area, the dotted line can be omitted, this should draw attention to the active labeled area.
      </p>

      <p>
        <strong>draggingStrokeDasharray</strong> - the type of dotted outline of the marked area at the moment of marking the document. You need to specify numbers separated by spaces or commas. You can see what is affected by this input parameter only at the moment of labeling the document.
      </p>

      <p>
        <strong>activeStrokeDasharray</strong> is a kind of dotted outline of the active marked area. It will appear after you create at least one labeled area. You need to specify numbers separated by spaces or commas.
      </p>

      <p>
        <strong>strokeDashArray</strong> is a kind of dotted outline for general marked areas. To see what this input parameter affects, you need to create at least 2 labeled areas. The first area will be active, and this input parameter will be applied to the second and subsequent ones.You need to specify numbers separated by spaces or commas.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">

</style>
