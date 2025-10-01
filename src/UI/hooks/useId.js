import { ref } from 'vue';

const useId = () => {
  const valueGen = (max = 100_000_000_000) => Math.floor(Math.random() * max);

  const id = ref('');

  const bId = () => id.value = `id-${Date.now()}-${valueGen()}`;

  bId(bId);

  return { id };
}

export default useId;