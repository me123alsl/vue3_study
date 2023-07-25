<template>
    <div class="contents-view">
        <div class="contents-header">
            <h1>Header</h1>
        </div>
        <router-view></router-view>
        <div class="contents-footer">
            Footer
        </div>
    </div>
</template>
<script>
export default {
    
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
    box-shadow: 0 0 20px rgba(0,0,0,.1);
}
.contents-header {
    margin-bottom: 20px;
}

.contents-footer {
    margin-top: 20px;
}
</style>