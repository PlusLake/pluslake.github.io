import Vue from "vue";
import VueRouter from "vue-router";
import Top from "@/views/Top"
import Articles from "@/views/Articles"
import Memo from "@/views/Memo"
import About from "@/views/About"

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Top },
    { path: "/top", component: Top },
    { path: "/articles", component: Articles },
    { path: "/memo", component: Memo },
    { path: "/about", component: About },
];

const router = new VueRouter({
    routes,
});
export default router;