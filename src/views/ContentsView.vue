<template>
    <div class="contents-view">
        <div class="contents-header">
            <ContentHeaderVue></ContentHeaderVue>
        </div>
        <div calss="contents-viewer">
            <router-view></router-view>
        </div>
        <div class="contents-footer">
            <ContentFooterVue></ContentFooterVue>
        </div>
    </div>
</template>
<script>
import ContentHeaderVue from '@/components/ContentHeader.vue'
import ContentFooterVue from '@/components/ContentFooter.vue'
export default {
    name: 'ContentsView',
    components: {
        ContentHeaderVue,
        ContentFooterVue
    }
}
</script>
<style scoped>
.contents-view {
    width: 95%;
    margin: 20px auto;
    height: 95%;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
}

.contents-header {
    margin-bottom: 20px;
}

.contents-footer {
    margin-top: 20px;
}
</style>