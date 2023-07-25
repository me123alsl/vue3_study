<template>
    <div>
        <SidebarMenu 
        :show-one-child="true"
        :menu="menu" 
        @update:collapsed="onToggleCollapse"
        ></SidebarMenu>
        <div :class="changeMenuCollapsed ?  'contents' : 'contents-collapsed'">
            <ContentsViewVue></ContentsViewVue>
        </div>
    </div>
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import ContentsViewVue from './ContentsView.vue'
export default {
    name: 'LayoutView',
    components: {
        SidebarMenu,
        ContentsViewVue
    },
    methods:{
        onToggleCollapse(collapsed) {
            this.menuOpened = !collapsed
        }
    },
    computed: {
        changeMenuCollapsed() {
            return this.menuOpened
        }
    },
    data() {
        return {
            menuOpened: true,
            menu: [
                {
                    header: 'Main Navigation',
                    hiddenOnCollapse: true
                },
                {
                    href: '/',
                    title: 'Home',
                    icon: 'fa fa-user'
                },
                {
                    href: '/component',
                    title: 'Component',
                    icon: 'fa fa-chart-area',
                    child: [
                        {
                            href: '/component/installed',
                            title: 'Installed'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style scoped>
.contents {
    margin-left: 290px;  
}
.contents-collapsed {
    margin-left: 65px;
}
</style>