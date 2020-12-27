<template>
    <div class="sidebar" :class="{ 'sidebar-enabled' : enabled }">
        <div>
            <div class="title">
                Plus Blog
            </div>
            <div class="icon-wrapper" @click="close()">
                <Close class="icon"/>
            </div>
        </div>
        <div>
            <div class="horizontal-line"/>
        </div>
        <div v-for="item in menu" :key="item.title">
            <router-link :to="item.link[0]">
                <div class="item" @click="close()">
                    {{ item.title }}
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import Close from "@/assets/svg/Close.vue";
export default {
    name: "MobileSidebar",
    components: {
        Close,
    },
    props: {
        enabled: Boolean,
        close: Function,
        menu: Array,
    },
}
</script>

<style scoped>
.horizontal-line {
    border-top: 1px solid #E05297;
    width: 87.5%;
    margin: 0 auto;
}
.title {
    font-family: "medium";
    color: #E05297;
    padding: 16px;
    font-size: 24px;
    padding-left: 32px;
}
.sidebar {
    position: fixed;
    top: 0px;
    left: -256px;
    width: 256px;
    height: 100%;
    background-color: #FCEEF5;
    transition: 500ms;
}
.sidebar-enabled {
    left: 0px;
}
.icon-wrapper {
    padding: 16px;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
}
.icon {
    fill: #E05297;
    height: 32px;
    width: 32px;
}
.item {
    text-align: center;
    font-size: 24px;
    color: #E05297;
    padding: 8px 0px;
    transition: 64ms;
}
.item:active {
    background-color: #FFF;
}
</style>
