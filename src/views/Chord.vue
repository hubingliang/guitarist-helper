<template>
  <main>
    <span>{{ note }}</span>
  </main>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    let note = ref("🎵");
    let isMixinSymbol = ref(false);
    const noteList = ["C", "D", "E", "F", "G", "A", "B"];
    const symbolList = ["#", "b", ""];
    const randomNote = () => {
      setInterval(() => {
        const randomNote =
          noteList[Math.floor(Math.random() * noteList.length)];
        const randomSymbol =
          symbolList[Math.floor(Math.random() * symbolList.length)];
        note.value = isMixinSymbol.value
          ? `${randomSymbol}${randomNote}`
          : randomNote;
      }, 4000);
    };
    onMounted(() => randomNote());
    return { note };
  },
};
</script>

<style scoped>
main {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  font-size: 48px;
  font-weight: bold;
}
</style>