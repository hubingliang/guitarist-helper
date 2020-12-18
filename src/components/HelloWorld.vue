<template>
  <!-- <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p> -->
  <span>{{ note }}</span>
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
      }, 1000);
    };
    onMounted(() => randomNote());
    return { note };
  },
};
</script>
