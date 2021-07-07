<template>
    <div id="main" v-if="false">
        <div>Nothing here yet!</div>
        <div v-if="false">
            <Sidebar v-if="!isMobile" :menu="menu" />
            <MobileTopbar v-if="isMobile" :menu="menu" />
            <div class="router-view">
                <div class="router-view-inner">
                    <router-view />
                </div>
            </div>
            <div style="clear: both" />
        </div>
    </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import MobileTopbar from "./components/mobile/MobileTopbar.vue";

export default {
    name: "App",
    components: {
        Sidebar,
        MobileTopbar,
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
        };
    },
    created() {
        addEventListener("resize", () => {
            this.isMobile = window.innerWidth < 768;
        });
    },
};
</script>

<style>
.router-view {
    width: 100%;
    height: calc(100% - 64px);

    background-size: auto auto;
    background-color: #fff;
    background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        #fceef5 10px,
        #fceef5 20px
    );
    display: inline-block;
    vertical-align: top;
    text-align: center;
}

.router-view-inner {
    width: 100%;
    max-width: 1280px;
    text-align: left;
    display: inline-block;
}

@media screen and (min-width: 768px) {
    .router-view {
        height: 100%;
        width: calc(100% - 192px);
    }
}
</style>
