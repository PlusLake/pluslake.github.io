<template>
    <div class="article">
        <div class="inner">
            <div class="content">
                <div v-html="compiledMarkdown"></div>
            </div>
        </div>
    </div>
</template>

<script>
import marked from "marked";
export default {
    name: "Sidebar",
    components: {
        
    },
    props: {
        article: String,
    },
    data() {
        return {
            compiledMarkdown: "",
        }
    },
    mounted() {
        if (!this.article) return;
        fetch(this.article)
            .then(response => response.text())
            .then(text => this.compiledMarkdown = marked(text));   
    },
}
</script>

<style scoped>

</style>
