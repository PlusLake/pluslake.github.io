<template>
    <div class="topbar">
        <div class="title">
            Plus Blog
        </div>
        <div class="icon-wrapper" @click="toggleSidebar">
            <Menu class="icon"/>
        </div>
        <MobileSidebar
            :enabled="isSidebarEnabled"
            :close="() => isSidebarEnabled = false"
            :menu="menu"
        />
    </div>
</template>

<script>
import MobileSidebar from "@/components/mobile/MobileSidebar.vue"
import Menu from "@/assets/svg/Menu.vue";
export default {
    name: "MobileTopbar",
    components: {
        Menu, MobileSidebar,
    },
    props: {
        isMobile: Boolean,
        menu: Array,
    },
    data() {
        return {
            isSidebarEnabled: false,
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarEnabled = !this.isSidebarEnabled;
        }
    },
}
</script>

<style scoped>
.topbar {
    width: 100%;
    height: 64px;
    background-color: #F3BAD6;
}
.title {
    text-align: center;
    color: #FFF;
    font-family: "medium";
    font-size: 32px;
    padding: 8px 0px;
}
.icon-wrapper {
    padding: 16px;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 0px;
}
.icon {
    fill: #E05297;
    height: 32px;
    width: 32px;
}
</style>
