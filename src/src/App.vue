<template>
    <div id="main">
        <Sidebar v-if="!isMobile" :menu="menu"/>
        <MobileTopbar v-if="isMobile" :menu="menu"/>
        <div class="router-view">
            <router-view/>
        </div>
        <div style="clear: both"/>
    </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue"
import MobileTopbar from "./components/mobile/MobileTopbar.vue"

export default {
    name: "App",
    components: {
        Sidebar, MobileTopbar,
    },
    computed: {
        menu() {
            return [
                { title: "Top", link: ["/top", "/"] },
                { title: "Articles", link: ["/articles"] },
                { title: "Memo", link: ["/memo"] },
                { title: "About", link: ["/about"] },
            ];
        },
    },
    data() {
        return {
            isMobile: window.innerWidth < 768,
        }
    },
    created() {
        addEventListener("resize", () => {
            this.isMobile = window.innerWidth < 768;
        });
    },
}
</script>

<style>
.router-view {
    height: calc(100% - 64px);
    background-image: 
        radial-gradient(#FCEEF5 10%, transparent 50%),
        radial-gradient(#FCEEF5 10%, transparent 50%);
    background-size: 16px 16px;
    background-position: 8px 8px, 16px 16px;
}

@media screen and (min-width: 768px) {
    .router-view {
        height: 100%;
    }
}
</style>
