<template >
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
       const store = useStore();
         const title = computed(() => store.state.contents.title);
         return {
                title
         }
    },

}
</script>
<style ></style>