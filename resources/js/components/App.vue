<template>
  <div>{{ message }}</div>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const message = "Hello World";
    return {
      message
    };
  }
});
</script>
