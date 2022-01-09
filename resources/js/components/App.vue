<template>
    <div>
        <h2>{{ message }}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    setup() {
        const message = ref<string>("Hello World");
        return {
            message,
        };
    },
});
</script>
