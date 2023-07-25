<template>
    <div>
        <b-jumbotron header="BootstrapVue" lead="Bootstrap">
            <p>For more information visit website</p>
            <b-button variant="primary" href="#">More Info</b-button>
        </b-jumbotron>
    </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
    name: 'HomeView',
   setup() {
        const store = useStore();
        const title = store.dispatch('contents/setTitle', 'Home');
        return {
            title
        }
   }
}
</script>
<style></style>